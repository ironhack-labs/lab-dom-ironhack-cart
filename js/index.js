// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;
  const subTotalPrice = priceValue * quantityValue;
  const subTotal = product.querySelector('.subtotal span');
  const subTotalCalc = subTotal.innerHTML = subTotalPrice;

  return subTotalPrice;
}
// looks too long - but apparently works?

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let allProducts = document.querySelectorAll('.product');
  allProducts = [...allProducts];

  let totalValue = 0;
  allProducts.forEach(function (element) {
     updateSubtotal(element);
     totalValue += updateSubtotal(element)
  })

  let totalRows = document.querySelector("#total-value span")
  totalRows.innerText = totalValue;
  
  
  // ITERATION 2
  //... your code goes here

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
