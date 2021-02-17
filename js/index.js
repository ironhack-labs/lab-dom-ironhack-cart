// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

 
  const price = product.querySelector(".price span"); //1st part




  const quantity = product.querySelector(".quantity input"); //1st part




  let priceValue = Number(price.innerHTML); //2nd part



  let quantityValue = quantity.value; //2nd part
 


  let subTotal = priceValue * quantityValue; // 3rd part
 

  
  const newSubtotal = product.querySelector(".subtotal span"); // 4th part


  newSubtotal.textContent = `${subTotal}`; //5th part
  return subTotal;
}

function calculateAll() {
  
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
 

  // ITERATION 2
  //... your code goes here
  let total = 0;
  let products = document.getElementsByClassName("product");
  Array.from(products).forEach(function (items) {
    total += updateSubtotal(items);
  });


  // ITERATION 3
  //... your code goes here
  const updatedTotal = document.querySelector("#total-value span");

  updatedTotal.textContent = `${total}`;
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
