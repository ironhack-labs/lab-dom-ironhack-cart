// ITERATION 1


function updateSubtotal(product) {
  const price = product.querySelector(".price span").textContent;
  const quantity = product.querySelector(".quantity input").value
  const subtotal = product.querySelector(".subtotal span")

  let result = price*quantity

  subtotal.textContent = result.toFixed(2)

  return result
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // console.log(singleProduct);
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const products = document.querySelectorAll('.product');

  const totalValue = document.querySelector("#total-value span");

  let totalResult = 0.00

  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]);
    
    totalResult += updateSubtotal(products[i]);
  }

  // ITERATION 3

  totalValue.textContent = totalResult.toFixed(2)  
}

// ITERATION 4

function removeProduct(event) {
  const currentTarget = event.target;
  const currentProduct = currentTarget.parentNode.parentNode
  1
  currentProduct.remove()

  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll(".btn-remove");
  removeBtn.forEach(button => button.addEventListener("click", removeProduct));
});
