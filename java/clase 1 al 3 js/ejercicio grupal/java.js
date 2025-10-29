let victoriasX = 0;
let victoriasO = 0;
let empates = 0;
let seguirjugando = true
let ganador = false
let movimientos = 0
 
function iniciarJuego() {
    let tablero = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9']
    ]
    let turno = "X"; // Comienza el jugador1
    let ganador = false
 
    while (!ganador && movimientos  <= 9) {
        mostrarTablero(tablero);
        let casilla = parseFloat(prompt(`Turno de ${turno}. Selecciona una casilla escribiendo un número del 1 al 9:`));
        if (casilla || isNaN(casilla) || casilla < 1 || casilla > 9){
            alert("Debe escoger un numero entre el 1 y el 9")
            continue;
            
        }
        tablero[casilla-1]
        movimientos++
        // Ultimo  Verificar si hay un ganador o empate
        const resultado = verificarGanador();
        if (resultado) {
            if (resultado === 'Empate') {
            console.log("¡Es un empate!");
        } else {
            console.log(`¡Jugador ${resultado} ha ganado!`);
        }
        return; // Terminar el juego
    }
    }
}
function mostrarTablero(tablero){
    console.log(tablero)
}

iniciarJuego();

 // Preguntar si desea jugar de nuevoconst jugarDeNuevo = prompt("¿Quieres jugar de nuevo? (s/n):").toLowerCase();if (jugarDeNuevo === 's') {jugar(); // Reiniciar el juego} else {console.log("¡Gracias por jugar! Hasta la próxima.");}return; // Terminar el juego actual}