// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");

  const priceNum = price.innerHTML;
  const quantityNum = quantity.value;

  const subtotalNum = priceNum * quantityNum;
  subtotal.innerHTML = subtotalNum;

  console.log("Calculating subtotal, yey!");

  return subtotalNum;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  let totalSum = 0;

  // ITERATION 2
  const products = document.querySelectorAll(".product");

  products.forEach((singleProduct) => {
    totalSum += updateSubtotal(singleProduct);
    console.log(totalSum);
  });

  // ITERATION 3
  const total = document.querySelector("#total-value span");
  total.innerHTML = totalSum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log("The target in remove is:", target);
  target.parentNode.removeChild(target);

  const total = document.querySelector("#total-value span");
  const subtotal = target.querySelector(".subtotal span");

  total.innerHTML = total.innerHTML - subtotal.innerHTML;
}

// ITERATION 5

function createProduct() {
  // input values from the create product line
  let nameElement = document.querySelector(
    '.create-product input[type="text"]'
  );
  let priceElement = document.querySelector(
    '.create-product input[type="number"]'
  );

  let cart = document.querySelector("tbody");
  let newProduct = document.createElement("tr");

  newProduct.className = "product";

  newProduct.innerHTML = `
    <tr class="product">
      <td class="name">
        <span>${nameElement.value}</span>
      </td>
      <td class="price">$<span>${priceElement.value}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>
  `;

  cart.appendChild(newProduct);

  // add click event to the remove button
  var deleteButton = newProduct.querySelector(".btn-remove");
  deleteButton.addEventListener("click", removeProduct);

  nameElement.value = "";
  priceElement.value = "";
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((eachButton) => {
    eachButton.addEventListener("click", removeProduct);
  });

  const createButton = document.querySelector("#create");
  createButton.addEventListener("click", createProduct);
});