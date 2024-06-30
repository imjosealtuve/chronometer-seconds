/* */


/*isFinit = Verifica si el parametro tiene un valor numérico finito, en caso afirmativo retorna true, si la variable es numérica puede almacenar uno de los siguientes valores:
1. El numero propiamente dicho
2. El valor NaN
3. El valor infinito
4. El valor menos infinito*/

/* let x1 = 140;
if(isFinite(x1)){
    document.write('El valor finito es: ', x1, '<br/>');
}
else{
    document.write('El valor ', x1, ' no es finito <br/>');
}

let x2 = 10e399;

if(isFinite(x2)){
    document.write('El valor finito es: ', x2, '<br/>');
}
else{
    document.write('El valor ', x2, ' no es finito <br/>');
}
let x3 = -10e399;

if(isFinite(x2)){
    document.write('El valor finito es: ', x3, '<br/>');
}
else{
    document.write('El valor ', x3, ' no es finito <br/>');
}

let name = 'Andrea';
let x4 = 5;

if(isFinite(name)){
    document.write('El valor finito es: ', name, '<br/>');
}
else{
    document.write('El valor ', name, ' no es finito <br/>');
} */

/*Al ejercicio de dos numeros por teclado emplear parseFloat para convertirlo, mostrar un mensaje si alguno de los dos es un NaN
Luego si son valores numeros con una multiplicacion verificando si son infinitos o finitos y mostrar el resultado */

/*setTimeout: Permite pasar como primer parametro el nombre de una funcion que se ejecutara despues de una cantidad de milisegundos que le pasamos en el segundo parametro
setInterval: */


let reloj;
reloj = setInterval(procesar, 1000);
document.getElementById('btn1').addEventListener('click', presionarBoton);

function procesar(){
    let numero = parseInt(document.getElementById('cronometro').innerHTML);
    numero ++;
    document.getElementById('cronometro').innerHTML = numero;
}
function presionarBoton(){
    if(document.getElementById('btn1').value == 'Detener'){
        clearInterval(reloj);
        document.getElementById('btn1').value = 'Continuar';
    }
    else{
        reloj = setInterval(procesar, 1000);
        document.getElementById('btn1').value = 'Detener';
    }
}