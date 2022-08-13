// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');

  const quantityParent = product.querySelector('.quantity');
  const quantityChildValue = quantityParent.firstElementChild.value;

  const subtotal = product.querySelector('.subtotal span');

  let priceSubtotal = price.innerText * quantityChildValue;
  return (subtotal.innerText = priceSubtotal);
}

function calculateAll() {
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  //ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  const allProductsArray = [...allProducts];
  let allProductsSum = 0;
  allProductsArray.forEach((product) => {
    allProductsSum += updateSubtotal(product);
  });

  // ITERATION 3

  const totalElement = document.getElementById('total-value');
  const totalSpan = totalElement.getElementsByTagName('span')[0];

  totalSpan.innerText = allProductsSum;
}

// ITERATION 4

function removeProduct(event) {
  event.currentTarget.parentNode.parentNode.remove();
  console.log(event.currentTarget);
  console.log(event.currentTarget.parentNode.parentNode);
}

// function removeProduct2(element) {
//   element.parentNode.parentNode.remove();
//   console.log(element);
//   console.log(element.parentNode.parentNode);
// }

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('btn-remove');
  const removeBtnArray = [...removeBtn];

  removeBtnArray.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
});
