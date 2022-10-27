// ITERATION 1
const calculatePricesBtn = document.getElementById('calculate');

function updateSubtotal(product) {

  // Variables Declared
  const subTotalField = product.querySelector('.subtotal span');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  calculatePricesBtn.addEventListener('click', calculateAll);
  // SubTotal Price calculated
  const totalSubPrice  = price.innerHTML  * quantity.value;
  subTotalField.innerHTML = totalSubPrice;
  return totalSubPrice;
}

function calculateAll() {
  const products = document.getElementsByClassName('product');
  const totalDisplay = document.querySelector('#total-value span');
  // Calculate final Price 
  let total = 0;

  // Call the updateSubTotal with a for loop for each product
  for (let index = 0; index < products.length; index++) {
    const product = products[index];
    total  += updateSubtotal(product);
  }
   // Updated the final TOTAL
   totalDisplay.innerHTML =  total;


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // Deleted the parent container for product
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let product = document.querySelector('.product');
  // Copy the whole element 
  let newProduct = product.cloneNode(true);

  // Element Selected 
  const newProductName = newProduct.querySelector('.name span');
  const newProductPrice = newProduct.querySelector('.price span');
  const newProductQuantity = newProduct.querySelector('.quantity input');
  const newProductSubtotal = newProduct.querySelector('.subtotal span');
  const newProductBtn = newProduct.querySelector('.btn');

  // Input Selected 
  const  productName = document.querySelector('input[type="text"]');
  const  unitPrice = document.querySelector('input[type="number"]');

  // Inject the html new  with values for new row 
  newProductName.innerText = productName.value;
  newProductPrice.innerText = unitPrice.value;
  newProductQuantity.value = "0";
  newProductSubtotal.innerText = "0";
  newProductBtn.addEventListener('click', removeProduct);

  // Push the element into table
  const tbody = document.querySelector('#cart tbody');
  tbody.appendChild(newProduct);
}

window.addEventListener('load', () => {
  // Calculate Prices Btn calls 
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  // Remove Product Btn delete Selected all butons
  const removeProductBtn  = document.querySelectorAll('.action .btn-remove');

  // Set event listener for each buttons
  for (let index = 0; index < removeProductBtn.length; index++) {
    const btn = removeProductBtn[index];
    btn.addEventListener('click', removeProduct);
  }

  // Set event listener for create button 
  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);
});
