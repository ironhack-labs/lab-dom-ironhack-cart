// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  var subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = Number(price.innerHTML) * quantity.value;
  return Number(subtotal.innerHTML);
}

//... your code goes here

function calculateAll() {
  //    var prod = cart.querySelectorAll(".product");

  //   prod.forEach((product) => {
  //     updateSubtotal(product);
  //    });
  // }

  var prod = cart.getElementsByClassName("product");
  let somme = 0;
  for (let i = 0; i < prod.length; i++) {
    somme = somme + updateSubtotal(prod[i]);
  }
  let total = document.querySelector("#total-value span");
      total.innerHTML=somme
}

// code in the following two lines is added just for testing purposes.
// it runs when only iteration 1 is completed. at later point, it can be removed.
// const singleProduct = document.querySelector('.product');
// updateSubtotal(singleProduct);
// end of test

// ITERATION 2
//... your code goes here

// ITERATION 3
//... your code goes here

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

window.addEventListener("click", () => {
  const btn = document.querySelectorAll("btn-remove");
  btn.forEach((bouton) => {
    bouton.onclick;
  });
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
