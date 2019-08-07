function deleteItem(val){
  var elem = document.querySelector(`#product${val}`);
  elem.parentNode.removeChild(elem);
  getTotalPrice();
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var containerDiv = document.getElementById('products');
  var elements = containerDiv.getElementsByClassName('product').length;
  let final = 0;
  for(let i = 1; i <= elements; i++) {
    let quantity = document.getElementById('quantity' + i).value;
    let cost = document.getElementById('productCost' + i).innerHTML;
    let result = quantity * cost.slice(1);
    document.getElementById('finalPrice' + i).innerHTML = `$${result}`;
    final += result;
  }
  document.getElementById('finalPrice').innerHTML = `$${final}`
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
  var container = document.getElementById('products');
  var productName = document.getElementById('newProductName').value;
  var productCost = document.getElementById('newProductCost').value;
  var containerDiv = document.getElementById('products');
  var count = containerDiv.getElementsByClassName('product').length;

  // console.log(`productName: ${productName}. productCost: ${productCost}. Elements: ${count}`);
        const div = document.createElement("div");
        div.innerHTML = `
        <div id="product${count + 1}" class="product">
          <div id="productName${count + 1}">
            <span>${productName}</span>
          </div>
          <div>
            <span id="productCost${count + 1}">$${productCost}.00</span>
          </div>
          <div>
            QTY: <input type="text" id="quantity${count + 1}">
          </div>
          <div>
            <span id="finalPrice${count + 1}">$0.00</span>
          </div>
          <div id="delete${count + 1}">
            <button class="btn btn-delete" onclick="deleteItem(${count + 1})">Delete</button>
          </div>
        </div>`;
        container.appendChild(div);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
