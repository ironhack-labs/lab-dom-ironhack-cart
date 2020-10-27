// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector(".price>span").innerText;
  const quantity = product.querySelector(".quantity>input").value;
  const subtotalResult = price * quantity;
  product.querySelector(".subtotal>span").innerHTML = `${subtotalResult}`;
  return subtotalResult;
}
const tableBody = document.querySelector("tbody");
function calculateAll() {
  const singleProductArr = tableBody.querySelectorAll(".product");
  let totalResult = 0;
  singleProductArr.forEach(function (product) {
    totalResult += updateSubtotal(product);
  });
  document.querySelector("#total-value>span").innerHTML = `${totalResult}`;
  return totalResult;
}
// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  const elementToDelete = target.parentNode.parentNode;
  //console.log("The target in remove is:", elementToDelete);
  //... your code goes here
  elementToDelete.parentNode.removeChild(elementToDelete);
}
// ITERATION 5
function createProduct() {
  const newProductName = document.querySelectorAll(".create-product input");
  const newName = newProductName[0].value;
  const newPrice = Number(newProductName[1].value).toFixed(2);
  if (newName === '' || newPrice === '') return;
  
  const newTr = document.createElement("tr");
  newTr.setAttribute("class", "product");
  const newTrHTML = `<td class="name">
    <span>${newName}</span>
  </td>
  <td class="price">$<span>${newPrice}</span></td>
  <td class="quantity">
    <input type="number" value="1" min="1" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;
  newTr.innerHTML = newTrHTML;
  tableBody.appendChild(newTr);
  const inputToDelete = newTr.querySelector("button");
  inputToDelete.addEventListener("click", removeProduct);
  newProductName[0].value = "";
  newProductName[1].value = "";

};


window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  const removeItemArr = tableBody.querySelectorAll(".btn-remove");
  let i = 0;
  removeItemArr.forEach(function (product) {
    product.addEventListener("click", removeProduct);
    i++;
  });
  const addProductBtn = document.querySelector("#create");
  addProductBtn.addEventListener("click", createProduct);
});