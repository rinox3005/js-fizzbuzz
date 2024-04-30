'use strict';

const grid = document.querySelector('div.grid');



// -- creo un ciclo for con i=1 come punto di partenza e i<=100 come condizione finale e con un incremento costante di i++

for (let i = 1; i <= 100; i++) {

    const div = document.createElement('div');

    // -- SE i % 3 e anche i % 5 sono uguali a zero stamperó in console fizzbuzz al posto del valore di i
    if ((i % 3) === 0 && (i % 5) === 0) {

        console.log('FizzBuzz');
        div.append('FizzBuzz');
        grid.append(div);


        // -- ELSE SE i % 5 é uguale a zero vuol dire che é multiplo di 5 e quindi stamperó in console "buzz" al posto del valore di i

    } else if ((i % 5) === 0) {

        console.log('Buzz');
        div.append('Buzz');
        grid.append(div);


        // -- ELSE SE i % 3 é uguale a zero vuol dire che é multiplo di 3 e quindi stamperó in console "fizz" al posto del valore di i
    } else if ((i % 3) === 0) {

        console.log('Fizz');
        div.append('Fizz');
        grid.append(div);


        // -- ELSE stampo il valore corrente di i
    } else {

        console.log(i);
        div.append(i);
        grid.append(div);

    }
}

