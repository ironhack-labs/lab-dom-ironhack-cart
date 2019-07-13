"use strict";

function createNewItem() {
  let addName = document.getElementById('add-name');
  let addPrice = document.getElementById('add-price');
  let product = document.createElement('div');
  product.classList.add('product');
  product.innerHTML = `
  <div class="space"><span class="name">${addName.value}</span></div>
  <div>$<span class="price">${Number(addPrice.value).toFixed(2)}</span></div>
  <div><label>QTY <input type="number" value="1" class="quantity" onchange="priceUpdate()"></label></div>
  <div>$<span class="total-product">${Number(addPrice).toFixed(2)}</span></div>
  <div><button class="btn btn-delete" onclick="deleteProduct(this)">Delete</button></div>
  `;
  
  document.getElementById('products').appendChild(product);
  addName.value = '';
  addPrice.value = '';
  priceUpdate();
}

function deleteProduct(element) {
  element.parentNode.parentNode.remove();
  priceUpdate();
}
  
function priceUpdate() {
  let qtts = document.querySelectorAll('.quantity');
  let prices = document.querySelectorAll('.price');
  let totals = document.querySelectorAll('.total-product');
  let totalPrice = 0;

  for (let i = 0; i < qtts.length; i++) {
    let currPrice = parseFloat(prices[i].innerText);
    let currQty = qtts[i].value;
    let currTotal = currPrice * currQty;
    totals[i].innerText = Number(currTotal).toFixed(2);
    totalPrice += currTotal;
  }

  document.getElementById('total-price').innerText = Number(totalPrice).toFixed(2);
}
