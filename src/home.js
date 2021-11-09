import { content, body, div, header } from './index';

const homePage = () => {
    header.className = '';
    header.classList.add('blueish');

    div.className = '';
    div.classList.add('container', 'blueish');

    body.className = '';
    body.classList.add('home-page');

    content.appendChild(div);
}

export { homePage };