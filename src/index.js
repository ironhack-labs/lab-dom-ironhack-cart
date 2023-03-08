// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceEl = product.querySelector('.price span'); // <span>
  const quantityEl= product.querySelector('.quantity input').value; // <input>
  const price = Number(priceEl.textContent);// "$25.00" -> Number()
  //const quantity = quantityEl.getAttribute('value');
  let subtotal = price*quantityEl ;
  product.querySelector(".subtotal span").innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = 0 ;
  for(el of document.getElementsByClassName("product")){
    total += updateSubtotal(el);
  };
  document.querySelector("#total-value span").innerHTML = total;
  //console.log(total);
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
