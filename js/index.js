// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");
  let productSubtotal = parseFloat(price.innerHTML) * quantity.value;

  product.querySelector(".subtotal span").innerHTML = productSubtotal;

  return productSubtotal;
}

function calculateAll() {
  // ITERATION 2
  let productList = [...document.querySelectorAll(".product")];
  let totalPrice = 0;

  productList.forEach((product) => {
    totalPrice += updateSubtotal(product);
  });

  // ITERATION 3
  document.querySelector("#total-value span").innerHTML = totalPrice;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  const newTr = document.createElement("tr");
  const createProd = document.querySelector(".create-product");
  let newProductName = createProd.querySelector("#new-name");
  let newProductPrice = createProd.querySelector("#new-price");

  let tableRow = `<td class="name">
  <span></span>
</td>
<td class="price">$<span></span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;

  newTr.classList.add("product");
  newTr.innerHTML = tableRow;

  newTr.querySelector(".price span").innerText = newProductPrice.value;
  newTr.querySelector(".name span").innerText = newProductName.value;

  const removeButton = newTr.querySelector(".action .btn-remove");
  removeButton.addEventListener("click", removeProduct);

  document.querySelector("tbody").appendChild(newTr);

  newProductName.value = "";
  newProductPrice.value = 0;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const addProduct = document.getElementById("create");
  addProduct.addEventListener("click", createProduct);

  let selectRemove = [
    ...document.querySelectorAll(".product .action .btn-remove"),
  ];

  selectRemove.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });

  console.log(selectRemove);
});
