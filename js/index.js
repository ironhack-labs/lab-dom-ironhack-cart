// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price =  product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  const priceValue = parseFloat(price.innerText);
  const quantityValue = parseInt(quantity.value);

  var subtotal = product.querySelector('.subtotal span');
  subtotal = priceValue * quantityValue;
  product.querySelector('.subtotal span').innerText = subtotal;
  return priceValue * quantityValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.getElementsByClassName('product');
  const productsArr = [...products];

  const totalValuesArr = [];
  let totalValue = 0;

  productsArr.forEach(product => {
    console.log(product);
    const subTotal = updateSubtotal(product);
    console.log(subTotal);
    totalValuesArr.push(subTotal);
    totalValue += subTotal;   
  });

  console.log("Total Value "+totalValue);
  let totalValueElement = document.getElementById('total-value');
  totalValueElement.querySelector("span").innerText = totalValue;
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
