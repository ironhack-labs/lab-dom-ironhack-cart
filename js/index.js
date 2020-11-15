// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  //... your code goes here
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subtotalPrice = price * quantity;
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  let sumTotal = 0;
  const products = document.querySelectorAll(".product");
  console.log(products);
  products.forEach((elem) => {
    sumTotal += updateSubtotal(elem);
  });
  // ITERATION 3
  //... your code goes here
  const totalValue = document.querySelector("#total-value span");
  totalValue.innerHTML = sumTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.target;
  console.log("The target in remove is:", target);
  //... your code goes here
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newProduct = document.querySelector("tbody");
  const newProdName = document.querySelector(
    'input[placeholder="Product Name"]'
  );
  const newPrice = document.querySelector('input[placeholder="Product Price"]');
  const newProdItem = document.createElement("tr");
  newProdItem.innerHTML = `
  <tr class="product">
    <td class="name">
      <span>${newProdName.value}</span>
    </td>
    <td class="price">$<span>${newPrice.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `;
  newProdItem.setAttribute("class", "product");
  newProduct.appendChild(newProdItem);
  // const removeBtns = document.querySelectorAll(".btn-remove");
  // removeBtns.forEach((ele) => ele.addEventListener("click", removeProduct));

  newProdItem
    .querySelector(".btn-remove")
    .addEventListener("click", removeProduct);

  calculateAll();
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach((remove) => {
    remove.addEventListener("click", removeProduct);
  });

  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", createProduct);
});