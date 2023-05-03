const teacher = {
    name: 'Camilo',
    lastName:'Restrepo',
    age:29
};

console.log('Teacher:', teacher);

// Primitivos 
// Booleans
// Declaración implícita
const isTeacher = true;   // Toma el valor con el que fue declarado
let isPlayer = true;      // Toma el tipo del valor que le fue asignado 


// Declaracion explicita 
const hasErrors: boolean = false;
let isChampion: boolean = false;

let result = hasErrors ? 'tiene errores' : 'No tiene errores'

// String
const firstName = 'Camilo';
const lastName = 'Restrepo';

let fullName: string = `Su nombre es:' ${firstName} ${lastName}, bienvenido`
console.log(fullName.toUpperCase());

// Number 
let countStudents: number = 29;
let average: number = 4.5;

console.log(average.toFixed() )


// Array
let fruits = ['pera', 'banano'];
let sports: string[] = [ 'futbol', 'baloncesto'];

type stringOrNull = string | null;

// Union Types
let students: Array<string | null> = ['Nico', 'Yhoan', null, 'Rayffer', null, 'Ana'];    //<>genericos  
console.log(students.filter((student) => student !== null));

// Tuplas
let exampleTuple: [string, null] = [ 'hola', null];

// Tsipos personalizados
type statusCode = 'active' | 'inactive';

let studentStatus:statusCode = 'inactive'
