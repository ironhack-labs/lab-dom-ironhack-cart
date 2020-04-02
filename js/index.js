// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const total = price.innerText * quantity.value;
  product.querySelector(".subtotal span").innerText = total;
  return total;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProduct = document.querySelectorAll('.product');
  let totalArray = []
  allProduct.forEach(e => totalArray.push(updateSubtotal(e)));

  // ITERATION 3
  const totalPrice = totalArray.reduce((acc, e) => acc + e, 0);
  document.querySelector("#total-value span").innerText = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const inputName = document.querySelector(".create-product td:nth-child(1) input").value;
  const inputPrice = document.querySelector(".create-product td:nth-child(2) input").value;
  const tbody = document.querySelector("#cart tbody");
  const row = document.createElement("tr");
  row.classList.add("product");
  let td = document.createElement("td");
  td.classList.add("name");
  let span = document.createElement("span");
  span.textContent = inputName;
  td.appendChild(span);
  row.appendChild(td);
  td = document.createElement("td");
  td.classList.add("price");
  td.innerHTML = `$<span>${inputPrice}</span>`;
  row.appendChild(td);
  td = document.createElement("td");
  td.classList.add("quantity");
  td.innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />`;
  row.appendChild(td);
  td = document.createElement("td");
  td.classList.add("subtotal");
  td.innerHTML = `$<span>0</span>`;
  row.appendChild(td);
  td = document.createElement("td");
  td.classList.add("action");
  let button = document.createElement("button");
  button.classList.add("btn");
  button.classList.add("btn-remove");
  button.textContent = "Remove";
  button.onclick = removeProduct;
  td.appendChild(button);
  row.appendChild(td);
  tbody.appendChild(row);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const listAllBtn = document.querySelectorAll(".btn-remove");
  listAllBtn.forEach(e => e.addEventListener('click', removeProduct));

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});