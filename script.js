let display = document.getElementById('display');

function addToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}


function changeColor(color) {
  const buttons = document.querySelectorAll('.keys button');
  const display = document.getElementById('display');
  const calculator = document.querySelector('.calculator');

  buttons.forEach(button => {
    button.style.backgroundColor = color;
    button.style.color = '#333'; // Cambiamos el color del texto para que sea visible en el botón
  });
  display.style.backgroundColor = '#444'; // Cambiamos el color de fondo del display
  display.style.color = color; // Cambiamos el color del texto del display
  calculator.style.borderColor = color; // Cambiamos el color del borde de la calculadora
}


