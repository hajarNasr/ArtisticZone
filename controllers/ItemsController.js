const User = require('../models/User');
const Item = require('../models/Item').Item;

/* ADMIN ITEMS CONTROLLERS */
exports.adminAddNewCartItem = (req, res)=>{
    const { imgLink, source, price, type} = req.body;

    if(imgLink && source && price && type){
        let newItem =  new Item({
               imgLink,
               source,
               type,
               price
        });
        newItem.save()
               .then(item=>{
                   res.status(200).json({msg: "Item succesfully saved"})
            })
    }
    else{
        return res.status(400).json({error:"Please fill all fields"});
    }
}

exports.adminRemoveCartItem = (req, response)=>{
    const { itemId } = req.params;

    Item.findByIdAndRemove({_id: itemId})
        .then(res=>{
            response.status(200).json("Succesfully removed");
        })
}

exports.adminEditCartItem = (req, res)=>{
    res.send("HHHHHHHHHHHHHHHHHHHHHHHH edit item")
}


/* ITEMS CONTROLLERS */
exports.getAllCategoryItems = (req, res)=>{
    const { category, limit } = req.params;
    
    // get all items with type category
    Item.find({type:category})
        .sort({_id:"desc"})
        .then(items=>{
            if(limit){
                items = items.slice(0, limit);
            }
            return res.status(200).send(items)
        })
}

exports.getUserCartItems = (req, res)=>{
    const { userId } = req.params;
    User.findOne({_id:userId})
        .then(user=>{
            return res.json({cartItems:user.items})
        })
}

exports.addItemToCart = (req, res)=>{
    const { itemId, userId } = req.params;
    User.findOne({_id:userId})
        .then(user=>{
            const isInCart = user.items.map(item=>item._id).includes(itemId);
            if(isInCart){
                user.items = user.items.map(item=>{
                    if(item._id==itemId){
                        item.quantity = item.quantity+1;
                        return item;
                    }
                    return item;
                });
                user.save((err, user)=>{
                    if (err) throw err;
                    getItemsCount(res,user);
                })
            }
            else{
                Item.findById(itemId)
                    .then(item=>{
                        item.quantity = item.quantity + 1;
                        user.items.push(item);
                        user.save((err, user)=>{
                            if (err) throw err;
                            getItemsCount(res,user);
                        })
                    })
            }
        })
}

exports.removeItemFromCart = (req, res)=>{
    const { itemId, userId } = req.params;
    
    User.findById(userId)
        .then(user=>{
            user.items = user.items.filter(item=> item._id != itemId);
            user.save()
                .then(user=>{
                    getItemsCount(res,user);
                })
        })
}

exports.reduceItemCartQuantitiy = (req, res) =>{
    const { itemId, userId } = req.params;
    User.findById(userId)
        .then(user=>{
            user.items = user.items.map(item=>{
                if(item._id==itemId){
                    item.quantity = item.quantity - 1;
                    return item;
                }
                return item;
            });
            user.save((err, user)=>{
                if (err) throw err;
                return res.json("Successfully REDUCED");
            })
        })
}

exports.clearCart = (req, res)=>{
    const { userId } = req.params;
    User.findById(userId)
    .then(user=>{
        user.items = [];
        user.save()
            .then(user=>{
                getItemsCount(res,user);
            })
    })
}

const getItemsCount = (res, user) =>{
    return res.json({cartItemsCount: user.items.length})
}