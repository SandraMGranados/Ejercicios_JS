/*
Dado el siguiente array filtremos a los pokémons con poder menor a 10.


//Array:
let pokemones = [ 
{ nombre: 'pikachu', poder: 12 },
 { nombre: 'bulbasaur', poder: 6 },
 { nombre: 'charizard', poder: 19 },
 { nombre: 'squirtle', poder: 3 },
 { nombre: 'metwo', poder: 6 }, 
]
*/

const pokemones = [ 
{ nombre: 'pikachu', poder: 12 },
{ nombre: 'bulbasaur', poder: 6 },
{ nombre: 'charizard', poder: 19 },
{ nombre: 'squirtle', poder: 3 },
{ nombre: 'metwo', poder: 6 }, 
]

const filterPokemones = pokemones.filter((e) => e.poder < 10);
console.log(filterPokemones);