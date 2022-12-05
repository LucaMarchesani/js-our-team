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

for (key in team){
    console.log(team[key]);
}


