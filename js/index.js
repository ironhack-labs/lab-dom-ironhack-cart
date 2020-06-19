// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector(".price span").textContent);
  const quantity = Number(product.querySelector(".quantity > input").value);
  const subtotal = price * quantity;
  product.querySelector(".subtotal span").textContent = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = Array.from(document.getElementsByClassName("product")); // HTMLCollection => Array
  let mapProdcuts = products.map((product) => updateSubtotal(product));
  // Loop thru array, fire updateSubtotal with each product. Product is a 'tr' nodes
  // mapProducts returns an array with each item's subtotal price

  // ITERATION 3

  let totalCart = mapProdcuts.reduce((acc, curr) => acc + curr, 0);
  // totalCart is the sum of each item's subtotal price
  document.querySelector("#total-value > span").textContent = Number(totalCart);
  // Inject totalCart amount to its corresponding html node
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  let newProductName = document.querySelector(
    ".create-product td:first-child input "
  ).value; // Gets the input value within 1st < td >
  let newProductPrice = document.querySelector(
    ".create-product td:nth-child(2) input"
  ).value; // Gets the input value within 2nd < td >
  let injectNewProduct = document.querySelector("tbody");
  injectNewProduct.innerHTML += `<tr class="product">
  <td class="name">
    <span>${newProductName}</span>
  </td>
  <td class="price">$<span>${newProductPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;

  document.querySelector(".create-product td:first-child input").value = ""; // Clear input value
  document.querySelector(".create-product td:nth-child(2) input").value = 0; // Reset input value again.
}

function removeBtns() {
  const removebtns = document.querySelectorAll(".btn.btn-remove"); // NodeList
  removebtns.forEach((btn) => btn.addEventListener("click", removeProduct)); // Add e. listener to each remove btn
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  removeBtns();

  const newProductBtn = document.querySelector("#create");
  newProductBtn.addEventListener("click", () => {
    createProduct();
    removeBtns();
  });
});
