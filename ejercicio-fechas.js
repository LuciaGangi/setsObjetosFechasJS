// Obtener la fecha de hoy
const hoy = new Date();
console.log(hoy);

// Fecha de mi nacimiento (ejemplo)
const miNacimiento = new Date(1994, 9, 20);
console.log(miNacimiento);

// Comparar si hoy es después de mi fecha de nacimiento
const esHoyDespues = hoy > miNacimiento;
console.log(esHoyDespues);

// Obtener el día de mi nacimiento
const diaNacimiento = miNacimiento.getDate();
console.log(diaNacimiento);

// Obtener el mes de mi nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = miNacimiento.getMonth();
console.log(mesNacimiento);

// Obtener el año de mi nacimiento (con 4 dígitos)
const anioNacimiento = miNacimiento.getFullYear();
console.log(anioNacimiento);
