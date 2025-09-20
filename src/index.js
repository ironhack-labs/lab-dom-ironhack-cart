// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  price.innerHTML;
  //console.log(price.innerHTML)
  const quantity = product.querySelector(".quantity input");
  quantity.value;
  //console.log(quantity.value)
  const updatedSubTotal = price.innerHTML * quantity.value;
  //console.log(updatedSubTotal);
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = updatedSubTotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector(".product");
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const product = document.getElementsByClassName("product");
  for (let i = 0; i < product.length; i++) {
    updateSubtotal(product[i]);
  }

  // ITERATION 3
  let totals = 0;
  const totalSums = document.getElementsByClassName('subtotal');
  for (let i = 0; i < product.length; i++) {
    const sumTotals = totalSums[i].querySelector('span').textContent;
    totals += parseFloat(sumTotals);  
  }
  console.log(totals);
  const totalSum = document.querySelector('#total-value');
  totalSum.innerHTML = `Total: $${totals}`;
  return totalSum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  const removeBtn = document.getElementsByClassName('btn btn-remove');
  for(i= 0; i<removeBtn.length;i++){
    console.log("button removed");
    
  }
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
