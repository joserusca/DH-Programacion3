let tareas = [
    {
        nombre: 'Lavar los platos',
        duracion: 70,
    },
    {
        nombre: 'Lavar la ropa',
        duracion: 40,
    },
    {
        nombre: 'Programar los ejemplos de Prog III',
        duracion: 10,
    },
    {
        nombre: 'Pasear el perro',
        duracion: 120,
    },
];


// MAP
let nombreTareas = tareas.map((tarea)=>{
    return tarea.nombre;
})

// console.log(nombreTareas);


// FILTER

let masDeSesenta = tareas.filter((tarea)=>{
    return tarea.duracion > 60;
})

// console.log(masDeSesenta);


// REDUCE




let totalTareas = tareas.reduce((acumulador, tarea)=>{
    return acumulador + tarea.duracion;
}, 0)


// Finalmente luego del callback se especifica el numero de inicio del ACUMULADOR
// Es el 0 que se encuentra como segundo parametro del método reduce()

console.log(totalTareas);



