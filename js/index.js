// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span")
  const quantity = product.querySelector(".quantity input")

  const priceValue = price.textContent 
  const quantityValue = quantity.value

  const totalPay = priceValue * quantityValue

  const suntot = product.querySelector(".subtotal span")
  suntot.textContent = totalPay
  return totalPay
   

  console.log(priceValue)
  console.log(quantityValue)
  console.log(totalPay)
  console.log(suntot)
  console.log()
  console.log()
  console.log('Calculating subtotal, yey!');
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName("product")
  const allProducts2 = [...allProducts]
  const totalValue = document.querySelector("#total-value span")
  let number = 0

  for(let i=0; i<allProducts2.length; i++){
    const subtota = updateSubtotal(allProducts2[i])
    number += subtota
  }
  
  
  totalValue.textContent = number
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
