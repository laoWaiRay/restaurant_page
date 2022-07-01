//Dependencies List
import "./scss/main.scss";
// import heroImage from "./img/hero.jpg";

import aboutInfo from "./aboutInfo.js";
import reservationsInfo from "./reservationsInfo.js";


// Query Selectors //
const navBar = document.querySelector('.navbar');
const reservationsBtn = document.querySelector('.reservations-btn');
const navLinkAbout = document.querySelector('.navbar__nav-link--about');
const navLinkReservations = document.querySelector('.navbar__nav-link--reservations');
const navLinkLocations = document.querySelector('.navbar__nav-link--locations');
const navLinkContact = document.querySelector('.navbar__nav-link--contact');
const navLinkConcepts = document.querySelector('.navbar__nav-link--concepts');


// Event handlers //
navLinkAbout.onclick = aboutInfo;

navLinkReservations.onclick = reservationsInfo;

reservationsBtn.onclick = reservationsInfo;