function deleteItem(e){
  console.log("delete");
  console.log(e.target.closest('.product'));
  var container = document.getElementsByClassName('products-list')[0];
  container.removeChild(e.target.closest('.product'));
}

function getPriceByProduct(itemNode){
  
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var inputs = document.getElementsByTagName('input');
  var singlePrices = document.getElementsByClassName('product-cost');
  var totals = document.getElementsByClassName('product-total-price');

  [].forEach.call(inputs, function(elem, index){
    var value = elem.value;
    totals[index].innerText = value * singlePrices[index].innerText;
  })
  console.log(totals);
  var totalNums = [];
  [].forEach.call(totals, function(totalItem){
    totalNums.push(parseFloat(totalItem.innerText));
  })
  var sumTotal = totalNums.reduce(function(accumulator, current){
    return accumulator + current;
  });
  console.log(sumTotal);
  document.getElementsByTagName('h2')[0].getElementsByTagName('span')[0].innerText = '$' + sumTotal;
  
}

function createQuantityInput(){
  var elQtyInput = document.createElement('input');
  
  elQtyInput.dataset('id', 'quantity').dataset('type', 'text').dataset('placeholder', '0');
  return elQtyInput;
}

function createDeleteButton(){
  var elDeleteBtnNode = document.createElement('div'),
      elDeleteBtn = document.createElement('button');
  
  elDeleteBtn.dataset('id', 'delete-button').classList.add('btn btn-delete');
  elDeleteBtn.appendChild(elDeleteBtn);
  return elDeleteBtn;
}

function createQuantityNode(){
  var elQuantityNode = document.createElement('div'),
       elQuantityLabel = document.createElement('label'),
       elQuantityInput = createQuantityInput();

  elQuantityLabel.dataset('id', 'quantity').dataset('for', 'quantity');
  elQuantityNode.appendChild(elQuantityLabel).appendChild(elQuantityInput);
  return elQuantityNode;
}

function createItemNode(dataType, itemData){
  var newProduct = document.createElement('div');
}

function createNewItemRow(itemName, itemUnitPrice){
  var newProduct = document.createElement('div'),
      newProductNameNode = document.createElement('div'),
      newProductName = document.createElement('span');
      newProduct.classList.add('product');
      newProductName.classList.add("product-name").innerText(itemName);
      newProductNameNode.appendChild(newProductName),
      newProductCostNode = document.createElement('div'),
      newProductCost = document.createElement('span');
      newProductCost.classList.add('product-cost').innerText(itemUnitPrice);
      newProductCostNode.appendChild(newProductCost);
      newProduct.appendChild(newProductNameNode).appendChild(newProductCostNode);
      return newProduct;
}

function createNewItem(){
  console.log("create");
  var inputs = document.getElementById('add-product').getElementsByTagName('input');
  var prodValues = [];
  [].forEach.call(inputs, function(input) {
    prodValues.push(input.value);
  })
  var product = createNewItemRow(prodValues[0], prodValues[1]),
      quantity = createQuantityNode(),
      total = ,
      delete = createDeleteButton();
  document.getElementsByClassName('product-list')[0].appendChild(product).appendChild(quantity).appendChild(total).appendChild(delete);
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
