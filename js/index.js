

// ITERATION 1
function updateSubtotal(product) {


const price = product.querySelector(`.price span`).innerText;
const quantity = product.querySelector(`.quantity input`).value;
const subTotal = price * quantity;
product.querySelector(`.subtotal span`).innerText = subTotal;

return subTotal;
}

function calculateAll() {
  
  // ITERATION 2
 const productsArray =  Array.from(document.getElementsByClassName('product'));
 
let totalPrize = 0;
 productsArray.forEach(function(productElement){
  totalPrize+= updateSubtotal(productElement);
     })

 console.log(totalPrize);

  // ITERATION 3
 document.querySelector('#total-value span').textContent = totalPrize;
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
