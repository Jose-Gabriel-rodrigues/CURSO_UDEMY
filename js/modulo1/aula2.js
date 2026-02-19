let data = new Date();
const ano = data.getFullYear();
const nome = "jose gabriel";
const sobreNome = "Rodrigues";
const idade = 21;
const peso = 85;
const altura = 1.85;
let imc = peso/(altura * altura );
let dataNacimento = ano - idade -1  ;
console.log(`${nome} ${sobreNome} tem ${idade} anos, peso ${peso} kg tem ${altura} de altura  e seu IMC é ${imc} \n${nome} naceu em ${dataNacimento}`);
 