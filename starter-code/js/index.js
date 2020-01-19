var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  let productPrice = document.querySelector(".pu span").innerText;
  console.log(document.querySelector(".pu span").innerText)
  let productQuantity = document.querySelector(".qty input").value;
  let productSubtotal = productPrice * productQuantity;
  document.querySelector('.subtot span').innerText = productSubtotal;

}

function calcAll() {
  // Iteration 1.2
  let $products = document.querySelectorAll('.product');
  let products = Array.from($products);
  updateSubtot(products);

  let result = 0;

  if (products !== []) {
    $products.forEach(elem => result += elem.querySelector('.pu span').innerText * elem.querySelector('.qty input').value);
  }
  document.querySelector('h2 span').innerHTML = result; 

}
$calc.onclick = calcAll;
