import "./style.css";
import setHome from "./home.js";

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
})

const aboutButton = document.querySelector('button.about');
aboutButton.addEventListener('click', () => {
    clearContent();
})

setHome();