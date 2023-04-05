// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  const subtotal = parseFloat(price.innerHTML) * parseFloat(quantity.value);

  // Gets DOM element with class "subtotal" and then the span inside it
  const subtotalEl = product.querySelector(".subtotal span");

  // Sets the innerHTML of the span to the subtotal
  subtotalEl.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll(".product");
  // console.log(products);
  let totalSum = 0;

  products.forEach((product) => {
    totalSum += parseFloat(updateSubtotal(product));
  });

  // ITERATION 3
  const total = document.querySelector("#total-value span");
  total.innerHTML = totalSum.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  // First parent node is the td, second is the tr (the product), which is what we want to remove
  console.log(event.currentTarget.parentNode.parentNode);
  //
  event.currentTarget.parentNode.parentNode.remove();

  // Updates the total price
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector(
    // Selects the input field with type text
    ".create-product td input[type='text']"
  );
  const priceInput = document.querySelector(
    ".create-product td input[type='number']"
  );
  // Gets the values from the input fields
  const name = nameInput.value;
  const price = priceInput.value;

  // Creates a new row
  const tbody = document.querySelector("#cart tbody");
  const newRow = document.createElement("tr");

  // Adds the class "product" to the new row
  newRow.classList.add("product");
  newRow.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  // Adds event listener to the remove button
  const removeBtn = newRow.querySelector(".btn-remove");
  removeBtn.addEventListener("click", removeProduct);

  // Adds new row to table
  tbody.appendChild(newRow);

  // Clear input fields
  nameInput.value = "";
  priceInput.value = "";
}

// Event Listeners

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  // Event listener for remove buttons
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((button) => {
    // On click, removeProduct is called
    button.addEventListener("click", removeProduct);

    const createButton = document.querySelector("#create");
    createButton.addEventListener("click", createProduct);
  });
});
