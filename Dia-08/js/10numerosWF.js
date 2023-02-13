

const inputs= 10
let numeros=[]



function pedirNumeros() {        
    for (let i = 0; i < inputs; i++) {
        numeros[i] = prompt("Ingrese el primer numero: ");
    } while(isNaN(numeros[i])){
        numeros[i] = prompt("Ingrese el primer numero: ");
    }
    return numeros;
}

pedirNumeros()
console.log(numeros);

