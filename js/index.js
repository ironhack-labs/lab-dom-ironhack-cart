// ITERATION 1
function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input").value;
  const priceValue = price.innerHTML;
  const subTotal = priceValue * quantity;
  const subtots = product.querySelector(".subtotal span");
  subtots.innerHTML = subTotal;
  return subTotal;
}

function calculateAll() {
  // // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const products = document.getElementsByClassName("product");

  console.log(products);

  // console.log(products); //j ai bien les 2
  var total = 0;

  for (let i = 0; i < products.length; i++) {
    var subThots = updateSubtotal(products[i]);
    console.log(subThots)
    total += subThots;
   
    const superduperkyle = document.querySelector("#total-value span");

    superduperkyle.innerHTML= total;
  }
}








// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
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
