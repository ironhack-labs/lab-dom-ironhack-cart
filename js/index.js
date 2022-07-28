// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;

  const subtotal = price * quantity;

  const subtotalSpan = product.querySelector(".subtotal span");
  subtotalSpan.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const products = document.querySelectorAll(".product");

  let total = 0;
  products.forEach((singleProduct) => {
    total += updateSubtotal(singleProduct);
  });

  // ITERATION 3

  const totalSpan = document.querySelector("#total-value span");
  totalSpan.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  const row = target.parentNode.parentNode;
  const parent = row.parentNode;

  parent.removeChild(row);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector('.create-product input[type="text"]');
  const productPrice = document.querySelector('.create-product input[type="number"]');
  const container = document.querySelector("tbody");

  const name = productName.value;
  const price = productPrice.value;

  const newRow = document.createElement("tr");
  newRow.classList.add("product");
  newRow.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;
  console.log(newRow);
  console.log(container);
  container.after(newRow);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll(".btn-remove");
  removeBtn.forEach((button) => (button.onclick = removeProduct));

  const addButton = document.getElementById("create");
  addButton.addEventListener("click", createProduct);
});
