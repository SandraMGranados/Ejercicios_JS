/*
Crear un array que contenga números del 1 al 10. Retornar un nuevo array que contenga todos los números multiplicados por dos
*/

const numbersArray = Array.from({ length: 10 }, (v, i) => i + 1);
const duplicate = numbersArray.map((e) => e * 2);
console.log(duplicate);

/*
Del array que devuelve el ejercicio número 5, filtrar los que sean mayores a 5
*/

const filterNumbers = duplicate.filter((e) => e >= 5);
console.log(filterNumbers);

/*
Del array que devuelve el ejercicio 6, buscar el primero que sea mayor a 10
*/

const firstNumber = filterNumbers.find((e) => e > 10);
console.log(firstNumber);


