// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = quantity * price;
  let sub = product.querySelector(".subtotal span");
  sub.innerHTML = subtotal;
  return subtotal;

  //... your code goes here
}
// ITERATION 2

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  const products = document.querySelectorAll(".product")

  // ITERATION 3

  let total = document.querySelector('#total-value span')

  let sum = 0
  products.forEach((elm, idx) => {
    sum += updateSubtotal(elm)
  })
  total.innerHTML = sum


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

// OTRA FORMA DE ESCUCHAR EL CLICk document.getElementById("calculate").onclick = calculateAll
