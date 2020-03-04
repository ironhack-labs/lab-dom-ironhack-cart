// ITERATION 1

function updateSubtotal($product) {
  const quantity = parseInt($product.querySelector('.product input').value);
  const unitPrice = parseFloat($product.querySelector('tr.product td.price span').innerHTML);
  const $subtotalSelector = $product.querySelector('.subtotal');
  const subtotal = quantity * unitPrice;
  $subtotalSelector.innerHTML = `$<span>${subtotal}</span>`;
}

function calculateAll() {
 
  // ITERATION 2
  document.querySelectorAll('.product').forEach(product => {
    updateSubtotal(product);
  });


  // ITERATION 3
  let total = 0;
  
  document.querySelectorAll('.subtotal span').forEach (singleSubtotal => {
    total += parseFloat(singleSubtotal.innerHTML);
  });
  
  document.querySelector('#total-value span').innerHTML = total;
 
}

window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');
  console.log($calculateTrigger);

  $calculateTrigger.addEventListener('click', calculateAll);
});

// ITERATION 4

function productRemoveListener(event) {
  // 1. removing product with removeChild()
  event.currentTarget.parentNode.parentNode.parentNode.removeChild(event.currentTarget.parentNode.parentNode);
  // 2. removing product with emptying out innerhtml
  //event.currentTarget.parentNode.parentNode.innerHTML="";

}

document.querySelectorAll('.product').forEach(product => {
  document.querySelectorAll('.btn.btn-remove').forEach(button => {
    button.addEventListener('click', productRemoveListener);
  });
});

// ITERATION 5

function createProduct(event) {
  const $newProductForm = event.currentTarget.parentNode.parentNode;
  const newProductName = $newProductForm.querySelector('[placeholder = "Product Name"]').value;
  const newProductValue = $newProductForm.querySelector('[placeholder = "Product Price"]').value;

  const $existingProduct = document.querySelector('.product');
  console.log($existingProduct);

  let $newProduct = $existingProduct.cloneNode($existingProduct);


  $newProduct.querySelector('.name span').innerText = newProductName;
  $newProduct.querySelector('.price span').innerText = newProductValue;

  console.log('new product',$newProduct);

  $existingProduct.parentNode.appendChild($newProduct);
  
 




}

const $addProductButton = document.getElementById('create');
$addProductButton.addEventListener('click', createProduct);