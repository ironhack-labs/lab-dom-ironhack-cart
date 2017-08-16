document.querySelectorAll('.total-cost');
var newBtn = document.querySelector('.btn-new');
var ps = document.querySelectorAll('.btn-delete');


window.onload = function(productPrice, index){
  var calculateBtn = document.querySelector('.btn-success');
//Finds total prices upon clicking green button
  calculateBtn.onclick = function(productPrice, index){
    //total price declared
    var totalPrice = 0;
    var itemAmount = document.querySelectorAll('.cost').length;
      for(var i = 0; i < itemAmount; i++){
      //selects price and converts to int
      productPrice = parseInt(document.querySelectorAll('.cost')[i].innerHTML);
      //select inputted quantity
      index = parseInt(document.querySelectorAll('.quantity-input')[i].value);
      document.querySelectorAll('.total-cost')[i].innerHTML = '$' + (productPrice*index);
      totalPrice += productPrice*index;
      document.querySelector('.total-price').innerHTML = totalPrice;
}
  };
    newBtn.onclick = function(){
      var newItem = document.createElement('div');
      var itemNameInput = document.querySelector('.item-name-input').value
      var itemPriceInput = document.querySelector('.item-price-input').value
      newItem.setAttribute('class', 'wrapper')
      newItem.innerHTML = '<div><span class="product-name">' + itemNameInput + '</span></div><div><span class="cost">' + itemPriceInput + '</span></div><div class="quantity"><label for="quantity">QTY</label><input type="text" class="quantity-input"></div><div><span class="total-cost"></span></div><div><button class="btn btn-delete"> Delete </button></div>'
      var allItems = document.querySelector('.all-items');
      allItems.appendChild(newItem);
      //Figure out how to add to ps array!!!!
      var ps = document.querySelectorAll('.btn-delete');
      //Delete row for new item
      function deleteRow(e){
        var deletedQuantity = e.currentTarget.parentElement.parentElement.children[2].children[1].value;
        var deletedPrice = e.currentTarget.parentElement.parentElement.children[1].children[0].innerHTML;
        var totalPrice = parseInt(document.querySelector('.total-price').innerHTML);
          document.querySelector('.total-price').innerHTML = totalPrice - (deletedQuantity * deletedPrice);
          //Remove row
        e.currentTarget.parentElement.parentElement.remove();
        // When this function is used as an event handler: this === e.currentTarget
      }
      for(var i = 0; i < ps.length; i++){
        // document.querySelector('.total-price').innerHTML = totalPrice - index;
        ps[i].addEventListener('click', deleteRow, false);
        console.log(ps);
      }
      //ps.push('button.btn.btn-delete').addEventListener('click', deleteRow, false);
      // console.log(ps);

  }
  function deleteRow(e){
    var deletedQuantity = e.currentTarget.parentElement.parentElement.children[2].children[1].value;
    var deletedPrice = e.currentTarget.parentElement.parentElement.children[1].children[0].innerHTML;
    var totalPrice = parseInt(document.querySelector('.total-price').innerHTML);
      document.querySelector('.total-price').innerHTML = totalPrice - (deletedQuantity * deletedPrice);
      //Remove row
    e.currentTarget.parentElement.parentElement.remove();
    // When this function is used as an event handler: this === e.currentTarget
  }
  for(var i = 0; i < ps.length; i++){
    // document.querySelector('.total-price').innerHTML = totalPrice - index;
    ps[i].addEventListener('click', deleteRow, false);
    console.log(ps);
  }






  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;


};


//
// function getPriceByProduct(itemNode){
//
// }
//
// /*
// calculateBtn.onclick = function updatePriceByProduct(){
//     productPrice = parseInt(document.querySelector('.cost').innerHTML);
//     index = parseInt(document.querySelector('#quantity').value);
//     var total = index*productPrice;
//     total = document.querySelector('.total-cost').innerHTML;
// }
// */
//
//
//
// function getTotalPrice() {
//
// }
//
// function createQuantityInput(){
//
// }
//
// function createDeleteButton(){
//
// }
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
