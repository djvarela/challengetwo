
let resultado= document.querySelector("#resultado");
let botonNuevoJuego = document.querySelector("#btn-nuevoJ")
const btnDesistir = document.getElementById("btn-desistir")
let estado = document.getElementById("ganaPierde");
let palabraPropuesta="";
document.getElementById("ingresarLetra").focus()
let palabraSecreta=["perrito", "gatito", "ocelote", "aguila"];

let errores = 0;
let aciertos = 0;




function iniciar(){
    errores = 0;
    aciertos = 0;
   
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.fillStyle = "#fff"
      ctx.moveTo(100,10); 
      ctx.lineTo(100,400);
      ctx.moveTo(100,11);
      ctx.lineTo(201,11);
      ctx.moveTo(200,10); 
      ctx.lineTo(200,30);
      ctx.stroke();
    }
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




function letraError(letraIngresada){
    const letraEquivocada= document.getElementById("letras-equivocadas")
    let p =document.createElement("p")
    letraEquivocada.appendChild(p);
    p.innerHTML=letraIngresada;
    

}


function verificar(){
    const spans = document.querySelectorAll(".lineas span")
    let letraIngresada= document.getElementById("ingresarLetra").value;
    let esta = false;
   

    for(let i = 0; i < palabraPropuesta.length; i++){
        if(letraIngresada == palabraPropuesta[i]){
            spans[i].innerHTML= letraIngresada;
            aciertos++
            esta = true;
           }
        }

      if((esta == false) && (letraIngresada != palabraPropuesta)){
            errores++;
           letraIngresada = letraError(letraIngresada);
        }
        
      if(errores == 6){
        ganaPierde.innerHTML= "Usted Perdio, la palabra era " + palabraPropuesta;
       
        }else if(aciertos == palabraPropuesta.length){
        ganaPierde.innerHTML= "Usted gano";
      }
    // console.log("la letra " + letraIngresada+ "en la plabara "+ palabraPropuesta + "existe? "+ esta)
    document.getElementById("ingresarLetra").value="";
    document.getElementById("ingresarLetra").focus();
    dibujarPrincipal()
}



// function palabraIncorrecta(){
//    if (letraIngresada === letraIngresada){
//        letraEquivocada.innerHTML=letraIngresada

//    }
    
// }



// btnDesistir.addEventListener("keydown", algo)
// function algo(){
//     console.log("funca")
// }

botonNuevoJuego.onclick=verificar;
