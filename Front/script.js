// Получаем элементы модальных окон и кнопок
const modals = {
    modal1: document.getElementById("modal1"),
    modal2: document.getElementById("modal2"),
    modal3: document.getElementById("modal3")
};
const buttons = {
    btn1: document.getElementById("openModal1"),
    btn2: document.getElementById("openModal2"),
    btn3: document.getElementById("openModal3")
};
const closes = document.getElementsByClassName("close");

// Открытие модальных окон при нажатии на кнопки
buttons.btn1.onclick = function() {
    modals.modal1.style.display = "block";
};
buttons.btn2.onclick = function() {
    modals.modal2.style.display = "block";
};
buttons.btn3.onclick = function() {
    modals.modal3.style.display = "block";
};
//Кто прочёл - у того будет хороший день:)

// Закрытие модального окна при нажатии на "X"
for (let close of closes) {
    close.onclick = function() {
        for (let modal in modals) {
            modals[modal].style.display = "none";
        }
    };
}

// Закрытие модального окна при клике вне его области
window.onclick = function(event) {
    for (let modal in modals) {
        if (event.target === modals[modal]) {
            modals[modal].style.display = "none";
        }
    }
};

// Функция для обработки успешной отправки формы
function handleFormSubmit(formId, successMessageId) {
    document.getElementById(formId).addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы (перезагрузку страницы)
        
        // Имитация успешной отправки формы (в реальных условиях это будет AJAX-запрос)
        setTimeout(function() {
            // Скрываем форму
            document.getElementById(formId).style.display = 'none';
            
            // Отображаем сообщение об успешной отправке
            const successMessageElement = document.getElementById(successMessageId);
            successMessageElement.style.display = 'block';
            
            // Добавляем текст "Форма успешно отправлена!"
            successMessageElement.innerHTML = "<p>Форма успешно отправлена!</p>";
        }, 500); // Задержка перед отображением сообщения для эффекта
    });
}

// Добавляем обработчики для каждой формы
handleFormSubmit('contactForm1', 'successMessage1');
handleFormSubmit('contactForm2', 'successMessage2');
handleFormSubmit('contactForm3', 'successMessage3');
