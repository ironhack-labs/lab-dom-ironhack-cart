// ITERATION 1

function updateSubtotal(product) {
  let quantity = product.querySelector(".quantity input").value;
  let price = product.querySelector(".price span").innerHTML;
  let subTotalEl = product.querySelector(".subtotal span");

  let subTotal = 0;
  if (quantity < 0) {
    subTotal = 0;
  } else {
    subTotal = quantity * price;
  }

  subTotalEl.innerHTML = subTotal;

  return subTotal;
}

function calculateAll() {
  // ITERATION 2
  let products = document.querySelectorAll(".product");
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    let currentProduct = products[i];
    total += updateSubtotal(currentProduct);
  }
  // ITERATION 3
  let totalEl = document.querySelector("#total-value span");
  totalEl.innerHTML = total;
}

// ITERATION 4

function removeProduct(e) {
  const target = e.currentTarget;
  const targetParent = target.parentNode.parentNode;
  targetParent.removeChild(target.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const inputProductNameEl = document.querySelector("#input-product-name");
  const inputProductName = inputProductNameEl.value;
  const inputProductPriceEl = document.querySelector("#input-product-price");
  const inputProductPrice = inputProductPriceEl.value;

  if (inputProductName == "" || inputProductPrice <= 0) {
    alert("You need to add a Product Name and a Price");
  } else {
    const newProduct = document.createElement("tr");
    newProduct.setAttribute("class", "product");
    newProduct.innerHTML = `
        <td class="name">
          <span>${inputProductName}</span>
        </td>
        <td class="price">$<span>${inputProductPrice}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>`;
    let products = document.querySelector(".product").parentNode;
    products.appendChild(newProduct);
    calculateAll();
    removeBtnLoad();
    inputProductNameEl.value = "";
    inputProductPriceEl.value = "";
  }
}

function removeBtnLoad() {
  let productsBtnRemove = document.querySelectorAll(".action");
  for (let i = 0; i < productsBtnRemove.length; i++) {
    productsBtnRemove[i].addEventListener("click", removeProduct);
  }
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const createProductBtn = document.querySelector("#create");
  createProductBtn.addEventListener("click", createProduct);

  removeBtnLoad();
});
