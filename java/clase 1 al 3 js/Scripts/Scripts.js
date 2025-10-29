resultado = 20 / 2 * 5
// division - 20 / 2 = 10
// multiplicacion 10 * 5 = 50
console.log(resultado)


resultado = 20 / ( 2 * 5 )
// multiplicacion - 2*5=10
// division -20 / 10 =2
console.log(resultado)



// modulo para optener el residuo de una division
console.log("usamos Modulos para obtener el residuo de una division")
resultado = 10%3
console.log(resultado)

console.log ("tambien para que s emantega dentro de un rango")
let semana = [" lunes" , "martes", "miecroles", "jueves" , "viernes", "sabado", "domingo"]
let dias = 100
let diaDelasemana = dias % 50
console.log(semana[diaDelasemana])


// operaciones de incremento y decremento

let x = 5
console.log(++x)
console.log(--x)

let a = 5 
let b = 5

let izquierda = 10 + ++a
let derecho = 10 + b++

console.log(izquierda)
console.log(derecho)



//operadoreslogicos
let usuario = "Mario"
console.log(usuario || "Invitado")

let permitido = true
console.log(permitido && "Acceso permitido")


// && - AND (ambos deben serverdaderos)
// || - OR  


// confirm() - es un cuadro de dialogo de confirmar una accion

let respuesta = confirm("Desea continuar")
console.log (respuesta)


// pront - permite que el usuario 




let edad = prompt(" cuantos anos tienes")
edad = Number(edad); // Convertir a numero 
if (edad >= 18){
  alert("Eres mayor de edad");
} else {
  alert("Eres menor de edad")
}




//let fruta = ["Manza","uva","Banano","pasa","Creza"];

//fruta.forEach(fruta=> console.log(fruta));

//let numeros = [1,2,3,4,5,6]
//let duplicados = numeros.map(numero => numero * 2);
//duplicados.forEach(dup => console.log (dup));






//let frutas = [" Manzana","Banano","Cereza"];
//console.log(frutas[2])
//push() Agrega un elemento al final
//poo() Elimina el ultimo elemento
///Shift() Elimina el primer elemento
//unshift()Agrega un elemento al inicio

//frutas.push("Fresas")
//frutas.shift();
//console.log(frutas[0])// banano
//console.log(frutas[2])// fresa





//console.log("5"+2);
//console.log("5"*2);

// VARIABLE PRIMITIVA:
// let mesaje = "hola";
//console.log(mesaje.toUpperCase())




//console.log(typeof 42)
//console.log(typeof "42")
//console.log(typeof true)
//console.log(typeof {})


//if (true){
  //  let x = 10;

//}
//console.log(x)


//let global = " soy global"
//function prueba(){
    //let local = " soy local";
    //console.log(global);
    //console.log(local);
//}
//prueba ();
//console.log(local)
//console.log(local);

//Event Loop ejemplo:
//console.log("inicio");
//setTimeout(()=> console.log("tarea asincrona"),2000)
//console.log("fin")