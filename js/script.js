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
        myAlert.innerHTML = 'Prima devi inserire una parola!';
        testoES1.append(myAlert);
        return 
    } 
    removeFirstNotification();
    
    if(parolaInserita === parolaRovesciata){
        testoES1.innerHTML = `<span class="black_txt fs-4">${parolaInserita}</span>  è una parola palindroma!`;
    } else {
        testoES1.innerHTML = `Purtroppo <span class="black_txt fs-4">${parolaInserita}</span> non è una parola palindroma!`;
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
    if(isNaN(numeroSceltoUtente) || numeroSceltoUtente < 1 || numeroSceltoUtente > 5){
      risultatoES2.innerHTML = '<span class="text-danger">Il numero deve essere compreso tra 1 e 5!!</span';
      document.getElementById('user_roll').innerHTML = '';
      document.getElementById('computer_roll').innerHTML = '';
      document.getElementById('es2_somma').innerHTML = ''; 
      removeFirstNotification();
      return
    }
    else {
    document.getElementById('user_roll').innerHTML = `Hai scelto: <span class="blue_txt fs-4">${numeroSceltoUtente}</span>`;
    const numeroRandomComputer = randomNumber(1, 5);
    document.getElementById('computer_roll').innerHTML = `Computer ha scelto: <span class="blue_txt fs-4">${numeroRandomComputer}</span>`;
    somma = numeroSceltoUtente+numeroRandomComputer;
    document.getElementById('es2_somma').innerHTML = `La somma dei lanci è:  <span class="pink_txt fs-4">${somma}</span>`;
    isEven(somma);
    if(sceltaUtentePD == 'pari'  && isEven(somma) == true){
        risultatoES2.innerHTML = `Pari : Hai Vinto!`
    } else if(sceltaUtentePD == 'dispari' && isEven(somma) == false){
        risultatoES2.innerHTML = `Dispari : Hai Vinto!`
    } else {
        risultatoES2.innerHTML = `Hai Perso!`
    }
    }
}
btnPlay.addEventListener('click', playGame);
