// Creando el objeto de imagen personaje
var imgPersonaje = new Image();
imgPersonaje.src = "images/Idle (1).png"; 

// Variables de tamaño del personaje
var wPersonaje = 50;
var hPersonaje = 50;

// Creando el objeto de imagen puntos
var imgVida = new Image();
imgVida.src = "images/vida.png"; 

// Arreglo de enemigos
var vidas = new Array();

// Añadiendo vida del personaje
vidas.push(new Rectangulo(125,15,20,20));
vidas.push(new Rectangulo(145,15,20,20));
vidas.push(new Rectangulo(165,15,20,20));
vidas.push(new Rectangulo(185,15,20,20));
vidas.push(new Rectangulo(205,15,20,20));

// Variable para sangre
var vida = 5;

// Posicion inicial del objeto
var personajex = 0, personajey = (hcanvas - hPersonaje); 

// Variables declaradas en false personajey true para el salto
    var saltando = false;
    var siguesaltando = false;

function movimiento(){

    // Derecha
    if(presionando[derecha]){
        
        // Se va aumentando de 5 en 5 a X
        personajex += 5;

        // Validación de los limites derechos
        if(personajex > wcanvas - 50){

            // Asignando el limitador a X
            personajex = wcanvas - 50;
        }
    }

    // Izquierda
    if(presionando[izquierda]){
        
        // Se va restando de 5 en 5 a X
        personajex -= 5;

        // Validación de los limites izquierdos
        if (personajex < 0) {

            // Asignando el limitador a X
            personajex = 0;
        }
    }

    

    // Salto
    if((saltando == false && ultimatecla == arriba) || siguesaltando == true){
        
        siguesaltando = true;

        imgPersonaje.src = "images/Jump (4).png"; 

        salto.play();

        // Se va restando de 8 en 8 a Y
        personajey -= 7;

        // Validación de los limites del salto
        if(personajey < 300){

            // Asignando a la variable saltando true
            saltando = true;
            siguesaltando = false;

            // Asigando null a la ultima tecla presionada 
            ultimatecla = null;
        }

    }

    // Gravedad
    if(saltando == true){

        // Se va sumando de 8 en 8 a personajey 
        personajey += 8;
    }

    // Limite bajo
    if (personajey > hcanvas - 50) {

        imgPersonaje.src = "images/Idle (1).png"; 

        // Asignando a personajey el limite
        personajey = hcanvas - 50;

        // Asignando a la variable false
        saltando = false;
    }
}

function colocavida(){ 
    
    // Ciclo for para dibujar los enemigos
    for(var i=0;i<(vidas.length);i++){
        // Dibujando al orbe, asignando posicion X Y y asignando tamaño
        vidas[i].dibujando(ctx,imgVida,0,0,20,20);
    }

}
