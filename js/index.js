// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  let sum = price * quantity;

  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = sum;
  return sum ;
}

function calculateAll() {
    // ITERATION 2
    let total = 0;
  const products = document.querySelectorAll('.product');
  console.log(products)
  for (let i = 0; i <products.length; i++) {
    total += updateSubtotal(products[i]);
  }
  console.log(total);

  // ITERATION 3
  //... your code goes here
  let totalspan = document.querySelector('#total-value span')
   console.log(totalspan);
  totalspan.innerHTML = total
  // console.log(totalspan); 
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
console.log("hello")
 
}

document.getElementById("create").addEventListener("click", createProduct);


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

});
