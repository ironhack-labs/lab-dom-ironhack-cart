// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const unitPrice = product.querySelector(".price span");
  const price = Number(unitPrice.innerText);
  console.log(price);
  const quantity = product.querySelector(`.quantity input`);
  const quantityValue = quantity.valueAsNumber;
  console.log(quantityValue);
  subTotalResult = price * quantityValue;
  let subTotalVary = product.querySelector(".subtotal span");
  subTotalVary.innerText = subTotalResult;
  return subTotalResult;

  //... your code goes herex\
}
/*
function calculateAll() {
  const allProducts = document.getElementsByClassName(".product")
  const productArray =[...allProducts];
productArray.forEach(function(element){
  updateSubtotal(element);
}
  }

  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
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
