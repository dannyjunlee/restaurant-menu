const router = require('express').Router();
//const { Dish } = require('../../models');

// all routes are prefixed with '/cart'
router.get('/', (req, res) => {


    // query the database for the Cart

    let cart = [{ id: 2, food: "Soup", price: 6.00, quantity: 2},
                { id: 5, food: "Tea", price: 4.00, quantity: 1}]

    // filter the data from the database

    res.render('carts', { cartitems: cart, total_price: "$16" })
})



module.exports = router;