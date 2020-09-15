const express = require('express');

let router = express.Router(),
    itemsController = require('../controllers/ItemsController');

router.post('/admin/add/item/',   itemsController.adminAddNewCartItem); 
router.delete('/admin/remove/item/:itemId',itemsController.adminRemoveCartItem);
router.post('/admin/edit/item/',  itemsController.adminEditCartItem);
router.get('/all/:category/:limit?/', itemsController.getAllCategoryItems);
router.get('/all/:userId/cart/Items/', itemsController.getUserCartItems)
router.post('/add/:itemId/to/:userId/cart/', itemsController.addItemToCart); 
router.post('/remove/:itemId/from/:userId/cart/', itemsController.removeItemFromCart);
router.post('/reduce/quantity/:itemId/from/:userId/cart/', itemsController.reduceItemCartQuantitiy);
router.post('/clear/cart/:userId/', itemsController.clearCart);

module.exports = router;

