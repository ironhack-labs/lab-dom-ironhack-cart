// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  //create variables for the price and quantity
  const price = product.querySelector('.price span');
  //console.log(price)
  const quantity = product.querySelector('.quantity input').value;
  //console.log(price.innerText);
  //console.log(quantity);
  //create a variable to store the updated subtotal (quantity*price)
  const subTotal = Number(quantity * price.innerText);
  //console.log(subTotal)
  //updating the inner text of the subtotal
  product.querySelector('.subtotal span').innerText = subTotal;

  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  //console.log(allProducts)
  for (let product of allProducts) {
    updateSubtotal(product);
  }

  // ITERATION 3
  //Store the sum of all the subtotals in a variable
  let sumAllSubTotals = 0;
  for (let product of allProducts) {
    sumAllSubTotals += updateSubtotal(product);
  }
  document.querySelector('#total-value span').innerText = sumAllSubTotals;
  //change the inner of the span with the total value with the variable
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  const parent = event.currentTarget.parentNode.parentNode.parentNode;
  console.log(parent)
  console.log('The target in remove is:', target);
  //... your code goes here
  parent.removeChild(target)
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  //Know how many products already are to clone the last one
  const products = document.querySelectorAll('.product')
  //console.log(products.length)
  const lastProduct = products[products.length -1]
  //console.log(lastProduct)

  //clone the last one of class .product
  const newProduct = lastProduct.cloneNode(true)
  //console.log(newProduct)
  //change the content of newProduct
  //console.log(newProduct.querySelector('.name span'))
  newProduct.querySelector('.name span').innerText = document.querySelector('#cart > tfoot > tr > td:nth-child(1) > input[type=text]').value;
  newProduct.querySelector('.price span').innerText = document.querySelector("#cart > tfoot > tr > td:nth-child(2) > input[type=number]").value
  
  //add the newProduct after the lastProduct
  lastProduct.parentNode.append(newProduct)

  //clean the content of the input in the "create product" row
  document.querySelector('#cart > tfoot > tr > td:nth-child(1) > input[type=text]').value = '';
  document.querySelector("#cart > tfoot > tr > td:nth-child(2) > input[type=number]").value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  //console.log(calculatePricesBtn)
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.querySelectorAll('.btn.btn-remove');
  //console.log(removeBtns)
  removeBtns.forEach(function (btn){
    btn.addEventListener('click', removeProduct)
  })

  //WHY DOES THIS NOT WORK?

  /*const removeBtns = document.querySelectorAll('.btn.btn-remove');for (let btn in removeBtns){
    btn.addEventListener('click', removeProduct)
  }*/
  //for (x in y) gives the key of your
  //for (x of y) gives the object

  const addProduct = document.querySelector('#create');
  addProduct.addEventListener('click', createProduct)
  
});

