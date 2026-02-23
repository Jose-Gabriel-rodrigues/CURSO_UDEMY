const paragrafos = document.querySelector('paragrafos');
const p1 = document.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;
console.log(backgroundColorBody)

for (let p of p1){
  p.style.backgroundColor =backgroundColorBody;
  p.style.color = "#ffffff";
}
