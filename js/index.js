// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceElem = product.querySelector('.price span').innerHTML;
  const quantElem = product.querySelector(".quantity input").value;

  let subTotal = priceElem * quantElem;

  const subElem = product.querySelector('.subtotal span');
  
  return subElem.innerHTML = subTotal;
  
}

function calculateAll() {
   //const singleProduct = document.querySelector('.product');
   //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProduct = document.getElementsByClassName('product');
  const totalSum = [...allProduct].map(node => updateSubtotal(node)).reduce((acc, cv) => acc + cv);
  
  // ITERATION 3
  const total = document.querySelector('#total-value span');
  total.innerHTML = totalSum;
}

// ITERATION 4

function removeProduct(event) {
  const btn = event.target.parentNode.parentNode;
  console.log('The target in remove is:', btn);
  //... your code goes here

  btn.innerHTML = '';
}

// ITERATION 5
function createProduct() {
  //... your code goes here
  //const hElement = document.createAttribute('h2');
  //hElement.innerHTML= "daopsjasopidoijdioja";
  //const idProduct = document.getElementsByTagName(`tfoot`);
  //hElement.insertBefore(hElement, idProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeProductBtn = document.querySelectorAll(".btn-remove");
  [...removeProductBtn].map(node => node.addEventListener('click', (e) => {
      removeProduct(e)}));
  

  const addProduct = document.getElementById('create');
  addProduct.addEventListener('click', createProduct);
});
