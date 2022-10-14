// ESERCIZIO N 1

const btnVerifica = document.getElementById('es1_btn');
let inputUtenteHTML = document.getElementById('es1_input');
let testoES1 = document.getElementById('es1_text');

const eseguiVerifica = function(){
    const parolaInserita = inputUtenteHTML.value;
    let parolaRovesciata = parolaInserita.split('').reverse().join('');
    if(!isNaN(parolaInserita)){
        inputUtenteHTML.innerHTML = '';
        const myAlert = document.createElement('div');
        myAlert.className = 'alert alert-danger';
        myAlert.innerHTML = 'Puoi inserire solo parole!';
        testoES1.append(myAlert);
        return
    } 
    removeFirstNotification();
    if(parolaInserita === parolaRovesciata){
        testoES1.innerHTML = `${parolaInserita} è una parola palindroma!`;
    } else {
        testoES1.innerHTML = `Purtroppo ${parolaInserita} non è una parola palindroma!`;
    } 
} 
btnVerifica.addEventListener('click', eseguiVerifica);

// ESERCIZIO N 2 

const btnPlay = document.getElementById('es2_button');
const risultatoES2 = document.getElementById('es2_result');
let numbersInput = document.getElementById ('es2_input');
let mySelect = document.getElementById('es2_select');

let somma = 0;
const playGame = function(){
    
    const sceltaUtentePD = mySelect.value;
    const numeroSceltoUtente = parseInt(numbersInput.value);
    document.getElementById('user_roll').innerHTML = `Hai scelto: ${numeroSceltoUtente}`;

    const numeroRandomComputer = randomNumber(1, 5);
    document.getElementById('computer_roll').innerHTML = `Computer ha scelto: ${numeroRandomComputer}`;

    somma = numeroSceltoUtente+numeroRandomComputer;
    document.getElementById('es2_somma').innerHTML = `La somma dei lanci è: ${somma}`; 
    isEven(somma);
    //console.log(isEven(somma));
    if(sceltaUtentePD == 'pari'  && isEven(somma) == true){
        //console.log('pari:hai vinto');
        risultatoES2.innerHTML = `Pari : Hai Vinto!`
    } else if(sceltaUtentePD == 'dispari' && isEven(somma) == false){
        //console.log('dispari:hai vinto');
        risultatoES2.innerHTML = `Dispari : Hai Vinto!`
    } else {
        //console.log('hai perso');
        risultatoES2.innerHTML = `Hai Perso!`
    }
}
btnPlay.addEventListener('click', playGame);
