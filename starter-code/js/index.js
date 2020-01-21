var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $create = document.getElementById('create');

function updateSubtot($product) {
  const price = $product.querySelector('.pu span');
  const quantity = $product.querySelector('.qty input').value;
  const result = parseFloat(price.innerHTML) * parseFloat(quantity);
  const subTotal = $product.querySelector('.subtot span');
  subTotal.innerHTML = result;

  return result;
}

function calcAll() {
  const products = [...document.querySelectorAll('.product')];
  let sum = 0;
  const total = document.querySelector('h2 span');
  products.forEach(function(e){
    var functionResult = updateSubtot(e);
    sum += functionResult;
    return sum;
  });
  total.innerHTML = sum;
}

let buttons = [...document.querySelectorAll('.btn-delete')];

function deleteProduct(deleteButton){
  deleteButton.addEventListener("click", function(event){
    let productToDelete = event.currentTarget.parentNode.parentNode;  
    $cart.removeChild(productToDelete);
    });
  }

buttons.forEach(function(e){
   deleteProduct(e);
});

function createProduct(){
  let firstProduct = document.getElementsByTagName('tr')[1];
  let newProduct = firstProduct.cloneNode(true);
  document.querySelector('tbody').appendChild(newProduct);
  
  const newName = newProduct.querySelector('.name span');
  let nameInput = document.querySelector('.nameInput');
  newName.innerHTML = nameInput.value;
  nameInput.value = "";

  const newPrice = newProduct.querySelector('.pu span');
  let priceInput = document.querySelector('.priceInput');
  newPrice.innerHTML = priceInput.value;
  priceInput.value = "";

  let buttons = [...document.querySelectorAll('.btn-delete')];
  buttons.forEach(function(e){
    deleteProduct(e);
 });
}

$create.onclick = createProduct;

$calc.onclick = calcAll;
