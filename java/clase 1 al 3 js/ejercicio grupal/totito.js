   // Preguntar si desea jugar de nuevoconst jugarDeNuevo = prompt("¿Quieres jugar de nuevo? (s/n):").toLowerCase();if (jugarDeNuevo === 's') {jugar(); // Reiniciar el juego} else {                console.log("¡Gracias por jugar! Hasta la próxima.");}return; // Terminar el juego actual} 
let tablero = [1,2,3,4,5,6,7,8,9]
let victoriasJ1 = 0
let victoriasJ2 = 0
let empates = 0
let j1 = "X"
let j2 = "O"
let numeroJugadas = 0
 
function imprimirTablero(tablero) {
    console.log(`${tablero[0]} | ${tablero[1]} | ${tablero[2]}` + "\n---------\n" + `${tablero[3]} | ${tablero[4]} | ${tablero[5]}` + "\n---------\n" + `${tablero[6]} | ${tablero[7]} | ${tablero[8]}`);
}
 
function jugar() {
    console.clear()
    imprimirTablero(tablero)
    let turno = 1//Es para saber el turno del jugador
    let tableroLleno = false//Variable que Verifica que el tablero no este lleno
    while (!tableroLleno) {
 
        if(tablero.some(element => typeof element === 'number' && !isNaN(element))){}else{
            tableroLleno = true
            break;
        }
 
        do{//Ciclo para que el jugador 1 haga su jugada
            let jugadaJ1 = prompt("Jugador 1: Escribe la posición de tu ficha")
            jugadaJ1 = jugadaJ1-1
            if (!isNaN(tablero[jugadaJ1])) {
                tablero[jugadaJ1] = j1
                console.clear()
                imprimirTablero(tablero)
                numeroJugadas++
 
                let ganador = verGanador(tablero)
                if(ganador){
                    console.log("El jugador 1 'X' ha ganado")
                    console.log("El numero de jugadas de la partida es: " + numeroJugadas)
                    victoriasJ1++
                    mostrarVictorias()
                    jugarDeNuevo()
                    return;
                }
                turno = 2
                break;
            } else {
                alert("Esta posicion no es valida")
            }
        }while (turno === 1);
 
        if(tablero.some(element => typeof element === 'number' && !isNaN(element))){}else{
            tableroLleno = true
            break;
        }
 
        do {//Ciclo para que el jugador 2 haga su jugada    
            let jugadaJ2 = prompt("Jugador 2: Escribe la posición de tu ficha")
            jugadaJ2 = jugadaJ2-1
            if (!isNaN(tablero[jugadaJ2])) {
                tablero[jugadaJ2] = j2
                console.clear()
                imprimirTablero(tablero)
                numeroJugadas++
 
                let ganador = verGanador(tablero)
                if(ganador){
                    console.log("El jugador 2 'O' ha ganado")
                    console.log("El numero de jugadas de la partida es: " + numeroJugadas)
                    victoriasJ2++
                    mostrarVictorias()
                    jugarDeNuevo()
                    return;
                }
 
                turno = 1
                break;
            } else {
                alert("Esta posicion no es valida")
            }
        } while (turno === 2);
    }
 
    console.log("Es un EMPATE")
    console.log("El numero de jugadas de la partida es: " + numeroJugadas)
    empates++
    mostrarVictorias()
    jugarDeNuevo()
}
 
jugar()
 
function verGanador(tablero) {
    const combinacionesGanadoras = [
        [0, 1, 2], // Fila 1
        [3, 4, 5], // Fila 2
        [6, 7, 8], // Fila 3
        [0, 3, 6], // Columna 1
        [1, 4, 7], // Columna 2
        [2, 5, 8], // Columna 3
        [0, 4, 8], // Diagonal 1
        [2, 4, 6]  // Diagonal 2
      ];
   
      for (let combinacion of combinacionesGanadoras) {
        const [a, b, c] = combinacion;//Extrae las combinaciones 1 por 1
        if (tablero[a] === tablero[b] && tablero[b] === tablero[c]) {//Determina si las casillas son iguales
            return tablero[a]; // Devuelve 'X' o 'O' si hay ganador
        }
      }
      return null; // No hay ganador
}
 
function jugarDeNuevo() {
    // Preguntar si desea jugar de nuevo
    const jugarDeNuevo = confirm("¿Quieres jugar de nuevo?");
    if (jugarDeNuevo) {
        tablero = [1,2,3,4,5,6,7,8,9]
        numeroJugadas = 0
        jugar(); // Reiniciar el juego
    } else {
        console.log("¡Gracias por jugar! Hasta la próxima.");
    }return; // Terminar el juego actual}
}
 
function mostrarVictorias() {
    console.log("El Juegdor 1 ha tenido: " + victoriasJ1 + " en total")
    console.log("El Juegdor 2 ha tenido: " + victoriasJ2 + " en total")
    console.log("Ha habido un total de: " + empates + " Empates")
}
 
 