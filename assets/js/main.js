/* 
Utilizzando i dati forniti, creare un array di stringhe con i nomi dei membri del team.



BONUS 1:
In generale curare la parte di UI e organizzare i singoli membri in card/schede.
BONUS 2:
Inserire un form per l’aggiunta di un elemento alla lista.

il mio team: Jimmy Page, Jonah Lomu, Marilyn Monroe, Queen Elisabeth, Lara Croft, Batman, Son Goku
*/


//MILESTONE 0: Creare l’array di stringhe contenente i nomi dei membri del team.
const team =['Jimmy Page', 'Jonah Lomu', 'Marilyn Monroe', 'Merlin', 'Donald Duck', 'Minny Mouse', 'Cruella Devil', 'Indiana Jones', 'King Arthur', 'Ray  Charles', 'Catherine Deneuve'];

//MILESTONE 1: Stampare le informazioni su DOM come card.
const containerEl = document.querySelector('.container');

for (let i = 0; i < team.length; i++) {
    const cardEl = generateCardEl(team[i]);
    containerEl.appendChild(cardEl); 
    //document.querySelector('.cardEl').addEventListener('click', click_cardEl)
}


/**
 * Generate card element
 * Generate DOM element with classList (4) and returns  it
 * @param {string} name Insert a name into the card
 * @returns object
 */
function generateCardEl(name) {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card', 'col-2', 'text-center', 'fw-bold', 'opacity', 'cardEl');
    cardEl.innerText = name;
/*     cardEl.setAttribute('onclick', 'lightMember()');  //questa formula è farina del mio sacco: lightMember() not defined
    function lightMember() {
        cardEl.classList.toggle('toggle_click');  
    } */
    cardEl.addEventListener('click', function(e){  //questa formula è un copy-paste della correzione di Fabio
        this.classList.toggle('toggle_click');
    })
    return cardEl
}



let cardEl = generateCardEl();

/* const cardEl = generateCardEl(member) //not defined
console.log(cardEl); //not defined */

//MILESTONE 3: Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.

/* function click_cardEl() {
    document.querySelector('.cardEl').classList.add('text-bg-info'); 
} */

