// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector("input");
  const subtotal = product.querySelector('.subtotal span');
  return subtotal.innerText= price.innerText * quantity.value;

  
  //... your code goes here
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  alert("pressed");
  // end of test


  // ITERATION 2
  let tot = 0;
  const allProducts = document.getElementsByClassName('product');
  const allProductsArray = [...allProducts];
  allProductsArray.forEach((product) => {
    tot += updateSubtotal(product); //returns the subtotal and adds it to "tot"
  });

  const total = document.querySelector("#total-value span");
  total.innerText = tot;
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log(target);
  target.parentElement.parentElement.remove();
  //console.log(target);
  //console.log(deleteButton);
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
  const deleteButton = document.getElementsByClassName('btn btn-remove');
  console.log(deleteButton);
  let delButtonsArray = [];

  for(let i=0; i < deleteButton.length; i++){
    delButtonsArray.push(deleteButton[i].addEventListener('click', removeProduct));
  }

  //deleteButton.addEventListener('click', removeProduct);
  //... your code goes here
});
