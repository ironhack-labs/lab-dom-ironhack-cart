// function deleteItem(e){

// }

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

// function getTotalPrice() {

// }

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

// function createNewItem(){

// }

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  deleteButtons.onclick = deleteItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

function getTotalPrice(){

    for(i=0; i<2; i++){
      
      var productPrice = document.getElementById('productPrice'+i);
      var productQuantity = document.getElementById('productQuantity'+i);
      var lineTotal = document.getElementById('lineTotal'+i);
  
      lineTotal.innerHTML = Number(productPrice.innerHTML)*Number(productQuantity.value);
    }

    var lineTotals = document.getElementsByClassName('lineTotal');
    var lineTotalSum = 0;
    var totalPurchase = document.getElementById('totalPurchase');
    
    for(i=0; i< lineTotals.length; i++){
      
      lineTotalSum +=  Number(document.getElementsByClassName('lineTotal')[i].innerHTML);
    }

    totalPurchase.innerText = lineTotalSum;
};

function createNewItem(){

  var newRow = document.createElement('div');
  
  newRow.innerHTML = `
  <div class="productLines">
      <div><span for="productName">IronShirt</span></div>
      <div><p>$<span class="productPrice" name="productPrice" >15.00</span></p></div>
      <div><input name="productQuantity" type="number" value="1"></div>
      <div><p>$<span class= "lineTotal" name="lineTotal">0</span></p></div>
      <div><button class=" btn btn-delete" type="button">Delete</button></div>
    </div>`

    document.getElementById('productLinesContainer').appendChild(newRow);

}

function deleteItem(e){

  console.log(event.currentTarget.parentNode.parentNode);
  event.currentTarget.parentNode.parentNode.remove(); 

}