// Import stylesheets
import './style.css';

let strr = 'asd'


function isLetter(str) {
  return /[a-z]/.test(str);
}


// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>${isLetter(strr[0])}</h1>`;

