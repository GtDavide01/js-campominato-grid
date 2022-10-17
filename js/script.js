// **Consegna**
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// **Bonus**
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// **Consigli del giorno:**  :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.


//recupero il bottone in html
const btnPlay = document.getElementById("play");
console.log(btnPlay);
//recupero il wrapper che contiene la griglia di gioco 
const wrapperGame = document.querySelector(".wrapperbox");
console.log(wrapperGame);
//recupero row che conterra il numero di caselle di gioco
const rowGame = document.querySelector(".row");
console.log(rowGame);
//recupero i box della griglia 
const boxGame = document.querySelectorAll(".box");
console.log(boxGame);
//quando clicco il bottone compare la griglia
btnPlay.addEventListener("click" , function(){
    wrapperGame.classList.remove("none");
    wrapperGame.classList.add("active");
    //variabile contenente numero di caselle per gioco 
    const gameBoxes = 100;
    //creo array che conterra le 100 caselle
    const arrayGame = [];
    while(arrayGame.length < gameBoxes){
        //variabile con numeri random 
        const rndNumberArray = randomNuber(1, gameBoxes);
        //Se l'array  non include il numero allora pusho altrimenti continua con la generazione di numeri 
        if (!arrayGame.includes(rndNumberArray)){
            arrayGame.push(rndNumberArray);
        }
    }
    console.log(arrayGame);
    //per ogni elemento dell'array creo una classe box 
    for ( let i=0 ; i<arrayGame.length ; i++ ){
        //creo elemento div 
        const addBox = document.createElement("div");
        //lo collego alla row
        rowGame.append(addBox);
        //aggiungo la classe css box
        addBox.classList.add("box");
        //per ogni elemento stampo anche il numeor 
        addBox.innerHTML = arrayGame[i];
        //se clicclo sulla cella stampo numero della casella e la coloro di azzurro 
        addBox.addEventListener("click",function(){
            console.log(arrayGame[i]);
            addBox.classList.add("color");
        })
    }
    })












//FUNZIONI 
//funzione per generare numeri random 
function randomNuber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}