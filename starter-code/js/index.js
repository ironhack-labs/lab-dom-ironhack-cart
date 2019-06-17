window.onload = function(){
  function deleteItem(e){
      this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
      // console.log(this);
  }

  function getPriceByProduct(itemNode){
  }

  function updatePriceByProduct(productPrice, index){

  }

  function getTotalPrice() {
    let allItems = document.getElementsByClassName('item');  
    let currentTotal = 0; 
    for(let i = 0; i<allItems.length ; i++){
      let itemPrice = allItems[i].getElementsByClassName('item-price')[0].innerHTML.replace( /^\D+/g, ''); //get item price;
      let itemQTY = allItems[i].getElementsByClassName('item-qty')[0].value; //get item qty
      let itemTotal = itemPrice * itemQTY;
      allItems[i].getElementsByClassName('item-total-price')[0].innerHTML = itemTotal; //update total for the item
      currentTotal += itemTotal;
    }
    document.getElementById('all-items-total-price').innerHTML = currentTotal;
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
   let allItemsDiv = document.getElementById('all-items');
   let newItem = document.createElement('div');
   newItem.className = 'item';
   newItem.innerHTML = `
    <div>
      <span class="item-name">${document.getElementById('new-item-name').value}</span>
    </div>
    <div>
      <span class="item-price">$${document.getElementById('new-item-price').value}</span>
    </div>
    <div>
      <span>QTY</span><input class="item-qty" type="number" value="0" min="0">
    </div>
    <div>
      $<span class="item-total-price" >0</span>
    </div>
    <div>
      <button class="btn btn-delete">Delete</button>
    </div>`;
    allItemsDiv.append(newItem);
    //add the listener for the delete button
    let allDelBtn = allItemsDiv.getElementsByClassName('btn-delete');
    allDelBtn[allDelBtn.length-1].onclick = deleteItem;
  }

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
