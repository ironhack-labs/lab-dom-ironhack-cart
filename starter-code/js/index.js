function deleteItem(e){
    var parentBtn = e.currentTarget.parentNode.parentNode;
    parentBtn.parentNode.removeChild(parentBtn);
    getTotalPrice();
}


function getTotalPrice() {
  var product = document.querySelectorAll('#container li');
  var count= 0;
  for(var i= 0;i < product.length; i++){
    var unitPrice = product[i].getElementsByClassName('price')[0].innerText;
    var qty = product[i].getElementsByTagName('input')[0].value;
    var totalUnit = parseFloat(unitPrice) * qty;

    product[i].getElementsByClassName('totalPriceItem')[0].innerHTML = totalUnit;
    count += totalUnit;
  }
  document.getElementById('total-cart').innerHTML = count;
}


function createQuantityInput(e){
  //// add quantity item ////
  var extraDivqty = document.createElement('div');
  e.appendChild (extraDivqty);
  var extraLabel = document.createElement('label');
  var extraInputqty = document.createElement('input');
  extraDivqty.appendChild(extraLabel).innerText = "QTY";
  extraLabel.setAttribute("for","QTY");
  extraDivqty.appendChild(extraInputqty);
  extraInputqty.setAttribute("class","quantity");
  extraInputqty.setAttribute("type","number");
}

function createDeleteButton(e){
  //// add delete buttom //// 
  var extraDivBtn = document.createElement('div');
  e.appendChild(extraDivBtn);
  var extraDeleteBtn = document.createElement('button');
  extraDeleteBtn.setAttribute('class', 'btn btn-delete');
  e.appendChild(extraDeleteBtn).innerText = "Delete";
}

function createItemSum(e){
  var itemSum = document.createElement('div');
  e.appendChild(itemSum);

  // create span dollar
  var itemSumDollar = document.createElement('span');
  itemSumDollar.innerText = "$";
  itemSum.appendChild(itemSumDollar);
  // create span price
  var itemSumPrice = document.createElement('span');
  itemSumPrice.setAttribute('class','totalPriceItem')
  itemSumPrice.innerText = "0.00";
  itemSum.appendChild(itemSumPrice);
}


function createNewItemRow(itemUnitName, itemUnitPrice){
  var extraLi = document.createElement('li');
  extraLi.setAttribute('class','item')
  var extraRow = document.getElementById("container").appendChild(extraLi);

  //// add name item ////
  // create div
  var extraDiv = document.createElement('div');
  extraRow.appendChild(extraDiv);
  // create span
  var extraSpan = document.createElement('span');
  extraSpan.innerText = itemUnitName;
  extraDiv.appendChild(extraSpan);

  //// add price item ////
  // create div
  var extraDivPrice = document.createElement('div');
  extraRow.appendChild(extraDivPrice);
  // create span dollar
  var extraSpanDollar = document.createElement('span');
  extraSpanDollar.innerText = "$";
  extraDivPrice.appendChild(extraSpanDollar);
  // create span price
  var extraSpanPrice = document.createElement('span');
  extraSpanPrice.setAttribute('class','price')
  extraSpanPrice.innerText = itemUnitPrice;
  extraDivPrice.appendChild(extraSpanPrice);

  createQuantityInput(extraRow);
  createItemSum(extraRow);
  createDeleteButton(extraRow);
}

function createNewItem(){
    //// recover input information ////
    var itemName = document.getElementById('createName').value;  
    var itemPrice = document.getElementById('createPrice').value;
  
    createNewItemRow(itemName, itemPrice);
  
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
