//si los archivo(ruta path) esta en el mismo nivel puedo usar solo la raiz ./
import{pedirCarta,valorCarta,CrearCartaHTML} from './'

// import{valorCarta} from './valor-carta'

/**
 * 
 * @param {Number} puntosMinimos puntos que necesita la computadora para ganar 
 * @param {HTMLElement} puntosHTML HTML para mostrar los puntos 
 * @param { HTMLElement}  divCartasComputadora elemento html para mostrar los puntos 
 * @param {Array<String>} deck
 */

// turno de la computadora
   export const turnoComputadora = ( puntosMinimos ,puntosHTML, divCartasComputadora, deck  ) => {

     if (!puntosMinimos) throw new console.error('los puntos son necesarios');
     if (!puntosHTML) throw new console.error('los argumentos puntoshtml son necesarios');
     let puntosComputadora = 0;
     
    do {
        //se le agregar el deck como parametro 
        const carta = pedirCarta(deck);
        const imgCarta=CrearCartaHTML(carta);
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">

        // const imgCarta = document.createElement('img');
        // imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        // imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}