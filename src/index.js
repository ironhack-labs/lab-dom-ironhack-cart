// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const subtotalPrice = price.innerHTML * quantity.value 
  const subTotal = product.querySelector(".subtotal span")
  
  
  return subTotal.innerHTML = subtotalPrice

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 /*  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  //... your code goes here

  const allItems = document.getElementsByClassName("product")
   let totalSum = 0 
  for (i = 0; i < allItems.length; i++) {
       
       totalSum += updateSubtotal(allItems[i])
  }

  // ITERATION 3
  //... your code goes here
 document.querySelector("#total-value span").innerHTML = totalSum

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log(`The target in remove is:`, target.parentNode.parentNode)

  //... your code goes here
 target.parentNode.parentNode.remove()


  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removedProduct = document.querySelectorAll('.btn-remove')

  //... your code goes here
  removedProduct.forEach(product => product.addEventListener('click', removeProduct));  // loop that loops through each removebutton and add and eventListener (listens to the action/event of a ‘click’)

  //... your code goes here
});
