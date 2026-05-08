let navLinks = document.querySelector(".nav-links");
let icon = document.getElementById("icon");
icon.addEventListener("click",function (e) {
    icon.name = icon.name === "menu" ? "close" : "menu";
    navLinks.classList.toggle('top-[9%]');

})