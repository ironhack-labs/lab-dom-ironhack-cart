// ITERATION 1
const priceArray = document.getElementsByClassName("price");
const quantityArray = document.getElementsByClassName("quantity");
const subtotalArray = document.getElementsByClassName("subtotal");
const total = document.querySelector("#total-value span");
const products = document.getElementsByClassName("product");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  for (let i = 0; i < priceArray.length; i++) {
    let price = priceArray[i].getElementsByTagName("span")[0].innerHTML;
    let quant = quantityArray[i].getElementsByTagName("input")[0].value;
    let result = Math.round(price * quant * 100) / 100;
    subtotalArray[i].getElementsByTagName("span")[0].innerHTML = result;
  };
  console.log(subtotalArray[0].getElementsByTagName("span")[0].innerHTML)
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProduct = document.querySelector('.product');
  updateSubtotal(allProduct);

  // ITERATION 3
  let allSubtotals = document.querySelectorAll(".subtotal span");
  let totals = 0;
  let value = 0
  for (let i = 0; i < allSubtotals.length; i++) {
    value = parseFloat(allSubtotals[i].innerHTML);
    totals += value;
  }
  total.innerHTML = totals;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const toRemove = target.parentNode.parentNode.querySelector(".quantity input");
  toRemove.value = 0
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const parent = document.getElementsByTagName("tbody")[0];
  let productName = document.querySelector(".name1 input").value;
  let priceNew = document.querySelector(".price1 input").value;
  let row = parent.insertRow();
  let nameCell = row.insertCell();
  let priceCell = row.insertCell();
  let quantityCell = row.insertCell();
  let subtotalCell = row.insertCell();
  let actionCell = row.insertCell();
  row.className = "product"
  nameCell.className = 'name';
  priceCell.className = 'price';
  quantityCell.className = 'quantity';
  subtotalCell.className = 'subtotal';
  actionCell.className = 'action';
  nameCell.innerHTML = `<span> ${productName} </span>`;
  priceCell.innerHTML = `$<span>${Math.round(priceNew*100)/100} </span>`;
  quantityCell.innerHTML = `<input type = "number" value = "0" min = "0" placeholder = "Quantity" />`;
  subtotalCell.innerHTML = ` $<span>0</span>`;
  actionCell.innerHTML = `<button class = "btn btn-remove"> Remove </button>`;
  let removeButton = actionCell.getElementsByTagName("button")[0];
  removeButton.className = "btn btn-remove";
  document.querySelector(".name1 input").value = "";
  document.querySelector(".price1 input").value = 0;

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.getElementsByClassName("btn btn-remove");
  const addRemoveButtons = () => {
    for (let i = 0; i < removeBtn.length; i++) {
      removeBtn[i].addEventListener('click', removeProduct);
    }
  };
  const createButton = document.getElementById("create");
  createButton.addEventListener('click', () => {
    createProduct();
    addRemoveButtons();
  });
});