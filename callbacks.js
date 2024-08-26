// Función que simula una tarea asincrónica usando setTimeout
function task1(callback) {
    setTimeout(() => {
        console.log('Task 1 completa');
        callback();
    }, 2000); // Simula una tarea que toma 2 segundos
}

function task2(callback) {
    setTimeout(() => {
        console.log('Task 2 completa');
        callback();
    }, 1000); // Simula una tarea que toma 1 segundo
}

function task3(callback) {
    setTimeout(() => {
        console.log('Task 3 completa');
        callback();
    }, 1500); // Simula una tarea que toma 1.5 segundos
}

// Función principal que ejecuta las tareas en secuencia
function mainCallback() {
    task1(() => {
        task2(() => {
            task3(() => {
                console.log('Todas las tareas están completas');
            });
        });
    });
}

// Llamada a la función principal
mainCallback();
