function showMessage(message) {
  console.log(message);
}


function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

const selector = document.querySelector(".content")

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) 
        {
        element.style.display = element.style.display === "none" ? "" : "none";
    }
}

function updateH1WithUTM() {
  const urlParams = new URLSearchParams(window.location.search);
  const utmTerm = urlParams.get("utm_term");
  const h1Element = document.querySelector("header");

  if (h1Element) {
    if (utmTerm) {
      h1Element.textContent = utmTerm;
    } else {
      console.log("utm_term отсутствует в URL. Текст H1 остаётся по умолчанию.");
    }
  } else {
    console.warn("H1 элемент не найден на странице.");
  }
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = "#151515";
}

showMessage("скрипт загружен!!");

document.addEventListener("DOMContentLoaded", () => {
  // Вызов changeBackgroundColor после загрузки страницы
  resetBackgroundColor();
  changeBackgroundColor("#252525");

  // Вызов toggleVisibility для элемента с классом .content
  toggleVisibility(".content");
});


function logCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  console.log(`${hours}:${minutes}:${seconds}`);
}
logCurrentTime();




// 13

function addH1ClickHandler() {
  const h1Element = document.getElementById("header");
  if(h1Element){
      h1Element.addEventListener("click", () => {
      alert("Вы кликнули на заголовок - так держать!");
    });
  }
  
}

addH1ClickHandler();

const secondSemesterPractices = [
      "Базовое бэкенд-приложение",
      "HTTP-запросы",
      "JSON и работа с ним",
      "HTTP-ответы",
      "Проектирование API",
      "Роутинг и его настройка",
      "NoSQL базы данных",
      "Обеспечение авторизации и доступа пользователей",
      "Работа сторонних сервисов уведомления и авторизации",
      "Основы ReactJS",
      "Работа с компонентами динамической DOM",
      "Использование хуков в React",
      "Основы микросервисной архитектуры",
      "Разработка классических модулей веб-приложений",
      "Разработка классических модулей веб-приложений"
    ];

const image = document.getElementById("imgbox");
if(image){
image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.1)';
})

image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
})

image.addEventListener('click', () => {
    image.style.transform = 'scale(0.8)';
})

image.addEventListener('dblclick', () => {
    alert("я не буду ещё её скейлить.");
})
}


document.getElementById("change-semester").addEventListener("click", () => {
    const tableBody = document.querySelector("#practices-table tbody");
    tableBody.innerHTML = ""; // Очистить текущие строки
    console.log("asd");
    // Заполнить таблицу новыми темами
    secondSemesterPractices.forEach((topic, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${topic}</td>
        <td><input type="checkbox"></td>
        <td><input type="checkbox"></td>
    `;
    tableBody.appendChild(row);
    });
});

