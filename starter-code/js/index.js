    function deleteItem(e){

    }

    function getPriceByProduct(itemNode){

    }

    function updatePriceByProduct(productPrice, index){

    }

    function calculatePrices(){
      var amountOfPrices = document.getElementsByClassName("price").length;

      var price = 0;
      var quantity = 0;
      var totalRow = 0;
      var totalFinal = 0;

      for(var i = 0; i < amountOfPrices; i++){
        price = document.getElementsByClassName("price")[i].innerHTML;
        quantity = document.getElementsByClassName("quantity")[i].valueAsNumber;

        rowPrice = price * quantity;
        document.getElementsByClassName("total")[i].innerHTML = rowPrice;

        totalFinal += price * quantity;
        console.log((i+1) + "st product's total is: " + rowPrice);
      }
      console.log("Total order is: " + totalFinal);
    }

    function getTotalPrice() {
        var price = document.getElementsByClassName("price")[0].innerHTML;
        var quantity = document.getElementById("number").value;
        var total = price * quantity;
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

    }
window.onload = function(){
    var calculatePriceButton = document.getElementById('calc-prices-button');

    var createItemButton = document.getElementById('new-item-create');
    var deleteButtons = document.getElementsByClassName('btn-delete');

    //calculatePriceButton.onclick = getTotalPrice;
    //createItemButton.onclick = createNewItem;

    for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
    }
};
