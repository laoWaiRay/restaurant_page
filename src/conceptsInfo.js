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

    const infoPanelAbout = document.createElement('div');
    infoPanelAbout.classList.add('info-panel', 'info-panel--about');

    const infoPanelClose = document.createElement('span');
    infoPanelClose.classList.add('info-panel__close');
    infoPanelClose.append('x');

    const headingPrimary = document.createElement('h1');
    headingPrimary.classList.add('heading-primary');
    headingPrimary.append('Concepts');

    const infoPanelContent = document.createElement('div');
    infoPanelContent.classList.add('info-panel__content');


    navBar.insertAdjacentElement('afterend', info)
    info.append(infoPanelAbout);
    infoPanelAbout.append(infoPanelClose, headingPrimary, infoPanelContent);


    infoPanelClose.addEventListener('click', ()=>{
        info.remove();
        navItems.forEach(item => {
            item.classList.remove('active');
        })
    })
}


export default conceptsInfo;




