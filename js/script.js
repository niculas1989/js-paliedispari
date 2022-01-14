console.log('JS OK');
/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const userWord = document.getElementById('word');
const buttonGenerate = document.getElementById('generate');
const resultElement = document.getElementById('result');


buttonGenerate.addEventListener('click', function () {
    resultElement.innerText = `La tua parola è: ${userWord.value}`;
})




