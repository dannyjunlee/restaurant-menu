const clearCartButton = document.getElementById("clearCart")
clearCartButton.addEventListener("click", (event) => {
    fetch('/cart/clear') 
    window.location.href = '/cart'
});












