let lana;

const alfombraTxT = document.querySelector('#alfombra');
const start = document.querySelector('#start');
const resultadoTexto = document.querySelector('.texto');

const calcularLana = (alfombra) => {
    lana = Math.ceil(alfombra / 3) * 2;
    return lana;
};

const calcularStack = (lana) => {
    let grupoStack = Math.floor(lana / 64); // Stacks completos
    let lanaRestante = lana % 64; // Lana restante
    return { grupoStack, lanaRestante };
};

// Evento al presionar el botón
start.addEventListener('click', () => {
    let alfombra = parseInt(alfombraTxT.value, 10); // Obtener el valor como número

    if (isNaN(alfombra) || alfombra < 1) {
        resultadoTexto.textContent = "Por favor, ingresa un número válido";
        return;
    }

    let cantidadLana = calcularLana(alfombra);
    let resultado = calcularStack(cantidadLana);

    resultadoTexto.innerHTML = `Para ${alfombra} alfombras necesitas ${cantidadLana} de lana. <br>
    Total: ${resultado.grupoStack} stacks con ${resultado.lanaRestante} de lana suelta.`;
});
