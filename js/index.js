// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = parseFloat(product.querySelector('.price span').innerHTML);
  const quantily = parseFloat(product.querySelector('.quantity input').value);
  const subtotalPrice = parseFloat(price * quantily);


  document.querySelector('.subtotal span').innerHTML = subtotalPrice;

  return subtotalPrice;

}


// ITERATION 2
//tengo que crear un loop para los artículos y que, a cada producto, le pase el precio y la cantidad que le meto
function calculateAll() {
  const total = 0;
  const productArray = document.querySelectorAll('.product')
  productArray.forEach(arrEl => {
    total += updateSubtotal(arrEl);
  });

  //... your code goes here

  // ITERATION 3
  //... your code goes here
  const totalCar = document.querySelector('#total-value span').value;
  totalCar.textcontent = total;
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
})