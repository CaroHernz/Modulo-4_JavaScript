//Tarea 2 Problema 1
document.addEventListener('DOMContentLoaded', function(){
    const buttonNumero = document.getElementById('ingresaNumero');
    const numeroIngreso = document.getElementById('numero');
    const resultadoNumero = document.getElementById('resultadosNumero');

    function numeroGanador () {
        const numero = parseInt(numeroIngreso.value);
        if (isNaN(numero)) {
            resultadoNumero.textContent = 'Ingrese un valor válido';
            return;
        }
        const resultado = evaluarNumero(numero);
        resultadoNumero.textContent = resultado.mensaje;
    }
    buttonNumero.addEventListener('click', numeroGanador);

    function evaluarNumero(numero) {
        if (numero >= 1 && numero <= 100) {
            if (numero > 5 && numero < 15 || numero === 70 || numero ===55) {
                console.log('El número ingresado tiene opcines de ganar');
                return {mensaje: 'Tu número tiene opciones de ganar!'}
            }
            else {
                console.log('El número ingresado no es favorable');
                return {mensaje: 'Tu número no es favorable 😔'}
            }
        }
        else {
            console.log('El número ingresado se encuentra fuera del rango permitido');
            return {mensaje: 'Ingresa un número dentro del rango permitido (1 a 100)'}

        }
    }
})

//Tarea 2 Problema 2
document.addEventListener('DOMContentLoaded', function(){
    const buttonNumero = document.getElementById('ingresaNumero');
    const numeroIngreso = document.getElementById('numero');
    const resultadoNumero = document.getElementById('resultadosNumero');

    function numeroGanador () {
        const numero = parseInt(numeroIngreso.value);
        if (isNaN(numero)) {
            resultadoNumero.textContent = 'Ingrese un valor válido';
            return;
        }
        const resultado = evaluarNumero(numero);
        resultadoNumero.textContent = resultado.mensaje;
    }
    buttonNumero.addEventListener('click', numeroGanador);

    function evaluarNumero(numero) {
        if (numero >= 1 && numero <= 100) {
            if (numero > 5 && numero < 15 || numero === 70 || numero ===55) {
                console.log('El número ingresado tiene opcines de ganar');
                return {mensaje: 'Tu número tiene opciones de ganar!'}
            }
            else {
                console.log('El número ingresado no es favorable');
                return {mensaje: 'Tu número no es favorable 😔'}
            }
        }
        else {
            console.log('El número ingresado se encuentra fuera del rango permitido');
            return {mensaje: 'Ingresa un número dentro del rango permitido (1 a 100)'}

        }
    }
})

