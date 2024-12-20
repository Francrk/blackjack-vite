// se copio toda la ruta relativa del deck y no es necesario importarl esa variable 
// import { deck } from "..";

//para no hacer eso pasamo por parametro el deck en la funcion 

/**
 * 
 * @param {Array<String>} deck 
 * @returns 
 */


// Esta función me permite tomar una carta
 export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}




