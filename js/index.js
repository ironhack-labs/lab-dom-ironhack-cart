// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = price.innerHTML * quantity.value;
  return subtotal;

  //... your code goes here
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName("product");
  let total = Array.from(allProducts).map((item) => updateSubtotal(item));

  
  // ITERATION 3
  //... your code goes here
  let displayTotal = document.querySelector("#total-value span");
  function totalReducer(sum, item){
    //+ before to convert them into numbers because they are string right now
    return +sum.innerText + +item.innerText;
  }
  displayTotal.innerText = total.reduce(totalReducer);
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
