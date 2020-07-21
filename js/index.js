// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const quantityValue = quantity.valueAsNumber;
  
  price = price.innerHTML;

  const subTotal = price * quantityValue;
  // console.log(subTotal)

  const productSubTotal = product.querySelector('.subtotal span');

  productSubTotal.innerHTML = subTotal;
 
  return productSubTotal;
  



  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  console.log(singleProduct)
  // updateSubtotal(singleProduct);
  // updateSubtotal(products)
  

  // // ITERATION 2

  const products = document.querySelectorAll('.product');
  console.log(products)
  const productsArr = [...products]
  console.log(productsArr)

  productsArr.forEach(item => updateSubtotal(item));
  console.log(productsArr)

  const subtotalUpdate = productsArr
  console.log(productsArr)

  // ITERATION 3
  const totalPrice = document.querySelector('.calculate-total button');
  // totalPrice.innerHTML = productArr
  console.log(totalPrice)
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
