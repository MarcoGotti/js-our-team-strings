/* 
Utilizzando i dati forniti, creare un array di stringhe con i nomi dei membri del team.


MILESTONE 3:
Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.
BONUS 1:
In generale curare la parte di UI e organizzare i singoli membri in card/schede.
BONUS 2:
Inserire un form per l’aggiunta di un elemento alla lista.

il mio team: Jimmy Page, Jonah Lomu, Marilyn Monroe, Queen Elisabeth, Lara Croft, Batman, Son Goku
*/


//MILESTONE 0: Creare l’array di stringhe contenente i nomi dei membri del team.
const team =['Jimmy Page', 'Jonah Lomu', 'Marilyn Monroe', 'Merlin', 'Mikey Mouse', 'Bruce Wayne', 'Cruella Devil', 'Indiana Jones', 'King Arthur'];
console.log(team);

//MILESTONE 1: Stampare le informazioni su DOM come card.
const containerEl = document.querySelector('.container');
console.log(containerEl);

for (let i = 0; i < team.length; i++) {
    const character = team[i];
    console.log(character);
    const cardEl = document.createElement('div');
    cardEl.classList.add('card', 'col-2', 'text-center', 'fw-bold');
    cardEl.innerHTML = character;
    console.log(cardEl);
    containerEl.append(cardEl)

    
}
