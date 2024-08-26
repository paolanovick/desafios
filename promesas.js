function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = Math.random() > 0.5 ? null : new Error('Error en task1');
            if (error) {
                reject(error);
            } else {
                resolve('Resultado de task1');
            }
        }, 1000);
    });
}
function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = Math.random() > 0.5 ? null : new Error('Error en task2');
            if (error) {
                reject(error);
            } else {
                resolve('Resultado de task2');
            }
        }, 1000);
    });
}

function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = Math.random() > 0.5 ? null : new Error('Error en task3');
            if (error) {
                reject(error);
            } else {
                resolve('Resultado de task3');
            }
        }, 1000);
    });
}

// Función principal que maneja errores
function mainPromise() {
    Promise.all([task1(), task2(), task3()])
        .then(results => {
            console.log(results[0]);
            console.log(results[1]);
            console.log(results[2]);
        })
        .catch(error => {
            console.error('Error en una de las tareas:', error);
        });
}

mainPromise();