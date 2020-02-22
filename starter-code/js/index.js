let products = document.getElementsByClassName("product");
let qtyInputs = document.getElementsByClassName("qty");
let deleteBtns = document.getElementsByClassName("btn-delete");
let createBtn = document.querySelector("#create");

// Iteration 1.1
function updateSubtot($product) {
  let productPrice = $product.querySelector(".pu span").innerText;
  let productQuantity = $product.querySelector("input").value;

  let subTot = Number(productPrice) * Number(productQuantity);
  $product.querySelector(".subtot span").innerText = subTot;
  return subTot;
}

// Iteration 3: Total
function calcAll() {
  let sum = 0;
  for (i = 0; i < products.length; i++) {
    updateSubtot(products[i]);
    sum += Number(products[i].querySelector(".subtot span").innerText);
  }
  document.querySelector("h2 span").innerText = sum;
}

//  Iteration 4: Deleting a product and modify the Total
let onClickHandler = function(e) {
  let currentButton = e.currentTarget;
  let subTot = currentButton.closest("tr").querySelector(".subtot span")
    .innerText;
  document.querySelector("h2 span").innerText -= Number(subTot);
  currentButton.closest("tr").remove();
};

// ### Iteration 5: Creating new products
function creatingNewPro() {
  let product = document.getElementsByClassName("product")[0];
  let newProduct = product.cloneNode(true);
  let listOfProducts = document.querySelector("tbody");
  let newProductName = document.querySelector('tfoot input[type= "text"]')
    .value;
  newProduct.querySelector(".name span").innerText = newProductName;
  let newProductPrice = document.querySelector('tfoot input[type= "number"]')
    .value;
  newProduct.querySelector(".pu span").innerText = newProductPrice;
  let qtyInput = newProduct.querySelector(".qty");
  qtyInput.onchange = calcAll;
  let deleteBtn = newProduct.querySelector(".btn-delete");
  deleteBtn.onclick = onClickHandler;
  listOfProducts.appendChild(newProduct);
  document.querySelector('tfoot input[type= "number"]').value = 0;
  document.querySelector('tfoot input[type= "text"]').value = "";
}

///////////////

// attach calculation function to all quantity input boxes

for (let i = 0; i < qtyInputs.length; i++) {
  qtyInputs[i].onchange = calcAll;
}

// attach the delete function to all delete buttons
for (let i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].onclick = onClickHandler;
}
createBtn.onclick = creatingNewPro;
