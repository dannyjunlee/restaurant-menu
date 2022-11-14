// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

function openForm() {
  document.getElementById("myForm").style.display = "inline";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function signIn() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("openButton").innerHTML = "Logged In";
}

function openCart() {
  document.getElementById("cartContainer").style.display = "block";
}

function closeCart() {
  document.getElementById("cartContainer").style.display = "none";
}

document.getElementById("cart-button").addEventListener("click", function() {
  if (document.getElementById("cartContainer").style.display === "none") {
    openCart();
  }
  else {
    closeCart();
  }
});