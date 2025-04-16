// Pegando o campo de visor da calculadora (input)
const display = document.getElementById('display');

// Adiciona um valor ao display (numeros e operadores)
function userInput(value) {
  display.value += value;
}

// Limpa todo o conteudo do display (botão "C")
function cls() {
  display.value = '';
}

// Limpa apenas o ultimo numero digitado (botão "CE")
function clearEntry() {
  // Divide o conteúdo em partes sempre que encontrar um operador
  const tokens = display.value.split(/[\+\-\*\/]/);
  // Pega a última parte (último número digitado)
  const last = tokens[tokens.length - 1];
  // Remove apenas o último número do display
  display.value = display.value.slice(0, -last.length);
}

// Apaga o último caractere digitado (botão "<<")
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Calcula a expressão que está no display (botão "=")
function equals() {
  try {
    // Usa eval para calcular expressões matemáticas (ex: 2+2)
    display.value = eval(display.value);
  } catch {
    // Se der erro na expressão, exibe "Erro"
    display.value = 'Erro';
  }
}

// Inverte o sinal do número atual (botão "±")
function toggleSign() {
  if (display.value) {
    try {
      // Avalia o número e multiplica por -1 para inverter o sinal
      display.value = eval(display.value) * -1;
    } catch {
      display.value = 'Erro';
    }
  }
}

// Converte o número atual para binário (botão "BIN")
function convertToBinary() {
  const number = parseFloat(display.value); // Converte texto em número
  if (!isNaN(number)) {
    display.value = number.toString(2); // Converte para base binária (2)
  } else {
    display.value = 'Erro'; // Se não for número, exibe erro
  }
}

// Converte o número atual para hexadecimal (botão "HEX")
function convertToHexadecimal() {
  const number = parseFloat(display.value); // Converte texto em número
  if (!isNaN(number)) {
    display.value = number.toString(16).toUpperCase(); // Base 16 com letras maiúsculas
  } else {
    display.value = 'Erro'; // Se não for número, exibe erro
  }
}