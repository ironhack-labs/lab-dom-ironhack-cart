// ! Iteration 1
const updateSubtotal = (product) => {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const calculate = price.innerHTML * quantity.value;

  return (product.querySelector(".subtotal span").innerHTML = calculate);
}

// ! Iteration 2
const calculateAll = () => {
  let total = 0;
  const singleProduct = document.querySelectorAll(".product");
  singleProduct.forEach((pro) => {
    total += updateSubtotal(pro);
  });

  // ! Iteration 3
  document.querySelector("#total-value span").innerHTML = total;
}

// ! Iteration 4
const removeProduct = (event) => {
  const target = event.currentTarget;
  const tbody = document.querySelector("tbody");
  tbody.removeChild(target.parentNode.parentNode);
}

// ! Iteration 5

const createProduct = () => {
  const createInput = document.querySelectorAll(".create-product input")[0]
.value;
  const createPrice = document.querySelectorAll(".create-product input")[1]
    .value;

  const parent = document.querySelector("tbody");
  const product = document.querySelector(".product");
  const newProduct = product.cloneNode(true);

  newProduct.querySelector(".name span").innerHTML = createInput;
  newProduct.querySelector(".price span").innerHTML = createPrice;
  newProduct.querySelector(
    ".quantity"
  ).innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />`;

  newProduct.querySelector(".subtotal").innerHTML = `$<span>0</span>`;
  newProduct.querySelector(
    ".action"
  ).innerHTML = `<button class="btn btn-remove">Remove</button>`;
  parent.appendChild(newProduct);

  // * Same button as above on window.addEventListener. Needed to put it here to work on the new products that we create.
  const removeBtn = document.querySelectorAll(".btn-remove");
  for (let btn of removeBtn) {
    btn.addEventListener("click", removeProduct);
  }
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  // ! Iteration 4
  const removeButton = document.querySelectorAll(".btn-remove");

  for (let btn of removeButton) {
    btn.addEventListener("click", removeProduct);
  }

  // ! Iteration 5
  const addProductBtn = document.querySelector("#create");
  addProductBtn.addEventListener("click", createProduct);
});