// ITERATION 1

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector(".price span").innerText);
  const quantity = parseInt(product.querySelector(".quantity input").value);
  const subtotal = (price * quantity).toFixed(2);
  product.querySelector(".subtotal span").innerText = subtotal;
  return parseFloat(subtotal);
}

function calculateAll() {
  let total = 0;
  const products = document.getElementsByClassName("product");
  Array.from(products).map((tr) => {
    total += updateSubtotal(tr);
  });

  const totalContainer = document.getElementById("total-value");
  totalContainer.firstElementChild.innerText = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const buttonHolder = target.parentElement.parentElement;
  buttonHolder.parentElement.removeChild(buttonHolder);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const elementList = document.getElementById("product-list");

  const newProductName = document.getElementById("new-product-name").value;
  const newProductPrice = document.getElementById("new-product-price").value;

  const newProduct = `<tr class="product">
  <td class="name">
    <span>${newProductName}</span>
  </td>

  <td class="price">$<span>${newProductPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;

  elementList.innerHTML += newProduct;
  addEventRemove();
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const createButton = document.getElementById("create");
  createButton.onclick = createProduct;

  addEventRemove();
});

function addEventRemove() {
  let buttons = document.getElementsByClassName("btn-remove");
  Array.from(buttons).map((btn) => {
    btn.onclick = removeProduct;
  });
}
