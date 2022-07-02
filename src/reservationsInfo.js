import reservationsImage from "./img/reservations.jpg";

const reservationsInfo = () => {
    const navItems = document.querySelectorAll('.navbar__nav-item');

    if(document.querySelector('.info')){
        document.querySelector('.info').remove();
    }

    navItems.forEach(item => {
        item.classList.remove('active');
    })

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

    const imgReservations = document.createElement('img');
    imgReservations.classList.add('img', 'img__about');
    imgReservations.src = reservationsImage;

    const infoPanelContentSecondary = document.createElement('div');
    infoPanelContentSecondary.classList.add('info-panel__content-secondary');

    const reserveBtn = document.createElement('button');
    reserveBtn.append('Reserve a Table');
    reserveBtn.classList.add('reserve-btn')

    const p1 = document.createElement('p');
    p1.append('M - F: 9am - 12pm, 12am - 6pm.');
    p1.style.whiteSpace = 'nowrap'

    const p2 = document.createElement('p');
    p2.append('Weekends: 8am - 10pm.');

    const p3 = document.createElement('p');
    p3.append('Et dolorum rerum ab voluptatem voluptatum eum velit repellat? In aliquid eveniet eum nulla veritatis sed quod nisi ut distinctio ducimus ad laudantium laborum.');

    navBar.insertAdjacentElement('afterend', info)
    info.append(infoPanelAbout);
    infoPanelAbout.append(infoPanelClose, headingPrimary, infoPanelContent);
    infoPanelContent.append(infoPanelContentMain, infoPanelContentSecondary);
    infoPanelContentMain.append(imgReservations);
    infoPanelContentSecondary.append(p1, p2, p3, reserveBtn);


    infoPanelClose.addEventListener('click', ()=>{
        info.remove();
        navItems.forEach(item => {
            item.classList.remove('active');
        })
    })
}


export default reservationsInfo;




