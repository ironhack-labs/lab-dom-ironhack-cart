// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  const price = product.querySelector('.price span')

  const quantity = product.querySelector('.quantity input').value

  const subtotal = product.querySelector('.subtotal span')

  const productPrice = price.innerHTML

  const productSubtotal = quantity * productPrice

  productSubtotal = subtotal.innerHTML


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test


  // ITERATION 2
  //... your code goes here

  const severalProducts = product.getElementsByClassName('.price span')




  // const suma = 0

  // for (let i = 0; i < severalProducts; i++) {
  //   suma += severalProducts[i]
  // }

  console.log(suma)

  updateSubtotal(severalProducts)





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
