// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const priceValue = price.textContent
  const quantityValue = quantity.value // the input changes to what the user actually input 
  const subtotal = document.querySelector(".subtotal span")
  const subtotalPrice = priceValue * quantityValue
  subtotal.textContent = subtotalPrice
  return subtotalPrice
  
  // console.log("priceValue", priceValue)
  // console.log("quantityValue", quantityValue)
  // console.log("Subtotal.textContent", subtotal.textContent)
  // console.log('Calculating subtotal ' + subtotalPrice);
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productsTable = document.querySelector("#cart tbody");
  const numberProducts = productsTable.rows.length

  for (i = 0; i < numberProducts; i++) {
    const singleProduct = document.querySelector(`#cart tbody tr:nth-child(${i+1})`)
    console.log("tr", singleProduct)
    updateSubtotal(singleProduct)
    console.log(`Subtotal Price ${i+1} ${updateSubtotal(singleProduct)}`)
  }

  // ITERATION 3
  //... your code goes here
}


function cloneProduct(product) {
  const singleProduct = document.querySelector('.product');
  const cart = document.querySelector("#cart tbody");
  const newProduct = singleProduct.cloneNode(true)
  cart.appendChild(newProduct)
}



// ITERATION 4

// function removeProduct(event) {
//   const target = event.currentTarget;
//   console.log('The target in remove is:', target);
//   //... your code goes here
// }

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => { // wait for everything to be loaded before activating the button
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});


calculateAll()