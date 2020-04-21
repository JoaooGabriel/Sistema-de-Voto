function buttonOver() {
    let button = document.querySelector('#confirm');

    button.style.cursor = 'pointer';
};

function currentAge(birthYear, birthMounth, birthDay) {
    var day = new Date;

    console.log(birthYear);
    console.log(birthDay);
    console.log(birthMounth);
    
    let currentDay = day.getDate();
    let currentMounth = day.getMonth();
    let currentYear = day.getFullYear();
    console.log(currentDay);
    console.log(currentMounth);
    console.log(currentYear);
    // var birthDay = birthDay;
    // var birthMounth = birthMounth;
    // var birthYear = birthYear;
    
    var current_age = currentYear - birthYear;

    if (currentMounth < birthMounth || currentMounth == birthMounth && currentDay < birthDay) {
        current_age--;
    };

    return current_age < 0 ? 0 : current_age;
}

function maiorIdade() {

    var birth = document.querySelector('.pais');

    var age = birth.value;
    var array =  age.split('-');
    alert(currentAge(array[0], array[1], array[2]));
};