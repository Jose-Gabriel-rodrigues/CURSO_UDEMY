const data= new Date();

 function resultado (){

  const ano = data.getFullYear();
  const diames = data.getDate();
  const hora = data.getHours().toString().padStart(2, '0');
  const minutos = data.getMinutes().toString().padStart(2, '0');
  const conteiner = document.querySelector('.respota');

  conteiner.innerHTML = ''
  conteiner.innerHTML= (`${verDia()}, ${diames} ${verMes()} de ${ano} ${hora}:${minutos} `)
 }

function verDia() {
  const diaSemana = data.getDay(); //feito
  switch (diaSemana){
    case 0: return 'domingo'
    case 1: return 'segunda-feira'
    case 2: return 'terça-feira'
    case 3: return 'quarta-feira'
    case 4: return 'quinta-feira'
    case 5: return 'sexta-feira'
    case 6: return 'sabado'
    
  }
};

 function verMes (){
  const mes = data.getMonth();//

    switch (mes){
    case 0: return 'janeiro'
    case 1: return 'Fevereiro'
    case 2: return 'março'
    case 3: return 'abril'
    case 4: return 'Maio'
    case 5: return 'junho '
    case 6: return 'julho'
    case 7: return 'agosto'
    case 8: return 'setembro'
    case 9: return 'outubro'
    case 10: return 'novembro'
    case 11: return 'dezembro'
  }
 }

 resultado();

