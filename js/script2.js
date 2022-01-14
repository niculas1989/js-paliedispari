/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.
*/

const number = document.getElementById('number');
const evenOrOdd = document.getElementById('even-odd');
const buttonGenerate = document.getElementById('generate');
const resultElement = document.getElementById('result');
const resultPcNumberElement = document.getElementById('result-pc');
const winner = document.getElementById('winner');
const even = document.querySelector('.even');
const odd = document.querySelector('.odd');

let humanChoice = number.value;
//! Creazione della funzione per creare il numero del PC
function getRandomNumber(min, max) {
    max++;
    return Math.floor(Math.random() * (max - min)) + min;
}

let pcRandomNumber = (getRandomNumber(1, 5));

//! Connessione dell'evento "click" a qualcosa di tangibile

buttonGenerate.addEventListener('click', function () {
    console.log(humanChoice);
    resultElement.innerText = `L'utente ha scelto: ${humanChoice}`;
    resultPcNumberElement.innerText = `Il computer ha scelto: ${pcRandomNumber}`;



})

