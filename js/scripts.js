
let celciusForm = document.getElementById('tempCelcius')
celciusForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const display = document.querySelector('.celcius')
  let userInput = document.getElementById('farenheit')
  display.innerHTML = celcius(userInput.value) + " Degrees Celcius"
})

function celcius(farenheit) {
  let celsius = (farenheit - 32) * 5/9;
  return parseInt(celsius);
}
