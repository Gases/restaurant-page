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

    div.innerHTML = `
    <h1 class="title">Contact Us</h1>
    <div class="contact-container">
        <div>
            <p>Phone number: +1 (809) 555-5555</p>
            <p>Email: sushipage@gmail.com</p>
            <label for="questions-or-comments">Questions or comments?</label></br>
            <textarea name="questions-or-comments" rows="5" cols="50"></textarea></br>
            <button type="submit">Send</button>
        </div>
        <div class="sushi-cartoon" id="image-4">
        </div>
    </div>
    `;

    content.appendChild(div);
}

export { contactPage };