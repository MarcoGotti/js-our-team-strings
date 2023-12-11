/* 
Utilizzando i dati forniti, creare un array di stringhe con i nomi dei membri del team.



BONUS 1:
In generale curare la parte di UI e organizzare i singoli membri in card/schede.


il mio team: Jimmy Page, Jonah Lomu, Marilyn Monroe, Queen Elisabeth, Lara Croft, Batman, Son Goku
*/


//MILESTONE 0: Creare l’array di stringhe contenente i nomi dei membri del team.
const team =['Jimmy Page', 'Jonah Lomu', 'Marilyn Monroe', 'Merlin', 'Donald Duck', 'Al Capone', 'Cruella De Vil', 'Indiana Jones', 'Rosa Luxemburg', 'Ray  Charles', 'Forrest Gump', 'Diego Maradona', 'Killer Bonnie'];

//MILESTONE 1: Stampare le informazioni su DOM come card.
const containerEl = document.querySelector('.container');

for (let i = 0; i < team.length; i++) {
    const cardEl = generateCardEl(team[i]);
    containerEl.appendChild(cardEl); 
}


/**
 * Generate card element
 * Generate DOM element with classList (4) and returns  it
 * @param {string} name Insert a name into the card
 * @returns object
 */
function generateCardEl(name) {
    const cardEl = document.createElement('a');
    cardEl.classList.add('card', 'col-2', 'text-center', 'fw-bold', 'opacity', 'text-decoration-none');
    cardEl.innerText = name;

    //MILESTONE 3: Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.

    /* //questa formula è farina del mio sacco: lightMember() not defined
    cardEl.setAttribute('onclick', 'lightMember()');  
    function lightMember() {
        cardEl.classList.toggle('toggle_click');  
    } */

    //questa formula è un copy-paste della correzione di Fabio
    cardEl.addEventListener('click', function(e){  
        this.classList.toggle('toggle_click');
    })
    return cardEl
}

// BONUS 2: Inserire un form per l’aggiunta di un elemento alla lista.

document.getElementById('addMember').addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e);
    const newMemberName = document.getElementById('newMemberName').value;
    const newMemberLastName = document.getElementById('newMemberLastName').value;
   
    const cardEl = generateCardEl(newMemberName + newMemberLastName);
    containerEl.appendChild(cardEl);
    // empty the form after adding new member
    document.getElementById('newMemberName').value = '';
    document.getElementById('newMemberLastName').value = '';
})


let cardEl = generateCardEl();

/* const cardEl = generateCardEl(member) //not defined
console.log(cardEl); //not defined */



/* function click_cardEl() {
    document.querySelector('.cardEl').classList.add('text-bg-info'); 
} */

