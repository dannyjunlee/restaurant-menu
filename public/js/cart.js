// const clearCartButton = document.getElementById("clearCart")
// clearCartButton.addEventListener("click", (event) => {
//     fetch('/cart/clear') 
//     window.location.href = '/cart'

// });
const cartCon = document.querySelector('.cartCon');
const delBtn = document.querySelector('.delCon');

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
    // console.log(results);
    for (let i = 0; i < results.length; i++) {
        console.log(results[i], 'from loop');
        const cartName = JSON.stringify(results[i][0]);
        console.log(cartName);
        const p = document.createElement('p')
        const a = document.createElement('a')
                // .setAttribute('href', "#");
        const span = document.createElement('span');
        // for (var key in results) {
        //     if (results.hasOwnProperty(key)) {
        //         console.log(key + " -> " + results[key]);
        //     }
        // }
        a.append(cartName);
        // a.textContent = json.stringify(results[i][0]);
        span.textContent = results[i].price;
        p.append(a, span);
        cartCon.append(p);

    }
};

renderCart();

function emptyCart() {
    const data = { dishName }
    fetch('/api/cart', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('successfully deleted', data)
        })
        .catch((error) => {
            console.log('Error:', error)
        })
    delBtn.addEventListener('click', emptyCart);
}