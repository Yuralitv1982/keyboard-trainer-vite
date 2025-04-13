console.log('hello');
// script.js
// import { generateText } from './api.js';
// import { loadLesson } from './lesson.js';

const userInputElement = document.getElementById('user-input');
userInputElement.addEventListener('input', handleInput);

async function getLessonFiles() {
   // Получение списка файлов уроков
}

async function getLessonText(lessonFileName) {
   // Загрузка текста урока
}

async function getApiText() {
   // Получение шутки от API
}

async function getRandomText() {
   // Генерация случайных слов
}

async function loadText() {
   try {
      // Загрузка текста
   } catch (error) {
      // Отображение ошибки
   }
}
