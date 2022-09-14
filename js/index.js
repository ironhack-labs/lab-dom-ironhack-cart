// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseFloat(product.querySelector('.price span').innerText);
  const quantity = product.querySelector('.quantity input').valueAsNumber;
  let subtotalPrice = price * quantity;
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerText = subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('tr.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productCollection = document.querySelectorAll('tr.product');
  const productArr = [...productCollection];
  let total = 0;
  productArr.forEach(function (element) {
    updateSubtotal(element);
    let span = element.querySelector('.subtotal span').innerHTML;
    total = total + Number(span);
  });
  
  
  // ITERATION 3
  
  const totalSpan = document.querySelector('#total-value span');
  totalSpan.innerHTML = total;

  console.log(totalSpan.innerHTML)
  
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
