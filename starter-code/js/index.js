var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');


// document.querySelector(".qty input").value

// document.querySelector(".pu span").innerText

// document.querySelector(".subtot span").innerText



function updateSubtot($product) {
  let sum = 0
  let qty = $product.querySelector(".qty input").value;
  let price = $product.querySelector(".pu span").innerText;
  sum = price * qty
  let subtot = $product.querySelector(".subtot span").innerText = sum ;
  
  console.log(subtot)
  // subtot.innerText = qty * pu;
  // return subtot;
}



function calcAll() {
  let product = document.querySelector(".product")
  updateSubtot(product)
}
$calc.onclick = calcAll;


