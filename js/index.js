// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML
  const quantity = product.querySelector(".quantity input").value
  const subTotal = product.querySelector(".subtotal span")

  let subTotalNumber = price * quantity

  subTotal.innerHTML = subTotalNumber
  return subTotalNumber

  alert('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  const products = document.querySelectorAll(".product")
  let totalValue = document.querySelector("#total-value span").innerHTML

  let totalPrice = 0
  
  for( let i = 0; i<products.length; i++){
    updateSubtotal(products[i])
    totalPrice += updateSubtotal(products[i])
  }
  document.querySelector("#total-value span").innerHTML = totalPrice



  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let td = target.parentNode
  let tr = td.parentNode
  let tbody = tr.parentNode

  console.log(td)
  console.log(tr)
  tbody.removeChild(tr)



}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeProductBtn = document.querySelectorAll(".btn-remove")
  
  for (let i = 0; i < removeProductBtn.length; i++){
    removeProductBtn[i].addEventListener("click", removeProduct)
  }
});
