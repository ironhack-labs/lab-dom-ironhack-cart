// ITERATION 1
let totalSum = 0;

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  let totalPQ = price * quantity;
  totalSum += totalPQ;
  return (product.querySelector(".subtotal span").innerHTML = `${totalPQ}`);
}
// ITERATION 2

function calculateAll() {
  let allProducts = document.querySelectorAll("tr.product");
  allProducts.forEach((item) => updateSubtotal(item));
  let totalNode = document.querySelector("h2 span");
  return (totalNode.innerHTML = `${totalSum}`);
}

// ITERATION 3
// I put this in the previous formula

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
}
//... your code goes here

// ITERATION 5

document.getElementById("create").addEventListener("click", createProduct);

function createProduct() {
  let productName = document.getElementsByClassName("newProduct input")
    .placeholder;
  let unitPrice = document.getElementsByClassName("newPrice input").placeholder;
  let table = document.getElementById("cart");
  let row = table.insertRow(table.length - 1);
}

/* <tr class="product">
          <td class="name">
            <span>Ironhack Rubber Duck</span>
          </td>
          <td class="price">$<span>25.00</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr> */

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  document.querySelectorAll("btn btn-remove").forEach(function(button) {
    button.addEventListener("click", removeProduct);
  }
});

