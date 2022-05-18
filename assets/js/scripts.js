
function elegirPalabra(){
    let palabraElegida = Math.floor(Math.random()*palabraSecreta.length - 0) + 0;  
    return palabraElegida;
}

function dibujarPrincipal() {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
    /// dibujar cara
    if(errores == 1){
      ctx.beginPath();
      ctx.arc(200,40,10,0,Math.PI*2,true); // Círculo externo
      ctx.stroke();
      
    }if(errores == 2){
    //cuerpo

        ctx.beginPath();
        ctx.moveTo(200,50)
        ctx.lineTo(200, 90)
        ctx.stroke();
    }if(errores == 3){
        //brazos der
        ctx.beginPath();
        ctx.moveTo(200,50)
        ctx.lineTo(180, 80)
        ctx.stroke();
    }if(errores == 4){
        //brazos izq
        ctx.beginPath();
        ctx.moveTo(200,50)
        ctx.lineTo(220, 80)
        ctx.stroke();
    }if(errores == 5){
            // patas izq
        ctx.beginPath();
        ctx.moveTo(200,90)
        ctx.lineTo(170, 120)
        ctx.stroke();
    }if(errores == 6){
        // patas izq
        ctx.beginPath();
        ctx.moveTo(200,90)
        ctx.lineTo(230, 120)
        ctx.stroke();
    }
  
    
    }
}
  



