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

//Elementi HTML 
//recupero select in html
const userDifficolta = document.getElementById("difficolta");
console.log(userDifficolta);
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

//quando clicco il bottone compare la griglia
btnPlay.addEventListener("click" , createElement );











//FUNZIONI
/**
 * funzione per inserire le numeri di celle all'array 
 * @param {array } //array da incrementare 
 * @param {numbercells} //numero di celle di gioco 
 * @returns {arraypieno}//elemento array con lunghezza delle numero di celle 
 */ function numberCell (array,numbercells){
    for (let i=1 ; i<=numbercells ; i++){
        array.push(i);
    }
}

/**
 * funzione per generare numeri random 
 * @param {min} //numero minimo da generare 
 * @param {max} //numero massimo da generare 
 * @returns {number}//ritorna numero random da min a max 
 */
function randomNuber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



/**
 * Funzione che stampa il numero di celle all'interno dela griglia e contiene cosa succede al click della cella
 * @param {array} //array dove inserire le celle
 * @param {choice} //scelta contenente numero di celle
 * @returns {elementbox} //stampa celle 
 */
function createSquare (array , choice){
    for ( let i=0 ; i<array.length ; i++ ){
        //creo elemento div 
        const addBox = document.createElement("div");
        //lo collego alla row
        rowGame.append(addBox);
        //aggiungo la classe css box
        addBox.classList.add("box");
        if(choice === "easy"){
            addBox.classList.add("easy");
        }else if(choice ==="medium"){
            addBox.classList.add("medium");
        }else if(choice ==="hard"){
            addBox.classList.add("hard");
        }
        //per ogni elemento stampo anche il numeor 
        addBox.innerHTML = array[i];
        //se clicclo sulla cella stampo numero della casella e la coloro di azzurro 
        addBox.addEventListener("click",function(){
            console.log(array[i]);
            addBox.classList.add("color");
        })
}
}

//funzione che determina cosa succederà quando clicco il bottone 
function createElement (){
    const userChoice = userDifficolta.value;
    console.log(userChoice);
    wrapperGame.classList.remove("none");
    wrapperGame.classList.add("active");
    rowGame.innerHTML = "";
    let gameBoxes ;
    if(userChoice === "easy"){
        gameBoxes = 100;
    }else if(userChoice ==="medium"){
        gameBoxes = 81;
    }else if(userChoice ==="hard"){
        gameBoxes = 49;
    }
    //creo array 
    const arrayGame = [];
    //richiamo funzione per determinare il numero di celle 
    const arrayGameCell = numberCell (arrayGame , gameBoxes);
    //richiamo  funzione che crea per ogni elemento dell'array creo una classe box 
    const allElement =  createSquare (arrayGame , userChoice);
}
