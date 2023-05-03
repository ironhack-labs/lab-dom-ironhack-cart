// ITERATION 1
function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = parseFloat(product.querySelector(".price span").innerHTML);

  const quantity = product.querySelector(".quantity>input");
  const quantityValue = parseInt(quantity.value, 10);

  const resultado = quantityValue * price;
  const subtotal = product.querySelector(".subtotal span");

  subtotal.innerHTML = resultado;

  return resultado;
}

function calculateAll() {
  let allProducts = document.querySelectorAll(".product");
  let total = 0;

  allProducts.forEach((product) => {
    const subtotal = updateSubtotal(product);
    total += subtotal;
  });

  let allSubtotalElements = document.querySelectorAll(".subtotal span");

  let sumtotal = 0;
  allSubtotalElements.forEach((element) => {
    const columnSubtotal = element.innerHTML;
    sumtotal += Number(columnSubtotal);
  });

  let totalPaint = document.querySelector("#total-value span");

  totalPaint.innerHTML = sumtotal;

  return total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  const productRow = target.closest(".product");
  const parentElement = productRow.parentNode;

  parentElement.removeChild(productRow);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtn = document.getElementsByClassName("btn-remove");
  console.log(removeBtn);

  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", removeProduct);
  }
});
