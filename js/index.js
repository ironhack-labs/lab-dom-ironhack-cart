// ITERATION 1
function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span");
  //target the .price span class (the span inside the price)
  const quantity = product.querySelector(".quantity input").value;
  //target value of the quantity class
  const priceValue = price.innerHTML;

  //price value va indiquer la value de l'innerhtml
  const subTotal = priceValue * quantity;
  //simple multipication, prix times quantity = subtotal
  const subtots = product.querySelector(".subtotal span");
  //j accède a la class subtotal > span
  subtots.innerHTML = subTotal;
  //et je push ( innerhtml MON RESULTAT SUBTOTAL ( LA MU))
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
    console.log(subThots);
    total += subThots;

    const superduperkyle = document.querySelector("#total-value span");

    superduperkyle.innerHTML = total;
  }
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  dads = target.parentNode.parentNode;
  dads.parentNode.removeChild(dads);
  //Yeaaaaaaaaaaaaaahhhhhhhhhhhhh
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  const rmvbtn = document.querySelectorAll(".btn-remove");
  console.log(rmvbtn);
  rmvbtn.forEach((toto) => {
    toto.addEventListener("click", removeProduct);
    //console.log(toto);
  });

  //... your code goes here
});
