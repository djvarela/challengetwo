let palabraElegida;
let errores = 0; 
let aciertos = 0; 
let letraErradas= [];
const palabras = [ "MANZANA", "BROCOLI","GIRASOL", "PUERRO", "PEPINO"];
const btnJugar = selector("jugar");
const btnNuevoJuego = document.querySelector("#nuevo-juego");
const btnAgregarPalabra =document.querySelector("#agregar-palabra");
const btnDesistir = document.getElementById("desistir");
const btnGuadarPalabra=document.getElementById("btn-guardarycomenzar")
const anularBtnDiv = document.querySelector(".btn");
const cancelar = document.getElementById("cancelar");

let btn_letras = document.querySelectorAll( "#teclado button" );
let textAgregarPalabra = document.getElementById("agregarPalabra");
const nuevaPalabra =document.querySelector(".agregar-palabra-conteiner")
textAgregarPalabra.style.display="none";
nuevaPalabra.style.display="none";


function iniciar(event){
    btnJugar.style.display="none"
    btnNuevoJuego.style.display="";
    btnAgregarPalabra.style.display="none"
    
    anularBtnDiv.style.display= "none"
    dibujar()
    document.querySelector(".areaJuego").style.display="";
    document.querySelector("#teclado").style.display=""; 
    btnDesistir.style.display="";
    errores = 0;
    aciertos = 0; 
    
    const parrafo = selector( "palabra_a_adivinar" );
    parrafo.innerHTML = ""; 
    const palabraAleatoria = selectorPalabra( 0, palabras.length );

    palabraElegida = palabras[ palabraAleatoria ];
    console.log( palabraElegida );

    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = false;
    }

    for( let i = 0; i < palabraElegida.length; i++ ){
        const span = document.createElement( "span" );
        parrafo.appendChild( span );
    }

}

for( let i = 0; i < btn_letras.length ; i++ ){
    btn_letras[ i ].addEventListener( "click",letras );
}

function letras(event){
    const spans = document.querySelectorAll( "#palabra_a_adivinar span" );
    const button = event.target; 
    button.disabled = true;
    
    const letra = button.innerHTML.toUpperCase();
    const palabra = palabraElegida.toUpperCase();

    let acerto = false;

    for( let i = 0; i < palabra.length;  i++ ){
        if( letra == palabra[i] ){
            spans[i].innerHTML = letra;
            aciertos++;
            acerto = true;
        }
    }
    
    if( acerto == false ){
        errores++;      
    }

    if(errores == 6){
        selector("resultado").style.color= "#ff0000";
        selector("resultado").innerHTML ="Perdiste, la palabra era " + palabraElegida;
        fin();
    }else if( aciertos == palabraElegida.length ){
        selector("resultado").innerHTML = "Ganaste, felicidades!!!";
        fin( );
    }
    console.log( "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acerto );
    dibujarHorca(errores)

    
}


fin();
function fin( ){
    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = true;
    }

    btnJugar.disabled = false;
}



home()
function home(){
    document.querySelector(".areaJuego").style.display="none";
    document.querySelector("#teclado").style.display="none"; 
    btnDesistir.style.display="none";
    document.querySelector("#agregar-palabra").style.display="";
    btnNuevoJuego.style.display="none";
}


btnJugar.onclick=iniciar;
btnDesistir.onclick=desistir;
btnAgregarPalabra.onclick=agregarPalabra;
btnGuadarPalabra.onclick=guardarPalabraNueva;
cancelar.onclick=desistir;  