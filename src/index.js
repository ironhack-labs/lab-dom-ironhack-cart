// ITERATION 1
function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = parseFloat(product.querySelector(".price span").innerHTML);

  const quantity = product.querySelector(".quantity>input");
  const quantityValue = parseInt(quantity.value, 10);

  const resultado = quantityValue * price;
  const subtotal = product.querySelector(".subtotal span");

  subtotal.innerHTML = resultado;

  return resultado;
}

function calculateAll() {
  let allProducts = document.querySelectorAll(".product");
  let total = 0;

  allProducts.forEach((product) => {
    const subtotal = updateSubtotal(product);
    total += subtotal;
  });

  let allSubtotalElements = document.querySelectorAll(".subtotal span");

  let sumtotal = 0;
  allSubtotalElements.forEach((element) => {
    const columnSubtotal = element.innerHTML;
    sumtotal += Number(columnSubtotal);
  });

  let totalPaint = document.querySelector("#total-value span");

  totalPaint.innerHTML = sumtotal;

  return total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  const productRow = target.closest(".product");
  const parentElement = productRow.parentNode;

  parentElement.removeChild(productRow);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productNameInput = document.querySelector(
    '.create-product input[type="text"]'
  );
  const productPriceInput = document.querySelector(
    '.create-product input[type="number"]'
  );

  const productName = productNameInput.value;
  const productPrice = productPriceInput.value;

  const newRow = document.createElement("tr");
  newRow.className = "product";
  newRow.innerHTML = `
    <td class="name"><span>${productName}</span></td>
    <td class="price">$<span>${productPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;
  const tableBody = document.querySelector("#cart tbody");
  tableBody.appendChild(newRow);

  newRow.querySelector(".btn-remove").addEventListener("click", removeProduct);

  productNameInput.value = "";
  productPriceInput.value = 0;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtn = document.getElementsByClassName("btn-remove");

  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", removeProduct);
  }

  const createProductBtn = document.getElementById("create");
  createProductBtn.addEventListener("click", createProduct);
});
