// kalkulator

let x = Number (prompt("masukkan angka pertama"));
let operator = prompt("masukkan operator");
let y = Number (prompt("masukkan angka kedua"));

if (operator == '+') {
    alert ('hasilnya adalah ' + (x + y))
} else if (operator == '-') {
    alert ('hasilnya adalah ' + (x - y))
} else if (operator == '*') {
    alert ('hasilnya adalah ' + (x * y))
} else if (operator == '/') {
    alert ('hasilnya adalah ' + (x / y))
} else {
    alert ("terjadi kesalahan")
}