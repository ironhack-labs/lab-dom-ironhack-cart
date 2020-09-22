// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  console.log(product);
  let calculate = document.querySelector("#calculate");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  const subTotal = product.querySelector(".subtotal span");
  subTotal.innerHTML = Number(price.innerText) * Number(quantity.value);
  console.log(subTotal.innerHTML);

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  //   console.log(singleProduct);

  // end of test
  // ITERATION 2
  const products = document.querySelectorAll(".product");

  products.forEach((prod) => {
    updateSubtotal(prod);
  });

  // ITERATION 3
  const total = document.querySelector("#total-value span");
  const sub = document.querySelectorAll(".subtotal span");
  let initial = 0;

  sub.forEach((prod) => {
    console.log(prod);
    initial = Number(prod.innerText) + initial;
  });

  total.innerHTML = initial;
  console.log(initial);
}

// ITERATION 4

function removeProduct(event, elem) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  console.log(elem);
  //... your code goes here
  console.log(elem.parentNode);
  const grandGroundParentNode = elem.parentNode.parentNode.parentNode;

  console.log(elem.parentNode.parentNode);
  grandGroundParentNode.removeChild(elem.parentNode.parentNode);
  console.log(grandGroundParentNode);
}

// ITERATION 5

function createProduct() {
  const create = document.querySelector("#create");
  const productName = document.querySelector(
    ".create-product input[type='text']"
  );
  const productUnitPrice = document.querySelector(
    ".create-product input[type='number']"
  );

  const body = document.querySelector("tbody");
  const newProduct = document.createElement("tr");
  newProduct.classList.add("product");

  newProduct.innerHTML = `
  <td class="name">
    <span>${productName.value}</span>
  </td>
  <td class="price">$<span>${productUnitPrice.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  `;

  // Calculate subtotal & update total
  updateSubtotal(newProduct);
  console.log(newProduct.parentNode);

  body.appendChild(newProduct);
  console.log(newProduct.parentNode);

  // Remove item
  const removeBtn = newProduct.querySelector(".btn-remove");
  console.log(removeBtn);
  removeBtn.addEventListener("click", (event) => {
    const grandGroundParentNode = removeBtn.parentNode.parentNode.parentNode;
    grandGroundParentNode.removeChild(removeBtn.parentNode.parentNode);
  });

  productName.value = "";
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  //... your code goes here

  const removeBtn = document.querySelectorAll(".btn-remove");
  removeBtn.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      event.preventDefault();
      removeProduct(event, elem);
    });
  });

  create.addEventListener("click", () => {
    createProduct();
  });
});
