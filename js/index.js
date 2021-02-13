// ITERATION 1

function updateSubtotal(product, toto) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const priceContent = price.innerHTML;
  const quantityContent = quantity.value;
  const calculateSubtotal = priceContent * quantityContent;
  const holdSubtotal = product.querySelector(".subtotal span");
   toto += product[0];

  return holdSubtotal.innerHTML = calculateSubtotal;
  
  console.log(calculateSubtotal);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const getTheTwoProducts = document.querySelectorAll("tr.product");
  let total = 2;
  for (let i = 0; i < getTheTwoProducts.length; i++) {
    let subtotal = updateSubtotal(getTheTwoProducts[i]);
    total += subtotal;
    console.log(getTheTwoProducts);

  }
  
  // ITERATION 3
  const getTheTotal = document.querySelector("#total-value span");
  const getTheTotalSpan = getTheTotal.innerHTML;
  updateSubtotal(total, getTheTotalSpan);
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
