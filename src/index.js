// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector(`.price span`).innerText;
  const quantity = product.querySelector(`.quantity input`).value;
  const priceNumber = parseFloat(price);
  const quantityNumber = parseInt(quantity);

  const subtotal = priceNumber * quantityNumber;

  const subtotalElm = product.querySelector(".subtotal span");

  subtotalElm.innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName("product");
  const totalValueElm = document.querySelector("#total-value span");
  let total = 0;
  
  for(let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }

  totalValueElm.innerText = total;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.target;
  console.log('The target in remove is:', target);
  //... your code goes here
  const rowToRemove = target.parentNode.parentNode;
  const parent = rowToRemove.parentNode;
  
  parent.removeChild(rowToRemove);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const parentBody = document.querySelector("tbody");

  const productNameElm = document.querySelectorAll(".create-product input")[0];
  const productPriceElm = document.querySelectorAll(".create-product input")[1];
  let productName = productNameElm.value;
  let productPrice = productPriceElm.value;
  productPrice = parseFloat(productPrice);

  //Creating elements

  const productRow = document.createElement("tr");
  productRow.setAttribute("class", "product");

  //Create and append to the row the cell that contains the name of the product
  const productNameCell = document.createElement("td");
  productNameCell.setAttribute("class", "name");
  
  const productNameValue = document.createElement("span");
  productNameValue.innerText = productName;

  productNameCell.appendChild(productNameValue);
  productRow.appendChild(productNameCell);
  
  //Create and append to the row the cell that contains the price of the product
  const productPriceCell = document.createElement("td");
  productPriceCell.setAttribute("class", "price");
  productPriceCell.innerText = "$";
  
  const productPriceValue = document.createElement("span");
  productPriceValue.innerText = productPrice;

  productPriceCell.appendChild(productPriceValue);
  productRow.appendChild(productPriceCell);
  
  //Create and append to the row the cell that contains the quantity of product
  const productQuantityCell = document.createElement("td");
  productQuantityCell.setAttribute("class", "quantity");
  
  const productQuantityInput = document.createElement("input");
  productQuantityInput.setAttribute("type", "number");
  productQuantityInput.setAttribute("value", "0");
  productQuantityInput.setAttribute("min", "0");
  productQuantityInput.setAttribute("placeholder", "Quantity");

  productQuantityCell.appendChild(productQuantityInput);
  productRow.appendChild(productQuantityCell);

  //Create and append to the row the cell that contains the subtotal of the product
  const productTotalCell = document.createElement("td");
  productTotalCell.setAttribute("class", "subtotal");
  productTotalCell.innerText = "$";
  
  const productTotalValue = document.createElement("span");
  productTotalValue.innerText = "0";

  productTotalCell.appendChild(productTotalValue);
  productRow.appendChild(productTotalCell);
  
  //Create and append to the row the cell that contains the remove button of the product
  const productBtnCell = document.createElement("td");
  productBtnCell.setAttribute("class", "action");
  
  const productBtnValue = document.createElement("button");
  productBtnValue.innerText = "Remove";
  productBtnValue.setAttribute("class", "btn btn-remove");

  productBtnCell.appendChild(productBtnValue);
  productRow.appendChild(productBtnCell);

  //Append the row to the body of the table
  parentBody.appendChild(productRow);

  productNameElm.value = "";
  productPriceElm.value = 0;

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  //const removeBtnsCollection = document.getElementsByClassName("btn-remove");
  //const removeBtnsCollectionCopy = [...removeBtnsCollection];

  //For the page to work correctly, we used an event listener in the document to detect click on the remove buttons 
  // removeBtnsCollectionCopy.forEach((button) => {
  //   button.addEventListener("click", removeProduct);
  // });

  const creatProductBtn = document.getElementById("create");

  creatProductBtn.addEventListener("click", createProduct);


});

document.addEventListener("click", (e) => {
  if(e.target.className === "btn btn-remove") {
    removeProduct(e);
  }
})
