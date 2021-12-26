import hamburguerMenu from "./DOM-JS/menu_hamburger.js";
import { digitalClock,alarm} from "./DOM-JS/reloj.js";
import {moveBall,shotCuts} from "./DOM-JS/teclado.js";
import countdown from "./DOM-JS/cuenta_regresiva.js"; 
import scrollTopButton from "./DOM-JS/boton_scroll.js";
import darkTheme from "./DOM-JS/tema_oscuro.js";
import responsiveMedia from "./DOM-JS/objeto_responsive.js";
import responsiveTester from "./DOM-JS/prueba_responsive.js";
import userDeviceInfo from "./DOM-JS/deteccion_dispositivos.js";
import networkStatus from "./DOM-JS/deteccion_red.js";
import webCam from "./DOM-JS/deteccion_webcam.js";
import getGeolocation from "./DOM-JS/geolocalizacion.js";
import searchFilter from "./DOM-JS/filtro_busquedas.js";
import draw from "./DOM-JS/sorteo.js";
import slider from "./DOM-JS/carrusel.js";
import scrollSpy from "./DOM-JS/scroll_spia.js";
import smartVideo from "./DOM-JS/video_inteligente.js";
import contactFormValidations from "./DOM-JS/validaciones_formulario.js";
import speechReader from "./DOM-JS/narrador.js";

const d =  document;

d.addEventListener("DOMContentLoaded",()=>{
    hamburguerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/Last_Stop.mp3","#activar-alarma","#desactivar-alarma");
    countdown(
        "countdown",
        "Dec 18, 2021 22:42:00",
        "Feliz Cumpleaños amigo y docente digital🎉");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://youtu.be/6IwUl-4pAzc?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA" target="_blank">Ver video</a>
        `,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `);
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/pX3kf1HH7re71RF6A" target="_blank">Ver mapa</a>
        `,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60540.566830872405!2d-88.33213806152345!3d18.493376116690417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5ba3eb0de0456b%3A0xbb1fb98ced51603e!2sMalec%C3%B3n%20de%20Chetumal!5e0!3m2!1ses-419!2smx!4v1639968647431!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        `);
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilter(".card-filter",".card");
    draw("#winner-btn",".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();
});

d.addEventListener("keydown",(e)=>{
    shotCuts(e);
    moveBall(e,".ball",".stage");
});

darkTheme(".dark-theme-btn","dark-mode");
networkStatus();
speechReader();
