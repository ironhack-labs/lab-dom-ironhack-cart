// function deleteItem(e){
//
// }
//
// function getPriceByProduct(itemNode){
// }
//
// function updatePriceByProduct(productPrice, index){
//
// }

function getTotalPrice(product) {
  console.log(product);
  price = document.getElementById("price-product"+product).innerText;
  amount = document.getElementById("quantity"+product).value;
  total = document.getElementById("total-price"+product);
  totalPrice = price * amount;
  total.innerHTML =  totalPrice;
}

function getTotal(){
  products = document.getElementsByClassName("product");
  productTotal = 0;
  totalEl = document.getElementById("totalProducts");
  for(i = 0; i<products.length; i++){
    productTotal += Number(products[i].innerText);
  }
  totalEl.innerHTML = "";
  totalEl.appendChild(document.createTextNode(productTotal));
  return productTotal;
}

var button = document.getElementById("calc-prices-button");
console.log(button);
button.onclick = function(){
  getTotalPrice(1);
  getTotalPrice(2);
  getTotal();
};
var deleteButtons = document.getElementsByClassName("btn-delete");
  for(i = 0; i<deleteButtons.length; i++){
    (function (i){
        deleteButtons[i].onclick = function(){
          console.log('trying remove ', i + 1);
          createDeleteButton(i + 1);
        };
    })(i);
    }




// function createQuantityInput(){
//
// }
//
function createDeleteButton(product){
  var parent = document.getElementById("shoppingList");
  var child = document.getElementById("product"+ product);
  parent.removeChild(child);
}
//
// function createQuantityNode(){
//
// }
//
// function createItemNode(dataType, itemData){
//
// }
//
// function createNewItemRow(itemName, itemUnitPrice){
//
// }
//
// function createNewItem(){
//
// }
//
// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');
//
//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.nclick = createNewItem;
//
//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
