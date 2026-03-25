// ITERATION 1
let products = Array.from(
  document.querySelectorAll("#cart tbody tr"),
  (x) => x.id,
);
let rmvButtons = document.querySelectorAll(".btn-remove");
function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  if (typeof product === "string") {
    const price = Number(
      document
        .querySelector("#" + product + " .price")
        .textContent.slice(
          1,
          document.querySelector("#" + product + " .price").textContent.length,
        ),
    );
    const quantity = document.querySelector(
      "#" + product + " .quantity input",
    ).valueAsNumber;
    document.querySelector("#" + product + " .subtotal").textContent =
      "$" + String(price * quantity);
    return price * quantity;
  }
  return null;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = products.reduce((a, x) => a + updateSubtotal(x), 0);

  // ITERATION 3
  //... your code goes here
  document.querySelector("#total-value span").textContent = String(total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is: ", target);
  //... your code goes here
  const row = event.currentTarget.closest("tr");
  row.remove();
  // rows update.
  products = Array.from(
    document.querySelectorAll("#cart tbody tr"),
    (x) => x.id,
  );
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  if (
    document.querySelector(".create-product .product-name input").value != ""
  ) {
    const allProducts = document.querySelector("tbody");

    const newProduct = document.createElement("tr");
    newProduct.id = document.querySelector(
      ".create-product .product-name input",
    ).value;
    newProduct.innerHTML = `
    <td class="name"><span>${document.querySelector(".create-product .product-name input").value}</span></td>
    <td class="price">$<span>${document.querySelector(".create-product .product-price input").valueAsNumber}</span></td>
    <td class="quantity"><input type="number" value="0" min="0" /></td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>
    `;
    // rmv buttons update
    const removeBtn = newProduct.querySelector(".btn-remove");
    removeBtn.addEventListener("click", (event) => {
      newProduct.remove();
    });
    allProducts.appendChild(newProduct);
    // rows update.
    products = Array.from(
      document.querySelectorAll("#cart tbody tr"),
      (x) => x.id,
    );
  }
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  rmvButtons = document.querySelectorAll(".btn-remove");
  rmvButtons.forEach((btn) => btn.addEventListener("click", removeProduct));
  const addProduct = document.getElementById("create");
  addProduct.addEventListener("click", createProduct);
});
