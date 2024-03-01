const form = document.getElementById('auth_form');

// Обработчик события отправки формы
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const formData = {}; // Объект для хранения данных формы

    // Проходимся по всем элементам формы
    form.querySelectorAll('input').forEach(input => {
        const name = input.name;
        const value = input.value;

        // Добавляем данные в объект formData
        if (name) {
            formData[name] = value;
        }
    });

    let user = JSON.parse(localStorage.getItem("user")); //Преобразовываем данные из localStorage в объект

    if(user.login == formData.login && user.password == formData.password) //Проверяем данные из формы с данными из localStorage
    {
        alert('Вход');
    }
    else //В случае несоотвествия данных из формы с данными из localStorage
    {
        fetch('../database/accounts.json') //Вытаскиваем данные из файла accounts.json
        .then(response => response.json())
        .then(user => {
            for(let i = 0; i < user.length; i++){
            if(formData.login == user[i].login && formData.password == user[i].password) {
                alert('Победа');
                return;
            }
        } //Пробегаемся циклом по данным файла accounts.json
        alert('Неверный логин или пароль!'); //При полном несоотвествии
        })
    }
});