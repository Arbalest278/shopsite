const fs = require('fs');
const form = document.getElementById('form1');
form.addEventListener('submit', User);
const database = ('./accounts.json');

function User(event){
    event.preventDefault();
   
    const name = form.querySelector('[name="names"]'),
    surname = form.querySelector('[name="surname"]'),
    firstname = form.querySelector('[name="firstname"]'),
    login = form.querySelector('[name="login"]'),
    email = form.querySelector('[name="email"]'),
    password = form.querySelector('[name="password"]'),
    phone = form.querySelector('[name="phone"]');

    const data = {
        names: name.value,
        surname: surname.value,
        firstname: firstname.value,
        login: login.value,
        email: email.value,
        password: password.value,
        phone: phone.value
    };
    
    console.log(data);

    idUsers = localStorage.getItem('idUsers');
    fetch('./accounts.json')
    .then(response => response.json())
    .then(user => data);
    
};