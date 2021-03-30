// ITERATION 1
 
function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML; 
  const quantity = product.querySelector(".quantity input").value;
  const totalSum = price * quantity;
  const subTotal = product.querySelector(".subtotal span")
  subTotal.innerHTML = totalSum;
  return totalSum;
}



function calculateAll() {
  const products = [...document.getElementsByClassName('product')];
  const subtotal = products.map(product => updateSubtotal(product));
  let sum =0;
  subtotal.forEach(element => {
    sum += element
  });
  const finalSum = document.querySelector("#total-value span")
  finalSum.innerHTML = sum;
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
