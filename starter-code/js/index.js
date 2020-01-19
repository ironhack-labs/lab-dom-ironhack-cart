var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1

for(let i=0; i< $product.length; i++){
  let productPrice = $product[i].querySelector(".pu span").innerText;
  let productQuantity = $product[i].querySelector(".qty input").value;
  let productSubtotal = productPrice * productQuantity;
  $product[i].querySelector('.subtot span').innerText = productSubtotal;
} 

}

function calcAll() {
  // Iteration 1.2
  let $products = document.querySelectorAll('.product');
  let products = Array.from($products);
updateSubtot(products)
  let result = 0;

  if (products !== []) {
    $products.forEach(elem => result += elem.querySelector('.pu span').innerText * elem.querySelector('.qty input').value);
  }
  document.querySelector('h2 span').innerHTML = result; 

}
$calc.onclick = calcAll;

function createProduct() {
  var create = document.querySelector('#cart tbody');

  create.insertAdjacentHTML('beforeend', '<tr class="product"><td class="name"><span>Ironshirt</span></td><td class="pu">$<span>15.00</span></td><td class="qty"><label><input type="number" value="0" min="0"></label></td><td class="subtot">$<span>0</span></td><td class="rm"><button class="btn btn-delete">Delete</button></td></tr>');

}
createProduct();
