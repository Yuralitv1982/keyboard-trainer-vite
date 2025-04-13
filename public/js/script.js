// script.js

// Импортируем функцию getJoke из файла api.js для получения шуток из API
import { getJoke } from './api.js';

// Импортируем функцию changeBackgroundImageWithFade из файла ui.js для смены фоновых изображений
import { changeBackgroundImageWithFade } from './ui.js';

// Вызываем функцию getJoke для получения шутки и отображения её в targetTextElement.
getJoke();

// Получаем ссылку на элемент input, в котором пользователь вводит текст.
const userInput = document.getElementById('user-input');

// Получаем ссылку на элемент p, в котором отображается целевой текст.
const targetTextElement = document.getElementById('target-text');

// Переменная для хранения введенного пользователем текста.
let typedText = '';

// Переменная для хранения целевого текста.
let targetText = '';

// Добавляем обработчик события input к элементу userInput.
// Событие input срабатывает каждый раз, когда пользователь вводит или удаляет символ.
userInput.addEventListener('input', () => {
   // Обновляем переменную typedText значением из поля ввода.
   typedText = userInput.value;

   // Обновляем переменную targetText значением из целевого текста.
   targetText = targetTextElement.textContent;

   // Вызываем функцию highlightText для выделения правильных и неправильных символов.
   highlightText();
});

// Функция для выделения правильных и неправильных символов в целевом тексте.
function highlightText() {
   // Переменная для хранения выделенного текста.
   let highlightedText = '';

   // Цикл для перебора каждого символа в целевом тексте.
   for (let i = 0; i < targetText.length; i++) {
      // Проверяем, если текущий символ находится в пределах введенного текста.
      if (i < typedText.length) {
         // Проверяем, совпадает ли текущий символ введенного текста с текущим символом целевого текста.
         if (typedText[i] === targetText[i]) {
            // Если символы совпадают, добавляем символ в выделенный текст с классом correct.
            highlightedText += `<span class="correct">${targetText[i]}</span>`;
         } else {
            // Если символы не совпадают, добавляем символ в выделенный текст с классом incorrect.
            highlightedText += `<span class="incorrect">${targetText[i]}</span>`;
         }
      } else {
         // Если текущий символ находится за пределами введенного текста, добавляем символ в выделенный текст без выделения.
         highlightedText += targetText[i];
      }
   }

   // Устанавливаем выделенный текст в элемент targetTextElement.
   targetTextElement.innerHTML = highlightedText;
}

// Вызываем функцию changeBackgroundImageWithFade для смены фонового изображения при загрузке страницы.
changeBackgroundImageWithFade();
