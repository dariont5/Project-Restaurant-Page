import "./style.css";
import setHome from "./home.js";
import setMenu from "./menu.js";
import setAbout from "./about.js";

// clear
function clearContent() {
    const content = document.getElementById('content');
    content.textContent = ''
}

const homeButton = document.querySelector('button.home');
homeButton.addEventListener('click', () => {
    clearContent();
    setHome();
})

const menuButton = document.querySelector('button.menu');
menuButton.addEventListener('click', () => {
    clearContent();
    setMenu();
})

const aboutButton = document.querySelector('button.about');
aboutButton.addEventListener('click', () => {
    clearContent();
    setAbout();
})

setHome();