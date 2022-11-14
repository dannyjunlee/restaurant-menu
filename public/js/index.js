// Get the modal
// const modal = document.getElementById("myModal");

// Get the button that opens the modal
// const btn = document.getElementById("myBtn");

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

function openCart() {
  document.getElementById("cartContainer").style.display = "block";
}

function closeCart() {
  document.getElementById("cartContainer").style.display = "none";
}

    //this shows "Logged In" for a brief moment then goes back to "Sign In"
    //also needs to be tied into session storage for user data and an if else statement so that if the user info is not valid it remains open and asks for valid info or to sign up instead like
    // if (loggedIn == true) {
    //     document.getElementById("myForm").style.display = "none";
    //     document.getElementById("openButton").innerHTML = "Logged In";
    // } else {
    //     openForm();
    // };

//This function below also needs work and integration with session storage, etc

// function signUp() {
//     //post new user with that username and password;
//     document.getElementById("myForm").style.display = "none";
//     if (loggedIn === true) {
//         document.getElementById("openButton").innerHTML = "Logged In";
//     } else {
//         openForm();
//     }
// }


// geolocation

let inRange

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    inRange = navigator.geolocation.getCurrentPosition(checkPosition);
    return
  } else {
    console.log("Navigation not supported by this browser")
  }
}

function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude +
  "Longitude: " + position.coords.longitude);
}

function checkPosition(position) {

}

getLocation()
document.getElementById("cart-button").addEventListener("click", function() {
  console.log(document.getElementById("cartContainer").style.display);
  if (document.getElementById("cartContainer").style.display === "none") {
    openCart();
  }
  else {
    closeCart();
  }
});
