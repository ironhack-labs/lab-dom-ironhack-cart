var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let $createButton = document.getElementById('create');

function updateSubtot($product) {
  
  let unitPrice = $product.querySelector('.pu>span').innerText;
  let unitQuantity = $product.querySelector('.qty input[type=number]').value;
  
  let subTotal = $product.querySelector('.subtot>span');
  subTotal.innerText = parseFloat(unitPrice)*unitQuantity;

  return parseFloat(subTotal.innerText);
}

function calcAll() {
  
  let productsList = document.querySelectorAll('.product');
  let totalPrice = 0;
  
  for(let i = 0; i < productsList.length; i++) {
    totalPrice += updateSubtot(productsList[i]);
  }
  document.querySelector('h2 span').innerText = totalPrice;
}

$cart.addEventListener('click',function(e){

  let row = e.target.parentNode.parentNode;

  if(e.target.classList.contains('btn-delete')) {
    row.parentNode.removeChild(row);
  }
});

let rowSelector = document.querySelector('.product:last-child');

function addProduct() {
  
  let rowCopy = rowSelector.cloneNode(true);
  let newProductName = document.querySelector('.new input[type=text]').value;
  let newProductPrice = document.querySelector('.new input[type=number]').value;

  rowCopy.querySelector('.name span').innerText = newProductName;
  rowCopy.querySelector('.pu span').innerText = newProductPrice;
  rowCopy.querySelector('.qty input[type=number]').value = 0;
  rowCopy.querySelector('.subtot span').innerText = 0;

  $cart.appendChild(rowCopy)

};

$calc.onclick = calcAll;
$createButton.onclick = addProduct;