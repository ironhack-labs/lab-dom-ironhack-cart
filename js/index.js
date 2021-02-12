// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span").textContent;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = product.querySelector(".subtotal span");

  let result = quantity * price;
  subtotal.textContent = result;

  return result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  let subtotalsArr = [];
  let total;
  const totalValue = document.querySelector("#total-value span");

  // ITERATION 2
  const allProducts = document.querySelectorAll("tr.product");
  allProducts.forEach(product => {
    let subtotal = updateSubtotal(product);
    subtotalsArr.push(subtotal);
  });
  // allProducts.forEach(product => updateSubtotal(product));

  // ITERATION 3
  total = subtotalsArr.reduce((acc, curr) => acc + curr);
  totalValue.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parentRow = target.parentNode.parentNode;
  const parentTable = parentRow.parentNode;
  parentTable.removeChild(parentRow);
  calculateAll();
}

// ITERATION 5
function checkPriceFormat(num) {
  console.log("hello from the checking function!");
  if (num.length < 4) num + ".00";
}

function createProduct() {
  const table = document.querySelector("#cart tbody");

  const createRow = document.querySelector('.create-product');
  let productName = createRow.querySelector('input[type="text"]').value;
  let productPrice = Number(createRow.querySelector('input[type="number"]').value);
  const newRow = document.createElement('tr');
  console.log(productName);
  console.log(productPrice);
  console.log(typeof productPrice);
  newRow.innerHTML = `
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;
  table.appendChild(newRow);
  productName = "";
  productPrice = "";
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  let removeBtns = document.querySelectorAll('.btn-remove');
  let createBtn = document.getElementById("create");
  
  calculatePricesBtn.addEventListener('click', calculateAll);
  removeBtns.forEach(btn => btn.addEventListener('click', removeProduct));
  createBtn.addEventListener('click', createProduct);
});
