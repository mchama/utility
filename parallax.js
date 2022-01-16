// PARALLAX **************************************
function parallax(element, distance, speed) {
    const parallaxItem = document.querySelector(element);
    parallaxItem.style.transform = `translateY(${distance * speed}px)`;
};

window.addEventListener("scroll", function () {
    parallax(".intro-section .container", window.scrollY, 0.4);

});
