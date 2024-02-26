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

    const jsonData = JSON.stringify(formData);
    const user = JSON.parse(localStorage.getItem("user"));
    console.log('Данные из формы:', jsonData);
    console.log('Данные из localStorage:', user);
    if(user.login == jsonData.login && user.password == jsonData.password)
    {
        
    }
    else
    {
        alert("Invalid password or login");
    }
});