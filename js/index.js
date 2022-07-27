// ITERATION 1


  console.log('Calculating subtotal, yey!');

  //... your code goes herefunction updateSubtotal(product) {
  function updateSubtotal(produtc){
   const price = product.queryselector('.price span').innerHTML;
   const quantity = product.querySelector('.quantity input').value;
  // it 3
    const subtotal = number (price * quantity);

  // it 4
    const subtotalElement = product.querySelector('.subtotal span');

  // it 5
    subtotalElement.innerHTML = subtotal;
    return subtotal;
  }

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes her
  const productList = document.querySelectorAll('.product');
  let total = 0
  productList.forEach((singleProduct) => {
    total +=
    updateSubtotal(singleProduct);
  });
  // ITERATION 3
  //... your code goes here
  const totalValue = 0
  document.queryselector('#total-value span');
  totalValue.innerHTML = total;

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
