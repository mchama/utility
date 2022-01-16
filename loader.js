

// LOAD SCREEN ANIMATION ***********************

var loadScreen = document.querySelector(".load-screen");

window.addEventListener('load', function () {

   loadScreen.style.display = 'none';

});

const logo = document.querySelectorAll("#loader-svg path");

console.log(logo.Length);


const loader = document.querySelector(".loader");
const main = document.querySelector("main");

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => (
            main.style.opacity = 1), 50);

    }, 4000);
}

init();
