// ITERATION 1
function updateSubtotal(multiProduct) {
  console.log('Calculating subtotal, yey!');
  for (product of multiProduct) {
    const price = product.querySelector('.price span')
    const quantity = product.querySelector('.quantity input')
    const priceValue = price.innerHTML
    const quantityValue= quantity.value
    let subtotalCalculation= priceValue * quantityValue;
    const subtotals = product.querySelector('.subtotal span');
    subtotals.innerHTML= (subtotalCalculation);
  }
  }

 // ITERATION 2
  function calculateAll() {
    const multiProduct = document.getElementsByClassName('product'); 
    updateSubtotal(multiProduct)
    const subtotal = document.querySelectorAll ('.subtotal span');
    console.log()
    const subtotalValues= Array.from(subtotal).reduce((acc, el) => acc + parseFloat(el.innerHTML), 0)
    const total= document.querySelector ('#total-value span');
    total.innerHTML=(subtotalValues)
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
