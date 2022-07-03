//Dependencies List
import "./scss/main.scss";
// import heroImage from "./img/hero.jpg";

import aboutInfo from "./aboutInfo.js";
import reservationsInfo from "./reservationsInfo.js";
import contactInfo from "./contact.js";
import conceptsInfo from "./conceptsInfo.js";

// Query Selectors //
const navBar = document.querySelector('.navbar');
const reservationsBtn = document.querySelector('.reservations-btn');
const navLinkAbout = document.querySelector('.navbar__nav-item--about');
const navLinkReservations = document.querySelector('.navbar__nav-item--reservations');
const navLinkLocations = document.querySelector('.navbar__nav-item--locations');
const navLinkContact = document.querySelector('.navbar__nav-item--contact');
const navLinkConcepts = document.querySelector('.navbar__nav-item--concepts');
const navItems = document.querySelectorAll('.navbar__nav-item');
const primaryNav = document.querySelector('.primary-navigation');
const navToggler = document.querySelector('.toggler');


// Event handlers //
navLinkAbout.onclick = aboutInfo;

navLinkReservations.onclick = reservationsInfo;

reservationsBtn.onclick = reservationsInfo;

navLinkLocations.addEventListener('click', ()=>{
    navItems.forEach(item => {
        item.classList.remove('active');
    })
    if(document.querySelector('.info')){
        document.querySelector('.info').remove();
    }
    navLinkLocations.classList.add('active')
})

navLinkContact.onclick = contactInfo;

navLinkConcepts.onclick = conceptsInfo;

//smooth scrolling

document.querySelector('a[href="#map-container"]').addEventListener('click', function (e){
    e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
})

//Nav Toggler

navToggler.addEventListener('click', ()=>{
    const visibility = primaryNav.getAttribute('data-visible');
    if(visibility === 'false'){
        primaryNav.setAttribute('data-visible', 'true');
        primaryNav.setAttribute('aria-expanded', 'true');
    } else {
        primaryNav.setAttribute('data-visible', 'false');
        primaryNav.setAttribute('aria-expanded', 'false');
    }
})

let mql = window.matchMedia('(max-width: 600px)');   //media query list

window.addEventListener('resize', ()=>{                                 //should probably throttle this...
    if(mql.matches){
        primaryNav.setAttribute('data-visible', 'false');
        primaryNav.setAttribute('aria-expanded', 'false');
    }
})


const navLinks = document.querySelectorAll('.navbar__nav-item');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        primaryNav.setAttribute('data-visible', 'false');
        primaryNav.setAttribute('aria-expanded', 'false');
        console.log('clicked')
    })
})
