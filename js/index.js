// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector(`.price span`).innerHTML;
  const quantity = product.querySelector(`.quantity input`).value;
  const subTot = product.querySelector(`.subtotal span`);

  const subtotal = Number(price) * Number(quantity);

  subTot.innerHTML = subtotal;


  return subtotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');

  // updateSubtotal(multiProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const multipleProd = document.getElementsByClassName('product');
  const arrMultipleProd = [...multipleProd];

  let sumSubTotales = 0
  arrMultipleProd.forEach(el => {
    sumSubTotales += updateSubtotal(el)
  })


  // ITERATION 3
  //... your code goes here

  const totalFinal = document.querySelector(`#total-value span`)

  totalFinal.innerHTML = sumSubTotales



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