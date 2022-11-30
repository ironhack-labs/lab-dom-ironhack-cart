// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;

  const quantity = product.querySelector('.quantity input').value;

  const subtotal = price * quantity;

  const subtotalElm = product.querySelector('.subtotal span');

  subtotalElm.innerText = subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  //need a function for each class - product
  //if i target through class i get a html infoCollection
  //turn into array to make the function that will run for each product class?
  //can i for each loop?
  const productLine = document.getElementsByClassName("product");
  const productsArray = [...productLine];
  productsArray.forEach(function (product) {
    updateSubtotal(product)
  });


  //i want to create a function that calculates line 1 price x quantity

  // ITERATION 3
  //... your code goes here
  const allSubtotals = document.querySelectorAll('.subtotal span');

  console.log(allSubtotals);
  const subtotalArr = [...allSubtotals];
  
  const newTotalElm = document.querySelector('#total-value span');
  console.log(newTotalElm);
  let newTotal = 0;
  for (let i = 0; i < subtotalArr.length; i++) {
    newTotal += +subtotalArr[i].innerHTML;
   
    newTotalElm.innerText = newTotal;
  }
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const removeButton = document.querySelectorAll(".btnBtn-remove");
  const subtotal = document.querySelectorAll(".subtotal");
  const product = document.querySelectorAll(".product");
removeButton.addEventListener("click", () => {
subtotal.removeAttribute(span)
    //inputElm = document.getElementById("price");
    //console.log("current price....", inputElm.value)
});

  
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
