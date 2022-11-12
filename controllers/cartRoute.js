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
router.post('/updatecart', function (req, res) {
    let testCheck = false;
    let counter = 0;
    let cartinf = req.session.cart;
    let foodArrray = [];
    
    cartinf.items.forEach(function (cartitem, count) {
        const difference = req.body[cartitem.name] - cartitem.quantity;
        quant = cartitem.quantity;
        const cartstoreitem = {
            name: cartitem.name,
            quantity: quant
        }
        ar.push(cartstoreitem);
        cartitem.quantity = parseInt(req.body[cartitem.name]);
        product.find({name: cartitem.name}, function (err, result) {
            return result
        })
        .then
        // no item
        (function(result) {
            if (req.body[cartitem.name] == 0) {
                let updQuantity;
                for (let i = 0; i < foodArrray.length; i++) {
                    if (cartitem.name == foodArrray[i].name)
                        updQuantity = foodArrray[i].quantity;

                }
                cartinf.total_price -= updQuantity * cartitem.price;
                cartinf.items.splice(count - counter, 1);
                counter++;
                testCheck = true;
                }
                // quantity decrease total decrease
                else if (difference < 0) {
                    cartinf.total_price -= (-difference) * cartitem.price;
                    cartinf.total_price = Math.round(cartinf.total_price * 100) / 100;
                }
                // quantity increase total price inc
                else if (difference > 0) {
                    cartinf.total_price += (difference) * cartitem.price;
                    cartinf.total_price = Math.round(cartinf.total_price * 100) / 100;
                }
        })
    })
})
router.get('/cart/clear', function (req, res) {
    req.session.cart = null;
    res.render('emptycart');
})

module.exports = router;