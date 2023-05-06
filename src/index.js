// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  let subtotalText = product.querySelector('.subtotal span');
  subtotal = price * quantity;

  subtotalText.innerText = subtotal;
  product.querySelector(".subtotal span").innerText = parseFloat(subtotal).toFixed(2);

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  let singleProduct = document.getElementsByClassName("product");
  let total = 0;
  for (let i = 0; i < singleProduct.length; i++) {
    total += updateSubtotal(singleProduct[i]);
  }
  // ITERATION 3
  //... your code goes here

  document.getElementById('total-value').innerHTML = `Total: $${total.toFixed(2)}`
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  target.parentNode.parentNode.remove()
  
  calculateAll()
}

const removeButton = document.getElementsByClassName('btn-remove');
for (let i=0; i<removeButton.length; i++){
  removeButton[i];
  removeButton[i].addEventListener('click', removeProduct);
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
