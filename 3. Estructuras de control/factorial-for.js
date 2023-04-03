factorial = 1;
maxentero = 10;

for (let entero = 1; entero <= maxentero; entero++) {
    factorialtemp = factorial
    factorial = factorial * entero
    console.log('El factorial de 10! es: ' +factorial+ ' / Multiplicar: '+entero+' * '+factorialtemp);
}