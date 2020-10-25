// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  // neeed to get html? inner.html?
  const price = product.querySelector('.price span');
  // getting value of input
  const quantity = product.querySelector('.quantity input');
  // getting subtotal
  const subtotal = product.querySelector('.subtotal span');
  // getting all three values

  // console.log(price.innerHTML, quantity.value, subtotal.innerHTML);

  return subtotal.innerHTML = price.innerHTML * quantity.value;

  // to check if its returing price and quantity elements, in other words accesing (getter)


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  //getting nodelist (array of tr.products)
  const cartContainer = document.querySelectorAll('.product');

  // ITERATION 3
  //... your code goes here

  //had to check code from prework
  let sum = 0;
  // since cartContainer access product which contains an array (nodelist) I will have to access to each value.
  cartContainer.forEach(function (element) {
    sum += updateSubtotal(element);
  })

  // cartContainer.forEach(element => {
  //   sum += updateSubtotal(element);
  // });

  // get total-value -> span - getElementById it doesn't access to dollar sign

  const totalValue = document.querySelector('#total-value span');

  return totalValue.innerHTML = sum.toFixed(2);
}




// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  
  //... your code goes here
  
  // need to target class product to remove the whole thing 
  target.parentElement.parentElement.remove();

  // const cellsNode = target.parentNode;
  // const productNode = td.parentNode;
  // const tableNode = tr.parentNode;

  // tableNode.removeChild(productNode);
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  const createProductTarget = event.target
  //... your code goes here

  // need to access 
  const newProductName = document.querySelector('.create-product input');
  const newProductPrice = document.querySelector('.create-product .quantity');
  const newProductQuantity = document.querySelector('.create-product .quantity');
  const newProductSubtotal = document.querySelector('.create-product .subtotal');
  const newProductButton = document.getElementById('create');
  

  calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  // accesing .btn-remove
  const removeCartProducts = document.querySelectorAll('.product .btn-remove');
  removeCartProducts.forEach(function (element2) {
    element2.addEventListener('click', removeProduct);
  });

  const createCartProducts = document.getElementById('create');
  createCartProducts.addEventListener('click', createProduct);
});
