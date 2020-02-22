let products = document.getElementsByClassName("product");
let qtyInputs = document.getElementsByClassName("qty");
let deleteBtns = document.getElementsByClassName("btn-delete");
let createBtn = document.querySelector("#create");

// Iteration 1: calculate product subTotal
function updateSubtot($product) {
  // the subTotal is price * qty
  let productPrice = $product.querySelector(".pu span").innerText;
  let productQuantity = $product.querySelector("input").value;
  let subTot = Number(productPrice) * Number(productQuantity);

  // display the subTotal in the html
  $product.querySelector(".subtot span").innerText = subTot;
  return subTot;
}

// Iteration 3: Total of all products
function calcAll() {
  //
  let sum = 0;
  for (i = 0; i < products.length; i++) {
    sum += Number(updateSubtot(products[i]));
  }
  document.querySelector("h2 span").innerText = sum;
}

//  Iteration 4: Deleting a product and modify the Total
let onClickHandler = function(e) {
  // delete product on clicking delete Btn
  let currentButton = e.currentTarget;
  currentButton.closest("tr").remove();

  // subtract the deleted product's subtot from the total
  let subTot = currentButton.closest("tr").querySelector(".subtot span")
    .innerText;
  document.querySelector("h2 span").innerText -= Number(subTot);
};

// ### Iteration 5: Creating new products
function creatingNewPro() {
  // copy a hidden product in the original table as a new product
  let product = document.getElementsByClassName("product")[0];
  let newProduct = product.cloneNode(true);
  newProduct.classList.remove("templateProduct");

  // get the new name and price from user
  let newProductName = document.querySelector('tfoot input[type= "text"]')
    .value;
  newProduct.querySelector(".name span").innerText = newProductName;
  let newProductPrice = document.querySelector('tfoot input[type= "number"]')
    .value;
  newProduct.querySelector(".pu span").innerText = newProductPrice;

  // attach the calculation function and delete function to deleteBtn and qtyInput
  let qtyInput = newProduct.querySelector(".qty");
  qtyInput.onchange = calcAll;
  let deleteBtn = newProduct.querySelector(".btn-delete");
  deleteBtn.onclick = onClickHandler;

  // add new product to the table
  let listOfProducts = document.querySelector("tbody");
  listOfProducts.appendChild(newProduct);

  // clear input fields
  document.querySelector('tfoot input[type= "number"]').value = "$ 0";
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

// attach the creat function to the create btn
createBtn.onclick = creatingNewPro;
