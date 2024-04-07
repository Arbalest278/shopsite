const prof = document.getElementById('prof_form');

window.onload = function(){
    let users = JSON.parse(localStorage.getItem("users"));
    let uslog = localStorage.getItem("uslog");

    if(uslog){
        if(uslog==users.login){
            prof.querySelectorAll('div').forEach(input => {
                const name = prof_form.name;
                const value = prof_form.value;
        
                // Добавляем данные в объект formData
                if (name) {
                    name = (name + " " + users[name])
                }
            });
        }
    else{
      fetch('../database/accounts.json') //Вытаскиваем данные из файла accounts.json
        .then(response => response.json())
        .then(user => {
            for(let i = 0; i < user.length; i++){
            if(uslog == user[i].login) {
              
            }
        } //Пробегаемся циклом по данным файла accounts.json
        })
    }
    }
};

