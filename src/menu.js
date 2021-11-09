import { content, body, div, header } from './index';

const menuPage = () => {

    header.className = '';
    header.classList.add('greenish');

    div.className = '';
    div.classList.add('menu-container', 'greenish');

    body.className = '';
    body.classList.add('menu-page');

    content.appendChild(div);
    buildMenu();
}

const buildMenu = () => {    
    sushiList.forEach(sushi => {
        const sushiEntry = document.createElement('div');
        sushiEntry.classList.add('sushi');
        
        const sushiHeader = document.createElement('div');
        const sushiIcon = document.createElement('img');
        const sushiName = document.createElement('h2');
        const sushiDescription = document.createElement('p');
        const sushiPrice = document.createElement('h3');
        
        sushiIcon.src = images[`${sushi['name'].toLowerCase().split(' ').join('-')}.svg`];
        sushiName.innerText = `${sushi['name']}`;
        sushiHeader.appendChild(sushiName);
        sushiHeader.appendChild(sushiIcon);
        sushiHeader.classList.add('sushi-header');
        
        sushiDescription.innerText = `${sushi['description']}`;
        sushiPrice.innerText = `${sushi['price']}`;

        sushiEntry.appendChild(sushiHeader);
        sushiEntry.appendChild(sushiDescription);
        sushiEntry.appendChild(sushiPrice);
        div.appendChild(sushiEntry);
    })
}

const sushiList = [
    {
        'name': 'Ebi Nigiri',
        'description': `Made with pressed rice topped with kuruma ebi shrimp.`,
        'price': `$4.99`,
        'popular': true
    },
    {
        'name': 'Tai Nigiri',
        'description': `Made with pressed rice topped with Japanese snapper fish.`,
        'price': `$4.99`,
        'popular': true
    },
    {
        'name': 'Unagi Nigiri',
        'description': `Made with pressed rice topped with lightly cooked freshwater eel.`,
        'price': `$6.99`,
        'popular': false
    },
    {
        'name': 'Sake Nigiri',
        'description': `Made with pressed rice topped with pink salmon.`,
        'price': `$3.99`,
        'popular': true
    },
    {
        'name': 'Uni Gunkan Maki',
        'description': `Made with pressed rice, wrapped in nori and topped with sea urchin.`,
        'price': `$6.99`,
        'popular': false
    },
    {
        'name': 'Ikura Gunkan Maki',
        'description': `Made with pressed rice, wrapped in nori and topped with salmon roe.`,
        'price': `$6.99`,
        'popular': false
    },
];

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(require.context('../dist/sushi-icons/', false, /\.(png|jpe?g|svg)$/));

export { menuPage };