let dificultad = 0
let selecciones = []
let contador = 0



const facil= document.querySelector("#facil");
facil.addEventListener("click", function(){
    dificultad = 8
    
    document.getElementById("dificultad").style.display = "none";
    generarTablero()
})

const medio = document.querySelector("#medio");
medio.addEventListener("click", function(){
    dificultad = 16
   
    document.getElementById("dificultad").style.display = "none";
    generarTablero()
})

const dificil = document.querySelector("#dificil");
dificil.addEventListener("click", function(){
    dificultad = 32
  
    document.getElementById("dificultad").style.display = "none";
    generarTablero()
})

const generarTablero =()=>{
    cargarIconos()
    contador = 0
    selecciones=[]
    let tablero = document.getElementById("tablero");
    tablero.style.display = "flex"
    let tarjetas  =[]
     for (let i = 0; i<dificultad; i++){
        tarjetas.push(`
        <div>
            <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                <div class="tarjeta" id="tarjeta${i}">
                    <div class="cara trasera"  id="trasera${i}">
                        ${iconos[0]}
                    </div>
                    <div class="cara superior">
                    <i class="fa-regular fa-circle-question"></i>
                    </div>
                </div>
            </div>
        </div>
    `)
    if (i % 2 == 1){
        iconos.splice(0,1)
    }
    }
            tarjetas.sort(()=>Math.random()-0.5)
            tablero.innerHTML = tarjetas.join('')
    }



function cargarIconos (){
    iconos = [
        '<i class="fas fa-star"></i>', //0
        '<i class="far fa-star"></i>', //1
        '<i class="fas fa-star-of-life"></i>', //2
        '<i class="fas fa-star-and-crescent"></i>', //3
        '<i class="fab fa-old-republic"></i>', //4
        '<i class="fab fa-galactic-republic"></i>', //5
        '<i class="fas fa-sun"></i>', //6
        '<i class="fas fa-stroopwafel"></i>', //7
        '<i class="fas fa-dice"></i>', //8
        '<i class="fas fa-chess-knight"></i>', //9
        '<i class="fas fa-chess"></i>', //10
        '<i class="fas fa-dice-d20"></i>', //11
        '<i class="fa-solid fa-envelope"></i>', //12
        '<i class="fa-solid fa-music"></i>', //13
        '<i class="fa-solid fa-car"></i>', //14
        '<i class="fa-solid fa-plane"></i>', //15
    ]
}



const reiniciarJuego = ()=>{
    let contador  = 0
    document.getElementById("dificultad").style.display = "flex";
    document.getElementById("tablero").style.display = "none"
    console.log('reiniciar')
    counter = document.querySelector("#contador")
    counter.innerHTML = contador
}

const seleccionarTarjeta =(i)=>{
    let tarjeta =  document.getElementById("tarjeta"+i)
        if(tarjeta.style.transform != "rotateY(180deg)"){
            tarjeta.style.transform = "rotateY(180deg)";
            selecciones.push(i)
         
        }

        if(selecciones.length ==2){
            verificarPareja(selecciones)
            selecciones=[]
        }
}

const verificarPareja=(selecciones)=>{
    setTimeout(() => {
        let  findejuego = 0
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])

        if (trasera1.innerHTML !== trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            trasera1.style.background = "plum"
            trasera2.style.background = "plum"
            contador++
            counter = document.querySelector("#contador")
            counter.innerHTML = contador
        }

    }, 1000);
}