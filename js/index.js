// ITERATION 1
function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  //... your code goes here
  const price = product.querySelector(".price");
  // 25
  const priceText = price.firstElementChild.innerText;

  const quantity = product.querySelector(".quantity");
  // 0
  const quantityValue = quantity.firstElementChild.value;

  product.querySelector(".subtotal span").innerText = priceText * quantityValue;

  return priceText * quantityValue;
  // Extrair o unit Price
}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector(".product");
  //const lineSubtotal = updateSubtotal(singleProduct);
  let total = 0;
  const products = document.querySelectorAll(".product");
  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }
  document.querySelector("#total-value span").innerText = total;
  //console.log(total);
  // Selecionar a td com class 'subtotal' na linha atual
  //const subtotal = singleProduct.querySelector(".subtotal");
  //subtotal.firstElementChild.innerText = lineSubtotal;
  // end of test
  // ITERATION 2
  // ITERATION 3
  //... your code goes here
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
