// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const quantity = product.querySelector('.quantity input')
  const price = product.querySelector('.price span');
  const subTotalNote = product.querySelector('.subtotal span');

  const subtotal = price.textContent*quantity.value
  subTotalNote.textContent = subtotal

  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  const products = document.querySelectorAll('.product');
  // ITERATION 2

  const totalprice = document.querySelector('#total-value span')

  let totaltoPay = 0

  products.forEach(eachProduct => {
    
    totaltoPay += updateSubtotal(eachProduct);

  })

  totalprice.textContent = totaltoPay

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4
function removeProduct(event) {
/*  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const parenNode = target.parentNode.parentNode

 parenNode.remove()

 calculateAll()
  */
  const target = event.currentTarget.parentNode.parentNode;
  target.parentNode.removeChild(target);

  const total = document.querySelector('#total-value span');
  const subtotal = target.querySelector('.subtotal span');
  total.innerHTML = total.innerHTML - subtotal.innerHTML;
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
