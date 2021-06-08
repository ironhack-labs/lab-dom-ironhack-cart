// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const finalSubtotal = product.querySelector('.subtotal span');
  
  const subtotal = price * quantity;
  finalSubtotal.innerText = subtotal;
  
  return subtotal;
  //console.log(finalSubtotal);
  //console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  const listOfProducts = document.getElementsByClassName('product');
  const arrOfProducts = [...listOfProducts]
  let sum = 0;
  for (let i =0; i < arrOfProducts.length; i++) {
        sum += updateSubtotal(arrOfProducts[i]);
      }
      const theTotal = document.querySelector('#total-value span');
      theTotal.innerHTML = sum;
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
