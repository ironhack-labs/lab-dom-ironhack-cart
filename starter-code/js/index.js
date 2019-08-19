


function deleteItem(e){

}

function getPriceByProduct(){
  let productPrice = document.querySelector('#price span').innerHTML; // select the class name and the span
  let quantity = document.getElementById('quantity-value').value;
  let proPrice = parseFloat(productPrice.slice(2));
  //console.log(proPrice);
  let arrPrice = [];
  let arrQuantity = [];
  arrPrice.push(proPrice);
  arrQuantity.push(Number(quantity));
  let endPrice = arrPrice * arrQuantity;
  return endPrice.toFixed(2); 
}

function updatePriceByProduct(){
  let price = getPriceByProduct();
  const priceSpan = document.getElementById('endPrice');
  priceSpan.innerText = '';
  let span = document.createElement('span');
  span.innerText = '$ ' + price;
  priceSpan.appendChild(span);
}

function getTotalPrice() {
  getPriceByProduct();
  updatePriceByProduct();
  

}

// function createQuantityInput(){
// }

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  
}

function createNewItem(){
  let container = document.getElementsByClassName('container');
  // container.innerHTML += `<div class="container"></div>`;

  container = document.createElement('div');
  container.classList.add('conainter');
  container.appendChild(container);

  // <div id="container">
  //   <div> <span>item name</span> </div>
  //   <div class="price"> <span>$ 15,00</span> </div>
  //   <div class="quantity"> <form> <label for="quality">QTY</label> <input id="quantity-value" type="number" value="1"> </form> </div>
  //   <div> <span id="endPrice">$ 0,00</span> </div>
  //   <div> <button class="btn btn-delete" type="reset" value="Delete">Delete</button> </div>
  //   <div> <button id="new-item-create" class="btn btn-inserItem" type="submit" value="Submit">Insert Item</button> </div>
  // </div>

  console.log('hey');
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-btn');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
