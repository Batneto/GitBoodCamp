

const inputs=10

let numeros=[]

let numerosBajos=[]

let numerosAltos=[]


for (let i = 0; i < inputs; i++) {

  do(numeros[i] = parseInt(prompt("Ingrese el primer numero: "))) 

    while(isNaN(numeros[i]) || !(numeros [i] <=500) || !(numeros [i] <=1)) 

    numeros.push(numeros[i])

        if(numeros[i]<=250){
            numerosBajos.push(numeros[i])
        }else
        (numerosAltos.push(numeros[i]))

}


console.log(numeros);
console.log(numerosBajos);
console.log(numerosAltos);