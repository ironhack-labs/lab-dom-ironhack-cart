// ITERATION 1

function updateSubtotal(product) { //Calculate subtotal of given product
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let productSubtotal = parseFloat(price.innerHTML) * quantity.value;

  product.querySelector('.subtotal span').innerHTML = productSubtotal;

  return productSubtotal
}

function calculateAll() { //On click Calculate Total invoque these function
  // ITERATION 2
  let productList = [...document.querySelectorAll('.product')];

  let totalPrice = 0;

  productList.forEach((product) => {
    totalPrice += updateSubtotal(product);
  });

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = totalPrice;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
//... your code goes here
}

window.addEventListener('load', () => {
  let selectRemove = [...document.querySelectorAll('.product .action .btn-remove')];

  selectRemove.forEach((button)=> {
    button.addEventListener('click',removeProduct);
  })
  
  console.log(selectRemove);

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
