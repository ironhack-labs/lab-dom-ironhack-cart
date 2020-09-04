// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  console.log(price, quantity);

  const subTotal = price * quantity;
  // return subTotal;
  product.querySelector(".subtotal span").innerHTML = `${subTotal}`;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName("product");
  for (let index = 0; index < allProducts.length; index++) {
    const indiv = allProducts[index];
    updateSubtotal(indiv);
  }
  let count = 0;
  // ITERATION 3
  const allPrices = document.querySelectorAll(".subtotal span");
  console.log(allPrices);
  allPrices.forEach((element) => {
    count += Number(element.innerHTML);
  });
  document.querySelector("#total-value span").innerHTML = `${count}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  console.log(target);
  const rowElement = target.parentNode.parentNode;
  rowElement.parentNode.removeChild(rowElement);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const newProduct = document.getElementById("product-name-input").value;
  const newPrice = document.getElementById("product-price-input").value;
  console.log(">>>>>>", newProduct, newPrice);
  const table = document.getElementById("table-of-products");
  var row = table.insertRow(0);
  row.className = "product";
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  cell1.outerHTML = `<td class="name"><span>${newProduct}</span></td>`;

  cell2.outerHTML = `<td class="price">$<span>${newPrice}</span></td>`;

  cell3.outerHTML = `<td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>`;

  cell4.outerHTML = `<td class="subtotal">$<span>0</span></td>`;

  cell5.outerHTML = `<td class="action"><button class="btn btn-remove">Remove</button></td>`;

  calculateAll();
  const removeBtns = document.getElementsByClassName("btn-remove");
  for (let index = 0; index < removeBtns.length; index++) {
    const element = removeBtns[index];
    element.addEventListener("click", removeProduct);
  }
  calculateAll();
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtns = document.getElementsByClassName("btn-remove");
  for (let index = 0; index < removeBtns.length; index++) {
    const element = removeBtns[index];
    element.addEventListener("click", removeProduct);
  }

  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", createProduct);
});
