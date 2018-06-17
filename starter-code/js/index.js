function deleteItem(e) {
  var rowProduct = e.currentTarget.parentNode.parentNode;
  rowProduct.remove();
}

function getPriceByProduct(itemNode){
  
}

function updatePriceByProduct(productPrice, index){

}


function getTotalPrice() {
  var items = document.getElementsByClassName('item');
  var count = 0;
  var totalPrice = 0;
  for (var i = 0; i < items.length; i++) {
    
    totalPrice += Number(document.getElementsByClassName('unit-price')[i].innerText)
     /* var unitPrice = items[i].getElementsByClassName('unit-price')[0].innerHTML;
    var qty = items[i].getElementsByClassName('quantity')[0].value;
    var totalUnit = parseFloat(unitPrice) * parseFloat(qty);
    items[i].getElementsByClassName('.unit-price')[0].value = ;
    count += totalUnit; */
  }
  document.getElementById('total-cart').innerText = totalPrice;

}


function createQuantityInput(){

}

function createDeleteButton(){


}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){
  

}

function createNewItemRow(){
  var inputName = document.getElementById('createName').value;
  var inputPrice = document.getElementById('createPrice').value;
  inputPrice=parseFloat(inputPrice).toFixed(2);
  var divElement = '<div class="item">'+
  '<div class="item-name"><span>'+inputName+'</span></div>'+
  '<div class="item-price">'+
  '<span class="price-element">$ </span>'+
  '<span class="unit-price">'+inputPrice+'</span>'+
  '</div>'+
  '<div class="item-qty">'+
          '<span>QTY</span>'+
              '<input class="quantity" type="number" name="QTY" value="0">'+ 
      '</div>'+
      '<div class="item-count">'+
          '<span>$</span>'+
          '<span class="total-price">0.00</span>'+
      '</div>'+    
      
      '<div class="delete-item">'+
      '<button class="delete-btn"> Delete</button>'+
      '</div>'+
'</div>';
  var divContainer = document.getElementsByClassName('container');
  divContainer[0].insertAdjacentHTML('beforeend',divElement);
  getTotalPrice();
  

  /* var container = document.createElement('div');
  container.setAttribute('class', 'item');
  var titleContainer = container.appendChild(document.createElement('div class="item-name"'));
  var spanTitle = titleContainer.appendChild(document.createElement('span'));
  spanTitle.appendChild(document.createTextNode(inputName));
  var secondChild = container.appendChild(document.createElement('div'));
  secondChild.innerHTML = '<span class="price-element">$</span> <span class="unit-price">' + inputPrice + '</span>';
  var thirdChild = container.appendChild(document.createElement('div'));
  thirdChild.innerHTML = '<span class="item-qty">QTY</span><input type="number" name="QTY" id="input" class="quantity">';
  var fourChild = container.appendChild(document.createElement('div'));
  fourChild.innerHTML = '<span>$</span><span class="total-price">0.00</span>';
  var fiveChild = container.appendChild(document.createElement('div'));
  fiveChild.innerHTML = '<button class="delete-btn">Delete</button>';

  return container; */

}

function create() {
  var inputName = document.getElementById('createName').value;
  var inputPrice = document.getElementById('createPrice').value;
  //var row = createNewItemRow(inputName, inputPrice);
  document.getElementsByClassName('cart')[0].appendChild(row);
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
}


window.onload = function(){
  getTotalPrice();
  var calculatePriceButton = document.getElementById('price-btn');
  var createItemButton = document.getElementById('create-btn');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
