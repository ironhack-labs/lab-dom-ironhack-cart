// Get TOTAL PRICE BY PRODUCT + TOTAL PRICE
var quantityElement = document.querySelectorAll("input");
var totalElement = document.querySelectorAll(".total");
const allTotalElement = document.querySelector(".totalPrice");
const listProductElement = document.querySelector(".list_product");

var calculatePriceButton = document.getElementById("calc-prices-button");
var deleteButtons = document.querySelectorAll(".btn-delete");
var createLine = document.querySelector(".createProduct");

function getTotalPriceByProduct() {
  const priceElement = document.querySelectorAll(".price");

  var countTotal = 0;
  priceElement.forEach(function(p, i) {
    console.log(p);
    let priceU = Number(p.textContent.slice(1));
    console.log("pu", priceU);
    let priceRow = priceU * Number(quantityElement[i].value);
    console.log("pr", priceRow);
    totalElement[i].textContent = "$" + priceRow;
    console.log(totalElement[i].textContent)
    countTotal += priceRow;
    console.log("total", countTotal);
  });

  allTotalElement.textContent = "Total Price: $" + countTotal;
  console.log(allTotalElement.textContent);
}
// DELETE A PRODUCT LINE
function deleteItem(e) {
  e.target.parentElement.parentElement.remove();
}
//ADD A PRODUCT LINE
function createItem() {
  var inputName = document.querySelector(".inputName");
  var inputNumber = document.querySelector(".inputNumber");
  var nameNewProduct = inputName.value;
  var priceNewProduct = inputNumber.value;

  listProductElement.innerHTML += `<div class="product">
    <div><span>${nameNewProduct}</span></div>
    <div><span class="price">$${priceNewProduct}</span></div>
    <div><label for="units">QTY</label><input type="number" class="input" value="1" oninput="getTotalPriceByProduct()"></div>
    <div><span class="total">$0.00</span></div>
    <div><button class="btn-delete btn" type="button">Delete</button></div>
  </div>`;
  quantityElement = document.querySelectorAll("input");
  deleteButtons = document.querySelectorAll(".btn-delete");
  totalElement = document.querySelectorAll(".total");
  getTotalPriceByProduct();
  deleteLoop();
}

calculatePriceButton.onclick = getTotalPriceByProduct;
function deleteLoop() {
  deleteButtons.forEach(d => (d.onclick = deleteItem));
}
createLine.onclick = createItem;
