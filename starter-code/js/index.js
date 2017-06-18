window.onload = initializePage();

function initializePage(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

  var quantity = document.querySelectorAll('.unit-quantity');
  quantity.forEach(function(item){
    item.addEventListener('blur', getTotalPrice);
  });
  
};


function deleteItem(e){
  var item = e.currentTarget.parentNode.parentNode;
  e.currentTarget.parentNode.parentNode.parentNode.removeChild(item);
}

function getTotalPrice() {

  var unitPrices = document.getElementsByClassName('unit-price');
  var totalAll = 0;

  for (i = 0; i <= unitPrices.length - 1; i += 1) {
    var unitprice = document.getElementById('unit-price' + i).innerHTML;
    var unitquantity = document.getElementById('unit-quantity' + i).value;
    var unitTotal = document.getElementById('total-price' + i).innerHTML;

    if (unitprice === undefined || unitquantity === undefined || isNaN(unitprice) || isNaN(unitquantity)) {
      continue;
    } else {
      unitTotal = (unitprice * unitquantity);
      document.getElementById('total-price' + i).innerHTML = unitTotal;
      totalAll += unitTotal;
    }
    document.getElementById('total-all').innerHTML = totalAll;
  }
}

function createNewItem(){

  var index = document.querySelectorAll('.row-container').length;

  createNewRow();
  createNewProductName(index);
  createNewProductPrice(index);
  createNewProductQuantity(index);
  createProductTotal(index);
  createDeleteButton(index);

  document.getElementById('new-item-name').value = '';
  document.getElementById('new-item-price').value = '';
  initializePage();

}

function createNewRow() {
  var rows = document.getElementById('rows');
  var row = document.createElement('div');
  rows.appendChild(row).setAttribute('class', 'row-container');
}

function createNewProductName(index) {

  var row = document.getElementById('rows').lastChild;
  var rowDiv = document.createElement('div');
  var rowSpan = document.createElement('span');

  row.appendChild(rowDiv).setAttribute('id', 'productname' + index);
  document.getElementById('productname' + index).setAttribute('class', 'item product-name');
  row.lastChild.appendChild(rowSpan).innerHTML = document.getElementById('new-item-name').value;
}

function createNewProductPrice(index) {

  var row = document.getElementById('rows').lastChild;
  var rowDiv = document.createElement('div');
  var rowSpan1 = document.createElement('span');
  var rowSpan2 = document.createElement('span');

  row.appendChild(rowDiv).setAttribute('id', 'productprice' + index);
  document.getElementById('productprice' + index).setAttribute('class', 'item product-price');
  row.lastChild.appendChild(rowSpan1).innerHTML = '$';
  row.lastChild.appendChild(rowSpan2).innerHTML = document.getElementById('new-item-price').value;
  row.lastChild.appendChild(rowSpan2).setAttribute('id', 'unit-price' + index);
  row.lastChild.appendChild(rowSpan2).setAttribute('class', 'unit-price');
}

function createNewProductQuantity(index) {

  var row = document.getElementById('rows').lastChild;
  var rowDiv = document.createElement('div');
  var rowLabel = document.createElement('label');
  var rowInput = document.createElement('input');

  row.appendChild(rowDiv).setAttribute('id', 'productquantity' + index);
  document.getElementById('productquantity' + index).setAttribute('class', 'item product-quantity');
  row.lastChild.appendChild(rowLabel).setAttribute('for', 'product-input');
  row.lastChild.appendChild(rowLabel).innerHTML = 'QTY ';
  row.lastChild.appendChild(rowInput).setAttribute('id', 'unit-quantity' + index);
  document.getElementById('unit-quantity' + index).setAttribute('value', 0);
  document.getElementById('unit-quantity' + index).setAttribute('class', 'unit-quantity');
}

function createProductTotal(index) {
  var row = document.getElementById('rows').lastChild;
  var rowDiv = document.createElement('div');
  var rowSpan1 = document.createElement('span');
  var rowSpan2 = document.createElement('span');

  row.appendChild(rowDiv).setAttribute('id', 'producttotal' + index);
  document.getElementById('producttotal' + index).setAttribute('class', 'item product-total');
  row.lastChild.appendChild(rowSpan1).innerHTML = '$';
  row.lastChild.appendChild(rowSpan2).setAttribute('id', 'total-price' + index);
  document.getElementById('total-price' + index).setAttribute('class', 'total-price');
  document.getElementById('total-price' + index).innerHTML = 0;
}

function createDeleteButton(index) {
  var row = document.getElementById('rows').lastChild;
  var rowDiv = document.createElement('div');
  var button = document.createElement('button');

  row.appendChild(rowDiv).setAttribute('id', 'delete' + index);
  document.getElementById('delete' + index).setAttribute('class', 'item delete');
  row.lastChild.appendChild(button).setAttribute('id', 'deletebtn' + index);
  document.getElementById('deletebtn' + index).setAttribute('class', 'btn btn-delete');
  document.getElementById('deletebtn' + index).innerHTML = 'Delete';
}
