var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let $product = document.querySelectorAll(".product")
let $total = document.querySelector("#total").innerText;

let $prueba = document.querySelectorAll(".product .pu > span");

// function updateSubtot ($product) {
//   // Iteration 1.1
//   let priceUnit = $product.querySelector(".pu span").innerText;
//   let quantity = $product.querySelector(".qty input").value;
  
//   let subTotal = priceUnit * quantity;
  
//   return subTotal;
// }

// function calcAll() {
//   // Iteration 1.2
//   let subTotal = updateSubtot($product);
//   let changeSubtot = document.querySelector(".subtot span");
//   changeSubtot.innerText = subTotal;
  
// }
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
  let subTotal = updateSubtot($product);
  for (let i = 0; i < subTotal.length; i++){    
  let changeSubtot = $product[i].querySelector(".subtot span");
  changeSubtot.innerText = subTotal[i];
  }
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