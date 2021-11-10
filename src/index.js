import './style.css';
import { homePage } from './home';
import { menuPage } from './menu';
import { contactPage } from './contact';

const body = document.querySelector('body');

(() => {
    const head = document.createElement('header');
    
    head.innerHTML = `
    <h1>SUSHI RESTAURANT PAGE</h1>
    <div class="other-pages">
        <div class="home links">
            <a href="#">HOME</a>
        </div>
        <div class="menu links">
            <a href="#">MENU</a>
        </div>
        <div class="contact links">
            <a href="#">CONTACT</a>
        </div>
    </div>
    `;
    
    body.prepend(head);
})();

(() => {
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content';
    body.appendChild(contentDiv);
})()

const content = document.querySelector('#content');
const header = document.querySelector('header');
const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');
const div = document.createElement('div');

home.addEventListener('click', () => {
    clearContent();
    pageContent('home');
});

menu.addEventListener('click', () => {
    clearContent();
    pageContent('menu');
});

contact.addEventListener('click', () => {
    clearContent();
    pageContent('contact');
});

const pageContent = (page) => {    
    switch (page) {
        case 'home':
            homePage();
            break;
        case 'menu':
            menuPage();
            break;
        case 'contact':
            contactPage();
            break;
        default:
            homePage();
            break;
    }
};

const clearContent = () => {
    while (content.firstChild.firstChild) {
        content.firstChild.removeChild(content.firstChild.firstChild);
    }
}

pageContent();

export { content, body, div, header };

