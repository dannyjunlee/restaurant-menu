// const clearCartButton = document.getElementById("clearCart")
// clearCartButton.addEventListener("click", (event) => {
//     fetch('/cart/clear') 
//     window.location.href = '/cart'

const { Dish } = require("../../models");

const { json } = require("express").Router();

// });
const cartCon = document.querySelector('.cartCon')

async function renderCart() {
    const response = await fetch('/api/cart', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const cart = await response.json();
    // console.log(cart);
    const results = Object.entries(cart);
    console.log(results);
    for (let i = 1; i < results.length; i++) {
        console.log(results[i], 'from loop');
        console.log(results[i][0]);
        const p = document.createElement('p')
        const a = document.createElement('a').setAttribute('href', "#");
        const span = document.createElement('span');
        a.textContent = results[i].dishName;
        // for (const dishName in dish_name) {
        //     if (dish_name.hasOwnProperty(dishName)){
        //         console.log(results[i].dishName)
        //     }
        // }

        // a.textContent = json.stringify(results[i][0]);
        span.textContent = results[i].price;
        p.append(a, span);
        cartCon.append(p);

    }
};

renderCart();