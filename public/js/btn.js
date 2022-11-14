const dishNames = document.getElementsByClassName("dishName");
const dishPrices = document.getElementsByClassName("dishPrice");
const minusBtns = document.getElementsByClassName("minusBtn");
const plusBtns = document.getElementsByClassName("plusBtn");
const nums = document.getElementsByClassName("numberPlace");
let submitBtns = document.getElementsByClassName("submitBtn"),
    numbers = 0, /// number value
    min = 0, /// min number
    max = 30; /// max number

for (let i = 0; i < minusBtns.length; i++) {
    let number = parseInt(nums[i].textContent);
    plusBtns[i].onclick = function () {
        if (number < max) {
            number = number + 1; /// Minus 1 of the number
            nums[i].innerHTML = `${number}`; /// Display the value in place of the number
        }
        if (number == min) {
            nums[i].style.color = "red";
            setTimeout(function () { nums[i].style.color = "black" }, 500)
        }
        else {
            nums[i].style.color = "black";
        }
    }
    minusBtns[i].onclick = function () {
        if (number > min) {
            number = number - 1; /// Minus 1 of the number
            nums[i].innerHTML = `${number}`; /// Display the value in place of the number
        }
        if (number == min) {
            nums[i].style.color = "red";
            setTimeout(function () { nums[i].style.color = "black" }, 500)
        }
        else {
            nums[i].style.color = "black";
        }
    }
    submitBtns[i].onclick = function () {
        let dishName = dishNames[i].textContent;
        const price = parseInt(dishPrices[i].textContent.slice(1));
        const totalPrice = (price * number);
        //    alert(`You added ${number} ${dishName} \n Total:$${totalPrice}`);
        const data = { dishName, number, price }
        // fetch('/api/cart/', {
        //     method: 'DELETE'
        // })
        fetch('/api/cart/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('successfully added stuff to cart');
                console.log(data);
            })
            .catch((error) => {
                console.log('Error', error);
            });
    }
}
