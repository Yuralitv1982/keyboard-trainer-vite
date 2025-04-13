// ui.js

// Получаем ссылку на контейнер, в котором будут отображаться фоновые изображения
const backgroundContainer = document.getElementById('background-container');

// Массив путей к изображениям
const imagePaths = ['img/bg1.jpg', 'img/bg2.jpg', 'img/bg3.jpg'];

// Индекс текущего отображаемого изображения
let currentImageIndex = 0;

// Функция для смены фонового изображения с эффектом затухания
export function changeBackgroundImageWithFade() {
   // Рассчитываем индекс следующего изображения
   const nextImageIndex = (currentImageIndex + 1) % imagePaths.length;
   // Получаем путь к следующему изображению
   const nextImagePath = imagePaths[nextImageIndex];

   // Создаем новый элемент div для следующего изображения
   const newBackgroundImage = document.createElement('div');
   // Добавляем класс для стилизации
   newBackgroundImage.classList.add('background-image');
   // Устанавливаем фоновое изображение
   newBackgroundImage.style.backgroundImage = `url('${nextImagePath}')`;

   // Добавляем новый элемент в контейнер
   backgroundContainer.appendChild(newBackgroundImage);

   // Добавляем класс 'active' с небольшой задержкой, чтобы запустить анимацию затухания
   setTimeout(() => {
      newBackgroundImage.classList.add('active');
   }, 50);

   // Получаем предыдущее активное изображение
   const oldBackgroundImage = backgroundContainer.querySelector(
      '.background-image.active'
   );
   // Если предыдущее изображение существует, удаляем его после завершения анимации
   if (oldBackgroundImage) {
      // Удаляем класс 'active', чтобы начать анимацию затухания
      oldBackgroundImage.classList.remove('active');
      // Удаляем элемент из контейнера после завершения анимации
      setTimeout(() => {
         // Проверяем, что элемент все еще находится в контейнере (на всякий случай)
         if (oldBackgroundImage.parentNode === backgroundContainer) {
            backgroundContainer.removeChild(oldBackgroundImage);
         }
      }, 3000); // 3000 мс = 3 секунды (время анимации затухания)
   }

   // Обновляем индекс текущего изображения
   currentImageIndex = nextImageIndex;
}
