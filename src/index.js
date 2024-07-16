// ITERATION 1

function updateSubtotal(product) {
  // Get DOM elements [price & quantity]
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  // Extract input value :)
  const priceValue = parseFloat(price.innerText);
  const quantityValue = quantity.valueAsNumber;

  // Calculate these values
  const subtotalValue = priceValue * quantityValue;

  // Get DOM element === subtotal
  const subTotal = product.querySelector(".subtotal span");
  // Set the subTotal variable with a little bit of text that equals the subtotal value variable
  subTotal.innerText = subtotalValue;

  // Return Subtotal value to use it correctly in the function and reuse it in our code

  return subtotalValue;
}

function calculateAll() {
  // testing
  console.log("clickme");
  // Get DOM elements for EACH row
  const products = document.getElementsByClassName("product");

  // Declare variable that we'll use to store the value of each iteration of the products. This var initially === 0
  let totalValue = 0;

  // Iterate over each element/product and inside the body of this loop we will update the value of the totalValue variable and we will use the updateSubtotal function to make the calculation :)
  for (let product of products) {
    totalValue += updateSubtotal(product);
  }

  // Display the value of this iterated calculation in the html, so we point to the dom element that contains that TOTAL
  document.querySelector("#total-value span").innerText = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // Check if the function is connected post creation of the eventListener within the Window object
  console.log(target);

  // Use parentNode to point to the GRANDPARENT of the row containing the specific event we are targeting, coincidentally the grandparent of this event is the TR element with the product class.
  const row = target.parentNode.parentNode;
  console.log(row);

  // Use parentNode on the row variable to take advantage of DOM manipulation selectors to remove the parent's child.
  const parent = row.parentNode;
  console.log(parent);

  // Call parent with the removeChild method and pass the row variable inside the method.
  parent.removeChild(row);

  // calculateAll() - re-calculate the numbers to have a correct result once we remove the product.
  calculateAll();
}

// ITERATION 5
function createProduct() {
  // Part 1
  let createRow = document.querySelector(".create-product");
  let newProdNameInput = createRow.querySelector("input");
  let newProdNameValue = newProdNameInput.value;
  let newProdPriceInput = createRow.querySelector("input[type='number']");
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);

  // Part 2
  const newTableRow = document.createElement("tr");
  newTableRow.className = "product";
  newTableRow.innerHTML = `
  <td class="name">
  <span>${newProdNameValue}</span>
  </td>
    <td class="price">
      $
      <span>${newProdPriceValue}</span>
    </td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  // Part 3
  // Get the parent of the rows using a bit of DOM Selection
  const parent = document.querySelector("#cart tbody");

  // Attach the newTableRow variable inside parent :)
  parent.appendChild(newTableRow);

  // Receive button logic
  const removeBtn = newTableRow.querySelector(".btn-remove");
  removeBtn.addEventListener("click", removeProduct);

  // Let's clear out the input vvalues
  newProdNameInput.value = "";
  newProdPriceInput.value = 0;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //Connection to removeAll function
  const removeBtns = document.querySelectorAll(".btn-remove");
  // Lets use a for loop to be able to click in each of the buttons if you want to delete the producrt
  for (let inidiviualBtn of removeBtns) {
    inidiviualBtn.addEventListener("click", removeProduct);
  }

  // Conect the nnew create product button
  const createBtn = document.querySelector("#create");
  if (createBtn) {
    createBtn.addEventListener("click", createProduct);
  }
});

let diego = ["coder", 32, "foodie lover"];
for (let x of diego) {
  console.log(x);
}