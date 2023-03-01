// ITERATION 1

function updateSubtotal(product) {
  const price = parseInt(product.querySelector(".price span").innerHTML);
  const quantity = parseInt(product.querySelector(".quantity input").value);

  const subtotal = product.querySelector(".subtotal span");

  subtotal.innerHTML = price * quantity;
}

function calculateAll() {
  const products = document.querySelectorAll(".product");
  products.forEach((element) => {
    updateSubtotal(element);
  });

  let sumSubtotal = 0;
  const subtotal = document.querySelectorAll(".subtotal span");
  subtotal.forEach((element) => {
    sumSubtotal += parseInt(element.innerHTML);
  });

  const total = document.querySelector("#total-value span");
  total.innerHTML = sumSubtotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.parentNode.parentNode;
  const parent = target.parentNode;
  parent.removeChild(target);
}

// ITERATION 5

function createProduct(element) {
  const name = document.querySelector(
    '.create-product input[type="text"]'
  );
  const unit = document.querySelector(
    '.create-product input[type="number"]'
  );
  const productElm = document.querySelector("tbody");
  const newProduct = document.createElement("tr");
  newProduct.setAttribute("class", "product");
  newProduct.innerHTML = `<tr class="product">
  <td class="name">
    <span>${name.value}</span>
  </td>
  <td class="price">$<span>${unit.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;
  productElm.appendChild(newProduct);
  const removeEl = document.querySelectorAll(".btn-remove");
  removeEl.forEach((element) => {
    element.addEventListener("click", () => {
      removeProduct(element);
    });
  });
  name.value = "";
  unit.value = 0;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeEl = document.querySelectorAll(".btn-remove");
  removeEl.forEach((element) => {
    element.addEventListener("click", () => {
      removeProduct(element);
    });
  });
  const createEl = document.querySelector("#create");
  createEl.addEventListener("click", (Element) => {
    createProduct(Element);
  });
});
