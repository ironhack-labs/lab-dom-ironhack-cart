// ITERATION 1

function updateSubtotal(product) {
  // console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subtotalClass = product.querySelector(".subtotal span");
  let subtotal = price * quantity;

  subtotalClass.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll(".product");

  allProducts.forEach((product) => {
    updateSubtotal(product);
  });

  // ITERATION 3
  const subtotalSelection = document.querySelectorAll(".subtotal span");
  const totalValue = document.querySelector("#total-value span");

  let subtotalFinal = 0;

  subtotalSelection.forEach((product) => {
    subtotalFinal += Number(product.innerHTML);
  });

  totalValue.innerHTML = subtotalFinal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.parentNode.parentNode.remove();
  calculateAll();
  // console.log("The target in remove is:", target);
}

// ITERATION 5

function createProduct() {
  const name = document.querySelector(".create-product > td > input");
  const price = document.querySelector(
    ".create-product > td:nth-child(2) > input"
  );
  const tbody = document.querySelector("tbody");

  tbody.innerHTML += `<tr class="product">
  <td class="name">
    <span>${name.value}</span>
  </td>
  <td class="price">$<span>${price.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;

  function clear() {
    name.value = "";
    price.value = "";
  }

  clear();
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
});

window.addEventListener("click", () => {
  const btnRemove = document.querySelectorAll(".btn.btn-remove");
  btnRemove.forEach((removal) => {
    removal.addEventListener("click", () => removeProduct(removal));
  });
  const addBtn = document.querySelector("#create");
  addBtn.addEventListener("click", createProduct);
});
