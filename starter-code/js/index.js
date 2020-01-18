var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $delete = document.querySelectorAll('.rm');
let deletes = Array.from($delete);


function updateSubtot(products) {
  let unitPrice = document.querySelectorAll('.pu > span');
  let qty = document.querySelectorAll('.qty input[type=number]');
  let subtotal = document.querySelectorAll('.subtot > span');
  let newPrice = 0;
  for (let i = 0; i < products.length; i++) {
    newPrice = parseFloat(unitPrice[i].innerText) * parseFloat(qty[i].value);
    subtotal[i].innerHTML = newPrice;
  }
}

function calcAll() {
  let $products = document.querySelectorAll('.product');
  let products = Array.from($products);

  updateSubtot(products);
  let result = 0;
  $products.forEach(elem => result += elem.querySelector('.pu span').innerText * elem.querySelector('.qty input').value);
  document.querySelector('h2 span').innerHTML = result;
}

function deleteItem() {
  document.querySelector('.product').remove()

} 


$delete.forEach(elem =>elem.onclick = deleteItem)
$calc.onclick = calcAll;



// function test() {
//   let button = document.querySelector(".product");
//   button.className = "product deleted";
//   let toDelete = document.querySelector(".deleted");​
//   for (let i = 0; i < table.childNodes.length; i++) {
//     if (table.childNodes[i] == toDelete) {
//       table.removeChild(table.childNodes[i]);
//     }
//   }
// }



// var $cart = document.querySelector('#cart tbody');
// var $calc = document.getElementById('calc');
// function updateSubtot(product) {
//   let arrProducts = document.getElementsByClassName('productPrice')
//   var arr = [].slice.call(arrProducts)

//   // console.log(arrProducts)
//   // console.log(arr)

//   for (var i = 0; i < arr.length; i++) {
//     let priceProduct = parseFloat(arr[i].innerHTML, 10)
//     // console.log(priceProduct)

//     let quantity = document.getElementsByClassName("units");
//     let arr2 = [].slice.call(quantity);
//     let amountTotal = arr2[i].value;
//     // console.log(amountTotal)

//     let priceLabel = document.getElementsByClassName(product);
//     // console.log(priceLabel)
//     let arr3 = [].slice.call(priceLabel);
//     // console.log(arr3)
//     let finalProductPrice = priceProduct * amountTotal;
//     finalProductPrice = finalProductPrice.toFixed(2);
//     priceLabel[i].innerText = finalProductPrice;
//   }
// }
// function calcAll() {


//   let arrProducts = document.querySelectorAll('.product');
//   let result = 0;
//   // arrProducts.forEach(elem => updateSubtot(elem));
//   arrProducts.forEach(elem => result += +elem.querySelector('.pu span').innerText * elem.querySelector('.qty input').value);
//   // console.log(result)

//   document.querySelector('h2 span').innerHTML = result;
//   updateSubtot('totalPriceProduct')
// }
// $calc.onclick = calcAll;