const router = require('express').Router();
// const { Dish } = require('../../models');

// all routes are prefixed with '/cart'
router.get('/', (req, res) => {


    // query the database for the Cart

    let cart = [{ id: 2, dish: "Soup", price: 6.00, quantity: 2 },
    { id: 5, dish: "Tea", price: 4.00, quantity: 1 }]

    // filter the data from the database

    res.render('carts', { cartitems: cart, total_price: "$16" })
})

router.get('/fetchdish/:check', function (req, res) {
    dish.findAll({ inventory_count: { $dish: 0 } }, function (err, dish) {
        res.render("displayDish");
    })
})
router.get('/', function (req, res) {
    dish.findOne({}, function (err, dish) {
        res.render('displayDish')
    })
})
router.post('/updatecart', function (req, res) {
    console.log("the Session", req.session)
    let testCheck = false;
    let counter = 0;
    let cartinf = req.session.cart || { dish: [] };
    let cart = [];

    cartinf.dish.forEach(function (cartitem, count) {
        const difference = req.body[cartitem.name] - cartitem.quantity;
        quant = cartitem.quantity;
        const cartstoreitem = {
            name: cartitem.name,
            quantity: quant
        }
        cart.push(cartstoreitem);
        cartitem.quantity = parseInt(req.body[cartitem.name]);
        dish.findAll({ name: cartitem.name }, function (err, result) {
            return result
        })
            .then
            // no item
            (function (result) {
                if (req.body[cartitem.name] == 0) {
                    let updQuantity;
                    for (let i = 0; i < cart.length; i++) {
                        if (cartitem.name == cart[i].name)
                            updQuantity = cart[i].quantity;

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
router.get('/clear', function (req, res) {
    req.session.cart = null;
    // res.render('carts');
})


module.exports = router;