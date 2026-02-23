const num1= Number(prompt("Digite um numero"));
const numero =  window.document.getElementById("numeroTexto");
const texto =  window.document.getElementById("text");
numero.innerHTML = num1;
const arredondando =Math.floor(num1 * 100) / 100;
texto.innerHTML =(`Raiz quadrada é: ${Math.sqrt(num1)}<br>
${num1} é inteiro: ${Number.isInteger(num1)} <br>
É NAN: ${Number.isNaN(num1)}: <br>
Arredondando para cima ${Math.ceil(num1)} <br>
arredondando para baixo ${Math.floor(num1)}<br>
${num1.toFixed(2)}`);