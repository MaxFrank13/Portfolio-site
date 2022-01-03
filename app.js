// **** Preloader ****

const preloader = document.querySelector(".preloader");

// once the page loads, hide preloader
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

// **** Toggle links menu ****

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");

navToggle.addEventListener("click", function () {
    linksContainer.classList.toggle("show-links");
});

// **** Fixed Nav and Go-to-Top scroll **** 

const navbar = document.querySelector("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    // find how far the page has been scrolled
    const scrollHeight = window.pageYOffset;
    // find height of nav bar
    const navHeight = navbar.getBoundingClientRect().height;
    // if we have scrolled farther than the height of the nav bar then toggle the fixed-nav on
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        // otherwise toggle it off - works when we scroll back up
        navbar.classList.remove("fixed-nav");
    }
    // if the page scrolls to a certain point, show the go-to-top link
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

        // reset default to navigate to a specific spot
        e.preventDefault();

        // initialize variables using href of clicked target
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        // find heights of navbar and links container
        const navHeight = navbar.getBoundingClientRect().height;
        console.log(navHeight);
        const containerHeight = linksContainer.getBoundingClientRect().height;
        
        // check if fixed-nav is on, returns true/false
        const fixedNav = navbar.classList.contains("fixed-nav");
       
        // position is our specified spot's (distance from the top of it's parent) minus (height of nav bar)
        let position = element.offsetTop - navHeight;
       
        // position if there is no fixed-nav before scrolling
        if (!fixedNav) {
            position -= navHeight;
        }
        // check to see if menu is pulled down and adjust position accordingly
        if (navHeight > 88) {
            position += containerHeight;
        }
        // scroll to our specified position
        window.scrollTo({
            left: 0,
            top: position,
        });

        // if link menu is open this will close it
        linksContainer.classList.remove("show-links");
    })
})

// **** Profile pic ****

const portrait_img = document.querySelector(".fixed-img");
const portrait_icon = document.querySelector(".portrait-icon");
const close_icon = document.querySelector(".close");

// toggling hide-img class

portrait_icon.addEventListener("click", function () {
    portrait_img.classList.remove("hide-img");
    portrait_icon.classList.add("hide-img");
});

close_icon.addEventListener("click", function() {
    portrait_img.classList.add("hide-img");
    portrait_icon.classList.remove("hide-img");
})

// **** Slider ****
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
// counter is used as reference for carousel function
let counter = 0;

// select all slides and order them horizontally - CSS hides overflow
slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

// setting button listeners and default style

nextBtn.addEventListener("click", function () {
    counter++;
    carousel();
});
  
prevBtn.addEventListener("click", function () {
    counter--;
    carousel();
});

prevBtn.style.visibility = "hidden";

// slide function

function carousel() {

// slider with no loop
    // hide buttons if user is at either end of slide-container
    if (counter < slides.length - 1) {
        nextBtn.style.visibility = "visible";
        } else {
        nextBtn.style.visibility = "hidden";
        }
        if (counter > 0) {
        prevBtn.style.visibility = "visible";
        } else {
        prevBtn.style.visibility = "hidden";
    }
    // adjust which slide is in view using counter variable
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
        // change to loop functionality - also need to remove default styles on prev-btn
        // if (counter === slides.length) {
        //   counter = 0;
        // }
        // if (counter < 0) {
        //   counter = slides.length - 1;
        // }
}

    