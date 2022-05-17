
let resultado= document.querySelector("#resultado");
let botonNuevoJuego = document.querySelector("#btn-nuevoJ")
let estado = document.getElementById("ganaPierde");
let palabraPropuesta="";
document.getElementById("ingresarLetra").focus()
let palabraSecreta=["perro", "gato", "ocelote", "aguila"];

let errores = 0;
let aciertos = 0;
let esta = false;

botonNuevoJuego.onclick=verificar;


function iniciar(){
    errores = 0;
    aciertos = 0;
   
    let lineas = document.querySelector(".lineas");

    lineas.innerHTML=""
    const palabraAlAzar = elegirPalabra(0, palabraSecreta.length);
    palabraPropuesta = palabraSecreta[palabraAlAzar];
    console.log(palabraPropuesta)

   for(let i=0; i< palabraPropuesta.length; i++){
        const span = document.createElement("span");
        lineas.appendChild(span);
   }


}

iniciar()


function verificar(){
    spans = document.querySelectorAll(".lineas span")
    let letraIngresada= document.getElementById("ingresarLetra").value;

    for(let i = 0; i < palabraPropuesta.length; i++){
        if(letraIngresada == palabraPropuesta[i]){
            spans[i].innerHTML= letraIngresada
            esta = true;
            aciertos++
      
        }
     }
     if(esta == false){
        errores++;
        // console.log("errores")
     }
     if(errores == palabraPropuesta.length){
        ganaPierde.innerHTML= "Usted Perdio";
     }
    // console.log("la letra " + letraIngresada+ "en la plabara "+ palabraPropuesta + "existe? "+ esta)
    document.getElementById("ingresarLetra").value="";
    document.getElementById("ingresarLetra").focus()
}




function dibujar() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.beginPath();
    ctx.moveTo(10,50);
    ctx.lineTo(100,75);
    
    ctx.closePath();
    ctx.fill();
    }
  }

  dibujar()
