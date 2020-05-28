 function buttonOver() {
   let button = document.querySelector('.confirm');
   button.style.cursor = 'pointer';
};

function buttonContinue() {
    document.querySelector('.escolher').style = 'display: block';
    document.querySelector('.escolher1').style = 'display: block';
};

function appearUrna() {
    document.querySelector('.aparecer').style = 'display: block';
    document.querySelector('.mostraImg').style = 'display: none';
};

function apperTela(element) {
    //console.log('Passou');
    console.log(element);
     let valorBotao = element.innerText;
     
     if(isNaN(valorBotao)) {
        switch(valorBotao) {
            case 'Confirma':
                document.querySelector('.finaly').style = 'display: block';
                document.querySelector('.aparecer').style = 'display: none';                
                console.log(valueVoto());
                alert('Confirma');
            break;
            case 'Corrige':
                let limpaNumero = document.getElementById('conteudoTela');
                limpaNumero.innerHTML="";
                //alert('Corrigir');
            break;
            case 'Nulo':
                escreverNaTela(valorBotao);
            break;
            default:
                alert('Erro.');
            break;
        };
    } else
        escreverNaTela(valorBotao);
 };
 
// function confirmar(){
//      alert('confirmado')
//     // document.querySelector('.finaly').style = 'display: block';
//     console.log();
// }; 

function escreverNaTela(valor) {
    //console.log('Passou')
    let displayUrnas = document.querySelectorAll('#conteudoTela');
    for (let index = 0; index < displayUrnas.length; index++) {
        const displayUrna = displayUrnas[index];
        displayUrna.insertAdjacentHTML('beforeend', `<label>${valor}</label>`);
    };
};

function buttonReturn() {
    sessionStorage.setItem('recarregou', 'treue'); //seta uma var no Storage como true
    window.location.reload(); //atualiza a page
}; //Recarrega a pagina


function currentAge(birthYear, birthMounth, birthDay) {
    var day = new Date;

    // console.log(birthYear);
    // console.log(birthDay);
    // console.log(birthMounth);
    
    let currentDay = day.getDate();
    let currentMounth = day.getMonth()+1;
    let currentYear = day.getFullYear();
    //console.log(currentDay);
    //console.log(currentMounth);
    //console.log(currentYear);
    
    var current_age = currentYear - birthYear;

    if (currentMounth < birthMounth || currentMounth == birthMounth && currentDay < birthDay) {
        current_age--;
    };

     if(current_age == 16 || current_age == 17) {
         document.getElementById('optional').style = 'display: block';
     } else if (current_age < 18) {
        document.getElementById('minor').style = 'display: block';
     } else if(current_age > 70) {
        document.getElementById('oldAll').style = 'display: block';
     } else {
        mostraCandidatos();
     };

    return current_age < 0 ? 0 : current_age;
};

function mostraCandidatos(){
    let elementosContinue = document.querySelectorAll('.optionalVote');
    //forEach vai percorrer cada elemento do elementos continue
    elementosContinue.forEach(element => {
        element.style = 'display: none';
    });
    //Mesma coisa de cima com o for
    // for (let index = 0; index < elementosContinue.length; index++) {
    //     const element = elementosContinue[index];
        
    // }
    document.getElementById('older').style = 'display: block';
};

function maiorIdade() {

    var birth = document.querySelector('.nascimento');

    var age = birth.value;
    var array =  age.split('-');
    console.log(currentAge(array[0], array[1], array[2]));

    document.querySelector('#birth').style = 'display: none';
};

function valueVoto() {
    let valueTela = document.querySelector('.tela');
    valueTela.value;
}