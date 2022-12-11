// Создание логина
document.querySelector('#confirmLogin').onclick = () => {
    var login = document.querySelector("#createLogin").value;
    const regexp = /\W///регулярное выражение, ищет все симваолы английского алфавита и цифры
    if(login.match(regexp))
        alert('Логин должен содержать только буквы и цифры')
    else
        console.log(login);
}

// Создание пароля
document.querySelector('#confirmPassword').onclick = () => {
    var password = document.querySelector("#createPassword").value;
    const regexpWhiteSpace = /[\s^а-я]///регулярное, ищет все, кроме букв русского алфавита

    if (password.match(regexpWhiteSpace))//match метол который производит поиск по заданной строке
        alert('пароль не должен содержать пробелы и буквы другого алфавита')
    else
        console.log(password);
}

//выбор курса
document.querySelector('#radio_1').oninput = () => {
    var course = document.querySelector('#radio_1').value;
    console.log(course);
}

//выбор возраста
document.querySelector('#ageInput').oninput = () => {
    var ageValue = document.querySelector("#ageInput").value;
    document.querySelector('span').innerHTML = ageValue;
}

// Чекбокс
document.querySelector('#submitButton').onclick =() => {
    let myCheckBox = document.querySelector('#lastCheck');

    if (!myCheckBox.checked)
        alert('Вы обязаны согласиться на обработку персональных данных')
    else
        console.log(myCheckBox.checked)
}