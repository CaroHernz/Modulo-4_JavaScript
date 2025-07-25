const problemas = {
    'act3problema1': {
        html: `
        <div class="problema-content">
        <h3>Problema 1: ¿Puedo Ganar?</h3>
        <div>
            <label for="numero">Número: </label>
            <input type="number" id="numero" placeholder="Ingresa un número del 1 al 100" min = "1" max = "100">
        </div>
        <button class="btn-problema" type="submit" id="ingresaNumero">Ingresar</button>
        <div  class="resultado" id="resultadosNumero"></div>
        </div>
    `,
        script: function () {
            const buttonNumero = document.getElementById('ingresaNumero');
            const numeroIngreso = document.getElementById('numero');
            const resultadoNumero = document.getElementById('resultadosNumero');

            function numeroGanador() {
                const numero = parseInt(numeroIngreso.value);
                if (isNaN(numero)) {
                    resultadoNumero.textContent = 'Ingrese un valor válido';
                    return;
                }
                const resultado = evaluarNumero(numero);
                resultadoNumero.textContent = resultado.mensaje;
            }
            buttonNumero.addEventListener('click', numeroGanador);
        },
        background: 'url("https://img.freepik.com/premium-vector/vintage-s-style-seamless-pattern-with-words_807082-1354.jpg?semt=ais_hybrid&w=740")'
    },
    'act3problema2': {
        html: `
    <div class="problema-content">
        <h3>Problema 2: Año Bisiesto</h3>
        <div>
            <label for="anio">Año: </label>
            <input type="number" id="anio" placeholder="Ingresa el Año" min = "0">
        </div>
        <button class="btn-problema" type="submit" id="ingresaAnio">Ingresar</button>
        <div class="resultado" id="resultadoAnio"></div>
</div>
    `, script: function () {
            const buttonAnio = document.getElementById('ingresaAnio');
            const anioIngreso = document.getElementById('anio');
            const resultadoAnio = document.getElementById('resultadoAnio');

            function anioBisiesto() {
                const anio = parseInt(anioIngreso.value);
                if (isNaN(anio)) {
                    resultadoAnio.textContent = 'Ingrese un valor válido';
                    return;
                }
                const resultado = evaluarAnioBisiesto(anio);
                resultadoAnio.textContent = resultado.mensaje;
            }
            buttonAnio.addEventListener('click', anioBisiesto);
        },
        background: 'url("https://img.freepik.com/premium-vector/minimalist-seamless-pattern-with-cute-beige-brown-flowers_197792-5731.jpg")'
    },
    'act3problema3': {
        html: `
    <div class="problema-content">
        <h3>Problema 3: Ganador Juego de Tenis</h3>
        <div>
            <label for="juegosA">Jugador A: </label>
            <input type="number" id="juegosA" placeholder="Sets del jugador A" min = "0">
        </div>
        <div>
            <label for="juegosB">Jugador B: </label>
            <input type="number" id="juegosB" placeholder="Sets del jugador B" min = "0">
        </div>
        <button class="btn-problema" type="submit" id="ingresaJuegos">Ingresar</button>
        <div  class="resultado" id="resultadosJuegos"></div>
</div>
    `, script: function () {
            const buttonCalcular = document.getElementById('ingresaJuegos');
            const resultadoTenis = document.getElementById('resultadosJuegos');
            const setsA = document.getElementById('juegosA');
            const setsB = document.getElementById('juegosB');

            function calcularTenis() {
                const juegosA = parseInt(setsA.value);
                const juegosB = parseInt(setsB.value);

                if (isNaN(juegosA) || isNaN(juegosB)) {
                    resultadoTenis.textContent = 'Ingrese valores válidos';
                    return;
                }
                const resultado = ganadorTenis(juegosA, juegosB);
                resultadoTenis.textContent = resultado.mensaje;
            }

            buttonCalcular.addEventListener('click', calcularTenis);
        },
        background: 'url("https://png.pngtree.com/thumb_back/fw800/background/20221031/pngtree-seamless-pattern-with-tennis-rackets-and-balls-image_1426765.jpg")'
    }
}

function loadTarea(problemaId) {
    const container = document.getElementById('problema');
    const body = document.getElementById('bodyIndex');
    if (problemas[problemaId]) {
        container.innerHTML = problemas[problemaId].html;
        body.style.backgroundImage = problemas[problemaId].background;
        problemas[problemaId].script();
    }
    else {
        container.innerHTML = '<p>Problema no disponible</p>';
        body.style.backgroundImage = '';
    }
}

//Tarea 3 Problema 1
function evaluarNumero(numero) {
    if (numero >= 1 && numero <= 100) {
        if (numero > 5 && numero < 15 || numero === 70 || numero === 55) {
            console.log('El número ingresado tiene opcines de ganar');
            return { mensaje: 'Tu número tiene opciones de ganar!' }
        }
        else {
            console.log('El número ingresado no es favorable');
            return { mensaje: 'Tu número no es favorable 😔' }
        }
    }
    else {
        console.log('El número ingresado se encuentra fuera del rango permitido');
        return { mensaje: 'Ingresa un número dentro del rango permitido (1 a 100)' }

    }
}


//Tarea 3 Problema 2
function evaluarAnioBisiesto(anio) {
    if (anio >= 0) {
        if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
            console.log('Es un año bisiesto', anio);
            alert('El Año ' + anio + ' es un año bisiesto');
            return { mensaje: 'El Año ' + anio + ' es un año bisiesto' }
        }
        else {
            console.log('No es año bisiesto', anio);
            alert('El Año ' + anio + ' no es un año bisiesto');
            return { mensaje: 'El Año ' + anio + ' no es un año bisiesto' }
        }
    }
    else {
        console.log('No se puede realizar la operación', anio);
        return { mensaje: 'No se puede realizar la operación' }
    }
}


//Tarea 3 Problema 3
function ganadorTenis(juegosA, juegosB) {
    if ((juegosA === 7 && juegosB < 5) || (juegosB === 7 && juegosA < 5)) {
        console.log('Resultado inválido');
        return { mensaje: 'Resultado inválido' }
    }

    if (juegosA >= 6 && juegosA - juegosB >= 2) {
        console.log('El ganador es A');
        return { mensaje: 'El ganador es A' }
    }
    if (juegosB >= 6 && juegosB - juegosA >= 2) {
        console.log('El ganador es B');
        return { mensaje: 'El ganador es B' }

    }

    else if ((juegosA < 6 && juegosB < 6) || (juegosA === juegosB) || (juegosA <= 6 && juegosA - juegosB <= 2) || (juegosB <= 6 && juegosB - juegosA <= 2)) {
        console.log('El juego aún no termina');
        return { mensaje: 'El juego aún no termina' }

    }
    else {
        console.log('Resultado inválido');
        return { mensaje: 'Resultado inválido' }
    }
}



