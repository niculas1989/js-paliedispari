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
const palindr = document.getElementById('palindr');



// //! Creazione funzione per "girare" la frase

function reverseWord(word) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word.charAt(i);
    }
    return reversedWord;
}

//! Generiamo la frase e la confrontiamo dopo che l'utente clicca il "button"

buttonGenerate.addEventListener('click', function () {
    let originalWord = userWord.value;
    resultElement.innerText = `La tua parola è: ${originalWord}`;
    let reWord = reverseWord(originalWord);
    resultContrElement.innerText = `La tua parola al contrario è: ${reWord}`;

    //! Poniamo la condizione: se è uguale o meno
    if (originalWord === reWord) {
        palindr.innerText = 'La parola è palidroma';
    } else {
        palindr.innerText = 'La parola non è palidroma!';
    }
})

