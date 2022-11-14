// // Get the modal
// const modal = document.getElementById("myModal");
// // Get the button that opens the modal
// const btn = document.getElementById("myBtn");
// // Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];
// //Get the login button
// const loginBtn = document.getElementById('openButton')
// //get the entire action center
// const actionCenterEl = document.getElementById('actionCenter');
// //get the close button
// const closeBtn = doument.getElementById('closeBtn')

// // Function to show the modal when the sign in button is clicked and hide the sign in button
// function openForm() {
//   document.getElementById("myForm").style.display = "inline";
//   // loginBtn.style.display = 'none';
// }

// // Function to hide the modal when the close button is clicked
// function closeForm() {
//   actionCenterEl.style.display = 'none';
//   // loginBtn.style.display = 'inline';
// }

// // Function to hide the modal when the Login button is clicked and change the text in the sign in button to "Logged In"
// function signIn() {
//   document.getElementById("myForm").style.display = "none";
//   document.getElementById("openButton").innerHTML = "Logged In";
// }

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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
