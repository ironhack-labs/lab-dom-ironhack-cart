// ITERATION 1

function updateSubtotal(product) {
  // Get the price and quantity elements for the given product
  const priceElement = product.querySelector(".price span");
  const quantityElement = product.querySelector(".quantity input");

  // Get the price and quantity values
  const price = parseFloat(priceElement.textContent);
  const quantity = parseInt(quantityElement.value);

  // Calculate the subtotal
  const subtotal = price * quantity;

  // Update the subtotal value in the HTML
  const subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.textContent = subtotal.toFixed(2);
  return subtotal;
}

function calculateAll() {
  //Point to all the cart rows
  const productRows = document.querySelectorAll("tr.product");
  //Define the total variable and forEach row update the subtotal and the total
  let total = 0;
  productRows.forEach((row) => {
    updateSubtotal(row);
    total += updateSubtotal(row);
  });
  //Point to the total and update it
  const totalElement = document.querySelector("#total-value span");
  totalElement.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event;
  event.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //point to new product name and unit price
  const productNameInput = document.querySelector(".create-product input");
  const unitPriceInput = document.querySelector(".unit-price-input");
  //poit elements to append to
  const tbody = document.querySelector(".tbody-class");

  //create all the elements
  const newTr = document.createElement("tr");

  //append elements
  newTr.classList.add("product");
  newTr.innerHTML = `
  <td class="name">
    <span>${productNameInput.textContent}</span>
  </td>
  <td class="price">$<span>${unitPriceInput.textContent}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
`;
  tbody.appendChild(newTr);
}

window.addEventListener("load", () => {
  //calculate all click event
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  //create button click event
  const createProductBtn = document.getElementById("create");
  createProductBtn.addEventListener("click", createProduct());
  //remove button click event
  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach(function (button) {
    button.addEventListener("click", function () {
      let targetToRemove = event.target.parentNode.parentNode;
      console.log(targetToRemove);
      removeProduct(targetToRemove);
    });
  });
});
