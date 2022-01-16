//THEME TOGGLE (LOCAL STORAGE ONLY) ************************************
let darkMode = localStorage.getItem("darkMode");
const themeToggle = document.querySelector(".theme-toggle");

// Check if dark mode is enabled
// if its enabled, turn it off
// if its disabled, turn it on

const enableDarkMode = () => {
    // 1. add the class darkmode to the body
    document.body.classList.add("darkmode");
    // 2. update darkmode in the localStorage
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    // 1. remove the class darkmode to the body
    document.body.classList.remove("darkmode");
    // 2. update darkmode in the localStorage
    localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
    enableDarkMode();
};

themeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});


//THEME TOGGLE GOOGLE CLONE (PREFERS-COLOR-SCHEME, SET ARIA-LABEL)************************************

// const themeToggle = document.querySelector("#theme-toggle");

// themeToggle.addEventListener("click", () => {
//     document.body.classList.contains("light-theme")
//         ? enableDarkMode()
//         : enableLightMode();
// });

// function enableDarkMode() {
//     document.body.classList.remove("light-theme");
//     document.body.classList.add("dark-theme");
//     themeToggle.setAttribute("aria-label", "Switch to light theme");
// }

// function enableLightMode() {
//     document.body.classList.remove("dark-theme");
//     document.body.classList.add("light-theme");
//     themeToggle.setAttribute("aria-label", "Switch to dark theme");
// }

// function setThemePreference() {
//     if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//         enableDarkMode();
//         return;
//     }
//     enableLightMode();
// }

// document.onload = setThemePreference();


//THEME TOGGLE (COMBINED - LOCALSTORAGE, PREFERS-COLOR-SCHEME)************************************
