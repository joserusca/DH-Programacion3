// Convertidor de temperatura

// Declara la función celsiusAFahrenheit la cual deberá tener como parámetro la temperatura a calcular.
// Dentro de la función convierte la temperatura ingresada de celsius a fahrenheit y retorna una frase como:
//         “NN°C son NN°F”
// Donde el primer valor NN son los grados ingresados como párametro y el segundo valor NN es la conversión mencionada.

// function celsiusAFahrenheit (temperatura){
//     let temperaturaConverite = temperatura * 1.8 + 32

//     return temperatura + 'ºC son ' + temperaturaConverite + 'ºFF'
// }

// console.log(celsiusAFahrenheit(28));


let celsiusAFahrenheit = (temperatura) => {
    let temperaturaConverite = temperatura * 1.8 +32;
    return temperatura + 'ºC son ' + temperaturaConverite + 'ºFF'
}


console.log(celsiusAFahrenheit(28));




// condicionales
// Traductor Mundial
// Para este ejercicio en el inicio de tu código tienes que definir una variable idioma que puede contener el texto “en”, el texto “es” ,”de” o “fr”. 

// Para probar el ejercicio vas a ir modificando ese valor y el resultado deberá ser diferente dependiendo de esa variable.

// El resultado del ejercicio debería imprimir en consola el mensaje “Hola Mundo ¡volvió JavaScript!” según el lenguaje definido.
//  Plantea los condicionales necesarios para que tu código funcione correctamente.

// Por ejemplo si la variable es fr (francés) el código debería retornar:
//     “Bonjour tout le mond, retour de JavaScript!”

// Probá el código con distintos idiomas.

let idioma = 'sarasa';

if(idioma == 'en'){
    // console.log('Hello world! Javascript is back');

} else if(idioma == 'fr'){
    // console.log("Bonjour tout le mond, retour de JavaScript!");

}else{
    // console.log('Hola mundo bal bal bla');
}







let multiplicacion = [];
for (let i = 1; i <= 10 ; i++) {
    multiplicacion.push( i*5 )

};


// console.log(multiplicacion);







/*    Recorriendo personas

        Dada la siguiente variable:



Escribí el código que permita recorrer este array de personas y por cada una de ellas se realice la siguiente lógica:

    Si la persona es menor de edad y no tiene ciudad se debe imprimir el mensaje: “Hola NOMBRE APELLIDO criatura viajera!”
    Si la persona es mayor de edad y no tiene ciudad se debe imprimir el mensaje: “Hola NOMBRE APELLIDO eminencia viajera!”
    Si la persona es menor de edad y si tiene ciudad debe imprirse el mensaje: “Hola mini NOMBRE APELLIDO de CIUDAD”
    Si la persona es mayor de edad y si tiene ciudad debe imprirse el mensaje: “Hola mayor NOMBRE APELLIDO de CIUDAD”
    Además de eso si la persona tiene un nombre que tenga menos de 4 letras debe verse también el mensaje: “Ay pero que nombre cortito!”
    Por último, si la persona es de la ciudad “Winterfell” debe imprimirse el mensaje “Winter is coming”

*/


let personas = [

    {

        nombre: "Jon",

        apellido: "Snow",

        edad: 23,

        ciudad: "Winterfell"

    },

    {

        nombre: "Daenerys",

        apellido: "Targaryen",

        edad: 19

    },

    {

        nombre: "Arya",

        apellido: "Stark",

        edad: 12,

        // ciudad: "Winterfell"

    },

    {

        nombre: "Tyrion",

        apellido: "Lannister",

        edad: 32,

        ciudad: "Casterly Rock"

    }

]


personas.forEach(function (persona) {
    console.log('----------' + persona.nombre + '-------');
    if (persona.edad < 18 && persona.ciudad == undefined) {
        console.log(`Hola ${persona.nombre} ${persona.apellido} criatura viajera!`);
    }else if(persona.edad >= 18 && persona.ciudad == undefined){
        console.log(`Hola ${persona.nombre} ${persona.apellido} eminencia viajera!`);
    }else if(persona.edad < 18 && persona.ciudad != undefined){
        console.log(`Hola mini ${persona.nombre} ${persona.apellido} de ${persona.ciudad}`);
    }else if(persona.edad >= 18 && persona.ciudad != undefined){
        console.log(`Hola mayor ${persona.nombre} ${persona.apellido} de ${persona.ciudad}`);
    }

    if (persona.nombre.length < 4) {
        console.log('Ay que nombre cortito!');
    }

    
    if (persona.ciudad != undefined && persona.ciudad.toUpperCase() == 'WINTERFELL') {
        console.log('Winter is coming! ' + persona.ciudad.toUpperCase());
    }
})
