async function task1() {
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
async function task2() {
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
async function task3() {
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
async function mainAsync() {
    try {
        const result1 = await task1();
        console.log(result1);

        const result2 = await task2();
        console.log(result2);

        const result3 = await task3();
        console.log(result3);
    } catch (error) {
        console.error('Error en una de las tareas:', error);
    }
}

mainAsync();