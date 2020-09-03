// ITERATION 1

  function updateSubtotal(product) {
    const priceElement = product.querySelector('.price span');
    const price = Number(priceElement.innerHTML);
    const quantityElement = product.querySelector('.quantity input');
    const quantity = Number(quantityElement.value);
    const subtotal = price * quantity;
    product.querySelector('.subtotal span').innerHTML = `${subtotal}`;
    return subtotal;
  }

function calculateAll() {
    const allProductsElement = document.querySelectorAll('.product');
    var total = 0;
    allProductsElement.forEach(function(product){
      return total += updateSubtotal(product);
    });
    document.querySelector('#total-value span').innerHTML = `${total}`;
}

  window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
    //const removePricesBtn = product.querySelector('.btn btn-remove');
    //removePricesBtn.addEventListener('click', removeProduct);
  });
  

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

