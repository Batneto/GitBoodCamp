var parrafos; 
function ejecutar () { 
    parrafos = document.getElementsByTagName("p"); 
    for(let i=0; i<parrafos.length; i++) { 
        let parrafo = parrafos[i].innerHTML; 
        alert (parrafo); 
    } 
} 


var parrafos = document.getElementsByTagName("p");
var primerParrafo = parrafos[0];
var enlacesPrimerP = primerParrafo.getElementsByTagName("a");


var enlacesPrimerP = document.getElementsByTagName("p")[0].getElementsByTagName("a");