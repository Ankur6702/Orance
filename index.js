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

main();