// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText 

  const quantity = product.querySelector('.quantity input').value 

  const subtotal = price * quantity;
  let subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerText = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.getElementsByClassName('product');
  let subtotalResult = 0;

  for (let product of products){
    subtotalResult += updateSubtotal(product);
  }


  // ITERATION 3
  let totalValue = document.querySelector('#total-value span')
  totalValue.innerText = subtotalResult
  return subtotalResult
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  let parent = target.parentNode;
  parent.remove()
}

// ITERATION 5
function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  window.addEventListener('click',() => {
    const removeButton = document.getElementsByClassName('action')
    for (let i = 0; i < removeButton.length; i++){
      removeButton[i].addEventListener('click', removeProduct)
    }

  })
});
