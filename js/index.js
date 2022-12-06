// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
 
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let priceSubtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = priceSubtotal;
  return priceSubtotal;
  
  
}

function calculateAll() {
  const allProducts = document.getElementsByClassName('product');
  let total = 0
  for (const product of allProducts) {
    total += updateSubtotal(product);
  }
  
  

  // ITERATION 3
 document.querySelector('#total-value span').innerHTML = total;
 // document.getElementbyId("total-value span").innerHTML = total----- PORQUE NO FUNCIONA???;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const tbody = target.parentNode.parentNode.parentNode
  const productRemove = target.parentNode.parentNode
  tbody.removeChild(productRemove);
  calculateAll()

  
}

// ITERATION 5

function createProduct() {
  const newName = document.querySelector('.create-product input').value;
  const newNumber = document.querySelectorAll('.create-product input')[1].value;

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removingProducts = document.querySelectorAll('.btn-remove');
  for (const element of removingProducts){
    element.addEventListener('click', removeProduct);
  }
  const createProducto = document.getElementById('create');
  createProducto.addEventListener('click', createProduct);


});
