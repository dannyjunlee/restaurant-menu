const router = require('express').Router();

router.get('/', (req, res) => {
    if (!req.session.cart) {
        req.session.cart = {};
    }

    res.status(200).json(req.session.cart);
})

router.put('/', (req, res) => {
    if (!req.session.cart) req.session.cart = {};
    const cart = req.session.cart;
    const { dishName: dishName, number: number, price: price } = req.body;
    if (!cart[dishName]) {
        cart[dishName] = {
            dishName: dishName,
            number: 0,
            price: price
        };
    }
    cart[dishName].number += number;
    req.session.cart = cart;
    console.log(Object.entries(cart));
    res.json(cart);
});

router.delete('/', (req, res) => {
    req.session.cart = {};
    res.status(200).json({ msg: "cleared cart" });
})

module.exports = router;