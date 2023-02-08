

const sumar = function suma(n1, n2){ return n1 + n2; }
    console.log(sumar(3,4));
    
    //console.log(suma(3,4)); -> Error suma no es accesible por sí misma, sin usar la constante sumar
    var restar = function(n1, n2){ return n1 - n2; } //Con una función anónima, sin nombre
    console.log(restar(3,4));




(function(n1,n2){
    console.log(n1+n2); 
})(1,2);






  // Función tradicional
  function suma100_1(a){
    return a + 100;
}
console.log(suma100_1(3));
// Opciones de sintaxis

//1
(a) => {
    return a + 100;
}

//2
(a) => a + 100;

//3
a => a + 100;

const suma100_2 = (a) => a + 100;
console.log(suma100_2(4));