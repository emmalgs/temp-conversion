
let celciusForm = document.getElementById('tempCelcius');
celciusForm.onmouseover = function() {
  celciusForm.style.backgroundColor = "pink"
}
celciusForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const celciusDisplay = document.querySelector('.celcius');
  let userInput = document.getElementById('farenheit');
  celciusDisplay.innerHTML = celcius(userInput.value) + " Degrees Celcius";
});

let farForm = document.getElementById('tempF');
farForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const farDisplay = document.querySelector('.farenheit');
  let userInput = document.getElementById('celcius');
  farDisplay.innerText = farenheit(userInput.value) + " Degrees Farenheit";
});

function celcius(farenheit) {
  let celsius = (farenheit - 32) * 5/9;
  return parseInt(celsius);
}

function farenheit(c) {
 let farenheit = (c * 9/5) + 32;
 return parseInt(farenheit);
}

let buttons = document.querySelectorAll('button')
buttons.forEach(button => button.onmouseenter = function() {
  button.style.backgroundColor = "salmon"
})
buttons.forEach(button => button.onmouseleave = function() {
  button.style.backgroundColor = "azure"
})
