
const lista = [
  { tag: 'p', sobrenome: 'silva' },
  { tag: 'div', sobrenome: 'oliveira' },
  { tag: 'section', sobrenome: 'joao' },
  { tag: 'footer', sobrenome: 'pedro' }
];

function criaP(item) {
     return document.createElement(item.tag);

}


function repeticao(lista) {
  const resultado = document.querySelector('.respota');
  resultado.innerHTML='esse foi o resultado ';

  for (let n = 0; n < lista.length; n++) {

    const teg = criaP(lista[n]);
    teg.innerText = lista[n].sobrenome;
    resultado.appendChild(teg);
  }   
}

repeticao(lista);