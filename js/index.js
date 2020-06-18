// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const priceElt = product.querySelector(`.price span`);
  const quantityElt = product.querySelector(`.quantity input`);
  const subTotalElt = product.querySelector(`.subtotal span`);
  var price = Number(priceElt.innerHTML);
  var quantity = Number(quantityElt.value);

  console.log(`price : ${price} --- qty : ${quantity}`);  // Helps check the prices and quantities
  var subtotal = quantity * price;
  //console.log(`subtotal : ${subtotal}`);   // Helps check the total calculated
  subTotalElt.innerHTML = `${subtotal}`;

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  var products = document.getElementsByClassName("product");
  const totalPriceElt = document.getElementById("total-value");
  var totalPrice = totalPriceElt.querySelector("span");
  console.log(products);
  var totalSum = 0;

  for (let i = 0; i < products.length; i++) {
    totalSum += updateSubtotal(products[i]);
  }

  console.log(`totalSum: ${totalSum}  -- totalPrice : ${totalPrice}`);  // Helps check the types and values of total to be assigned
  totalPrice.innerText = `${totalSum}`;


  // ITERATION 3

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log("The target in remove is:", target);
  target.parentElement.parentElement.remove();
  calculateAll();
}

// ITERATION 5

// I added this function because 1) it was super long   2) it can be reused, maybe ? for automatic additions to cartlist (ex : gifts when you order for a minimum)
function newProductElt(newProductName, newProductPrice) {

  var cartList = document.querySelector("tbody");
  const newProduct = document.createElement("tr");
  newProduct.classList.add("product");

  const tdName = document.createElement("td");
  tdName.classList.add("name");
  const spanName = document.createElement("span");
  spanName.innerHTML = `${newProductName}`;
  spanName.style.textTransform = "capitalize";
  tdName.appendChild(spanName);

  const tdPrice = document.createElement("td");
  tdPrice.classList.add("price");
  const spanPrice = document.createElement("span");
  spanPrice.innerHTML = `${newProductPrice}`;
  tdPrice.innerHTML = `$`;
  tdPrice.appendChild(spanPrice);

  const tdQty = document.createElement("td");
  tdQty.classList.add("quantity");
  const inputNb = document.createElement("input");
  inputNb.type = "number";
  inputNb.value = 0;
  inputNb.min = 0;
  inputNb.placeholder = "Quantity";
  tdQty.appendChild(inputNb);

  const tdSubTotal = document.createElement("td");
  tdSubTotal.classList.add("subtotal");
  const spanSubTotal = document.createElement("span");
  spanSubTotal.innerHTML = 0;
  tdSubTotal.innerHTML = `$`;
  tdSubTotal.appendChild(spanSubTotal);

  const tdRemove = document.createElement("td");
  tdRemove.classList.add("action");
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("btn", "btn-remove");
  removeBtn.textContent = `Remove`;
  tdRemove.appendChild(removeBtn);

  newProduct.appendChild(tdName);
  newProduct.appendChild(tdPrice);
  newProduct.appendChild(tdQty);
  newProduct.appendChild(tdSubTotal);
  newProduct.appendChild(tdRemove);

  removeBtn.onclick = removeProduct;
  cartList.appendChild(newProduct);
}

function createProduct() {
  
  var newProductInput = document.querySelector(".create-product td")
    .firstElementChild;
  var newProductPriceInput = document.querySelector(
    ".create-product td:nth-child(2)"
  ).firstElementChild;
  var newProductName = newProductInput.value;
  var newProductPrice = newProductPriceInput.value;

  // Created funtion to create the HTML element of the new product
  newProductElt(newProductName, newProductPrice);

  // Clears the creation inputs 
  newProductInput.value = "";
  newProductPriceInput.value = 0;

  //console.log(newProductInput);  // Helps check the list of selectors, add check if I picked the right ones
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //Remove items
  const removeItemBtns = document.querySelectorAll(".btn-remove");
  removeItemBtns.forEach((removeBtn) => {
    removeBtn.onclick = removeProduct;
  });

  //Create items
  const createBtn = document.getElementById("create");
  createBtn.onclick = createProduct;
  //console.log(removeItemBtns);
});

/**** Always more Tests ***/
//calculateAll();
//createProduct();
