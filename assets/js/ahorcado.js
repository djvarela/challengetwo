
const btnDesistir = document.getElementById("btn-desistir")
const botonNuevoJuego = document.querySelector("#btn-nuevoJ")
const btnIniciar =document.getElementById("btn-iniciar");
const btnAgregar = document.getElementById("btn-agregar")


// let resultado= document.querySelector("#resultado");
let estado = document.getElementById("ganaPierde");
let areaJuego = document.querySelector(".areaJuego");
const input = document.getElementById("ingresarLetra");

let palabraSecreta=["perrito", "gatito", "ocelote", "aguila"];
let palabraPropuesta="";
let letraIngresada="";
let errores = 0;
let aciertos = 0;
let almacenandoLetras=[];
let almacenandoL="";
let letraErradas= [];
areaJuego.style.display ="none"; ///activar al final
btnAgregar.style.display ="none";


function jugar(){
  input.focus()

input.addEventListener("keydown", (event)=>{
 
    let letraIngresada = event.key
   if((letraIngresada < 'A') ||(letraIngresada > 'Z')) {

    function verificar(letraIngresada){
      const spans = document.querySelectorAll(".lineas span")
      // let letraIngresada= document.getElementById("ingresarLetra").value;
      let esta = false;
      let caracteres = "";
  
      for(let i = 0; i < palabraPropuesta.length; i++){
          if(letraIngresada == palabraPropuesta[i]){
              spans[i].innerHTML= letraIngresada;
              almacenandoLetras.push(letraIngresada); // esto lo esty usando para comparar letras y evitar que pongan dos veces las mismas letras
              aciertos++;
              esta = true;
                            
             }
          }

        if(esta == false){
              errores++;
             letraError(letraIngresada);
        }
          
        if(errores == 6){
          ganaPierde.style.color= "#ff0000";
          ganaPierde.innerHTML= "Fin del juego, la palabra era: " + palabraPropuesta;
          input.style.display="none";
          }else if(aciertos == palabraPropuesta.length){
          ganaPierde.innerHTML= "Usted gano";
          input.style.display="none";
      
        }
         
      // console.log("la letra " + letraIngresada+ "en la plabara "+ palabraPropuesta + "existe? "+ esta)
      // document.getElementById("ingresarLetra").value="";
      // document.getElementById("ingresarLetra").focus();
      dibujarPrincipal(errores)
      
  }
  verificar(letraIngresada)
  
  } 
  });
}


    




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
        span.setAttribute('id','spanes');
        lineas.appendChild(span);
   }

   jugar()
   btnIniciar.style.display= "none"
   
   areaJuego.style.display =""
   input.focus()
}











btnIniciar.onclick=iniciar;
botonNuevoJuego.onclick=nJuego;

btnDesistir.onclick=desistir;

// function verificar(letraIngresada){
//     const spans = document.querySelectorAll(".lineas span")
//     // let letraIngresada= document.getElementById("ingresarLetra").value;
//     let esta = false;
   

//     for(let i = 0; i < palabraPropuesta.length; i++){
//         if(letraIngresada == palabraPropuesta[i]) {
//             spans[i].innerHTML= letraIngresada;
//             aciertos++
//             esta = true;
//            }
//         }
        

//       if(esta == false) {
//             errores++;
//            letraIngresada = letraError(letraIngresada);
//         }
        
//       if(errores == 6){
//         ganaPierde.innerHTML= "Usted Perdio, la palabra era " + palabraPropuesta;
       
//         }else if(aciertos == palabraPropuesta.length){
//         ganaPierde.innerHTML= "Usted gano";
//       }
       
//     // console.log("la letra " + letraIngresada+ "en la plabara "+ palabraPropuesta + "existe? "+ esta)
//     // document.getElementById("ingresarLetra").value="";
//     // document.getElementById("ingresarLetra").focus();
//     dibujarPrincipal()
// }


// function letraRepetidas(){
//   let spanes =  document.querySelectorAll(".lineas span");
//   let contenidoSpan="";
//   let sp="";    
//     for(let i = 0; i < spanes.length; i++){
//          sp;
//       contenidoSpan = sp.innerHTML;
//       }
      
      
    
// }

