// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!', product);

  const price = parseFloat(product.querySelector('.price span').innerText);

  //console.log("price =>", price, "type =>", typeof price)

  const quantity = product.querySelector('.quantity input').valueAsNumber;

  let subtotalPrice =  price * quantity;

  const subtotalElement = product.querySelector('.subtotal span')

  subtotalElement.innerText = subtotalPrice;


  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // const productCollection = document.getElementsByClassName('product');
  // console.log(productCollection);
  // updateSubtotal(productCollection);
  
  // ITERATION 2
  //... your code goes here
  
  const productCollection = document.querySelectorAll('.product');
  productCollection.forEach( (productElm) => {
    updateSubtotal(productElm);
  });




  // ITERATION 3
  const totalCollection = (document.querySelectorAll('.subtotal span'));
  let totalValue = 0;
  // console.log(totalCollection);
  totalCollection.forEach((product) => {
    // console.log(parseFloat(product.innerText));
    totalValue += parseFloat(product.innerText);

  });
  console.log(totalValue);

// total-value span
  const totalDomElement = document.querySelector('#total-value span');
  totalDomElement.innerText = totalValue;

  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
