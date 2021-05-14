let dropdown = document.getElementById("dropdownOnclick");
let activeId = document.getElementById("active");
// let imageHover1 = document.getElementById("comp1");
// let imageHover2 = document.getElementById("comp2");
// let imageHover3 = document.getElementById("comp3");
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

    // imageHover1.addEventListener("mouseover", function() {
    //     document.querySelectorAll(".imageText")[0].style.visibility = "visible";
    // });
    // imageHover1.addEventListener("mouseout", function() {
    //     document.querySelectorAll(".imageText")[0].style.visibility = "hidden";
    // });


    // imageHover2.addEventListener("mouseover", function() {
    //     document.querySelectorAll(".imageText")[1].style.visibility = "visible";
    // });
    // imageHover2.addEventListener("mouseout", function() {
    //     document.querySelectorAll(".imageText")[1].style.visibility = "hidden";
    // });


    // imageHover3.addEventListener("mouseover", function() {
    //     document.querySelectorAll(".imageText")[2].style.visibility = "visible";
    // });
    // imageHover3.addEventListener("mouseout", function() {
    //     document.querySelectorAll(".imageText")[2].style.visibility = "hidden";
    // });

}

main();