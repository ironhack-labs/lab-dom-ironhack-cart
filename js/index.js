// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price=product.querySelector(`.price span`).innerHTML
  const quantity = product.querySelector(`.quantity input`).value
  
  const subTotal= price * quantity; 

  const $subtotal=product.querySelector(`.subtotal span`)
  $subtotal.innerText = subTotal

  return subTotal



}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  let  $products = document.querySelectorAll(`.product`);
   
  let acumulador= 0;
  $products.forEach(function(prod){
    acumulador += updateSubtotal(prod)

  })


  // ITERATION 3
  //... your code goes here

  document.querySelector(`#total-value span`).innerHTML =acumulador;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //... your code goes here
  target.parentNode.parentNode.remove()

  calculateAll()

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
