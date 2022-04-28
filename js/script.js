
// Changes theme of website
function changeStyle(newStyle) {
    document.getElementById('color').setAttribute('href', newStyle);
    return false;
}

// Personalize page for user
function getName() {
    var visitorName = prompt('Hey there! Please enter your name');
    var newItem = document.createElement('h1');
    console.log(visitorName);
    document.getElementById('welcome').innerHTML = "Welcome, " + visitorName + "!";
    return false;
}

// Responsive Nav Bar

function toggleMenu() {
    var x = document.getElementById("mainNav");
    if (x.className === "") {
        x.className += "responsive";
    } else {
        x.className = "";
    }
} 