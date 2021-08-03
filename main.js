// // Crear una funcion por Declaracion
// function saludarDeclaracion (){
//     return `Hola Como estas`;
// }
// console.log(saludarDeclaracion());

// // Crear una funcion por Expresion
// const saludarExpresion = function(){
//     return `Hola Mundo`;
// }
// console.log(saludarExpresion());

// // Crear una funcion mediante un Constructor de Objeto.
// let saludarObjeto = new Function(`return 2+3;`);
// console.log(saludarObjeto());

// function saludar1(){
//     return `Hola Mundo`;
// }
// const saludar2 = function(){
//     return `Hola mundo`;
// }
// const saludar3 = new Function(`return "Hola Mundo";`);
// console.log(saludar1);
// console.log(saludar2);
// console.log(saludar3);

// // Callbacks
// const saludar = function(){
//     return `Hola Mundo`;
// }
// const ejecutar = function(callback){
//     return callback();
// }
// console.log(ejecutar(saludar));

// Ejemplo

const fAfirmativo = function(num){
    return `El numero ${num} es el correcto de la condicion`;
}
const fError = function(num){
    return `El numero ${num} no cumple con la condicion`;
}
const fEjecutar = function(callbackA, callbackE){
    const num = Math.trunc(Math.random()*10);
    return (num >=4 && num <= 8)?(console.log(callbackA(num)),true):(console.error(callbackE(num)),false);
    }     

console.warn((fEjecutar(fAfirmativo,fError))?`Se ejecuto el callback fAfirmativo`:`Se ejecuto el callback fError`);