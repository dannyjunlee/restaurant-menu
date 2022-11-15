// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

function openForm() {
  document.getElementById("myForm").style.display = "inline";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openSignup() {
  document.getElementById("signupForm").style.display = "inline";
}

function closeSignup() {
  document.getElementById("signupForm").style.display = "none";
}

function signIn() {
  document.getElementById("myForm").style.display = "none";
  loginBtn.innerHTML = "Logged In";
}


function closeCart() {
  document.getElementById("cartContainer").style.display = "none";
}

function favorite() {
  let heart = document.querySelector("fave");
  if (heart.style.color = "black") {
    heart.setAttribute("style.color", "red")
  } else {
  }
}


// // geolocation (To be added in future)

// let inRange

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//     inRange = navigator.geolocation.getCurrentPosition(checkPosition);
//     return
//   } else {
//     console.log("Navigation not supported by this browser")
//   }
// }

// function showPosition(position) {
//   console.log("Latitude: " + position.coords.latitude +
//   "Longitude: " + position.coords.longitude);
// }

// function checkPosition(position) {

// }

// getLocation()
// document.getElementById("cart-button").addEventListener("click", function() {
//   console.log(document.getElementById("cartContainer").style.display);
//   if (document.getElementById("cartContainer").style.display === "none") {
//     openCart();
//   }
//   else {
//     closeCart();
//   }
// });
