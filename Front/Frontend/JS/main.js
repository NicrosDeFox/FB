const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector(".close");
const modalsuccess = document.getElementById("modalSuccess");
const modalfail = document.getElementById("modalFail");
const openModalBtn = document.querySelector(".servicebutton")


const h1 = document.getElementById("header");
h1.textContent = "Добро пожаловать на наш сайт!";
h1.style.color="#e44";

const firstParagraph = document.getElementById("firstParagraph");
firstParagraph.textContent="Это новый текст параграфа";

const fish = document.getElementById("fish");
fish.style.display="none";



const form = document.getElementById('testform');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  submitForm();
}); // предотвращает дефолтное поведение

function submitForm() {

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const comment = document.getElementById('comment').value.trim();
    
    const formData = new FormData(form); // Создаёт объект

    if(!name){
        alert("no name");
        return;
    }
    if(!comment){
        alert("no comment");
        return;
    }
    if(!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        alert("no / wrong email");
        return;
    }
    if(!phone || !phone.match(/^\d*$/)){
        alert("no / wrong phone");
        return;
    }

    formHandler.logFormData(formData);
}

const formHandler = { 
  logFormData(formData) {
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  }
};




if(closeModalBtn){
    // Закрытие модального окна при клике на кнопку закрытия
    closeModalBtn.onclick = function() {
        modal.style.display = "none"; // Скрываем модальное окно
        modalsuccess.style.display="none";
    }
}

if(openModalBtn){
    openModalBtn.onclick = function(){
    modal.style.display = "flex";
}
}




// Закрытие модального окна при клике вне области модального окна
window.onclick = function(event) {
    if (event.target == modal || event.target==modalsuccess) {
        modal.style.display = "none"; // Скрываем модальное окно
        modalsuccess.style.display ="none";
    }
}


jQuery(document).ready(function() {
    jQuery("#phone").mask("+7 (999) 999-99-99");
}); // Маски для ввода


// Загрузка списка стран из отдельного файла (чтобы не засорять основной services.html)
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById('countryDropdown');

    fetch('Assets/HTML/countries.html')
        .then(response => response.text())
        .then(data => {
            dropdown.innerHTML = data;
        })
});


// Валидация
document.getElementById("modalForm").addEventListener("submit", function(event){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var countryDropdown = document.getElementById("countryDropdown").value;
    var date = document.getElementById("date").value;

    if(name ==="" || email===""||phone===""||countryDropdown===""||date===""){
        event.preventDefault();
        modalfail.style.display = "flex";
    }
    else{
        event.preventDefault();
        modalfail.style.display = "none";
        modal.style.display="none";
        modalsuccess.style.display="flex";
    }
})



const pwd = "ass"

console.log("start!");
let name = prompt("имя?", "балбес");
console.log(name);
let age = prompt("возраст?", "292");
console.log(age);
alert(name + " " + age);
if(age < 18){
    alert("Вы несовершеннолетний!");
}
else{
    alert("Вы совершеннолетний!");
}



const min = 1;
const max = 10;
const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInt);
let guess = prompt("Угадай число");
if(guess == randomInt){
    alert("Вы угадали!!!");
}
else{
    alert("нет, число было " + randomInt);
}