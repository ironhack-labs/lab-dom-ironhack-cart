// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!', product);

  //... your code goes here
  const priceNode = product.querySelector('.price > span');
  const quantityNode = product.querySelector('.quantity > input');
  const price = Number (priceNode.textContent);
  const quantity = Number (quantityNode.value)
  subtotalValue = price * quantity;

  const subtotalNode = product.querySelector('.subtotal > span')
  subtotalNode.textContent = subtotalValue.toFixed(2);
  return subtotalValue;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const dobleProducts = document.getElementsByClassName('product');
  

  Array.from(dobleProducts).forEach((product) => {
  updateSubtotal(product);
  
  })

  

  // ITERATION 3
  //... your code goes here
 // const subtotalNode1 = document.getElementsByClassName('.subtotal > span');
  let totals = 0;
  Array.from(dobleProducts).forEach((subtotalNode) =>{
    totals += updateSubtotal(subtotalNode)
    
  })
  console.log('Total:', totals.toFixed(2))

  const calculateTotalNode = document.querySelector ('h2 > span');
  calculateTotalNode.textContent = totals;



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
