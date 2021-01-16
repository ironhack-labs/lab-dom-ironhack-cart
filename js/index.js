// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector(".price span")
  const quantity = product.querySelector(".quantity input")
  //console.log(quantity.value)

  const subtotalValue = price.textContent * quantity.value
  //console.log(subtotalValue)

  const subtotal = product.querySelector(".subtotal span")
  subtotal.textContent = subtotalValue
  // console.log(subtotal.textContent)
  // console.log(subtotalValue)
  return subtotalValue
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here
  let sum = 0
  const products = document.getElementsByClassName("product")
  for (i = 0; i < products.length; i++) {
    updateSubtotal(products[i])
    //console.log(products[i].querySelector(".subtotal span").textContent)
    sum += parseFloat(products[i].querySelector(".subtotal span").textContent)
  }

  // ITERATION 3
  //... your code goes here
  const totalValue = document.querySelector("#total-value span")
  totalValue.textContent = sum

  //console.log(totalPrice.textContent)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  //console.log('The target in remove is:', target);
  //... your code goes here
  document.querySelector("tbody").removeChild(target)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll(".btn-remove");
  //console.log(removeButtons)
  removeButtons.forEach(eachButton => {
    // console.log("this is a remove button" + eachButton)
    eachButton.onclick = (e) => {
      removeProduct(e)
    }
    }
  )

  //... your code goes here
} );
