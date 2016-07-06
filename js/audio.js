// Variable de audio de fondo
var audio = new Audio("sounds/Zero Aleatorio_ Musica en 8-bit.mp3");
audio.volume = 1;

// Variable de audio de salto
var salto = new Audio("sounds/salto.mp3");

// Función para silenciar el juego
function silenciar(){
    if(audio.volume == 1){
        audio.volume = 0;
    }
    else{
        audio.volume = 1;
    }
}