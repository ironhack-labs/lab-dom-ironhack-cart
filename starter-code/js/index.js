var $cart = document.querySelector('#cart tbody');
// let cartElement
var $calc = document.getElementById('calc');
// let calcElement

// document.querySelector(".qty input").value

// document.querySelector(".pu span").innerText

// document.querySelector(".subtot span").innerText


function updateSubtot($product) {
  let sum = 0
  let qty = $product[0].querySelector(".qty input").value;
  let price = $product[0].querySelector(".pu span").innerText;
  sum = price * qty;
  let subtot = $product[0].querySelector(".subtot span").innerText = sum ;

  let sum1 = 0
  let qty1 = $product[1].querySelector(".qty input").value;
  let price1 = $product[1].querySelector(".pu span").innerText;
  sum1 = price1 * qty1;
  let subtot1 = $product[1].querySelector(".subtot span").innerText = sum1 ;
  
  // console.log($product[0])
  // console.log(price)
  // subtot.innerText = qty * pu;
  // return subtot;
}


function calcAll() {
  let product1 = document.querySelectorAll(".product")
  console.log(product1)
  updateSubtot(product1)


}
$calc.onclick = calcAll;




/* ------------------------------------------------

let $calc = document.getElementById('calc');
function calcAllHandler() {
  let allProductElements = document.getElementsByClassName('product')
  let price = allProductElements[0].querySelector('.pu span').innerText
  let qty = allProductElements[0].querySelector('input').value
  allProductElements[0].querySelector('.subtot span').innerText = Number(price) * Number(qty)
  let price1 = allProductElements[0].querySelector('.pu span').innerText
  let qty1 = allProductElements[1].querySelector('input').value
  allProductElements[1].querySelector('.subtot span').innerText = Number(price1) * Number(qty1)
}
$calc.onclick = calcAllHandler;
*/