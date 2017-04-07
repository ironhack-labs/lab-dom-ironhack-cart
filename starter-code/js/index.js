$( document ).ready(function() {
  $('.bubble').click (function(){
    $("#product").remove();
    bla = 0;
    total = shirt - bla ;
    $('#grand-total').text("Your Total: $"+ total);
  });
  var bla = $('#exampleInputAmount').val();
  $('#exampleInputAmount').change(function(){
    bla = 25 * Number($(this).val());
    $('#total-price').text("$ "+ bla);
  });

  var shirt = $('#InputAmount').val();
  $('#InputAmount').change(function(){
    shirt = 15 * Number($(this).val());
    $('#total-shirt').text("$ "+ shirt);
  });

  $('.shirt').click (function(){
    $("#shirt-product").remove();
    shirt = 0;
    total = bla - shirt ;
    $('#grand-total').text("Your Total: $"+ total);
  });

  $('.calc').click (function(){
    total = bla + shirt ;
    $('#grand-total').text("Your Total: $"+ total);
    return total;
  });

});
//
// function deleteItem(e){
//
// }
//
// function getPriceByProduct(itemNode){
//
// }
//
// function updatePriceByProduct(productPrice, index){
//
// }
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
//
// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');
//
//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;
//
//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
