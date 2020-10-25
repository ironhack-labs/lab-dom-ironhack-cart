// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  //console.log(`This is the value ${price}`)
  // console.log(`This is the ${quantity}`);

  const subtotalPrice = price * quantity;
  //console.log(`subtotal es ${subtotalPrice}`)

  product.querySelector('.subtotal span').innerHTML = subtotalPrice;
  //console.log(`value of ${subtotal}`)

  return subtotalPrice;

  //... your code goes here
}




// code in the following two lines is added just for testing purposes.
// it runs when only iteration 1 is completed. at later point, it can be removed.
// const singleProduct = document.querySelector('.product');
// updateSubtotal(singleProduct);
// end of test

// ITERATION 2
function calculateAll() {

  const products = document.querySelectorAll('.product');
  // console.log(products)

  const subtotalByProduct = [];

  products.forEach(function (elm) {
    subtotalByProduct.push(updateSubtotal(elm));
    // console.log(subtotalByProduct);
  });




  //... your code goes here

  // ITERATION 3

  let sum = 0;
  for (let i = 0; i < subtotalByProduct.length; i++) {
    sum += subtotalByProduct[i];
  }
  // console.log(sum);

  document.querySelector('#total-value span').innerHTML = sum;
  //console.log(total)
}



//... your code goes here

// // ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //   //... your code goes here
}

// // ITERATION 5

function createProduct() {
  //   //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //   //... your code goes here
});
