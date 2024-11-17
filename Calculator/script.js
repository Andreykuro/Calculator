function appendToInput(value) {
  const calcInput = document.getElementById('calcInput');
  calcInput.value += value;
}

function calculateResult() {
  const calcInput = document.getElementById('calcInput');
  try {
    calcInput.value = eval(calcInput.value);
  } catch (error) {
    calcInput.value = 'Error';
  }
}

function clearInput() {
  const calcInput = document.getElementById('calcInput');
  calcInput.value = '';
}
