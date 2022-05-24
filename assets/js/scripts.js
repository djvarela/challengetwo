
function elegirPalabra(){
    let palabraElegida = Math.floor(Math.random()*palabraSecreta.length - 0) + 0;  
    return palabraElegida;
}

function dibujarPrincipal(errores) {
    var ctx = canvas.getContext('2d');
   
    switch(errores){
    case 1:{
         /// dibujar cara
        ctx.beginPath();
        ctx.arc(200,40,10,0,Math.PI*2,true); 
        ctx.stroke();
        break;}
    case 2:{
    //cuerpo
        ctx.beginPath();
        ctx.moveTo(200,50)
        ctx.lineTo(200, 90)
        ctx.stroke();
    break;}
    case 3:{
    //brazos der
        ctx.beginPath();
        ctx.moveTo(200,50)
        ctx.lineTo(180, 80)
        ctx.stroke();
    break;}
    case 4:{
    //brazos izq
        ctx.beginPath();
        ctx.moveTo(200,50)
        ctx.lineTo(220, 80)
        ctx.stroke();
    break;}
    case 5:{
    // patas izq
        ctx.beginPath();
        ctx.moveTo(200,90)
        ctx.lineTo(170, 120)
        ctx.stroke();
    break;}
    case 6:{
    // patas izq
        ctx.beginPath();
        ctx.moveTo(200,90)
        ctx.lineTo(230, 120)
        ctx.stroke();
    break;}
    default: return;
    }
    
}
  



function letraError(letraIngresada){
    
    let letraEquivocada= document.getElementById("letrasErradas")
    // let p =document.createElement("p")
  
    letraErradas.push(letraIngresada);
  
    letraEquivocada.innerHTML=letraErradas;


}






function desistir(){
    location.reload();
    areaJuego.style.display ="none";
   
  }


function nJuego(){
    esta = false
    errores = 0;
    aciertos = 0;
    jugar()
    elegirPalabra();
    input.style.display=""
}