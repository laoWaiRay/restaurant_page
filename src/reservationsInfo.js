import aboutImage from "./img/about.jpg";

const reservationsInfo = () => {
    const navItems = document.querySelectorAll('.navbar__nav-item');

    if(document.querySelector('.info')){
        document.querySelector('.info').remove();
        navItems.forEach(item => {
            item.classList.remove('active');
        })
    }

    document.querySelector('.navbar__nav-item--reservations').classList.add('active');
    
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
    headingPrimary.append('Reservations');

    const infoPanelContent = document.createElement('div');
    infoPanelContent.classList.add('info-panel__content');

    const infoPanelContentMain = document.createElement('div');
    infoPanelContentMain.classList.add('info-panel__content-main');

    const imgAbout = document.createElement('img');
    imgAbout.classList.add('img', 'img__about');
    imgAbout.src = aboutImage;

    const infoPanelContentSecondary = document.createElement('div');
    infoPanelContentSecondary.classList.add('info-panel__content-secondary');

    const p1 = document.createElement('p');
    p1.append('Lorem ipsum dolor sit amet. Qui sunt maiores non iste vero ut eius adipisci est quasi libero. Et quaerat vero nam ratione consequatur ut laudantium quos qui quisquam voluptatem ea alias dignissimos. In quasi porro est quia quam aut ullam Quis et reiciendis velit rem alias repudiandae! Et excepturi autem sed voluptatem odio qui vitae minus sed dolorem cumque est voluptas culpa aut molestiae facere.');

    const p2 = document.createElement('p');
    p2.append('In galisum veniam sed incidunt possimus hic eius unde eos inventore dolor et dolores magni id sint eius et nisi velit. Qui vero aliquam qui autem tempore aut minima repellendus vel dicta ducimus est iusto mollitia est cumque quibusdam.');

    navBar.insertAdjacentElement('afterend', info)
    info.append(infoPanelAbout);
    infoPanelAbout.append(infoPanelClose, headingPrimary, infoPanelContent);
    infoPanelContent.append(infoPanelContentMain, infoPanelContentSecondary);
    infoPanelContentMain.append(imgAbout);
    infoPanelContentSecondary.append(p1,p2);


    infoPanelClose.addEventListener('click', ()=>{
        info.remove();
        navItems.forEach(item => {
            item.classList.remove('active');
        })
    })
}


export default reservationsInfo;




