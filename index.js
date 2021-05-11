let dropdown = document.getElementById("dropdownOnclick");
let activeId = document.getElementById("active");
let c = 0;

function drop() {
    if (c % 2 == 0)
        activeId.classList.add('active');
    else
        activeId.classList.remove('active');
    c++;
}

function main() {

    dropdown.addEventListener('click', function() {
        drop();
    });

}

main();