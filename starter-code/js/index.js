function deleteItem(e) {
    e.currentTarget.parentNode;
    for (var i = 0; i < this.deleteButtons.length; i++){
    let x = document.getElementsByClassName('item')[i];
    let body = document.getElementsByTagName('body')[i];
    body.removeChild(x);
}}

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

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  deleteButtons = function(){for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }}
};
