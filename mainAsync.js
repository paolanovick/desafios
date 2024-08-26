// mainAsync.js

const { task1, task2, task3 } = require('./functions');

async function mainAsync() {
    try {
        // Llama a las funciones en secuencia usando await
        const result1 = await task1();
        console.log(result1);
        
        const result2 = await task2();
        console.log(result2);
        
        const result3 = await task3();
        console.log(result3);
    } catch (error) {
        // Manejo de errores
        console.error('Error en una de las tareas:', error);
    }
}

mainAsync();
