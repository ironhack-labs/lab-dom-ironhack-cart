// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subtotal = Number(price.innerText) * Number(quantity.value);
  product.querySelector('.subtotal span').innerText = subtotal.toString();
  return subtotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.getElementsByClassName('product');
  let subtotalArr = [];
  for(let i=0; i< products.length; i++){
    subtotalArr.push(updateSubtotal(products[i]));
  }
  
  // ITERATION 3
  let total = subtotalArr.reduce((acc, val)=> acc + val);
  document.querySelector('#total-value span').innerText = total.toString(); 

}


// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  calculateAll();
}


// ITERATION 5
function createProduct() {
  let product = document.querySelector('.product');
  let newProduct = product.cloneNode(true);
  
  let newProductName = newProduct.querySelector('.name span');
  let newProductPrice = newProduct.querySelector('.price span');
  let newProductQuantity = newProduct.querySelector('.quantity input');
  let newProductSubtotal = newProduct.querySelector('.subtotal span');
  let newProductBtn = newProduct.querySelector('.btn');
  
  let input = document.querySelectorAll('.create-product input');

  newProductName.innerText = input[0].value;
  newProductPrice.innerText = input[1].value;
  newProductQuantity.value = "0";
  newProductSubtotal.innerText = "0";
  newProductBtn.addEventListener('click', removeProduct);
  
  let tbody = document.querySelector('tbody');
  tbody.appendChild(newProduct);
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtn = document.getElementsByClassName("btn btn-remove");
  for(let i=0; i<removeBtn.length; i++){
    removeBtn[i].addEventListener('click', removeProduct);
  }

  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);
});
