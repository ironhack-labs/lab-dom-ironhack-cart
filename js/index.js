// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //C define the price variable
  const price = product.querySelector('.price span');

  //C Define the quantity variable
  const quantity = product.querySelector('.quantity input');

  //C Extract price from the price variable
  const priceValue = price.innerHTML; 

  //C Extract quantity from the quantity variable
  const quantityValue = quantity.value;

  //C Calculate the subtotal
  const subtotal = priceValue * quantityValue;

  //C Update the subtotal in the product
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal;

  //C Return the subtotal
  return subtotal;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  
  //C Call the updateSubtotal function for each product

  //C This Return a NodeList (this an array of all elements with class product)
  const products = document.getElementsByClassName('product');

  //C Loop through the products
  total = 0;
  for (let i = 0; i < products.length; i++) {
  //C Call the updateSubtotal function for each product
    total += updateSubtotal(products[i]);

  }

  console.log('The total is:', total);


  // ITERATION 3

  //C Define the total variable
  const totalElement = document.querySelector('#total-value span');
  //C Update the total in the total element
  totalElement.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);

  //C Remove the product
  //C Get the parent of the target
  const removeProduct = target.parentNode.parentNode
  console.log('The target in remove is:', parent);
  //C Remove the parent
  removeProduct.remove();
  //C Update the total
  calculateAll();



  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
 //createProduct you should target the name and unit price input DOM nodes, and extract their values.
  const name = document.querySelector('.product-name input').value;
  const unitPrice = document.querySelector('.product-price input').value;

  //C Create a new product
  const product =  document.getElementsByClassName('product')[0].cloneNode(true);
  //C Update the name of the product  in the product  DOM node  
  
  product.querySelector('.name span').innerHTML = name;
  //C Update the price of the product in the product DOM node
  product.querySelector('.price span').innerHTML = unitPrice;
  //Point on the T-body element
  const tbody = document.querySelector('tbody');
  //Append the product to the tbody
  tbody.appendChild(product);
  //C Update the total
  calculateAll();
  //C update Event listeners
  



}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here


  //Remove Button Event Listener
  const removeBtn = document.getElementsByClassName('btn-remove')
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);
  }


  // Add Product Button Event Listener
  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);
});
