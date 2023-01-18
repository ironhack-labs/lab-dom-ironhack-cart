// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span").innerText;
  let quantity = product.querySelector(".quantity input").value;
  let subtotalPrice = price * quantity;

  product.querySelector(".subtotal span").innerText = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let allProducts = document.getElementsByClassName("product");
  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
  }
  // ITERATION 3
  let total = 0;
  for (let i = 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i]);
  }
  document.querySelector("h2 span").innerText = total;
}

//   const products = document.querySelectorAll(".product");

//   for (let i = 0; i < products.length; i++) {
//     let total = 0;
//     total += updateSubtotal(products)[i];
//     total = document.querySelector("#total-value span").innerText;
//   }

//   return total;
// }

// const singleProduct = document.querySelector(".product");
// updateSubtotal(singleProduct);

// end of test

// ITERATION 2
//... your code goes here
// const total = updateSubtotal(product);
// documrnt.querySelector("total-value span").innerHTML = total;

// ITERATION 3
//... your code goes here

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  target.parentNode.parentNode.remove();

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log("create");
}

window.addEventListener("load", () => {
  const createProductBtn = document.querySelector("#create");
  createProductBtn.addEventListener("click", createProduct());
});

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});

const removeButton = document.querySelectorAll(".btn-remove");

for (let i = 0; i < removeButton; i++) {
  removeButton[i].addEventListener("click", removeProduct());
}
