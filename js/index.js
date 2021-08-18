// ITERATION 1

function updateSubtotal(product) {

  let unitPrice = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subTotal = Number(unitPrice.innerHTML) * Number('quantity .value');
  let elementSubtotal = product.querySelector('.subtotal span');
  elementSubtotal.innerHTML = subtotal;
  //console.log('calculating subTotal, yey!');
 

}

// ITERATION 2
  
function calculateAll() {
 

 let products = document.querySelectorAll('.product')
 for (let singleProduct of products){
   updateSubtotal(singleProduct)
 }
  
 let totalPrice = 0
 let products = document.querySelectorAll('.product')
    for (let singleProduct of products) {
  let subTotal = updateSubtotal(singleProduct)

  let subTotal = updateSubtotal(singleProduct)
  totalPrice = totalPrice + subTotal
  
 }

  


  // ITERATION 3

  let elementTotalValue = product.querySelector("#total-value span")
  elementTotalValue.innerText = totalPrice;
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
