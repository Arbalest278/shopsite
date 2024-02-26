// Находим форму по ID
const form = document.getElementById('reg_form');

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

    const jsonData = JSON.stringify(formData); // Преобразуем объект в JSON строку
    console.log('Данные из формы в формате JSON:', jsonData);
    localStorage.setItem('user', JSON.stringify(jsonData)); // Сохраняем JSON в localStorage
    window.location.href = '../authorization/authorization.html';
});
