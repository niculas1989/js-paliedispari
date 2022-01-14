console.log('JS OK');
/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const userWord = document.getElementById('word');
const buttonGenerate = document.getElementById('generate');
const resultElement = document.getElementById('result');
const resultContrElement = document.getElementById('result-contr');



// //! Creazione funzione per "girare" la frase





function reverseWord(word) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word.charAt(i);
    }
    return reversedWord;
}

let reWord = reverseWord(userWord.value);

buttonGenerate.addEventListener('click', function () {
    resultElement.innerText = `La tua parola è: ${userWord.value}`;
    let reWord = reverseWord(userWord.value);
    resultContrElement.innerText = `La tua parola al contrario è: ${reWord}`;
})