import { getJoke } from './api.js';

getJoke();

const userInput = document.getElementById('user-input');
const targetTextElement = document.getElementById('target-text');

let typedText = '';
let targetText = '';

userInput.addEventListener('input', () => {
   typedText = userInput.value;
   targetText = targetTextElement.textContent;

   highlightText();
});

function highlightText() {
   let highlightedText = '';
   for (let i = 0; i < targetText.length; i++) {
      if (i < typedText.length) {
         if (typedText[i] === targetText[i]) {
            highlightedText += `<span class="correct">${targetText[i]}</span>`;
         } else {
            highlightedText += `<span class="incorrect">${targetText[i]}</span>`;
         }
      } else {
         highlightedText += targetText[i];
      }
   }
   targetTextElement.innerHTML = highlightedText;
}
