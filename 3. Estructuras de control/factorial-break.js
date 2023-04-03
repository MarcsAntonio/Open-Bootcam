factorial = 1
entero = 1

factorizacion:while (entero < 10) {
    entero++
    factorialtemp = factorial
    factorial = entero * factorial
    console.log('Multiplicar: '+entero+' * '+factorialtemp+' = '+factorial);

    if (entero === 10) {
        console.log('El factorial de 10! es: ' +factorial);
        break factorizacion
    }
}