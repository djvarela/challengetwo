const btnJuegoNuevo = document.getElementById("nuevo-juego")

function selector( str ){
    return document.getElementById( str );
}

function selectorPalabra( nmin, nmax ){
    const valores = nmax - nmin; 
    const palabraAleatoria = Math.floor( Math.random( ) * valores ) + nmin; 
    return palabraAleatoria;
}



function dibujarHorca(errores) {
    var pincel = canvas.getContext("2d");
    
    switch(errores){
        case 1:{
         /// dibujar cara
        pincel.beginPath();
        pincel.arc(200,40,10,0,Math.PI*2,true); 
        pincel.stroke();
        break;}
    case 2:{
    //cuerpo
        pincel.beginPath();
        pincel.moveTo(200,50)
        pincel.lineTo(200, 90)
        pincel.stroke();
    break;}
    case 3:{
    //brazos der
        pincel.beginPath();
        pincel.moveTo(200,50)
        pincel.lineTo(180, 80)
        pincel.stroke();
    break;}
    case 4:{
    //brazos izq
        pincel.beginPath();
        pincel.moveTo(200,50)
        pincel.lineTo(220, 80)
        pincel.stroke();
    break;}
    case 5:{
    // patas izq
        pincel.beginPath();
        pincel.moveTo(200,90)
        pincel.lineTo(170, 120)
        pincel.stroke();
    break;}
    case 6:{
    // patas izq
        pincel.beginPath();
        pincel.moveTo(200,90)
        pincel.lineTo(230, 120)
        pincel.stroke();
    break;}
   
    }
    
}

function dibujar(){


    errores = 0;
    aciertos = 0;
          
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
    var pincel = canvas.getContext("2d");
    pincel.strokeStyle = "slateblue";
    pincel.lineWidth = 1.5;
    pincel.beginPath();
    pincel.moveTo(100,10); 
    pincel.lineTo(100,400);
    pincel.moveTo(100,11);
    pincel.lineTo(201,11);
    pincel.moveTo(200,10); 
    pincel.lineTo(200,30);     
    pincel.stroke();
        }
     
     
}

function desistir(){
    location.reload();
}

function nuevojuego(){
    var pincel = canvas.getContext("2d");
    pincel.clearRect(0, 0, pincel.canvas.clientWidth, pincel.canvas.clientHeight);
  
    errores=0;
    aciertos = 0;
    acerto = false;
    letraErradas= [];
    iniciar();
    dibujarHorca(errores)
    selector("resultado").innerHTML =""
}


function agregarPalabra(){
    nuevaPalabra.style.display="";
    btnJugar.style.display="none"
    btnAgregarPalabra.style.display="none"
    textAgregarPalabra.style.display="";
}

function guardarPalabraNueva(){
    let palabraNueva= textAgregarPalabra.value;
    if(palabraNueva == ""){
        alert("debe ingresar una palabra")
    } else{
        palabras.push(palabraNueva)
        console.log(palabras)
    }
    nuevaPalabra.style.display="none"
    nuevojuego()
}


btnJuegoNuevo.onclick=nuevojuego