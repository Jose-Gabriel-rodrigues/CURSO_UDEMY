function FizzBuzz (numero){
for (let total = 0; total < numero; total++){
    if (total % 3 === 0 && total % 5 === 0){ 
        console.log(`${total} FIZZBUZZ`) 
    } 
    else {
        if (total % 3 === 0) console.log(`${total } FIZZ`)
        else if (total % 5 === 0) console.log(`${total} BUZZ`)
        else console.log(total,total) 
        }
    }
}
FizzBuzz(100)
