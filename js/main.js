
console.log(document.querySelector('title').innerText)


/* ---------------------------------------------------------- */
/* integrante uno */
const i1n = document.querySelector('.integrante1__nombre').innerText
const i1sn = document.querySelector('.integrante1__segundo-nombre').innerText
const i1a = document.querySelector('.integrante1__apellido').innerText
const i1sa = document.querySelector('.integrante1__segundo-apellido').innerText

/* integrante dos */
const i2n = document.querySelector('.integrante2__nombre').innerText
const i2sn = document.querySelector('.integrante2__segundo-nombre').innerText
const i2a = document.querySelector('.integrante2__apellido').innerText
const i2sa = document.querySelector('.integrante2__segundo-apellido').innerText

const listaAlum1 = document.querySelectorAll("dl.lista_card > dd");
const listaAlum2 = document.querySelectorAll("dl.lista__card > dd");
console.log(listaAlum1, listaAlum2);



function nombreCompleto(alumno) {
    let nombreS = [];
    for (let i = 0; i < alumno.length; i++) {
      if (alumno[i].innerText == []) {
        
      } else if (alumno[3] == []) { 

      } else {
        nombreS = nombreS + alumno[i].innerText + " ";
      }
    }
    return nombreS;
  }

  let alumno1 = nombreCompleto(listaAlum1);
  let alumno2 = nombreCompleto(listaAlum2);
  console.log(listaAlum1[1].innerText)

  console.log(
    '----- \nIntegrante 1: "' +
      alumno1 +
      '"\nIntegrante 2: "' +
      alumno2 +
      '"\n-----'
  );




console.log(`-----
Integrante 1: "${i1n}${i1sn} ${i1a} ${i1sa}"
Integrante 2: "${i2n}${i2sn} ${i2a}${i2sa}"
-----`)

/* --------------------------------------------------------- */


    if(i1n === i2n){
        prompt('si son iguales. Elija un color para destacar los nombres')
        console.log('hubo coincidencias')
    }else if(i1n === i2sn){
        prompt('si son iguales. Elija un color para destacar los nombres')
        console.log('hubo coincidencias')
    /* }else if(i1sn === i2n){
        prompt('si son iguales. Elija un color para destacar los nombres')
        console.log('hubo coincidencias')
    }else if(i1sn === i2sn){
        prompt('si son iguales. Elija un color para destacar los nombres')
        console.log('hubo coincidencias') */
    }else{
        console.log('No hubo coincidencias en los nombres de los integrantes')
    }

    window.confirm("¿Quieres comparar los apellidos?");


    if(i1a === i2a){
        prompt('si son iguales. Elija un color para destacar los nombres')
        console.log('hubo coincidencias')
    }else if(i1a === i2sa){
        prompt('si son iguales. Elija un color para destacar los nombres')
        console.log('hubo coincidencias')
    /* }else if(i1sa === i2a){
        prompt('si son iguales. Elija un color para destacar los nombres')
        console.log('hubo coincidencias')
    }else if(i1sa === i2sa){
        prompt('si son iguales. Elija un color para destacar los nombres')
        console.log('hubo coincidencias') */
    }else{
        console.log('No hubo coincidencias en los apellidos de los integrantes')
    };


/* --------------------------------------------------------- */

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







  

  
  
  
  
