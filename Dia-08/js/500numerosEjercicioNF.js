

const inputs=10

let numeros=[]

let numerosBajos=[]

let numerosAltos=[]

for (let i = 0; i < inputs; i++) {

    let numero = parseInt(prompt("Ingrese el primer numero: "));

    while(isNaN(numero) || !(numero<=500) || !(numero<=1)) {

        numero = prompt("Ingrese el primer numero: ");
    }

    numeros.push(numero)

        if(numeros[i]<=250){
            numerosBajos.push(numeros[i])
        }else
        (numerosAltos.push(numeros[i]))

}


console.log(numeros);
console.log(numerosBajos);
console.log(numerosAltos);