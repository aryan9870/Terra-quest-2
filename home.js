let hemburgerMenu = document.querySelector("#hemburger-menu");
let hemburgerBox = document.querySelector("#hemburger-nav-links");
let hemburgerCloseBtn = document.querySelector("#hemburger-close-btn");


hemburgerMenu.addEventListener("click", () => {
    hemburgerBox.classList.toggle("hidden");
});

hemburgerCloseBtn.addEventListener("click", () => {
    hemburgerBox.classList.toggle("hidden");
})