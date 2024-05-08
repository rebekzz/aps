var prevScrollpos = window.pageYOffset;

window.onscroll = function() {

var currentScrollPos = window.pageYOffset;

if (prevScrollpos > currentScrollPos) {

// Scrolling up, show the header

document.querySelector("#hid").style.top = "0";

} else {

// Scrolling down, hide the header

document.querySelector("#hid").style.top = "-80px";

}

prevScrollpos = currentScrollPos;

};