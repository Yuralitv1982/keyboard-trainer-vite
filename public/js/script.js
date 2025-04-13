const API_URL = 'https://icanhazdadjoke.com/';
const jokeTextElement = document.getElementById('target-text');

async function getJoke() {
   try {
      const response = await fetch(API_URL, {
         headers: {
            Accept: 'application/json',
         },
      });
      if (!response.ok) {
         throw new Error(`HTTP ошибка! статус: ${response.status}`);
      }
      const data = await response.json();
      if (data && data.joke) {
         jokeTextElement.textContent = data.joke;
      } else {
         jokeTextElement.textContent = 'Не удалось получить шутку.';
      }
   } catch (error) {
      console.error('Ошибка при получении шутки:', error);
      jokeTextElement.textContent = 'Не удалось получить шутку.';
   }
}

getJoke();
