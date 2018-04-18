function deleteItem(e) {
  var rowToBeDeleted = e.currentTarget.parentNode.parentNode;
  var itemList = rowToBeDeleted.parentNode;
  itemList.removeChild(rowToBeDeleted);
}

//calculate's product's individual price
// let button = document.getElementById("calc-price")
// button.onClick = function(){
//   let x = document.getElementById('price');
//   let pPrice = x.textContent;
//   let y = document.getElementById('quantity').value;
//   return pPrice * y
//   document.getElementById("priceq").innerHTML = "$" + productPrice();
//   }

function getPriceByProduct(itemNode) {
  for (var i = 0; i < document.getElementsByClassName("price").length; i++) {
    let x = document.getElementsByClassName("price")[i].innerHTML;
    let y = document.getElementsByClassName("quantity")[i].value;
    let pPrice = x * y;
    document.getElementsByClassName("product-price")[i].innerHTML =
      pPrice;
  }
}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  getPriceByProduct();
  for (
    var i = 0, l = []; i < document.getElementsByClassName("product-price").length; i++){
    let totalPrice = eval(document.getElementsByClassName("product-price")[i].textContent);
    l.push(totalPrice);
    }
    // let price = 0;
    // for (var i =0; i<l.length; i++){
    //   price += l[i];  
    // }
    let pop = l.reduce((acc, elem) => {
      return acc + elem;
      }, 0)
  document.getElementsByClassName("total-price")[0].innerHTML = pop;
}

function createQuantityInput() {
  document.getElementsByClassName('quantity')[0].parentNode;
  
}

function createDeleteButton() {}

function createQuantityNode() {
  return document.getElementsByClassName('price-input')[0].value;

}

function createItemNode(dataType, itemData) {
  return document.getElementsByClassName('text-input')[0].value;
}

function createNewItemRow(/*itemName, itemUnitPrice*/) {
  //Creates new item
  // let newItem = document.createElement('div');
  let oldItem = document.getElementsByClassName('item')[0];
  newItem = oldItem.cloneNode(true);
  // newItem.appendChild(itemClone);
  //Gets name input, turns into text node and inserts into newItem.itemName
  let textNode = document.createTextNode(document.getElementsByClassName('text-input')[0].value);  
  let itemName = newItem.getElementsByClassName('item-name')[0];
  itemName.replaceChild(textNode, itemName.childNodes[0]);
  //Gets quantity input
  let priceNode = document.createTextNode(document.getElementsByClassName('price-input')[0].value)
  let itemPrice = newItem.getElementsByClassName('price')[0];
  itemPrice.replaceChild(priceNode, itemPrice.childNodes[0]);
  return newItem;
}

function createNewItem() {
  let createRow = document.getElementsByClassName('new-item-create')[0];
  let body = document.getElementsByTagName('body')[0];
  body.insertBefore(createNewItemRow(), createRow)
}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
