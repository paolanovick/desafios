// Función que devuelve una promesa
function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Task 1 completed');
        }, 1000); // 1 segundo de retraso
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Task 2 completed');
        }, 2000); // 2 segundos de retraso
    });
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Task 3 completed');
        }, 1500); // 1.5 segundos de retraso
    });
}
module.exports = { task1, task2, task3 };