// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const quantityV = quantity.value;
  const priceV = Number(price.innerHTML);
  let newVal = quantityV * priceV;
  const subTotal = product.querySelector(".subtotal span");
  return subTotal.innerHTML = newVal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allprods = document.querySelectorAll('.product');
  let allSums = 0;

  allprods.forEach((product) => {
    allSums += updateSubtotal(product);
  });

  // ITERATION 3
  let totalAmount = document.querySelector("#total-value span") 
  return (totalAmount.innerHTML = allSums);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  target.parentNode.parentNode.remove()
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
