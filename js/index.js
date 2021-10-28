// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');
  let result = price * quantity

  subtotal.textContent = result;
  return result
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let subTotalResult = 0;
  allProducts.forEach((eachProduct) => {
    subTotalResult += updateSubtotal(eachProduct);
  })

  let total = document.querySelector("#total-value span");
  total.textContent = subTotalResult;
};

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
 
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
