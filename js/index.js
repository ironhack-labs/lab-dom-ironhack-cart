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

  //This took me forever. Why does the below return an HTMLCollection with a length of 1?
  //const totalSpan = totalElement.getElementsByTagName('span')

  //For classes much easier :)  product.querySelector('.price span')

  const totalElement = document.getElementById('total-value');
  const totalSpan = totalElement.getElementsByTagName('span')[0];

  //This also had me confused. Why does:
  // const totalSpan = totalElement.getElementsByTagName('span')[0].innerText
  //Correctly select the span inner text, but then
  // totalSpan = allProductsSum
  //will not correctly adjust total on the page? Meaning, it has to be written so:
  totalSpan.innerText = allProductsSum;
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
