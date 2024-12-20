import _ from'underscore';

// export const a ='klk mami'

// especifico que tipo de dato es y si es array que array es 
 
/**
 *  esta funcion crear un nuevo deck
 * @param {Array<String>} tipoDeCartas  ejemplo: ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} return un nuevo deck
 */

// Esta función crea un nuevo deck  si le pongo export lo exporta
export const crearDeck = (tipoDeCartas,tiposEspeciales) => {
    if (!tipoDeCartas || tipoDeCartas.length === 0 ) throw new Error('tipo de carta obligatorio como un array de strings ');
    if (!tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error('tipo de especiales obligatorio como un array de strings ');

    
    
    


    let deck =[];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipoDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipoDeCartas) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    // console.log( deck );
    return deck;
}


//puedo usar export defaul crearDecrk al final para exportarlo

// export default crearDeck