import concepts1Image from './img/concepts1.jpg'
import concepts2Image from './img/concepts2.jpg'
import concepts3Image from './img/concepts3.jpg'

const conceptsInfo = () => {
    const navItems = document.querySelectorAll('.navbar__nav-item');

    if(document.querySelector('.info')){
        document.querySelector('.info').remove();
    }

    navItems.forEach(item => {
        item.classList.remove('active');
    })

    document.querySelector('.navbar__nav-item--concepts').classList.add('active');

    const navBar = document.querySelector('.navbar');

    const info = document.createElement('div');
    info.classList.add('info');

    const infoPanelConcepts = document.createElement('div');
    infoPanelConcepts.classList.add('info-panel', 'info-panel--concepts');

    const infoPanelClose = document.createElement('span');
    infoPanelClose.classList.add('info-panel__close');
    infoPanelClose.append('x');

    const headingPrimary = document.createElement('h1');
    headingPrimary.classList.add('heading-primary');
    headingPrimary.append('Concepts');

    const grid = document.createElement('div');
    grid.classList.add('grid');

    const img1Container = document.createElement('div');
    img1Container.classList.add('grid__img-container', 'grid__img-container--1');

    const img1 = document.createElement('img');
    img1.classList.add('grid__img', 'grid__img--1');
    img1.src = concepts1Image;

    const img2Container = document.createElement('div');
    img2Container.classList.add('grid__img-container', 'grid__img-container--2');
    const img2 = document.createElement('img');
    img2.classList.add('grid__img', 'grid__img--2');
    img2.src = concepts2Image;

    const img3Container = document.createElement('div');
    img3Container.classList.add('grid__img-container', 'grid__img-container--3');
    const img3 = document.createElement('img');
    img3.classList.add('grid__img', 'grid__img--3');
    img3.src = concepts3Image;


    const textBox1 = document.createElement('div');
    textBox1.classList.add('grid__textBox--1');

    const heading1 = document.createElement('h2');
    heading1.classList.add('heading-secondary', 'heading-concepts');
    heading1.append('Little Italy');

    const text1 = document.createElement('p');
    text1.classList.add('grid__text', 'grid__text--1');
    text1.append('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc aliquet bibendum enim facilisis gravida neque. Cursus euismod quis viverra nibh cras pulvinar. ');

    const textBox2 = document.createElement('div');
    textBox2.classList.add('grid__textBox--2');
    
    const heading2 = document.createElement('h2');
    heading2.classList.add('heading-secondary', 'heading-concepts');
    heading2.append('La Capitale');

    const text2 = document.createElement('p');
    text2.classList.add('grid__text', 'grid__text--2');
    text2.append('Suscipit adipiscing bibendum est ultricies integer quis. Lobortis feugiat vivamus at augue eget arcu dictum varius. Amet aliquam id diam maecenas ultricies mi. Pellentesque nec nam aliquam sem et tortor consequat. Risus pretium quam vulputate dignissim suspendisse in est ante.')

    const textBox3 = document.createElement('div');
    textBox3.classList.add('grid__textBox--3');

    const heading3 = document.createElement('h2');
    heading3.classList.add('heading-secondary', 'heading-concepts');
    heading3.append('La Pergola');

    const text3 = document.createElement('p');
    text3.classList.add('grid__text', 'grid__text--3');
    text3.append('Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Ut sem nulla pharetra diam sit amet nisl. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Nisl suscipit adipiscing bibendum est.');



    navBar.insertAdjacentElement('afterend', info)
    info.append(infoPanelConcepts);
    infoPanelConcepts.append(infoPanelClose, headingPrimary, grid);
    grid.append(img1Container, img2Container, img3Container, textBox1, textBox2, textBox3);
    img1Container.append(img1);
    img2Container.append(img2);
    img3Container.append(img3);
    textBox1.append(heading1, text1);
    textBox2.append(heading2, text2);
    textBox3.append(heading3, text3);


    infoPanelClose.addEventListener('click', ()=>{
        info.remove();
        navItems.forEach(item => {
            item.classList.remove('active');
        })
    })
}


export default conceptsInfo;




