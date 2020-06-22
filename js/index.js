@@ -1,63 +1,77 @@
// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;

  const subtotalSum = Number(price) * Number(quantity);
  product.querySelector(".subtotal span").innerText = subtotalSum;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
  const productElements = document.getElementsByClassName("product"); // = every product
  var total = 0;

  // ITERATION 2

  for (let i = 0; i < productElements.length; i++) {
    updateSubtotal(productElements[i]);
    total += Number(
      productElements[i].querySelector(".subtotal span").innerText
    );
  }

  // ITERATION 3
  document.querySelector("#total-value span").innerText = total;
}

/*
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
