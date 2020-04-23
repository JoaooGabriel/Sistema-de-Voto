 function buttonOver() {
   let button = document.querySelector('.confirm');

   button.style.cursor = 'pointer';
};

function buttonContinue() {
    document.querySelectorAll('.escolher').style = 'display: block';;
    // btnecolhe.style = 'display: block';
    // console.log(btnecolhe);
    document.querySelector('.escolher1').style = 'display: block';
};

function appearUrna() {
    document.querySelector('.aparecer').style = 'display: block';
    document.querySelector('.aparecer1').style = 'display: block';
    document.querySelector('.aparecer2').style = 'display: block';
    // document.querySelector('.older').classList.toggle('.aparecer');
};

//  function apperTela() {
//      let displayUrna = document.querySelector('.tela').innerHTML;
//      let addNumber = document.querySelector('.teclado');
//      switch(displayUrna) {
//          case '1':
//          case '2':
//          case '3':
//          case '4':
//          case '5':
//          case '6':
//          case '7':
//          case '8':
//          case '9':
//          case '0':
//              document.write(addNumber());
//          break;
//          case 'confirma':
//              document.querySelector('.finaly').style = 'display: block';
//              console.log();
//          break;
//          case 'corrige':

//          break;
//          case 'branco':
//              displayUrna.write('Voto em branco, confirma');
//          break;

//          default:
//              alert('Erro.');
//          break;
//      };
//  };

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
    let currentMounth = day.getMonth();
    let currentYear = day.getFullYear();
    // console.log(currentDay);
    // console.log(currentMounth);
    // console.log(currentYear);
    
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
        document.getElementById('older').style = 'display: block';
     };

    return current_age < 0 ? 0 : current_age;
};

function maiorIdade() {

    var birth = document.querySelector('.pais');

    var age = birth.value;
    var array =  age.split('-');
    console.log(currentAge(array[0], array[1], array[2]));

    document.querySelector('#birth').style = 'display: none';
};