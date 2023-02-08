// Número de enlaces de la página
// Dirección a la que enlaza el penúltimo enlace
// Numero de enlaces que enlazan a http://prueba
// Número de enlaces del tercer párrafo
// AYUDA: Si queremos acceder al contenido de un atributo de un nodo elemento es suficiente con usar nodo.atributo (ej: p.id accede al contenido del id del nodo almacenado en p)


var numeros=[1,2,3,3,4,5]
console.log(numeros.length);


var enlaces = document.getElementsByTagName("a");

console.log(enlaces);

console.log(enlaces[1]);


console.log(enlaces.length);

