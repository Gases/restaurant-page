import { content, body, div, header } from './index';

const homePage = () => {
    header.className = '';
    header.classList.add('blueish');

    div.className = '';
    div.classList.add('container', 'blueish');

    body.className = '';
    body.classList.add('home-page');

    div.innerHTML = `
    <h1 class="title"> This is a sample sushi restaurant webpage!</h1>
    <div>This page was made as an exercise for The Odin Project. It serves no other purpose than to teach me how to use WebPack. And it worked! I've learned a lot about WebPack in the past week. I ran into some problems but they were solved using StackOverflow and the WebPack documentation.</div>
    <br/>
    <div>Here are some drawings of sushi:</div>
    <div class="sushi-images">
        <div class="sushi-cartoon image-1"> </div>
        <div class="sushi-cartoon image-2"> </div>
        <div class="sushi-cartoon image-3"> </div>
    </div>
    `;

    content.appendChild(div);
}

export { homePage };