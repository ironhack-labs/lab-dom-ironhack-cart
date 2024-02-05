// ITERATION 1 --------------------------------------------------------

function updateSubtotal(product) {

  const price = parseInt(product.querySelector('.price span').textContent);
  const  quantity = parseInt(product.querySelector('.quantity input').value);
  const  subtotal =  price * quantity;

  product.querySelector('.subtotal span').textContent = subtotal.toFixed(2);

  return subtotal;
}


function calculateAll() {

  const singleProduct = document.querySelector('.product');
  let totalValue = updateSubtotal(singleProduct);

}

calculateAll()

// ITERATION 2 ------------------------------------------------------


// ITERATION 3 ------------------------------------------------------

function calculateAll() {
  const product = document.querySelectorAll(".product")
  let total = 0

  for (let i = 0; i < product.length; i++) {
    let singleProduct = product[i]
    total = total + updateSubtotal(singleProduct)
  }

  const totalCart = document.querySelector('#total-value span')
  totalCart.innerHTML = total
}

// ITERATION 4 ---- BONUS -------------------------------------------

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

}

// ITERATION 5 ------------------------------------------------------

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
})
