// const clearCartButton = document.getElementById("clearCart")
// clearCartButton.addEventListener("click", (event) => {
//     fetch('/cart/clear') 
//     window.location.href = '/cart'
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
    console.log(cart);

    const results = Object.entries(cart);
    console.log(results.length);
    for (let i = 1; i < results.length; i++) {
        console.log(results[i], 'from loop');
        const p = document.createElement('p')
        const a = document.createElement('a').setAttribute('href', "#");
        const span = document.createElement('span');
        a.textContent = results[i].dishName;
        span.textContent = results[i].price;
        p.append(a, span);
        cartCon.append(p);

    }
};

renderCart();