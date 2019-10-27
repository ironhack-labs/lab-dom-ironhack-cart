var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let $product = document.querySelectorAll(".product")
let $total = document.querySelector("#total").innerText;

let $prueba = document.querySelectorAll(".product .pu > span");

// Esta es la idea de donde tengo la Iteration 1 y 2 aprox
// for (let i = 0; i < $product.length; i++) {
//   let uP = $product[i].querySelector(".pu span").innerText;
//   let q = $product[i].querySelector(".qty input").value;
//   let suma = uP * q;
//   let changeSubtot = $product[i].querySelector(".subtot span");
//   changeSubtot.innerText = suma;
// }

function updateSubtot ($product) {
  // Iteration 1.1
  let total = [];
  for (let i = 0; i < $product.length; i++){
    let priceUnit = $product[i].querySelector(".pu span").innerText;
    let quantity = $product[i].querySelector(".qty input").value;
    let subTotal = priceUnit * quantity;
    total.push(subTotal);
    console.log(subTotal);
  }
  return total;
}

function calcAll() {
  // Iteration 1.2
  //Actualiza SubTotal de cada Producto.
  let subTotal = updateSubtot($product);
  for (let i = 0; i < subTotal.length; i++){    
  let changeSubtot = $product[i].querySelector(".subtot span");
  changeSubtot.innerText = subTotal[i];
  }
  //Suma y Actualiza el Total.
  let total = 0;
  let totalNum = document.querySelectorAll(".product .subtot > span");
  for (let i = 0; i < totalNum.length; i++) {
  total += parseInt(totalNum[i].textContent);
}

document.querySelector("#total").innerText = total;
} 
$calc.onclick = calcAll;

//calcular el total
// let total = 0;
// let allNum = document.querySelectorAll(".product .subtot > span");
// for (let i = 0; i < allNum.length; i++) {
//   total += parseInt(allNum[i].textContent);
// }

// document.querySelector("#total").innerText = total;
// console.log(allNum);
// console.log(total);