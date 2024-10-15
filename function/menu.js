//1.luas segitiga

// let alas = parseFloat(prompt("Masukan alas segitiga"));
// let tinggi = parseFloat(prompt("Masukan alas tinggi"));

// function luasSegitiga(a,t){
//     let luas = a*t/2;
//     alert(luas);
// }
// luasSegitiga(alas,tinggi);

// // 2.keliling lingkaran

// let jari = Number(prompt("Masukan Keliling lingkaran"));

// function kelilingLingkaran(r){
//     let jari = 2*3.14*r;
//     alert(jari);
// }
// kelilingLingkaran(jari);

// 3.bilangan Prima

let bilangan = Number(prompt("masukan bilangan"));

function bilanganprima(bilangan) {
  let prima = true;
  for (let i = 2; i < bilangan; i++) {
    if (bilangan % i == 0) {
      prima = false;
      break;
    }
  }
  if (prima) {
    alert(`${bilangan} adalah bilangan prima`);
  } else {
    alert("bukan bilangan prima");
  }
}

bilanganprima(bilangan);
