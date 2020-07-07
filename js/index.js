// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price span').innerHTML);
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  const subtotalAmount = (product.querySelector('.subtotal span').innerHTML = subtotal)
  return subtotalAmount;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach(product => updateSubtotal(product))
  console.log(allProducts)

  // ITERATION 3
  //... your code goes here
  const totalPrice = [...allProducts].reduce((accumulator, currentValue) => 
    accumulator + updateSubtotal(currentValue),0
  )
  const totalValue = (document.querySelector('#total-value span').innerHTML = totalPrice)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target.parentNode.parentNode);
  target.remove();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductsButtons = document.getElementsByClassName('btn-remove');
  Array.from(removeProductsButtons).forEach(removeButton => removeButton.addEventListener('click',removeProduct))


  //... your code goes here
});
