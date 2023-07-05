const scrSize = document.getElementById("wh");
const burger = document.getElementById("burger");
const navbar = document.getElementById("navbar");
const closeNav = document.getElementById("close");

burger.addEventListener("click", function () {
    burger.style.display = "none";
    navbar.style.display = "flex";
})

closeNav.addEventListener("click", function () {
    burger.style.display = "flex";
    navbar.style.display = "none";
})

function size () {
    let h = window.innerHeight;
    let w = window.innerWidth;
    scrSize.innerHTML = w + "x" + h + " wxh";
}