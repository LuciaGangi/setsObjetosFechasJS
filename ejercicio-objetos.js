// Creación del objeto con mis datos personales
let yo = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 25,
  altura: 1.75,
  eresDesarrollador: true,
};

// Obtención de mi edad a partir del objeto anterior
let miEdad = yo.edad;
console.log(miEdad);

// Creación de la lista con mis datos y los de mis dos mejores amigos
let amigos = [
  yo,
  {
    nombre: "Maria",
    apellido: "Garcia",
    edad: 23,
    altura: 1.68,
    eresDesarrollador: false,
  },
  {
    nombre: "Pedro",
    apellido: "Sanchez",
    edad: 27,
    altura: 1.82,
    eresDesarrollador: true,
  },
];

// Ordenar los objetos de la lista por edad de mayor a menor
amigos.sort((a, b) => b.edad - a.edad);
console.log(amigos);
