
var productPrice = document.querySelector(".product-cost");
// console.log(productPrice.innerHTML);

var productQty = document.querySelector(".product-qty");
// console.log(productQty.value);

var productTotalQty = productQty.value * productPrice.innerHTML;
// console.log(productTotalQty);

var calculateBtn = document.querySelector(".btn-success");

var totalPrice = 0;
  
calculateBtn.onclick = function () {
  itemsArray = document.querySelectorAll(".wrap");
  // console.log(itemsArray);
  itemsArray.forEach(function (oneItem) {
    // console.log(oneItem);
    getPriceByProduct(oneItem)
  });

  var displayedTotalField = document.querySelector(".total-price-tag");
  displayedTotalField.innerHTML = totalPrice
};






  function deleteItem(e) {

  }

function getPriceByProduct(itemNode) {
  var productPrice = itemNode.querySelector(".product-cost");
  productPrice.innerHTML = Number(productPrice.innerHTML);
  // console.log(productPrice.innerHTML);


  var productQty = itemNode.querySelector(".product-qty");
  // productQty.value = Number(productQty);
  // console.log(productQty.value);

  var productTotalQty = productQty.value * productPrice.innerHTML;
  // console.log(productTotalQty);
  
  var totalField = itemNode.querySelector(".item-total-price");
      totalField.innerHTML = productQty.value * productPrice.innerHTML;
  
  
    
    totalPrice += Number(totalField.innerHTML);
  // console.log(totalPrice);
}
  

  function updatePriceByProduct(productPrice, index) {
  
  }

  function getTotalPrice() {
 
  }

  function createQuantityInput() {

  }

  function createDeleteButton() {

  }

  function createQuantityNode() {

  }

  function createItemNode(dataType, itemData) {

  }

  function createNewItemRow(itemName, itemUnitPrice) {

  }

  function createNewItem() {

  }
    

