// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  console.log(price);
  const quantity = product.querySelector(".quantity input").value;
  console.log(quantity);
  let subtotal = price * quantity;
  product.querySelector(".subtotal span").innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  const allProducts = document.querySelectorAll(".product");
  for (let product of allProducts) {
    updateSubtotal(product);
  }
  let total = 0;
  for (let product of allProducts) {
    total += updateSubtotal(product);
  }
  document.querySelector("#total-value span").innerHTML = total;
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  const parent = document.querySelector('#cart')
  parent.
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const remove = document.querySelectorAll(".btn-remove");
  remove.forEach(function (item) {
    item.addEventListener("click", removeProduct);
  });
});
