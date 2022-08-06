console.log(document.querySelector("title").innerText);

const lista1 = document.querySelectorAll("dl")[0]; //primera lista de elemento
const listaAlum1 = lista1.querySelectorAll("dd"); //accediendo a los valores de la primera lista
const lista2 = document.querySelectorAll("dl")[1]; //segunda lista de elemento
const listaAlum2 = lista2.querySelectorAll("dd"); //accediendo a los valores de la segunda lista

console.log(listaAlum1);
/*funcion que filtar los nombres */
function nombreCompleto(alumno) {
  let nombreS = [];
  for (let i = 0; i < alumno.length; i++) {
    if (alumno[i].innerText == []) {
    } else if (i === 0) {
      nombreS = nombreS + alumno[i].innerText;
    } else {
      nombreS = nombreS + " " + alumno[i].innerText;
    }
  }
  return nombreS;
}

let alumno1 = nombreCompleto(listaAlum1);
let alumno2 = nombreCompleto(listaAlum2);

console.log(
  '----- \nIntegrante 1: "' +
    alumno1 +
    '"\nIntegrante 2: "' +
    alumno2 +
    '"\n-----'
);

/* ------------------------------------------ */

function compararNombres(persona1, persona2) {
  let encuentra = true;
  for (let i = 0; i < 2; i++) {
    encuentra = false;
    for (let j = 0; j < 2; j++) {
      if (persona1[i].innerText == persona2[j].innerText) {
        encuentra = true;
        console.log(persona1[i].innerText == persona2[j].innerText);
      }
    }
    if (!encuentra) {
      console.log("los arreglos no son iguales");
      confirm("deseas comparar los apellidos?");
      return null;
    }
  }
  if (encuentra) {
    let colorCoincidencia = prompt(
      "hubo coincidencias. Elija un color para destacar los nombres"
    );
    console.log("hubo coincidencias");
    return colorCoincidencia;
  }
}

function compararNombres(listaAlum1, listaAlum2)

/* let comparar1 = compararNombres(alumno1); */

/* console.log(comparar1); */

/*if (i1n === i2n) {
  prompt("si son iguales. Elija un color para destacar los nombres");
  console.log("hubo coincidencias");
} else if (i1n === i2sn) {
  prompt("si son iguales. Elija un color para destacar los nombres");
  console.log("hubo coincidencias");
  /* }else if(i1sn === i2n){
        prompt('si son iguales. Elija un color para destacar los nombres')
        console.log('hubo coincidencias')
    }else if(i1sn === i2sn){
        prompt('si son iguales. Elija un color para destacar los nombres')
        console.log('hubo coincidencias') 
} else {
  console.log("No hubo coincidencias en los nombres de los integrantes");
}

window.confirm("¿Quieres comparar los apellidos?");

if (i1a === i2a) {
  prompt("si son iguales. Elija un color para destacar los nombres");
  console.log("hubo coincidencias");
} else if (i1a === i2sa) {
  prompt("si son iguales. Elija un color para destacar los nombres");
  console.log("hubo coincidencias");
   }else if(i1sa === i2a){
        prompt('si son iguales. Elija un color para destacar los nombres')
        console.log('hubo coincidencias')
    }else if(i1sa === i2sa){
        prompt('si son iguales. Elija un color para destacar los nombres')
        console.log('hubo coincidencias') 
} else {
  console.log("No hubo coincidencias en los apellidos de los integrantes");
}

--------------------------------------------------------- */

/* let integrantes = { 
    integrante1: [i1n, i1sn, i1a, i1sa],
    integrante2: [i2n, i2sn, i2a, i2sa]
}

console.log({integrantes})


let comparacion2 = integrantes.forEach( function (igualdad) {
    
    if (integrante1 === integrante2){
        console.log("hay igualdad en el nombre y/o apellido")

    }else {
        console.log("no hay igualdad en ningun paramatro")
    }

}) */
