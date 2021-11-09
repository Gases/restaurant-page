import { content, body, div, header } from './index';

const contactPage = () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    header.className = '';
    header.classList.add('redish');
    
    div.className = '';
    div.classList.add('container', 'redish');

    body.className = '';
    body.classList.add('contact-page');

    content.appendChild(div);
}

export { contactPage };