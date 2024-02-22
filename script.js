
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector("nav ul");

    hamburger.addEventListener("click", function() {
        menu.classList.toggle('show-menu');
    })

    nav.querySelectorAll('ul a').forEach(item => {
        item.addEventListener('click', function () {
            menu.classList.remove('show-menu');
        })
    })
});

// TRANSITION IN SECTION
function reveal(){
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length ; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active ');
        }
    }
}

window.addEventListener('scroll', reveal);
// TRANSITION IN SECTION