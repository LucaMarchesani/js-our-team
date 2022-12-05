// esercizio di oggi Our Team
// nome repo js-our-team
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni nome, ruolo e foto.
// MILESTONE 0
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2
// Organizzare i singoli membri in card/schede
// Consigli del giorno
// Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!


// creo un arrey di oggetti 
const team = [
    {
        name : 'Wayne Barret',
        position : 'Founder & CEO',
        photo : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela Caroll',
        position : 'Founder & CEChief Editor',
        photo : 'angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter Gordon',
        position : 'Office Manager',
        photo : 'walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela Lopez ',
        position : 'Social Media Manager',
        photo : 'angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott Estrada',
        position : 'Developer',
        photo : 'scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara Ramos',
        position : 'Graphic Designer',
        photo : 'barbara-ramos-graphic-designer.jpg'
    }
];

// recupero il main e inserisco gli elementi di cui ho bisogno 
const main = document.querySelector('main');
const h2Element = document.createElement('h2');
const pElement = document.createElement('p');
const imgElement = document.createElement('span');//da cambiare con un tag img se arrivo al bonus..

// inserisco gli elementi nel DOM 
main.appendChild(h2Element);
main.appendChild(pElement);
main.appendChild(imgElement);

// stampo in console i membri del team con le relative informazi
for (let key in team){
    console.log(team[key]);
    h2Element.append(team[key].name);
    pElement.append(team[key].position);
    imgElement.append(team[key].photo);
}



















