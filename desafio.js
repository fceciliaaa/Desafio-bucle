
console.log("Imprimir numeros impares del 1-20");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}


console.log("Disminuir multiplos de 3");
for (let j = 100; j >= 0; j--) {
    if (j % 3 === 0) {
        console.log(j);
    }
}


console.log("Disminuir 1.5");
for (let p = 4; p >= -3.5; p -= 1.5) {
    console.log(p);
}


console.log("Sigma");
let suma = 0;
for (let k = 1; k <= 100; k++) {
    suma += k;
}
console.log(suma);


console.log("Factorial");
let producto = 1;
for (let n = 2; n <= 12; n++) {
    producto = producto * n;
}
console.log(producto);