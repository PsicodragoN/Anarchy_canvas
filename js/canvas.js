// Declaración de variables para el canvas
var ctx, canvas; 

// Variables del canvas
var ox = 0, oy = 0, wcanvas = 800, hcanvas = 500;

// Variable para puntuación
var puntuacion = 0;

var bandera = 0;

// Creando el objeto de imagen escenario
var imgMenu = new Image();
imgMenu.src = "images/menu.png";

var imgEscenario = new Image();
imgEscenario.src = "images/escenario.png";
    
// Evento escuchador
window.addEventListener('load',inicio,false);

function inicio(){

    // Asignando el canvas a la variable
    canvas = document.getElementById("canvas"); 

    // Valida si el canvas es soportado
    if (canvas && canvas.getContext) {
        
        // Asignación del contexto 2D a la variable 
        ctx = canvas.getContext("2d");  
        if (ctx) {

            // Ejecuta el audio
            audio.play();

            setInterval('inmune()', 1000 );

            // Ejecuta frames  
            redibujando();
        }
    }
    else{
        alert('Error');
    }

    // Función para dibujar personajey mover los objetos
    function dibujaMueve(ctx){

        // Dibujando al escenario, asignando posicion personajex personajey personajey asignando tamaño 
        ctx.drawImage(imgEscenario,0,0,wcanvas,hcanvas);

        // Dibujando al menu, asignando posicion personajex personajey personajey asignando tamaño 
        ctx.drawImage(imgMenu,0,0,wcanvas,hcanvas);

        // Dibujando al personaje, asignando posicion personajex personajey personajey asignando tamaño 
        ctx.drawImage(imgPersonaje,personajex,personajey,wPersonaje,hPersonaje);

        // Dibujando texto de puntuación
        ctx.font = "20px Verdana";
        ctx.fillStyle = 'white';
        ctx.fillText("Puntuación: "+puntuacion, wcanvas-300, 30);

        /*// Dibujando texto de vida
        ctx.font = "20px Verdana";
        ctx.fillStyle = 'white';
        ctx.fillText("Vida: "+vida, 200, 50);*/

        // Dibujando texto del tiempo
        ctx.font = "20px Verdana";
        ctx.fillStyle = 'white';
        ctx.fillText("Tiempo: "+bandera, wcanvas/3, 30);

        // Ejecutando las funciones 
        movimiento();
        puntaje();
        muerte();
        menu();

        document.getElementById("mensaje").placeholder='X: '+personajex+' Y:'+personajey; 
        
    }

    function redibujando(){
        requestAnimationFrame(redibujando);
        dibujaMueve(ctx);
        colocaorbe();
        colocaenemigo();
        colocavida();
    }   
}


function puntaje(){

    // Ciclo for para leer los distintos orbes
    for(var i=0;i<(orbes.length);i++){
        // Validador de puntos
        var pex = (personajex + 20);
        var pey = (personajey + 20);
        var orx = (orbes[i].x + 20);
        var ory = (orbes[i].y + 20);

        if(pex > orbes[i].x && personajex < orx && pey > orbes[i].y && personajey < ory){
            // Aumentando el puntaje
            puntuacion++;

            // Destruye el orbe
            orbes[i].x = 0;
            orbes[i].y = 0;
        }
        document.getElementById("teclas").placeholder='Var: '+orbes[i].y; 

    }
    
} 

function inmune(){
    bandera++;

    /*if(bandera > 3){
        bandera = 0;
        clearInterval(inmune());
    }*/
}

function muerte(){
    // Ciclo for para leer los distintos orbes
    for(var i=0;i<(enemigos.length);i++){
        var pex = (personajex + 50);
        var pey = (personajey + 50);
        var orxe = (enemigos[i].x + 50);
        var orye = (enemigos[i].y + 50);
        // Validador de puntos
        if(pex > enemigos[i].x && personajex < orxe && pey > enemigos[i].y && personajey < orye){
            // Aumentando el puntaje
            vida--;
            personajex -= 100;
            vidas.splice(vida);

            // Validador de muerte
            if(vidas.length == 0){
                // Alerta de muerte
                alert('Fin del juego');
            }

        }
        
    }
}

// Rescata la animación del frame
window.requestAnimationFrame=(function(){
    return window.requestAnimationFrame || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame || 
        function(llamada){window.setTimeout(llamada,17);};
})();