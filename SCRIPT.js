let iconos = [] 
let selecciones = [] 

generarTablero() 


function cargarIconos() {
  iconos = [
    '<i class="fas fa-star"></i>', 
    '<i class="far fa-star"></i>',
    '<i class="fas fa-star-of-life"></i>',
    '<i class="fas fa-star-and-crescent"></i>',
    '<i class="fab fa-old-republic"></i>',
    '<i class="fab fa-galactic-republic"></i>',
    '<i class="fas fa-sun"></i>',
    '<i class="fas fa-stroopwafel"></i>',
    '<i class="fas fa-dice"></i>',
    '<i class="fas fa-chess-knight"></i>',
    '<i class="fas fa-chess"></i>',
    '<i class="fas fa-dice-d20"></i>'
  ]
}

function generarTablero() { 
  cargarIconos()
  selecciones = [] 
  let tablero = document.getElementById("tablero")//Obtener el elemento que representa el tablero de juego
  let tarjetas = []
  for (let i = 0; i < 24; i++) {  // Recorre 24 cartas
    tarjetas.push(`
      <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
<div class\="tarjeta" id\="tarjeta${i}">
          <div class="cara trasera" id="trasera${i}">
            ${iconos[0]}
            </div>
          <div class="cara superior">
            <i class="far fa-question-circle"></i>
          </div>
        </div>
      </div>
    `)
    if (i % 2 == 1) {// Si es un número impar, se elimina el primer elemento del arreglo 'iconos'.
                    iconos.splice(0, 1)
    }
  }
  tarjetas.sort(() => Math.random() - 0.5)
  tablero.innerHTML = tarjetas.join(" ")// Se asigna el contenido del arreglo 'tarjetas' al elemento con el id 'tablero', convirtiendo el arreglo en una cadena de texto con join.
}

function seleccionarTarjeta(i) {
   // Se obtiene el elemento de la tarjeta correspondiente al índice 'i'.
  let tarjeta = document.getElementById("tarjeta" + i)
  // Se verifica si la tarjeta no está girada (si su transformación no es "rotateY(180deg)").
  if (tarjeta.style.transform != "rotateY(180deg)") {
    // Si la tarjeta no está girada, se gira y se agrega su índice al arreglo 'selecciones'.
    tarjeta.style.transform = "rotateY(180deg)"
    selecciones.push(i)
  }
  if (selecciones.length == 2) {
    deseleccionar(selecciones)
    selecciones = []
  }
}

function deseleccionar(selecciones) {
  setTimeout(() => { // Se utiliza setTimeout para introducir un retardo en la ejecución del siguiente bloque de código.
    let trasera1 = document.getElementById("trasera" + selecciones[0]) 
    let trasera2 = document.getElementById("trasera" + selecciones[1])// Se obtiene el elemento de la parte trasera de la tarjeta correspondiente al segundo elemento seleccionado.
    if (trasera1.innerHTML != trasera2.innerHTML) { // Se verifica si el contenido de las tarjetas seleccionadas no es el mismo.
       let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
      let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
      // Si el contenido no es el mismo, se obtienen los elementos de las tarjetas correspondientes al primer y segundo elementos seleccionados.
     
      tarjeta1.style.transform = "rotateY(0deg)"
      tarjeta2.style.transform = "rotateY(0deg)"
    }else{
                 
                    trasera1.style.background = "plum" 
                    trasera2.style.background = "plum"
                }
            }, 1000); 
        }


    
