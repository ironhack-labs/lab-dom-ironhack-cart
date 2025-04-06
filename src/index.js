// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const priceValue = price.textContent.replace('$',''); 
  const quantity = product.querySelector('.quantity input');
  const quantityValue = quantity.value;
  const sameProductTotalPrice = quantityValue * priceValue;
  const subTotal = product.querySelector('.subtotal span')
  subTotal.textContent = sameProductTotalPrice;
  return subTotal;
}


function calculateAll() {

  // // code in the following two lines is added just for testing purposes.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  

  // // end of test



  // ITERATION 2
  //... your code goes here


  // ITERATION 3
  //... your code goes here


  const products = document.querySelectorAll('#cart .product');
  
  let total = 0;

  
  products.forEach(function(product) {
    updateSubtotal(product);
    const productSubtotal = parseFloat(product.querySelector('.subtotal span').textContent);
    total += productSubtotal;
  });

  document.querySelector('#total-value span').textContent = total.toFixed(2);
}




// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //... your code goes here
  let parent = target.parentNode.parentNode;
  parent.remove();
  calculateAll();
}





// ITERATION 5

function createProduct() {

  //... your code goes here

  const createProductName = document.querySelector('.createProductName').value;
  const createProductUnitPrice = document.querySelector('.createProductUnitPrice').value;

  if (!createProductName || isNaN(createProductUnitPrice) || parseFloat(createProductUnitPrice) <= 0) {
    alert('Please enter valid product details.');
    return;
  }
 
  const table = document.querySelector('#cart');
  const newRow = table.insertRow(-2);

  const newProductNameCell= newRow.insertCell(0);
  newProductNameCell.textContent = createProductName;

  const newProductUnitPriceCell = newRow.insertCell(1);
  newProductUnitPriceCell.textContent= createProductUnitPrice;

  calculateAll()
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(removeBtn => {
    removeBtn.addEventListener('click', removeProduct);
  })

  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct)

});