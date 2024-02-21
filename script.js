
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector("nav ul");

    hamburger.addEventListener("click", function() {
        menu.classList.toggle('show-menu');
    })

    nav.querySelectorAll('ul li a').forEach(item => {
        item.addEventListener('click', function () {
            menu.classList.remove('show-menu');
        })
    })
});