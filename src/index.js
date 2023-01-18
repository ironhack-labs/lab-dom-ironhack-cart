// ITERATION 1

console.log("hello from index js");

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  //... your code goes here
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector("input").value;
  const subTotal = price * quantity;
  // console.log(price, quantity, subTotal);

  let subTotalDisplay = product.querySelector(".subtotal span");
  subTotalDisplay.innerHTML = subTotal;
  // console.log(typeof subTotal, subTotal);
  return subTotalDisplay;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  //select all products
  const products = document.querySelectorAll(".product");

  //loop thru all products and call the update subtotal function
  products.forEach((prod) => updateSubtotal(prod));

  //select all subtotals
  const subtotals = document.querySelectorAll(".subtotal span");

  //loop thru all the subtotals and sum
  let total = 0;
  for (let subs of subtotals) {
    total += Number(subs.innerText);
  }
  console.log(total);

  // ITERATION 3
  //... your code goes here
  //total all the subtotals
  let totalDisplay = document.querySelector("#total-value span");
  totalDisplay.innerHTML = total;
}

// const products = document.querySelectorAll(".product");
// const subtotals = document.querySelectorAll(".subtotal span");
// console.log(subtotals.innerHTML);

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  // selecting the input values
  const name = document.querySelector(
    '.create-product input[type="text"]'
  ).value;
  const price = document.querySelector(
    '.create-product input[type="number"]'
  ).value;
  console.log(name, price);

  // selecting the new Product row
  const newProduct = document.createElement("tr");

  // assign the product class needed for subtotal calculation
  newProduct.classList.add("product");

  // change the innerHTML: copy and paste template from index.html
  newProduct.innerHTML = `<td class="name">
  <span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>${price}</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>`;

  // selecting the tbody container
  const tBody = document.querySelector("tbody");

  // assign the new Product to the table body
  tBody.appendChild(newProduct);

  // select all remove buttons
  const removeBtns = document.querySelectorAll(".btn-remove");

  // loop thru all remove buttons and addeventlistener
  removeBtns.forEach((btn) => btn.addEventListener("click", removeProduct));

  // clear the input values
  document.querySelector('.create-product input[type="text"]').value = "";
  document.querySelector('.create-product input[type="number"]').value = 0;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  // select all remove buttons
  const removeBtns = document.querySelectorAll(".btn-remove");

  // loop thru all remove buttons and addeventlistener
  removeBtns.forEach((btn) => btn.addEventListener("click", removeProduct));

  //... your code goes here
  // select create button and addeventlistener
  const createBtn = document.querySelector("#create");

  // add event listener
  createBtn.addEventListener("click", createProduct);
});
