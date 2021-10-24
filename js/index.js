// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
 
    
    const price = parseFloat(product.querySelector('.price span').innerHTML);
    const quantity = parseFloat(product.querySelector('.quantity input').value);
    const subtotalPrice = price * quantity;
    product.querySelector('.subtotal span').innerHTML = subtotalPrice;
    return subtotalPrice 
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
 
  
  
  // end of test

  // ITERATION 2
  //... your code goes here
 const allproduct = document.querySelectorAll('.product');
  console.log(allproduct);
  let totalPrice = 0;
  for (let i = 0; i <allproduct.length; i++) {
    totalPrice += updateSubtotal(allproduct[i]);
    console.log(allproduct[i]);
 
  }



  // ITERATION 3
  //... your code goes here
document.querySelector("#total-value span").innerHTML = totalPrice;

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
