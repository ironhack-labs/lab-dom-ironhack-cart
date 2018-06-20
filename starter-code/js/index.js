window.onload = function() {
var singleItemCost = document.getElementsByClassName('itemCost');
var theQuantity = document.getElementsByClassName('itemQty');
var singleItemTotal = document.getElementsByClassName('totalItemPrice');
var realTotalPrice = document.getElementById('spanTotal');
var calcPricesBtn = document.getElementById('calc-prices-button');
// var rows = document.getElementsByClassName('row');
var deleteButtons = document.getElementsByClassName('btn-delete');

calcPricesBtn.onclick = function(){
  for(var i = 0; i < singleItemCost.length; i++){
      var itemQty = theQuantity[i].value;
      var unitCost = singleItemCost[i].innerHTML;
      var totalItemCost = itemQty * unitCost
      singleItemTotal[i].innerHTML = totalItemCost.toFixed(2);
  }
  var arr = [].slice.call(singleItemTotal)
  // this line turns array-like-object into an actual array- now able to run a .reduce function on our array
  var realFinalTotal = arr.reduce(function(sum, eachNumSpan){
      return sum + Number(eachNumSpan.innerHTML);
  },0)
  realTotalPrice.innerHTML = realFinalTotal.toFixed(2);
}

document.getElementById('createBtn').onclick = function(){
  var priceToCreate = document.getElementById('itemCostValue').value;
  var nameToCreate = document.getElementById('itemNameValue').value;
  var newRow = document.createElement('div');
  newRow.className += 'row';
  newRow.innerHTML = `
  <div class="col-xs-5">
      <span class="itemName">${nameToCreate}</span>
  </div>
  <div class="col-xs-5">
      $<span class="itemCost">${priceToCreate}</span>
  </div>
  <div class="col-xs-5">
      <label for="qty">QTY</label>
      <input type="number" value="0" min="0" class="itemQty">
  </div>
  <div class="col-xs-5">
      $<span class="totalItemPrice">0.00</span>
  </div>
  <div class="col-xs-5 delete">
      <button class="btn btn-delete">DELETE</button>
  </div>
  `
document.getElementById('something').appendChild(newRow);

for(var i = 0; i < deleteButtons.length; i++){
  deleteButtons[i].onclick= function(event){
     event.currentTarget.parentNode.parentNode.remove();
  }
}
}
};

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   };
