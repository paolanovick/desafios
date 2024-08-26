
// Funciones asincrónicas con callbacks con manejo de errores
function task1(callback) {
    setTimeout(() => {
        const error = Math.random() > 0.5 ? null : new Error('Error en task1');
        callback(error, 'Resultado de task1');
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        const error = Math.random() > 0.5 ? null : new Error('Error en task2');
        callback(error, 'Resultado de task2');
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        const error = Math.random() > 0.5 ? null : new Error('Error en task3');
        callback(error, 'Resultado de task3');
    }, 1000);
}

// Función principal que maneja errores
function mainCallback() {
    task1((error1, result1) => {
        if (error1) {
            console.error('Error en task1:', error1);
            return;
        }
        console.log(result1);

        task2((error2, result2) => {
            if (error2) {
                console.error('Error en task2:', error2);
                return;
            }
            console.log(result2);

            task3((error3, result3) => {
                if (error3) {
                    console.error('Error en task3:', error3);
                    return;
                }
                console.log(result3);
            });
        });
    });
}
// Llamada a la función principal

mainCallback();
