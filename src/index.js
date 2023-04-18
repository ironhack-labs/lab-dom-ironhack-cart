// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span")
  let quantity = product.querySelector('.quantity input')

  let total = price.innerHTML * quantity.value

  let subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = total

  return total
}
// ITERATION 2   
function calculateAll() {
  const allProducts = document.getElementsByClassName("product");
  let total = 0;

  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
    total += updateSubtotal(allProducts[i]);
  }

  // ITERATION 3
  let allPrices = document.querySelector('#total-value span')
  allPrices.innerHTML = total;
}


// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  target.parentNode.parentNode.remove();



  }

  const removeButton = document.getElementsByClassName('btn-remove');
  for (let i=0; i<removeButton.length; i++){
    removeButton[i];
    removeButton[i].addEventListener('click', removeProduct);

  }

// ITERATION 5



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
})
  //... your code goes here
