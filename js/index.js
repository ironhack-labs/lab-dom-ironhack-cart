// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  
  let subTotalPrice = price * quantity;

  let subtotalValue = product.querySelector('.subtotal span');

  subtotalValue.innerHTML = subTotalPrice;

  return subtotalValue;
  
}



function calculateAll() {
  /*
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
  */
  
  
  // ITERATION 2
  
  let cartElement = document.querySelectorAll(".product");
  let totalSubPrice = 0;

  cartElement.forEach(function (cartItem){
    totalSubPrice += updateSubtotal(cartItem);
  });



  // ITERATION 3
  //... your code goes here
  let totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = totalSubPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  

  //FIRST WAY OF DOING IT
 
  /*let btnParent = target.parentNode.parentNode;
  btnParent.remove();*/

  
  //SECOND WAY OF DOING IT
  target.closest("tr").remove();

}



// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  let removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach(function(removeBtn){
    removeBtn.addEventListener('click', removeProduct);
  })
});
