function buttonOver() {
    let button = document.querySelector('#confirm');

    button.style.cursor = 'pointer';
};

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
     } else if(current_age > 67) {
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
    alert(currentAge(array[0], array[1], array[2]));
};