// ITERATION 1

function updateSubtotal(product) {

    const price = product.querySelector('.price span').innerHTML;
    const quantity = product.querySelector('.quantity input').value;
    const subtotalPrice = (Number(price) * Number(quantity)).toFixed(2)

    const subtotal = product.querySelector('.subtotal span');

    subtotal.innerHTML = subtotalPrice;

    return subtotalPrice
  }


function calculateAll() {

  // ITERACION 2
  const allMyProducts = document.getElementsByClassName('product');

const allProducts = [...allMyProducts];

let total = 0
allProducts.forEach(cart => { 
  total += updateSubtotal(cart)
})

// ITERACION 3

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
