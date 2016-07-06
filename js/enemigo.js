// Creando el objeto de imagen puntos
var imgEnemigo = new Image();
imgEnemigo.src = "images/enemigo.png"; 

// Arreglo de enemigos
var enemigos = new Array();

// Metiendo los enemigos al arreglo
enemigos.push(new Rectangulo(500,450,50,50));
enemigos.push(new Rectangulo(200,450,50,50));

function colocaenemigo(){ 
	
	// Ciclo for para dibujar los enemigos
    for(var i=0;i<(enemigos.length);i++){
    	// Dibujando al orbe, asignando posicion X Y y asignando tamaño
        enemigos[i].dibujando(ctx,imgEnemigo,0,0,50,50);
        //ctx.drawImage(imgEnemigo,550,450,50,50)
    }

}

