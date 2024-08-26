
const { task1, task2, task3 } = require('./functions');

async function main() {
    try {
        // Ejecuta todas las promesas en paralelo
        const results = await Promise.all([task1(), task2(), task3()]);
  // Muestra los resultados en la consola
        console.log(results);
    } catch (error) {
        // Manejo de errores
        console.error('Error en una de las tareas:', error);
    }
}        
main();