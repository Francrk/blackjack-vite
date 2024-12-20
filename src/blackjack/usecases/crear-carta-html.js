//pongo la documentacion

/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} imagen de retorno 
 */


// hay que hacer una funcion de flecha y pasar como parametro o argumento (carta)
export const CrearCartaHTML= (carta)=>{
    if(!carta) throw new Error('la carta es un argumento obligatorio')
// <img class="carta" src="assets/cartas/2C.png">
   const imgCarta = document.createElement('img');
imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
imgCarta.classList.add('carta');

return imgCarta;

}

