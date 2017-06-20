function deleteItem(e){
  e.currentTarget.parentNode.parentNode.parentNode.removeChild(e.currentTarget.parentNode.parentNode);
}

function getPriceByProduct(itemNode){
  var productUnitPrice = document.getElementsByClassName("product__unit-price")[itemNode].getElementsByTagName('span')[0].innerText.slice(1);
  var productQty = document.getElementsByClassName("input__qty")[itemNode].value;
  return (productUnitPrice * productQty);
}

function updatePriceByProduct(productPrice, index){
  var totalProductPrice = document.getElementsByClassName("product__price-total")[index];
  totalProductPrice.innerHTML = "$" + productPrice;
}

function getTotalPrice() {
  var totalPrice = 0;
  // for each product, get the price and update it
  for (var i = 0; i < document.getElementsByClassName('product').length; i +=1) {
    var productPrice = getPriceByProduct(i);
    updatePriceByProduct(productPrice,i);
    totalPrice += productPrice;
  }
  // update the total price
  document.getElementsByClassName('total-price')[0].innerHTML = "$" + totalPrice;;
}

function createQuantityLabel(){
  var newQuantityLabel = document.createElement('label');
  newQuantityLabel.setAttribute('for','qty');
  var newQuantityLabelContent = document.createTextNode('QTY');

  newQuantityLabel.appendChild(newQuantityLabelContent);
  return newQuantityLabel;
}

function createQuantityInput(){
  var newQuantityInput = document.createElement('input');
  newQuantityInput.setAttribute('class','input__qty');
  newQuantityInput.setAttribute('type','text');
  newQuantityInput.setAttribute('value','0');  

  return newQuantityInput;
}

function createDeleteButton(){
  var newDeleteButtonNode = document.createElement('div');
  newDeleteButtonNode.setAttribute('class','product__delete');

  newDeleteButton = document.createElement('button');
  newDeleteButton.setAttribute('class','btn btn-delete');
  var newDeleteButtonContent = document.createTextNode('Delete');
  
  newDeleteButton.appendChild(newDeleteButtonContent);
  newDeleteButtonNode.appendChild(newDeleteButton);
  
  // Add event listener to the new button
  newDeleteButton.onclick = deleteItem;
  
  return newDeleteButtonNode;
}

function createQuantityNode(){
  var newQuantityNode = document.createElement('div');
  newQuantityNode.setAttribute('class','product__qty');

  newQuantityNode.appendChild(createQuantityLabel());

  newQuantityNode.appendChild(createQuantityInput());
  
  return newQuantityNode;
}

function createItemNode(dataType, itemData){
  
  switch(dataType) {
    case 'name':
      var newProductNameNode = document.createElement('div');
      newProductNameNode.setAttribute('class','product__name');
  
      var newProductNameSpan = document.createElement('span');
      var newProductNameSpanContent = document.createTextNode(itemData);
      newProductNameSpan.appendChild(newProductNameSpanContent);
      newProductNameNode.appendChild(newProductNameSpan);

      return newProductNameNode;

    case 'unitPrice':
      var newProductUnitPriceNode = document.createElement('div');
      newProductUnitPriceNode.setAttribute('class','product__unit-price');
  
      var newProductUnitPriceSpan = document.createElement('span');
      var newProductUnitPriceSpanContent = document.createTextNode("$"+itemData);
      newProductUnitPriceSpan.appendChild(newProductUnitPriceSpanContent);
      newProductUnitPriceNode.appendChild(newProductUnitPriceSpan);

      return newProductUnitPriceNode;

    case 'qty': 
      return createQuantityNode();

    case 'price':
      var newProductPriceNode = document.createElement('div');
      newProductPriceNode.setAttribute('class','product__price');
  
      var newProductPriceSpan = document.createElement('span');
      newProductPriceSpan.setAttribute('class', 'product__price-total');
      var newProductPriceSpanContent = document.createTextNode("$0");
      newProductPriceSpan.appendChild(newProductPriceSpanContent);
      newProductPriceNode.appendChild(newProductPriceSpan);

      return newProductPriceNode;

    case 'deleteButton': 
      return createDeleteButton();
    default:
      console.log("Unexpected node type: ", dataType);
      break;
  }
}

function createNewItemRow(itemName, itemUnitPrice){
  // Get product list
  var productList = document.getElementsByClassName('productList')[0];

  // Create product
  var newProductNode = document.createElement('div');
  newProductNode.setAttribute('class','product');
  
  // Add name
  newProductNode.appendChild(createItemNode('name', itemName));
  // Add Unit Price
  newProductNode.appendChild(createItemNode('unitPrice', itemUnitPrice));
  // Add quantity
  newProductNode.appendChild(createItemNode('qty'));
  // Add price
  newProductNode.appendChild(createItemNode('price'));
  // Add delete button
  newProductNode.appendChild(createItemNode('deleteButton'));

  // Add new product to product list
  productList.appendChild(newProductNode);
}

// Simpler way of creating a product
function moreElegantCreateNewItemRow(itemName, itemUnitPrice){
  // Get product list
  var productList = document.getElementsByClassName('productList')[0];

  // Clone product
  var newProductNode = document.getElementsByClassName('product')[0].cloneNode(true);

  // update name
  newProductNode.querySelectorAll('.product__name span')[0].innerText = itemName;
  
  // update unit price
  newProductNode.querySelectorAll('.product__unit-price span')[0].innerHTML = "$"+itemUnitPrice;
  
  // Set delete button event
  newProductNode.getElementsByClassName('btn-delete')[0].onclick = deleteItem;
  
  // Add new product to product list
  productList.appendChild(newProductNode);
}

function createNewItem(){
  var newProductName = document.getElementsByClassName('product-creator__name')[0].value;
  var newProductUnitPrice = document.getElementsByClassName('product-creator__unit-price')[0].value;
  moreElegantCreateNewItemRow(newProductName, newProductUnitPrice);
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
