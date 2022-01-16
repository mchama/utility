//SCROLL EFFECT/NAVBAR-SCROLLED Intersection Observers ***************************************
const navBar = document.querySelector(".navbar");
const sectionOne = document.querySelector(".home-intro-section, .intro-section");
const faders = document.querySelectorAll(".scroll-effect");

// settings for shrinking navbar
const sectionOneOptions = {
    rootMargin: "-500px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navBar.classList.add("navbar-scrolled");
        } else {
            navBar.classList.remove("navbar-scrolled");
        }
    });
},
    sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// settings for scroll effect
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("scroll-appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
},
    appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// CUSTOM NAV-TOGGLER ***************************
const navSlide = () => {
    const navToggler = document.querySelector(".navbar-toggler.custom");
    const nav = document.querySelector(".navbar-nav");
    const navLinks = document.querySelectorAll(".navbar .nav-item");
    const siteNav = document.querySelector(".navbar");

    navToggler.addEventListener("click", () => {
        // Toggle Nav
        nav.classList.toggle("active");

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.1s ease  forwards ${index / 7 +
                    0.05}s`;
            }
        });

        // Toggle the nav overlay and zoom effect on main content
        // siteNav.classList.toggle("active");

        //Burger toggle animation
        navToggler.classList.toggle("navbar-toggler-toggle");
    });

    // //Close sidenav when clicking anywhere outside of it
    // window.onclick = (event) => {
    //     if (event.target.matches(".active")) {
    //         if (siteNav.classList.contains("active")) {
    //             siteNav.classList.remove("active");
    //             nav.classList.remove("active");
    //             navToggler.classList.remove("navbar-toggler-toggle");
    //         }
    //     }
    // }
};
navSlide();

// OFFCANVAS Side menu *****************************
(function () {
    'use strict'

    document.querySelector('[data-bs-toggle="offcanvas"]').addEventListener('click', function () {
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
})();

// STICKY NAVBAR AFTER SCROLL **************************
// Acts as fallback incase sticky-top does not work in some browsers
var headerHeight = document.querySelector('#header').height;
var stickyNav = document.querySelector(".navbar.sticky-top");
window.addEventListener("scroll", function () {
    if (window.scrollY > headerHeight) {
        stickyNav.classList.add('fixed-top');
    } else {
        stickyNav.classList.remove('fixed-top');
    }
});


