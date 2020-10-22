function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");

  const subtotalResult = parseFloat(price.innerHTML) * parseInt(quantity.value);

  subtotal.innerHTML = subtotalResult;

  return subtotalResult;
}

function calculateAll() {
  const products = document.getElementsByClassName("product");
  const total = document.querySelector("#total-value span");
  let totalValue = 0;

  for (let i = 0; i < products.length; i++) {
    totalValue += updateSubtotal(products[i]);
  }

  total.innerHTML = totalValue;
}

function removeProduct(event) {
  const target = event.currentTarget;
  const targetProduct = target.parentNode.parentNode;
  const productList = targetProduct.parentNode;

  productList.removeChild(targetProduct);

  calculateAll();
}

function createProduct() {
  const productList = document.querySelector("#cart tbody");

  const newProdName = document.querySelector(".create-product .new-name");
  const newProdPrice = document.querySelector(".create-product .new-price");

  console.log(newProdPrice.value);

  productList.innerHTML += `
  <tr class="product">
    <td class="name">
      <span>${newProdName.value}</span>
    </td>
    <td class="price">$<span>${parseFloat(newProdPrice.value).toFixed(
      2
    )}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `;

  newProdName.value = "";
  newProdPrice.value = "";

  refreshRemoveBttns();
}

function refreshRemoveBttns() {
  const removeBttns = document.getElementsByClassName("btn-remove");

  for (let i = 0; i < removeBttns.length; i++) {
    removeBttns[i].onclick = function (e) {
      removeProduct(e);
    };
  }
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const createProdBtn = document.getElementById("create");
  createProdBtn.addEventListener("click", createProduct);

  refreshRemoveBttns();
});
