// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to show the modal when the sign in button is clicked
function openForm() {
  document.getElementById("myForm").style.display = "inline";
}

// Function to hide the modal when the close button is clicked
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Function to hide the modal when the Login button is clicked and change the text in the sign in button to "Logged In"
function signIn() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("openButton").innerHTML = "Logged In";
    //this shows "Logged In" for a brief moment then goes back to "Sign In"
    //also needs to be tied into session storage for user data and an if else statement so that if the user info is not valid it remains open and asks for valid info or to sign up instead
}

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
