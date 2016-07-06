// Arreglo de las teclas presionadas
var presionando = [];

// Variables para almacenar las teclas
var izquierda = 37;
var arriba = 38;
var derecha = 39;
var abajo = 40;
var enter = 13;

// Variable declarada en false para validar la ultima tecla presionada
var ultimatecla = null;

// Tecla presionada
document.addEventListener('keydown',function(evt){
    if(!presionando[evt.keyCode])
        ultimatecla = evt.keyCode;
    presionando[evt.keyCode] = true;
},false);

// Tecla soltada
document.addEventListener('keyup',function(evt){
    presionando[evt.keyCode] = false;
},false);