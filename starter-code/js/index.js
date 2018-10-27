function deleteItem(e){
  var product = e.currentTarget.parentNode;
  product.parentNode.removeChild(product);

}

function getPriceByProduct(itemNode){

  return parseFloat(itemNode.querySelector('.price').textContent) * parseInt(itemNode.querySelector('.quantity').value);

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
    var totalPrice = 0;
        document.querySelectorAll('.product').forEach(function(product){
        var totalProductPrice = getPriceByProduct(product);
        product.querySelector(".totalByProduct").innerHTML = totalProductPrice;
        totalPrice += totalProductPrice;

    });  
    document.querySelector('#totalSum').innerHTML = totalPrice;

}

function createQuantityInput(){
  var element=document.createElement('div');
  element.setAttribute('class','quantity-container');
  element.appendChild(document.createElement('label').appendChild(document.createTextNode('Qty')));
  var quantityInput = document.createElement('input');
  quantityInput.setAttribute('class','quantity');
  quantityInput.setAttribute('type','number');
  quantityInput.setAttribute('value','0');
  element.appendChild(quantityInput);

  return element;
}

function createDeleteButton(){
  var deleteButton = document.createElement('button');
  deleteButton.setAttribute('class','btn btn-delete');
  deleteButton.appendChild(document.createTextNode('Delete'));
  deleteButton.onclick = deleteItem;
  return deleteButton;

}
function createTotalByProduct() {
  var total = document.createElement('div');
  total.setAttribute('class','totalByProduct-container');
  total.appendChild(document.createTextNode('$'));
  
  var span = document.createElement('span');
  span.setAttribute('class','totalByProduct');
  span.appendChild(document.createTextNode('0'));
  
  total.appendChild(span);
  return total;
}

function createProductName(productName){
  var name=document.createElement('div');
  name.setAttribute('class','product-name-container');
  var span=document.createElement('span');
  span.setAttribute('class','product-name');
  span.appendChild(document.createTextNode(productName));
  name.appendChild(span);
  return name;
}

function createProductPrice(productPrice){
  var price = document.createElement('div');
  price.setAttribute('class','price-container');
  price.appendChild(document.createTextNode('$'));
  
  var span=document.createElement('span');
  span.setAttribute('class','price');
  span.appendChild(document.createTextNode(productPrice));
  price.appendChild(span);

  return price;
}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  var product=document.createElement('div');
  product.setAttribute('class','product');
  product.appendChild(createProductName(itemName));
  product.appendChild(createProductPrice(itemUnitPrice));
  product.appendChild(createQuantityInput());
  product.appendChild(createTotalByProduct());
  product.appendChild(createDeleteButton());

  return product;

}

function createNewItem(){
  var newNameNode = document.querySelector('#newName');
  var newPriceNode = document.querySelector('#newPrice');
  if (newNameNode.value.length!==0 && newPriceNode.value.length !==0){
    document.querySelector('#products').appendChild(createNewItemRow(newNameNode.value, newPriceNode.value)); 
    newNameNode.value='';
    newPriceNode.value='';
  } else {
    alert("You Must Add a Product Name and a Product Price");
  }

  

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
