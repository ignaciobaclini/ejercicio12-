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
function compararApellidos(persona1, persona2) {
  //funcion que compara Apellidos
  let encuentra = true;
  let posicion1 = 0; //variable que me permite almacenar las posiciones
  let posicion2 = 2;
  for (let i = 2; i < 4; i++) {
    // el contador for solo pasara por las posisiones de apellido
    encuentra = false;
    for (let j = 2; j < 4; j++) {
      if (persona1[i].innerText == persona2[j].innerText) {
        encuentra = true;
        posicion1 = i;
        posicion2 = j;
      }
    }
    if (encuentra) {
      let colorCoincidencia = prompt(
        "hubo coincidencias. Elija un color para destacar los nombres"
      );
      console.log("hubo coincidencias");
      persona1[posicion1].style.color = colorCoincidencia;
      persona2[posicion2].style.color = colorCoincidencia;
    } else {
      console.log("no encuentro coincidencia en Apellidos");
    }
  }
}

function compararNombres(persona1, persona2) {
  // funcion que comparar nombres
  let encuentra = true;
  let posicion1 = 0;
  let posicion2 = 2;
  for (let i = 0; i < 2; i++) {
    encuentra = false;
    for (let j = 0; j < 2; j++) {
      if (persona1[i].innerText == persona2[j].innerText) {
        encuentra = true;
        posicion1 = i;
        posicion2 = j;
      }
    }
    if (!encuentra) {
      console.log("los nombres no son iguales");
      let confirmacion = confirm("deseas comparar los apellidos?");
      if (confirm) {
        compararApellidos(persona1, persona2); //llama a la funcion de comparar apellidos
      }
      return null;
    }

    if (encuentra) {
      let colorCoincidencia = prompt(
        "hubo coincidencias. Elija un color para destacar los nombres"
      );
      console.log("hubo coincidencias");
      persona1[posicion1].style.color = colorCoincidencia;
      persona2[posicion2].style.color = colorCoincidencia;
      return null;
    }
  }
}

compararNombres(listaAlum1, listaAlum2);
