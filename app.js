const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const navbar = document.querySelector("nav");
const topLink = document.querySelector(".top-link");
const portrait_img = document.querySelector(".fixed-img");
const portrait_icon = document.querySelector(".portrait-icon");
const close_icon = document.querySelector(".close");

console.log(portrait_img);

// **** Toggle links menu ****

navToggle.addEventListener("click", function () {
    linksContainer.classList.toggle("show-links");
});

// **** Fixed Nav and Go-to-Top scroll **** 

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }

    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
})

// **** Smooth scroll with fixed nav ****

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        // reset default to navigate to a specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;
    
        if (!fixedNav) {
            position -= navHeight;
        }
        if (navHeight > 88) {
            position += containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });

        // if link menu is open this will close it
        linksContainer.classList.remove("show-links");
    })
})

// **** Profile pic hover functionality ****

portrait_icon.addEventListener("click", function () {
    portrait_img.classList.remove("hide-img");
    portrait_icon.classList.add("hide-img");
});

close_icon.addEventListener("click", function() {
    portrait_img.classList.add("hide-img");
    portrait_icon.classList.remove("hide-img");
})