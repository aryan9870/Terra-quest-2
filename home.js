let hemburgerMenu = document.querySelector("#hemburger-menu");
let hemburgerBox = document.querySelector("#hemburger-nav-links");
let hemburgerCloseBtn = document.querySelector("#hemburger-close-btn");
let courcesNev = document.querySelector("#cources-navLink");
let courcesHempbuger = document.querySelector("#cources-hemburger");


console.log(courcesNev, courcesHempbuger);

hemburgerMenu.addEventListener("click", () => {
    hemburgerBox.classList.toggle("hidden");
});

hemburgerCloseBtn.addEventListener("click", () => {
    hemburgerBox.classList.toggle("hidden");
});

courcesNev.addEventListener("mouseenter", () => {
    courcesHempbuger.classList.remove("hidden");
});



courcesHempbuger.addEventListener("mouseleave", () => {
    courcesHempbuger.classList.add("hidden");
});

window.addEventListener("scroll", () => {
    if(window.scrollY >= 200) {
        courcesHempbuger.classList.add("hidden");
        console.log("Working")
    }
    console.log(window.scrollY);
});

// tabs

const tabs = document.querySelectorAll(".tab_btn");
const all_content = document.querySelectorAll(".content");


tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
        tabs.forEach(tab => {tab.classList.remove("active")});
        tab.classList.add("active");
        const line = document.querySelector(".line");
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        all_content.forEach(content => {content.classList.add("hidden")});
        all_content[index].classList.remove("hidden");
    })
})