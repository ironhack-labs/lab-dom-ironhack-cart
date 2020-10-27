// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subTotalCalculation = parseFloat(price) * parseFloat(quantity)
  const subTotal = product.querySelector(".subtotal span");
  subTotal.innerHTML = subTotalCalculation;
  return subTotal 
}

function calculateAll() {

  
  const selectedProducts = document.getElementsByClassName('product');

  // ITERATION 2

  let totalValue = 0;

  for (selectedProduct of selectedProducts) {
    totalValue += updateSubtotal(selectedProduct)
  }



  // for (let i = 0; i < selectedProduct.length; i++) {
  //   subtotalResult += updateSubtotal(selectedProduct[i]);
  
  // }

  
  // ITERATION 3

 const total = document.querySelector('#total-value span');
 const subtotals = document.querySelectorAll(".subtotal span")
 const subtotalCounter = [...subtotals]

 let subtotalTotal = 0
 subtotalCounter.forEach((product)=> {
   subtotalTotal += Number(product.innerText)
 })
 
total.innerText = subtotalTotal

  // const totalCounter = document.getElementById("total-value");
  // totalCounter.innerHTML = subtotalResult
 


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
