
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
    const results = Object.entries(cart);
    for (let i = 0; i < results.length; i++) {
        console.log(results[i], 'from loop');
        const itemName = JSON.stringify(results[i][0]);
        console.log(itemName);
        const p = document.createElement('p')
        const a = document.createElement('a')
        const span = document.createElement('span');
        a.append(itemName);
        span.textContent = results[i].price;
        p.append(a, span);
        cartCon.append(p);
    }
    document.getElementById("cartContainer").style.display = "block"
}


// function emptyCart() {
//     const data = { dishName }
//     fetch('/api/cart', {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log('successfully deleted', data)
//         })
//         .catch((error) => {
//             console.log('Error:', error)
//         })
//     delBtn.addEventListener('click', emptyCart);
// }