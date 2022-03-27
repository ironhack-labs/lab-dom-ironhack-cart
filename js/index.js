// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector(".price span")
  let priceValue = price.innerText
 
  let quantity = product.querySelector(".quantity input")
  let quantityValue = quantity.value
 
  subtotalPrice = priceValue * quantityValue
 
  let subtotalInput = product.querySelector(".subtotal span")
  
  subtotalInput.innerText = subtotalPrice

  return subtotalPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const products = document.querySelectorAll(".product")

  products.forEach(eachProduct => {
    let sum = 0
    sum = updateSubtotal(eachProduct)
    return sum
  });

  // ITERATION 3
  //... your code goes here

  let subtotalArr = document.querySelectorAll(".subtotal span")
  let valueArr = []
  let totalValue = 0

  for (let i = 0; i < subtotalArr.length; i++){
      valueArr.push(subtotalArr[i].innerText)
  }

  for (let i = 0; i < valueArr.length; i++){
    totalValue += valueArr[i]*1
  }



  let total = document.querySelector("#total-value span")
  total.innerText = totalValue
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  remove = target.parentNode.parentNode
  remove.parentNode.removeChild(remove)

  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  // unitPrice = document.querySelectorAll(".create-product > td")

  // console.log(unitPrice);

}
// createProduct()

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


  let removeButton = document.getElementsByClassName("btn-remove")
  for (i = 0; i < removeButton.length; i++){
    removeButton[i].addEventListener("click", removeProduct)
  }

  const createProduct = document.getElementById("create")
  createProduct.addEventListener("click", createProduct)

  //... your code goes here
});
