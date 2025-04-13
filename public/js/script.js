const API_URL = 'https://icanhazdadjoke.com/';
const jokeTextElement = document.getElementById('target-text');

import { getJoke } from './api';

getJoke();
