// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");
  console.log(subtotal);
  subtotal.innerText = "";
  subtotal.innerText += Number(price.innerText) * quantity.value;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll(".product");
  let totalPrice = 0;
  allProducts.forEach((product) => {
    updateSubtotal(product);
    totalPrice += Number(product.querySelector(".subtotal span").innerText);
  });

  // ITERATION 3
  //... your code goes here
  const totalPriceDisplay = document.querySelector("#total-value span");
  totalPriceDisplay.innerText = "";
  totalPriceDisplay.innerText = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  console.log("create product");
  const newProductName = document.getElementById("new-product-name");
  const newProductPrice = document.getElementById("new-product-price");
  const tableBody = document.getElementById("table-body");
  const productTable = document.createElement("tr");
  productTable.innerHTML += `<tr>
                                <td class="name">
                                  <span>Ironhack ${newProductName.value}</span>
                                </td>
                                <td class="price">$<span>${newProductPrice.value}</span></td>
                                <td class="quantity">
                                  <input type="number" value="0" min="0" placeholder="Quantity" />
                                </td>
                                <td class="subtotal">$<span>0</span></td>
                                <td class="action">
                                  <button class="btn btn-remove">Remove</button>
                                </td>
                              </tr>`;
  tableBody.appendChild(productTable);
  productTable.classList.add("product");
  removeBtnListener();
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  removeBtnListener();

  const addProductBtn = document.getElementById("create");
  addProductBtn.onclick = createProduct;
});

function removeBtnListener() {
  const allProducts = document.querySelectorAll(".product");
  allProducts.forEach((product) => {
    const btnRemove = product.querySelector(".btn-remove");
    btnRemove.addEventListener("click", removeProduct);
  });
}
