// ITERATION 1


function updateSubtotal(product) {
  alert('Calculating subtotal, yey!');
  const priceOne = product.querySelector('.price span')

  const quanty = product.querySelector('.quantity')
  const quantyValue = quanty.value
  let priceContent = priceOne.textContent
  let subTotalOne = priceContent * quantyValue



  const subtotalWrite = product.querySelector('.subtotal')

  const button1 = document.getElementById('calculate')

  button1.onclick = function () {

    subtotalWrite.innerHTML = + `${subTotalOne} `

  }


  //... your code goes here
}

function updateSubtotal2(create) {
  alert('Calculating subtotal, yey!');
  const priceTwo = document.querySelector('.create .price span')
  const quanty2 = document.querySelector('.create .quantity')
  const quantyValue2 = quanty2.value
  let priceContent2 = priceTwo.textContent
  let subTotalTwo = priceContent2 * quantyValue2


  const subtotalWrite2 = document.querySelector('.create .subtotal')



  const button1 = document.getElementById('calculate')

  button1.onclick = function () {

    subtotalWrite2.innerHTML = + `${subTotalTwo} `

  }


  //... your code goes here
}





function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');

  let totalPrice = updateSubtotal(singleProduct);
  const total = document.getElementById('total-value')
  console.log(totalPrice)
  total.innerHTML = `${totalPrice} euros`
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
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
