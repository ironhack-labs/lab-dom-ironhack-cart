function deleteItem(e){
  var bodyElem = e.target.parentNode.parentNode.parentNode;
  var divRow = e.target.parentNode.parentNode;
  bodyElem.removeChild(divRow);
  getTotalPrice();
}

function getPriceByProduct(itemNode){
  return document.querySelector('#'+itemNode).innerHTML.slice(1);
}

function getUnitsByProduct(itemNode){
  var unitsElem = document.querySelector('#'+itemNode).value;
  return +unitsElem;
}

function updatePriceByProduct(productPrice, index){
  document.getElementById(index).innerHTML='$'+productPrice;
}

function getTotalPrice() {
    var productos = document.querySelectorAll(".product-qty");
    var sumtotal = 0;
    productos.forEach( function(product, idx) {
      var priceElemId = document.querySelectorAll(".product-price")[idx].id;
      var qtyElemId = document.querySelectorAll(".product-qty")[idx].id;
      var totalElemId = document.querySelectorAll(".product-total")[idx].id;

      var productPrice = getPriceByProduct(priceElemId);
      var productUnits = getUnitsByProduct(qtyElemId);
      var productTotal = productPrice * productUnits;
      updatePriceByProduct( productTotal, totalElemId );      
      sumtotal += productTotal;
    });
    
    var productsTotalElem = document.querySelector('#products-total');
    document.getElementById(productsTotalElem.id).innerHTML='$'+sumtotal;

    

}

function createItemNode(rowNumber, dataType, itemData){   
  return `<div class="product-name">\n\t\t<span>${dataType}</span>\n\t</div>\n\t<div>\n\t\t<span class="product-price" id="product-price-${rowNumber}">\$${itemData}</span>\n\t</div>`;
}

function createQuantityInput(rowNumber){
  return `<div>\n\t\t<label for="">QTY</label><input class="product-qty" id="product-qty-${rowNumber}" type="text" value="1">\n\t</div>`;
}

function createQuantityNode(rowNumber){
  return `<div>\n\t\t<span class="product-total" id="product-total-${rowNumber}">$00</span>\n\t</div>`;
}

function createDeleteButton(rowNumber){
  return `<div>\n\t\t<button id="btn-delete-${rowNumber}" class="btn btn-delete">Delete</button>\n\t</div>`;
}




function createNewItemRow(lastRow, itemName, itemUnitPrice){
  var newRow = lastRow + 1;

  var htmlNewRow = `<div id="product-row-${newRow}" class="flex">\n`;
  htmlNewRow += `\t${createItemNode(newRow, itemName, itemUnitPrice)}\n`;
  htmlNewRow += `\t${createQuantityInput(newRow)}\n`; 
  htmlNewRow += `\t${createQuantityNode(newRow)}\n`;
  htmlNewRow += `\t${createDeleteButton(newRow)}\n`;
  htmlNewRow += `</div>`;

  var productsGrid = document.querySelectorAll(".products-grid");
  lastGridRow = productsGrid[0].lastElementChild;
  if (lastGridRow === null) productsGrid[0].insertAdjacentHTML('afterbegin', htmlNewRow );
  else lastGridRow.insertAdjacentHTML('afterend', htmlNewRow );
  return htmlNewRow;

}

function createNewItem(){
  var numProductos = document.querySelectorAll(".products-grid");
  numProductos = numProductos[0].childElementCount;
  var newElemName = document.querySelector('#new-product-name').value;
  var newElemPrice = document.querySelector('#new-product-price').value;
  console.log(createNewItemRow(numProductos, newElemName, +newElemPrice));
  document.querySelector('#new-product-name').value = "New product name";
  document.querySelector('#new-product-price').value = "$0";

  var deleteButtons = document.querySelectorAll('.btn-delete'); 
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  calculatePriceButton.onclick = getTotalPrice;

  var deleteButtons = document.querySelectorAll('.btn-delete'); 
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

  var createItemButton = document.getElementById('new-item-create');
  createItemButton.onclick = createNewItem;



};
