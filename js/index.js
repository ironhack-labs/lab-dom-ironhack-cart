  // ITERATION 1
  function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');

    const price = product.querySelector('.price span');
    const quantity = product.querySelector('.quantity input');
    let subtotal1 = price.innerHTML * quantity.value
    document.querySelector('.subtotal span').innerHTML = subtotal1;
  }//Ruta = Valor de la operación matemática.

    // ITERATION 2
    //... your code goes here
  function calculateAll() {
  document.getElementsByClassName(".product");
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    let subtotal2 = "";
    document.querySelector('.subtotal span').innerHTML = subtotal2;
    const singleProduct = document.querySelector('.product');
    updateSubtotal(singleProduct);
    
    // end of test
  }
  // ITERATION 3
  //... your code goes here
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
  });