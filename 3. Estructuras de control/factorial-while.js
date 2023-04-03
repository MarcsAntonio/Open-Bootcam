entero = 0
factorial = 1
while (entero < 10) {
    entero++
    factorialtemp = factorial
    factorial = entero * factorial
    console.log('El factorial de 10! es: ' +factorial+ ' / Multiplicar: '+entero+' * '+factorialtemp);
}