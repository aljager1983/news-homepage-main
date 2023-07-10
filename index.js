const scrSize = document.getElementById("wh");
const burger = document.getElementById("burger");
const navbar = document.getElementById("navbar");
const closeNav = document.getElementById("close");
const cover = document.getElementById("cover");
const close = document.getElementById("close");
const home = document.getElementById("home");
const newAside = document.getElementById("new");
const popular = document.getElementById("popular");
const trending = document.getElementById("trending");
const categories = document.getElementById("categories");

burger.addEventListener("click", function () {
    burger.style.display = "none";
    navbar.style.display = "flex";
    closeNav.style.display = "flex";
    cover.style.display = "block";
})

newAside.addEventListener("click", function () {
    closeAll();
})

popular.addEventListener("click", function () {
    closeAll();
})

closeNav.addEventListener("click", function () {
    closeAll();
})


function size () {
    let h = window.innerHeight;
    let w = window.innerWidth;
    scrSize.innerHTML = w + "x" + h + " wxh";
}

function closeAll () {
    burger.style.display = "flex";
    navbar.style.display = "none";
    cover.style.display = "none";
}