/*
Crear una función que calcule cuántos litros de nafta gasta un auto que consume 2 litros cada 100km, 
ingresando por parámetro la cantidad de kilómetros del recorrido a realizar. Luego crear una función que, 
a partir de ese dato, devuelva cuánto significa eso en pesos ingresando por parámetro el precio del litro de nafta.
*/

function calculateLiters (kilometers) {
    return (kilometers * 2) / 100;
}

function calculatePrice (liters, price) {
    return liters * price;
}

const liters = calculateLiters(800);

console.log(`litros que consume ${ccalculateLiters(800)}`);
console.log(`Precio: ${calculatePrice(liters, 300)}`)