// Metodo para establecer propiedades a objetos
function Rectangulo(x,y,width,height){
    this.x=(x==null)?0:x;
    this.x=(x==null)?0:x;
    this.y=(y==null)?0:y;
    this.width=(width==null)?0:width;
    this.height=(height==null)?this.width:height;
}

// Metodo para dibujar la imagen automaticamente
Rectangulo.prototype.dibujando=function(ctx,img,sx,sy,sw,sh){
    if(img.width)
        ctx.drawImage(img,sx,sy,sw,sh,this.x,this.y,this.width,this.height);
    else
        ctx.strokeRect(this.x,this.y,this.width,this.height);
}