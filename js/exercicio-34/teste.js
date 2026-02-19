function meuEscopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

  form.addEventListener('submit', recebeEventosForm);


    function cadastra(nome, sobrenome, peso, altura) {
    pessoas.push({ nome, sobrenome, peso, altura });
    }
    
    function recebeEventosForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome').value;
    const sobrenome = form.querySelector('.sobrenome').value;
    const peso = form.querySelector('.peso').value;
    const altura = form.querySelector('.altura').value;

    cadastra(nome, sobrenome, peso, altura);

    resultado.innerHTML += `<p>${nome} ${sobrenome} - ${peso}kg - ${altura}m</p>`;
    }

}

meuEscopo();
