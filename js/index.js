// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  let subTotal = price * quantity;

  product.querySelector('.subtotal span').innerText = subTotal

  return subTotal;
}

function calculateAll() {
  
  let allProduct = document.querySelectorAll('.product')
  let totalSub = 0;
  allProduct.forEach(function(products){
    totalSub += updateSubtotal(products)
  })

  console.log(totalSub)
  
  document.querySelector('#total-value span').innerHTML = totalSub;

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

  let removeButton = document.querySelectorAll('.btn btn-remove')
  removeButton.forEach(function(button){
    button.addEventListener('click', removeProduct);

    // ????
    
})
})
