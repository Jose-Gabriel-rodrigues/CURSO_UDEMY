function ChegadoImagen(l, a ){
    if (l > a) { console.log(` com essa resolucao é paisagem ${a}x${l}`) }
    else { console.log(`resolucao não é paisagem  ${a}x${l}`) } 
}


function ChegadoImagen1(l, a ){
    return l > a ? true : false;
}

ChegadoImagen(1980,1920)
console.log(ChegadoImagen1(1980,1920));