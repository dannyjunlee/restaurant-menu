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

router.get('/fetchproducts/:check', function (req, res) {
    product.find({inventory_count: {$gt: 0}}, function (err, products) {
        res.render("displayProducts", {productsForDisplay: products});
    })
})
router.get('/fetchproducts', function (req, res) {
    product.find({}, function (err, prod) {
        res.render('displayProducts', {productsForDisplay: prod})
    })
})
app.post('/updatecart', function (req, res) {
    let testCheck = false;
    let counter = 0;
    let testInvt = 0;
    let cartinf = req.session.cart;
    let foodArrray = [];
    
    cartinf.items.forEach(function (cartitem, count) {
        const difference = req.body[cartitem.name] - cartitem.quantity;
        quant = cartitem.quantity;
        const cartstoreitem = {
            name: cartitem.name,
            quantity: quant
        }
}

module.exports = router;