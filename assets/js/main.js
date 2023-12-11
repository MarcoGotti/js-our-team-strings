
//MILESTONE 0: Creare l’array di stringhe contenente i nomi dei membri del team.
const team =['Jimmy Page', 'Jonah Lomu', 'Marilyn Monroe', 'Merlin', 'Donald Duck', 'Al Capone', 'Cruella De Vil', 'Indiana Jones', 'Rosa Luxemburg', 'Ray  Charles', 'Forrest Gump', 'Diego Maradona', 'Killer Bonnie'];

//MILESTONE 1: Stampare le informazioni su DOM come card.
const containerEl = document.querySelector('.container');

for (let i = 0; i < team.length; i++) {

    const cardEl = generateCardEl(team[i]);
    containerEl.appendChild(cardEl);
    const offcanvasEl = generateOffCanvasEl(team[i]);
    containerEl.appendChild(offcanvasEl);    
}


/**
 * Generate card element
 * Generate DOM element with classList (4) and returns  it
 * @param {string} name Insert a name into the card
 * @returns object
 */
function generateCardEl(name) {
    const offCanvasName = name[0] + name[1] + name[2];
    const cardEl = document.createElement('a');
    cardEl.classList.add('card', 'col-2', 'text-center', 'fw-bold', 'opacity', 'text-decoration-none');
    cardEl.innerText = name;
    cardEl.setAttribute('data-bs-toggle', 'offcanvas');
    cardEl.setAttribute('href', '#offcanvasMember' + offCanvasName);//

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

/**
 * Generate offcanvas element and child elements
 * @param {string} name Insert same name as in cardEl
 * @returns object
 */
function generateOffCanvasEl(name) {
    const offCanvasName = name[0] + name[1] + name[2];
    const offcanvasEl = document.createElement('div');
    offcanvasEl.classList.add('offcanvas', 'offcanvas-start');
    offcanvasEl.setAttribute('id', 'offcanvasMember' + offCanvasName);//

    const offcanvasHeaderEl = document.createElement('div');
    offcanvasHeaderEl.classList.add('offcanvas-header', 'toggle_click');
    offcanvasEl.appendChild(offcanvasHeaderEl);

    const offcanvasTitleEl = document.createElement('h5');
    offcanvasTitleEl.classList.add('offcanvas-title');
    offcanvasTitleEl.setAttribute('id', 'offcanvasName');
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

    const offcanvasAboutYouEl = document.createElement('div');
    offcanvasAboutYouEl.innerText = 'This is Team-member is a real legend. No words need to be spoken';
    offcanvasBodyEl.appendChild(offcanvasAboutYouEl);

    // back to standard as one closes the offcanvas. cardEl is undefined
    offcanvasButtonEl.addEventListener('click', function(){
        cardEl.classList.remove('toggle_click'); 
    })
    /* 
    <div class="offcanvas-header toggle_click">
              <h5 class="offcanvas-title" id="offcanvasName">Bubu</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body toggle_click">
              <div>
                Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
              </div>
              
            </div>
    */

    return offcanvasEl
}

// BONUS 2: Inserire un form per l’aggiunta di un elemento alla lista.

document.getElementById('addMember').addEventListener('submit', function(e){
    e.preventDefault();

    const newMemberName = document.getElementById('newMemberName').value;
    const newMemberLastName = document.getElementById('newMemberLastName').value;
    const aboutMember = document.getElementById('aboutMember').value;
   
   
    if (newMemberName == '' || aboutMember == '') {
        alert('🛑" *Name " and " *About you " are mandatory 🛑');
    } else {
        const newMember = (`${newMemberName} ${newMemberLastName}`);
        console.log(newMember);
        const cardEl = generateCardEl(newMember);
        containerEl.appendChild(cardEl);
    }

    // empty the form after adding new member
    document.getElementById('newMemberName').value = '';
    document.getElementById('newMemberLastName').value = '';
    document.getElementById('aboutMember').value = '';
})


