
function deleteItem(e){
  let deletebtn = e.currentTarget;
  console.log(deletebtn)
  deletebtn.parentElement.parentElement.remove();

}

function getPriceByProduct(itemNode){
  let price = itemNode.querySelector(".price").innerHTML;
  let pricesansdollar = Number(price.substr(1));
  let quantity = itemNode.querySelector(".quantity").value
  let totalPrice = pricesansdollar * quantity

  return totalPrice

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  document.querySelectorAll(".product").forEach((product)=>{
    let totalPrice = getPriceByProduct(product)
    product.querySelector(".totalPrice").innerHTML = `$${totalPrice}`
  });
  let newArray = [];
  document.querySelectorAll(".totalPrice").forEach((price)=>{;
    newArray.push(Number(price.innerHTML.substr(1)));
  });
    let sum = newArray.reduce((acc, curr)=>{
      acc = acc + curr
      return acc 
    },0); 
    console.log(sum)

  let h2 = document.createElement("h2")
  let body = document.querySelector("body")
  body.appendChild(h2)
  return h2.innerHTML = `Total Prices= $${sum}`
}

function createQuantityInput(e){
  let quantityInput = document.createElement("div")
  quantityInput.className = "productQuantity";
  let product = document.querySelector("#productList .product:last-child")
  product.appendChild(quantityInput)
  quantityInput.innerHTML = `<label for="qty">QTY</label>
  <input class="quantity" type="number" min="0" value="0">`;
};

function createDeleteButton(){
  let deleteBtn = document.createElement("div")
  deleteBtn.className = "productbtn";
  let product = document.querySelector("#productList .product:last-child")
  product.appendChild(deleteBtn)
  deleteBtn.innerHTML = `<button class="btn btn-delete">Delete</button>`;
}

function createQuantityNode(){
  let totalPrice = document.createElement("div")
  totalPrice.className = "totalPrice";
  let product = document.querySelector("#productList .product:last-child")
  product.appendChild(totalPrice)
  totalPrice.innerHTML = `<span >$0.00</span>`;
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  let product = document.createElement("div")
  let productList = document.getElementById("productList")
  productList.appendChild(product)
  product.className = "product"
  let productName = document.createElement("div")
  product.appendChild(productName)
  productName.className = "productName"
  productName.innerHTML = `<span>${itemName}</span>`
  let productPrice = document.createElement("div")
  product.appendChild(productPrice)
  productPrice.className = "productPrice"
  productPrice.innerHTML = `<span class="price">$${itemUnitPrice}</span> `
}

function createNewItem(){
  let newName = document.querySelector(".newName").value
  let newUnitPrice = document.querySelector(".newPrice").value
  createNewItemRow(newName, newUnitPrice)
  createQuantityInput()
  createQuantityNode()
  createDeleteButton()
  listenDeleteClicks()
}

function listenDeleteClicks() {
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

window.onload = function(){

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  listenDeleteClicks();
  
};
