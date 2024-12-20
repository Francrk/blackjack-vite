
import _ from 'underscore';
// de esa manera en llave puedo hacer export individual de elemento
// import {crearDeck} from './usecases/crear-deck';
// import {pedirCarta} from './usecases/pedir-carta';
// import { valorCarta } from './usecases/valor-carta';




// import crearDeck from './usecases/crear-deck'
//le puedo poner un alias 
// import {crearDeck as crearnuevodeck} from './usecases/crear-deck'



//uso del index barril 

import {crearDeck,pedirCarta,valorCarta, turnoComputadora,CrearCartaHTML} from './usecases';

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */
// no es necesario export el deck , se lo paso por parametro a la funcion 
 let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

//igualamos el valor del deck a la funcion que devuelve un array de algo 
 deck=crearDeck(tipos, especiales);












// Eventos
btnPedir.addEventListener('click', () => {
    //pasamo por referencia el deck para que la funcion tenga el valor de la carta 
    const carta = pedirCarta(deck);
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    //crear carta

    // <img class="carta" src="assets/cartas/2C.png">
    //llamo la funcion exportada para la carta del jugador y paso carta por parametro
    const imgCarta = CrearCartaHTML(carta);
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        //se agrego eso parametros 
        turnoComputadora( puntosJugador ,puntosHTML[1],divCartasComputadora, deck );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
         //se agrego eso parametros 
        turnoComputadora( puntosJugador ,puntosHTML[1],divCartasComputadora, deck);
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;
    //se agrego eso parametros 
    turnoComputadora( puntosJugador,puntosHTML[1],divCartasComputadora, deck );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck(tipos,especiales);

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});

