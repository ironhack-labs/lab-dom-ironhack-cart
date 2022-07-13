// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const priceTwo = price.innerText;

  const quantity = product.querySelector('.quantity input');
  const qtd = quantity.value;

  const qtdPrice = priceTwo * qtd;

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = qtdPrice;

  return qtdPrice;
}

function calculateAll() {

  // ITERATION 2
  let total = 0;

  const allProducts = document.getElementsByClassName('product')
    for (let i = 0; i < allProducts.length; i++){
      total += updateSubtotal(allProducts[i]);
  } 



  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total;


  // ITERATION 3
  //... your code goes here
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
