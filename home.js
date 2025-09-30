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

// tabs 1

const tabs_1 = document.querySelectorAll(".tab_btn_1");
const all_content_1 = document.querySelectorAll(".content_1");


tabs_1.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
        tabs_1.forEach(tab => {tab.classList.remove("active")});
        tab.classList.add("active");
        const line_1 = document.querySelector(".line_1");
        line_1.style.width = e.target.offsetWidth + "px";
        line_1.style.left = e.target.offsetLeft + "px";

        all_content_1.forEach(content => {content.classList.add("hidden")});
        all_content_1[index].classList.remove("hidden");
    })
})

// tabs 1

const tabs_2 = document.querySelectorAll(".tab_btn_2");
const all_content_2 = document.querySelectorAll(".content_2");


tabs_2.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
        tabs_2.forEach(tab => {tab.classList.remove("active")});
        tab.classList.add("active");
        const line_2 = document.querySelector(".line_2");
        line_2.style.width = e.target.offsetWidth + "px";
        line_2.style.left = e.target.offsetLeft + "px";

        all_content_2.forEach(content => {content.classList.add("hidden")});
        all_content_2[index].classList.remove("hidden");
    })
})