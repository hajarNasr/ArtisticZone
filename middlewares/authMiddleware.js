const jwt = require('jsonwebtoken');

const authMiddleware = (rq, res, next)=>{
    let token = req.headers('x-auth-token');

    if(!token) res.status(401).json({msg: "No token not authorized"});

    try{
        const decoded = jwt.verify(token, process.env.JWT);
        req.user = decoded;
        next();
    }
    catch(e){
        res.status(400).json({msg: "Token not valid"});
    }
}

module.exports = authMiddleware;