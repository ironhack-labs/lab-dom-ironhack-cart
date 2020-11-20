// ITERATION 1

function updateSubtotal(product) {
  //console.log("Calculating subtotal, yey!");
  let price = product.querySelector(".price span").innerText;
  let quantity = product.querySelector(".quantity input").value;
  // console.log(price);
  //console.log(quantity);
  let subTotal = price * quantity;
  let subTotalHtml = product.querySelector(".subtotal span");
  subTotalHtml.innerHTML = subTotal;
  console.log(subTotal);
  return subTotal;
}

function calculateAll() {
  // ITERATION 2
  let allProducts = document.querySelectorAll(".product");
  //console.log(allProducts);

  allProducts.forEach((elmt) => {
    updateSubtotal(elmt);
  });
  // ITERATION 3
  /// The most convoluted way to do the total ¯\_(ツ)_/¯

  const allProductsSubTotal = [
    ...document.querySelectorAll(".product .subtotal span"),
  ];
  let totalPrice = document.querySelector("#total-value span");

  const allProductsSubTotalArr = allProductsSubTotal.map((x) =>
    Number(x.innerText)
  );

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  total = allProductsSubTotalArr.reduce(reducer, 0);

  totalPrice.innerHTML = String(total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  setProductName = document.querySelector(
    ".create-product td:nth-child(1) input"
  ).value;
  setProductPrice = document.querySelector(
    ".create-product td:nth-child(2) input"
  ).value;

  let table = document.getElementById("cart");

  let row = document.querySelectorAll("tbody .product")[0];

  let cells = row.cloneNode(true);

  table.appendChild(cells);

  test = document.querySelector("#cart > tr:last-child > td.name > span");

  test2 = document.querySelector("#cart > tr:last-child > td.price > span");

  test.innerText = setProductName;

  test2.innerText = setProductPrice;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtn = document.querySelectorAll(".btn-remove");
  removeBtn.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  });

  const addBtn = document.getElementById("create");
  addBtn.addEventListener("click", createProduct);
});
