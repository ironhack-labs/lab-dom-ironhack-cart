// ITERATION 1

function updateSubtotal(product) {
  "use strict";

  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");

  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;

  const subtotalValue = priceValue * quantityValue;

  subtotal.innerHTML = subtotalValue;

  return subtotalValue;
}

function calculateAll() {
  "use strict";
  let arrayAllProducts = [...document.querySelectorAll(".product")];
  let total = arrayAllProducts.map(updateSubtotal).reduce((acc, curr) => acc + curr, 0);
  document.querySelector("#total-value span").innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  "use strict";
  const target = event.currentTarget;
  const parent = target.parentNode.parentNode;
  const table = parent.parentNode;

  table.removeChild(parent);
}

// ITERATION 5

function createProduct() {
  "use strict";
  const name = document.querySelector(".create-product input[placeholder='Product Name']").value;
  const price = document.querySelector(".create-product input[placeholder='Product Price']").value;
  const quantity = document.querySelector(".create-product input[placeholder='Product Quantity']").value;

  console.log(price, name);

  const newProductHTML = `<tr class="product">
          <td class="name">
            <span>${name}</span>
          </td>
          <td class="price">$<span>${price}</span></td>
          <td class="quantity">
            <input type="number" value="${quantity}" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`;

  document.querySelector("tbody tr:last-child").insertAdjacentHTML("afterend", newProductHTML);

  document.querySelector(".create-product input[placeholder='Product Name']").value = "";
  document.querySelector(".create-product input[placeholder='Product Price']").value = 0;
  document.querySelector(".create-product input[placeholder='Product Quantity']").value = 0;
}

window.addEventListener("load", () => {
  "use strict";
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeProductBtn = document.getElementsByClassName("btn-remove");
  for (let item of removeProductBtn) {
    item.addEventListener("click", removeProduct);
  }

  const createProductBtn = document.getElementById("create");
  createProductBtn.addEventListener("click", createProduct);
});
