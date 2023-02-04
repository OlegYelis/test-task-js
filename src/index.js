import { inputHandler } from './js/inputHandler';

const storageInputEl = document.getElementById('storage-input');
const transferInputEl = document.getElementById('transfer-input');
const bunnyInputEl = document.querySelector('.bunny__storage');
const scalewayInputEl = document.querySelector('.scaleway__storage');

storageInputEl.addEventListener('input', inputHandler);
transferInputEl.addEventListener('input', inputHandler);
bunnyInputEl.addEventListener('change', inputHandler);
scalewayInputEl.addEventListener('change', inputHandler);
