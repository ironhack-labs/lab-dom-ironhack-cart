
function updateSubtotal(evt) {
  const targetedProduct = evt.target.closest("tr");
  const subTotalField = targetedProduct.querySelector(".subtotal span");
  const formerSubTotal = Number(subTotalField.textContent);
  const price = Number(targetedProduct.querySelector(".price span").textContent);
  const quantity = Number(targetedProduct.querySelector(".quantity input").value);
  const newSubTotal = price * quantity;
  subTotalField.textContent = String(newSubTotal);
  updateTotal(formerSubTotal, newSubTotal);
}

function updateTotal(formerSubTotal, newSubTotal) {
  let totalField = document.querySelector("#total-value span");
  const formerTotal = Number(totalField.textContent)
  totalField.textContent = String(formerTotal - formerSubTotal + newSubTotal);
}

function removeProduct(event) {
  const productToRemove = event.target.closest(".product");
  const productSubTotal = Number(productToRemove.querySelector(".subtotal span").textContent);
  updateTotal(productSubTotal, 0);
  productToRemove.remove();
}

function createProductRow(name, price) {
  const newProduct = document.createElement("tr");
  newProduct.classList.add("product");
  newProduct.innerHTML = `<td class="name">
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
  newProduct.querySelector(".btn-remove").onclick = removeProduct;
  newProduct.querySelector(".quantity input").onclick = updateSubtotal;
  return newProduct;
}

function createProduct() {
  const newProductName = document.getElementById("new-product-name");
  const newProductPrice = document.getElementById("new-product-price");
  const tableBody = document.querySelector("#cart tbody");
  
  tableBody.appendChild(createProductRow(newProductName.value, newProductPrice.value));
  document.getElementById("new-product-name").value = "";
  document.getElementById("new-product-price").value = "0";
}


document.querySelectorAll(".quantity input").forEach( field => {
  field.oninput = updateSubtotal;
}) 
document.querySelectorAll(".btn-remove").forEach((btn) => (btn.onclick = removeProduct));
document.getElementById("create").onclick = createProduct;


// ====================== Version with "Calculate Prices" button ==============================

// function updateSubtotal(product) {
//   const price = Number(product.querySelector(".price span").textContent);
//   const quantity = Number(product.querySelector(".quantity input").value);
//   const subtotal = price * quantity;
//   product.querySelector(".subtotal span").textContent = String(subtotal);
//   return subtotal;
// }

// function calculateAll() {
//   let totalPrice = 0;
//   document.querySelectorAll(".product").forEach((product) => {
//     totalPrice += updateSubtotal(product);
//   });
//   document.querySelector("#total-value span").textContent = totalPrice;
// }

// function removeProduct(event) {
//   event.target.closest(".product").remove();
// }

// function createProductRow(name, price) {
//   const newProduct = document.createElement("tr");
//   newProduct.classList.add("product");
//   newProduct.innerHTML = `<td class="name">
//                           <span>${name}</span>
//                         </td>
//                         <td class="price">$<span>${price}</span></td>
//                         <td class="quantity">
//                           <input type="number" value="0" min="0" placeholder="Quantity" />
//                         </td>
//                         <td class="subtotal">$<span>0</span></td>
//                         <td class="action">
//                           <button class="btn btn-remove">Remove</button>
//                         </td>`;
//   newProduct.querySelector(".btn-remove").onclick = removeProduct;
//   return newProduct;
// }

// function createProduct() {
//   const newProductName = document.getElementById("new-product-name");
//   const newProductPrice = document.getElementById("new-product-price");
//   const tableBody = document.querySelector("#cart tbody");
  
//   tableBody.appendChild(createProductRow(newProductName.value, newProductPrice.value));
//   document.getElementById("new-product-name").value = "";
//   document.getElementById("new-product-price").value = "0";
// }


// const calculatePricesBtn = document.getElementById("calculate");
// calculatePricesBtn.addEventListener("click", calculateAll);
// document
//   .querySelectorAll(".btn-remove")
//   .forEach((btn) => (btn.onclick = removeProduct));
// document.getElementById("create").onclick = createProduct;
