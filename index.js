let dropdown = document.getElementById("homepage_dropdownOnclick");
let activeId = document.getElementById("homepage_active");

let c = 0;

function drop() {
    if (c % 2 == 0)
        activeId.classList.add('homepage_active');
    else
        activeId.classList.remove('homepage_active');
    c++;
}

function main() {
    dropdown.addEventListener('click', function() {
        drop();
    });
}
// For scrolling effect of navbar
window.onscroll = function() { myFunction() };
var navbar = document.getElementById("home_navbar");
var sticky = navbar.offsetHeight;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("homepage_navbar_colour");
    } else {
        navbar.classList.remove("homepage_navbar_colour");
    }
}
main();