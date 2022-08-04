// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span');
  const priceNum = +price.innerText;
  const quantity = product.querySelector('.quantity input');
  const quantityNum = +quantity.value;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = priceNum * quantityNum;
  return priceNum * quantityNum; 

}

function calculateAll() {

  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll(".product")
    let totalPrice = 0;

    for (let i = 0; i < products.length; i++){
      totalPrice += updateSubtotal(products[i]);
    }

  // ITERATION 3
  let result = document.querySelector("#total-value span")
  result.innerHTML = totalPrice;
}

// ITERATION 4