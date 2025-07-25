<h1 align=center > Módulo 4 </h1>

### Aprendizaje esperado:
Utilizar variables simples y sentencias condicionales para el control del flujo de un algoritmo que resuelve un problema simple acorde al lenguaje Javascript.

## Actividad 2
### Problema 1
Le han contratado para crear una función que recibe como parámetros el monto total en dólares de la cuenta corriente de un cliente y devuelve su equivalente en pesos chilenos, considere como tipo de cambio 745.

#### Solución:
Construya una pieza de código Javascript para que solo reciba montos correctos, es decir, solo números, tenga consideración que al ser dólares, se podría encontrar con montos que incluyen centavos. 

### Problema 2
El estado de Chile posee un beneficio denominado “Subsidio de arriendo de vivienda”, el cual consiste en un aporte mensual de 4,2 Unidades de Fomento (UF) por un máximo de 170 UF, el cual podrá ser utilizado de manera consecutiva o fragmentada en un plazo de 8 años.

Para optar a este beneficio, se debe cumplir lo siguiente:
- Ser mayor de 18 años al momento de postular.
- Contar con cédula de identidad vigente. Las personas extranjeras deben presentar cédula de identidad para extranjeros.
- Acreditar ahorro mínimo de 4 UF al momento de postular, en una cuenta de ahorro para la vivienda a nombre del postulante, su cónyuge o conviviente civil.
- Pertenecer hasta el 70% más vulnerable de la población, según la calificación socioeconómica del Registro Social de Hogares.

----

## Actividad 3
### Problema 1
En un conocido juego de azar con opciones pertenecientes al conjunto de los números mayores a 1 y menores o iguales a 100, existen números que tienen más probabilidad de ganar. Esto aplica cuando un número es menor a 15 y mayor a 5, o bien si el número es el 70 o el 55.
#### Solución:
Se desarrolla un algoritmo que recibe un número y retorna un mensaje según cumpla las condiciones dadas: “El número ingresado tiene opciones de ganar” en caso de que esté en el rango antes indicado, o “El número ingresado no es favorable” en caso contrario.

### Problema 2
Un año es bisiesto en el calendario Gregoriano si es divisible entre 4 y no divisible entre 100, o bien, si es divisible entre 400.
#### Solución: 
Se desarrolla un algoritmo que recibe un número (año) y retorna un mensaje de alerta y en pantalla, según si corresponde a un año bisiesto o no. 

### Problema 3
Un periodista llamado Perio Dista, debe relatar un partido de tenis, pero no conoce las reglas del deporte. En particular, no ha logrado aprender cómo saber si un set ya terminó, y quién lo ganó.
Un partido de tenis se divide en sets. Para ganar un set, un jugador debe ganar 6 juegos, pero además debe haber ganado por lo menos dos juegos más que su rival. Si el set está empatado a 5 juegos, el ganador es el  primero que llegue a 7. Si el set está empatado a 6 juegos, el set se define en un último juego, en cuyo caso el resultado final es 7-6.

Sabiendo que el jugador A ha ganado m juegos, y el jugador B, n juegos, al periodista le gustaría saber si:
- A ganó el set, o
- B ganó el set, o
- el set todavía no termina, o el resultado es inválido (por ejemplo, 8-6 o 7-3).

#### Solución:
Se desarrolla un algoritmo que recibe 2 variables, sets del jugador A y los sets del jugador B, el cuál retorna un mensaje acorde a los valores entregados. Estos pueden ser:

- *"El juego aún no termina"* en caso de que ningún jugador ganará 6 sets y/o cuando un jugador aún no haya ganado por lo menos 2 juegos más que el rival.
- *"El ganador es A o B"* según corresponda.
- *"Resultado inválido"* en casos de ejemplo como 8-6 o 7-3.
