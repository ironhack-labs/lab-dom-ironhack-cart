// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML

  const quantity = product.querySelector('.quantity input').value

  const subTotal = price * quantity
 
  product.querySelector('.subtotal span').innerHTML = subTotal
  
  
  return subTotal

}

function calculateAll() {

  //TESTS
  /*
  code in the following two lines is added just for testing purposes.
  it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  */


  // ITERATION 2
 const everyProduct = document.querySelectorAll('.product .price span').innerHTML
  
  console.log({ everyProduct })

  everyProduct.forEach(function (elemento){
    
    elemento += updateSubtotal

    return updateSubtotal(elemento)

  });
  
  let sumSubtotal 


  // ITERATION 3

  


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
