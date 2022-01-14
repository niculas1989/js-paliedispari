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
const humanEvenOrOddChoice = document.getElementById('human-choice');
const winner = document.getElementById('winner');
const even = document.querySelector('.even');
const odd = document.querySelector('.odd');

//! Creazione della funzione per creare il numero del PC
function getRandomNumber(min, max) {
    max++;
    return Math.floor(Math.random() * (max - min)) + min;
}

let pcRandomNumber = parseInt((getRandomNumber(1, 5)));

//! Creazione della funzione per capire se un numero è pari o dispari

function isEven(num) {
    let even = false;
    if (num % 2 === 0) {
        even = true;
    }
    return even;
}

console.log(isEven(3));

//! Connessione dell'evento "click" a qualcosa di tangibile

buttonGenerate.addEventListener('click', function () {
    let humanChoice = parseInt(number.value);
    let evenOddChoice = evenOrOdd.value;

    resultElement.innerText = `L'utente ha scelto: ${humanChoice}`;
    resultPcNumberElement.innerText = `Il computer ha scelto: ${pcRandomNumber}`;
    humanEvenOrOddChoice.innerText = `L'utente ha scelto: ${evenOddChoice}`;

    //! Aggiungiamo la somma dei due numeri
    const sum = humanChoice + pcRandomNumber;
    const finalResult = document.getElementById('final-result');
    finalResult.innerHTML = `La somma tra i due numeri è: <strong>${sum}</strong>`;






})

