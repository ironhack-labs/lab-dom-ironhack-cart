
let rows = document.getElementsByClassName("product");

let priceColumn = document.getElementsByClassName("price");
let qtyColumn = document.getElementsByClassName("quantity");
let totalColumn = document.getElementsByClassName("finalProduct");
let deleteBtn = document.getElementsByClassName("btn-delete");
let newName = document.getElementById('name');
let newPrice = document.getElementById('newPrice');

function calculateTotal(){
  let totalPrice = document.getElementById('totalPrice');
  let total = 0;
  for(let i = 0; i < rows.length; i++) {
    const price = Number(priceColumn[i].innerText.split("$")[1]);
    const qty = qtyColumn[i].value;
    console.log(price);
    total += price*qty;
  }
  console.log(totalPrice)
  totalPrice.innerText = total;
}
function calculatePrices() {
  for(let i = 0; i < rows.length; i++) {
    const price = Number(priceColumn[i].innerText.split("$")[1]);
    const qty = qtyColumn[i].value;
    
    const total = price * qty;
    totalColumn[i].innerText = total; 
  }
  calculateTotal();
}

function deleteRow(e){
  e.parentNode.parentNode.remove()
}

function addProduct(){
  let productList = document.getElementById('productList');
  var nodeName = document.createElement("div");
 let nameInput = document.getElementById('name').value;
 let priceInput = document.getElementById('newPrice').value;
  nodeName.innerHTML = `
  <div class="product">
  <div><span>${nameInput}</span></div>
  <div><span class="price">$${priceInput}</span></div>
  <div><label>QTY</label><input class="quantity" type="number" min="0" value="0"></div>
  <div class="finalProduct"><span></span></div>
  <div><button onclick="deleteRow(this)" class="btn-delete">delete</button></div> 
  </div>
  `
  productList.appendChild(nodeName);

  
}