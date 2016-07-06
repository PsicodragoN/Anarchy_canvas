// Creando el objeto de imagen puntos
var imgOrbe = new Image();
imgOrbe.src = "images/orbe.png"; 

// Arreglo de orbes
var orbes = new Array();

// Metiendo los orbes al arreglo
orbes.push(new Rectangulo(200,400,20,20));
orbes.push(new Rectangulo(300,310,20,20));
orbes.push(new Rectangulo(500,300,20,20));
orbes.push(new Rectangulo(600,350,20,20));

function colocaorbe(){ 
	
	// Ciclo for para dibujar los orbes
    for(var i=0;i<(orbes.length);i++){
    	// Dibujando al orbe, asignando posicion X Y y asignando tamaño
        orbes[i].dibujando(ctx,imgOrbe,0,0,50,50);
    }

}