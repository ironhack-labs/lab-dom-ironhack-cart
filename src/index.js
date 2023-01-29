// ITERATION 1
//https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price > span").textContent
  const quantity = product.querySelector(".quantity > input").value
  const subTotal = (Number(price * quantity)).toFixed(2)

  product.querySelector(".subtotal > span").textContent = subTotal
  return subTotal
  }


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
    //  const singleProduct = document.querySelector('.product')
    // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let sum = 0
  const allProducts = document.querySelectorAll(".product")
  for (let i = 0; i < allProducts.length; i++) {
    sum += Number(updateSubtotal(allProducts[i]))
  }

  // ITERATION 3
  let totalPrice = document.querySelector('#total-value > span')
  totalPrice.innerText = (Number(sum)).toFixed(2)

  return totalPrice.innerText
}

// ITERATION 4
//I cannot solve it!
function removeProduct(event) {
  const target = event.currentTarget;
 
  console.log('The target in remove is:', target);
  const allProducts = document.querySelectorAll(".product")

  for (let i = 0; i < allProducts.length; i++) {
    allProducts[i].addEventListener('click', removeProduct, false)
  }
  document.body.addEventListener('click', removeProduct, false)
  }
  


// ITERATION 5

function createProduct() {
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  

});
