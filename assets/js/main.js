
//MILESTONE 0: Creare l’array di stringhe contenente i nomi dei membri del team.
const team =['Jimmy Page', 'Jonah Lomu', 'Marilyn Monroe', 'Merlin', 'Donald Duck', 'Al Capone', 'Cruella De Vil', 'Indiana Jones', 'Rosa Luxemburg', 'Ray  Charles', 'Forrest Gump', 'Diego Maradona', 'Killer Bonnie'];

//MILESTONE 1: Stampare le informazioni su DOM come card.
const containerEl = document.querySelector('.container');

for (let i = 0; i < team.length; i++) {

    const cardEl = generateCardEl(team[i]);
    containerEl.appendChild(cardEl);  
}

/**
 * Generate card element and associated offcanvas element
 * Generate 7 DOM elements and return them as cardEl
 * @param {string} name Insert a name into the card
 * @param {string} aboutYou 
 * @returns object
 */
function generateCardEl(name, aboutYou) {
    //generate card element
    const offCanvasName = (name[0] + name[1] + name[2]).trim();//md-5, tecniche di hash
    const cardEl = document.createElement('a');
    cardEl.classList.add('card', 'col-2', 'text-center', 'fw-bold', 'opacity', 'text-decoration-none');
    cardEl.innerText = name;
    cardEl.setAttribute('data-bs-toggle', 'offcanvas');
    cardEl.setAttribute('href', '#offcanvasMember' + offCanvasName);// non sono sicuro che sia semanticamente bello

    //generate offcanvas element in the same function
    //no template literam
    const offcanvasEl = document.createElement('div');
    offcanvasEl.classList.add('offcanvas', 'offcanvas-start');
    offcanvasEl.setAttribute('id', 'offcanvasMember' + offCanvasName);// non sono sicuro che sia semanticamente bello
    offcanvasEl.setAttribute('data-bs-backdrop', 'static');
    containerEl.appendChild(offcanvasEl);

    const offcanvasHeaderEl = document.createElement('div');
    offcanvasHeaderEl.classList.add('offcanvas-header', 'toggle_click');
    offcanvasEl.appendChild(offcanvasHeaderEl);

    const offcanvasTitleEl = document.createElement('h5');
    offcanvasTitleEl.classList.add('offcanvas-title');
    offcanvasTitleEl.innerHTML = name;
    offcanvasHeaderEl.appendChild(offcanvasTitleEl);

    const offcanvasButtonEl = document.createElement('button');
    offcanvasButtonEl.classList.add('btn-close');
    offcanvasButtonEl.setAttribute('type', 'button');
    offcanvasButtonEl.setAttribute('data-bs-dismiss', 'offcanvas');
    offcanvasHeaderEl.appendChild(offcanvasButtonEl);

    const offcanvasBodyEl = document.createElement('div');
    offcanvasBodyEl.classList.add('offcanvas-body', 'toggle_click');
    offcanvasEl.appendChild(offcanvasBodyEl);

    // define aboutYou parameter for form > textarea.value
    const offcanvasAboutYouEl = document.createElement('div');
    
    if (!aboutYou) {
        offcanvasAboutYouEl.innerText = 'This is Team-member is a real legend. No words need to be spoken';
    
    } else {
        offcanvasAboutYouEl.innerText = aboutYou;
        console.log(offcanvasAboutYouEl.innerText);
    }
    
    offcanvasBodyEl.appendChild(offcanvasAboutYouEl);

    //MILESTONE 3: Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.

    cardEl.addEventListener('click', function(e){  
        this.classList.toggle('toggle_click');
    })
    // back to standard as one closes the offcanvas
    offcanvasButtonEl.addEventListener('click', function(){
        cardEl.classList.remove('toggle_click'); 
    })
    return cardEl //
}




// BONUS 2: Inserire un form per l’aggiunta di un elemento alla lista.

document.getElementById('addMember').addEventListener('submit', function(e){
    e.preventDefault();

    const newMemberName = document.getElementById('newMemberName').value;
    const newMemberLastName = document.getElementById('newMemberLastName').value;
    const aboutMember = document.getElementById('aboutMember').value;
    console.log(aboutMember);
   
    if (newMemberName == '' || aboutMember == '') {
        alert('🛑" *Name " and " *About you " are mandatory 🛑');
    } else {
        const newMember = (`${newMemberName} ${newMemberLastName}`);
        console.log(newMember);
        const cardEl = generateCardEl(newMember, aboutMember);
        containerEl.appendChild(cardEl);
    }

    // empty the form after adding new member
    document.getElementById('newMemberName').value = '';
    document.getElementById('newMemberLastName').value = '';
    document.getElementById('aboutMember').value = '';
})


