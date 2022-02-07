// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerText;
  // console.log('the price is:', price);
  // console.log('the type of price is:', typeof price);
  const quantity = product.querySelector('.quantity input').value;
  // console.log('the quantity is:', quantity)
  // console.log('the type of quantity is:', typeof quantity);
  const subtotalElement = product.querySelector('.subtotal span');
  // console.log('the subtotalElement is:',subtotalElement)
  // console.log('the type of subtotalElement is:', typeof subtotalElement);

  const priceNumber = parseFloat(price);
  // console.log('price was a string and now is:', priceNumber, typeof priceNumber)
  const quantityNumber = parseFloat(quantity);
  // console.log('quantity was a string and now is:', quantityNumber, typeof quantityNumber)

  const subtotal = priceNumber * quantityNumber;
  // console.log('the priceNumber is:', priceNumber, 'quantityNumber is:', quantityNumber, 'the subtotal is:', subtotal, typeof subtotal )

  subtotalElement.innerText = subtotal;
  // console.log(subtotalElement,subtotalElement.innerText, subtotal )
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const x = document.getElementsByClassName('product');
  let calculateAll = 0;
  
  for (let i = 0; i < x.length; i++) {
    calculateAll += updateSubtotal(x[i]);
  }

  // ITERATION 3
  //... your code goes here
  const totalPrice = document.querySelector('#total-value span');
  
  totalPrice.innerText = calculateAll;
  
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
