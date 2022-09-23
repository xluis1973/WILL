/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  let resto=9;
  let queda=num;
  let numeros=[];

  while(resto!=queda && queda!=0){
    resto=queda%10;
    queda=Math.trunc(queda/10);
    numeros.push(resto);
  }
  if(queda!=0) numeros.push(queda);
  let largo=numeros.length -1;
  let bandera=true;
  numeros.forEach(element => {
    if(element!=numeros[largo]){
      bandera= false;
    }
    largo--;
  });
  return bandera;

}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico