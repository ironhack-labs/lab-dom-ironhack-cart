// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  let subT = quantity * price;
  let subtotal = product.querySelector(".subtotal span");
  subtotal.innerText = `${subT}`;
  console.log("Calculating subtotal, yey!");
  //... your code goes here
}

function calculateAll() {
  // js/index.js
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let list = document.getElementsByClassName("product");

  let total = 0;
  let products = [...list];
  products.forEach((e) => {
    updateSubtotal(e);
    total += parseFloat(e.querySelector(".subtotal span").innerHTML);
  });

  document.querySelector("#total-value span").innerHTML = `${total}`;
  // ITERATION 3
  //... your code goes here
  // let totalValue = total.getElementsByClassName("price");
  // console.log(totalValue);
  // total = updateSubtotal()
  // total.forEach((e)=>{e.price += e.price})
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  target.closest("tr").remove();
  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  let productName = document.querySelector(
    '.create-product input[placeholder="Product Name"]'
  ).value;
  let price = document.querySelector(
    '.create-product input[placeholder="Product Price"]'
  ).value;

  const cart = document.querySelector("#cart tbody");
  const newProductRow = document.createElement("tr");
  newProductRow.innerHTML = `<td class="name">
  <span>${productName}</span>
</td>
<td class="price">$<span>${price}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;
  cart.appendChild(newProductRow);

  const removeProductBtn = document.querySelectorAll(".btn-remove");
  removeProductBtn.forEach((e) => {
    e.addEventListener("click", removeProduct);
  });

  document.querySelector(
    '.create-product input[placeholder="Product Name"]'
  ).value = "";
  document.querySelector(
    '.create-product input[placeholder="Product Price"]'
  ).value = 0;
  calculateAll();
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeProductBtn = document.querySelectorAll(".btn-remove");
  removeProductBtn.forEach((e) => {
    e.addEventListener("click", removeProduct);

    const createBtn = document.getElementById("create");
    createBtn.addEventListener("click", createProduct);
    //... your code goes here
  });
});
