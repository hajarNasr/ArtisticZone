const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const async = require('async')

exports.signUp = (req, res)=>{
    let { username, email, password1, password2} = req.body;
    async.parallel([
         callback=>{
            User.findOne({username}, callback);
         },
         callback=>{
           User.findOne({email}, callback);
         }

    ], (err, results)=>{
        let errors = {}
        if(!username){
            errors["username"] = "Username can't be empty."
         }
         if(!email){
            errors["email"] = "Email can't be empty."
         }
         if(password1.length < 6 || password1.replace(/[A-Za-z0-9]/g, "").length !== 0 ){
            errors["password1"]="Invalid password"
         }
         if(password1 !== password2){
            errors["password2"] = "Passwords don't match";
         } 
         if(results[0]){
            errors["username"] = "Username already exists";
         }
         if(results[1]){
            errors["email"] = "Email already exists";
         }

        if(!Object.keys(errors).length && !results[0] && !results[1]){
            const newUser = User({
                username: username,
                email: email,
                password: password1
            })
            // save user
            newUser.save()
                    .then(user=>{
                        // generate a jwt token
                        createJWT(user, res);
                    })
                    .catch(err=>{
                        console.log(err)
                    })
        } 
        else{
           return res.status(400).json(errors)
        }
    });
}

/// Log users in

exports.login = (req, res)=>{
    let { email, password } = req.body;
    User.findOne({email})
        .then(user=>{
            if (!user) return res.status(400).json({"loginError": "Wrong email or password"}); 

            bcrypt.compare(password, user.password)
                  .then(isMatched=>{
                      if(!isMatched) return res.status(400)
                                               .json({"loginError": "Wrong email or password"}); 
                      createJWT(user, res);
                  })
        })
}


const createJWT = (user, res)=>{
    jwt.sign(
        {id: user.id},
        process.env.JWT,
        (err, token)=>{
            if (err) throw err;
            // send the token with the response
            return res.send({
              token,  
              user:{
                username: user.username,
                id: user._id,
                isAdmin: user.isAdmin,
                cartItemsCount:user.items.length
             }
          })

        }
     )
}