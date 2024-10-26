// ITERATION 1

function updateSubtotal(product) {
 // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantityElement = product.querySelector(".quantity input").value;

  const subTotalElement = parseInt(price) * quantityElement;
 
  product.querySelector(".subtotal span").innerText = subTotalElement;

  return subTotalElement;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');
 // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productTr = document.querySelectorAll('.product');
  let totalSum = 0;
  productTr.forEach(product => {
    updateSubtotal(product);
    totalSum += updateSubtotal(product);
  });


  // ITERATION 3
  document.querySelector("#total-value span").innerText = totalSum;
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
