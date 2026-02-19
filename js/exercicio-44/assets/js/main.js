function calculo () {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.texto')
    

    form.addEventListener('submit', recebeEventosForm);

        function recebeEventosForm(evento) {
            evento.preventDefault();
            const peso = Number(document.querySelector('#input-teste-1').value);
            const altura = Number(document.querySelector('#input-teste-2').value);

            if (peso >= 40 && peso <= 400 && altura <= 2.40 && altura >= 1.20 ){
                const soma  = (peso / (altura * altura)).toFixed(1);
                if(soma < 18){
                    resultado.innerHTML = (`🚨O SEU IMC "${soma}" (ABAIXO DO PESO🚨`)
                }
                if(soma > 18  && soma < 25){
                    resultado.innerHTML = (`✅O SEU IMC "${soma}" (peso NORMAl ✅)`)
                }
                if(soma >25  && soma < 30){
                    resultado.innerHTML = (`😟O SEU IMC "${soma}" (SOBRE peso 😟)`)
                }
                if(soma >30  && soma < 35){
                    resultado.innerHTML = (`⚠️O SEU IMC "${soma}" (Obesidade grau 1 ⚠️)`)
                }
                if(soma > 35  && soma < 40){
                    resultado.innerHTML = (`⚠️O SEU IMC "${soma}" (Obesidade grau 2 ⚠️)`)
                }
                if(soma > 40) {
                    resultado.innerHTML = (`🚨O SEU IMC "${soma}" (Obesidade grau 3 🚨)`)
                }

            }
            else{
                resultado.innerHTML = ('ERRO altura ou peso invalido');
            }
        }
};

calculo()

                                                            /* CODIGO DO PROFESSOR  */
                                                            
/*
// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});

function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP () {
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
 */


