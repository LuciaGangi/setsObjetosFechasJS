// Fechas
const fecha = new Date();
console.log(fecha);

// Atención - Los meses inicializan en 0 (0 - Enero, 11 - Diciembre)
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192);
console.log(fecha2);

const fecha3 = new Date(1000000000000); // Milisegundos
console.log(fecha3);

const fecha4 = new Date("October 13, 1979");
console.log(fecha4);

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192);

console.log(fecha2 === fecha5); // Error! No se pueden comparar fechas de esta manera

console.log(fecha2.getTime() === fecha5); // Esta es la forma de comparar igualdad entre fechas

// Obtener el día, el mes y el año de una fecha
// Obtener el día .getDate()
console.log(fecha2.getDate());

// Obtener el mes .getMonth() (0 - Enero, 11 - Diciembre)
console.log(fecha2.getMonth() + 1);

// Obtener el año .getFullYear()
console.log(fecha2.getFullYear());

console.log(fecha2);

// .toLocaleDateString
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString("en-US"));
