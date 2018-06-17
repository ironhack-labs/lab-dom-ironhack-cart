function deleteItem(element) {
  var row = element.parentElement.parentElement;
  row.remove();
  getTotalPrice();
}

function getPriceByProduct(itemNode){
  
}

function updatePriceByProduct(element){
  var price = element.parentElement.parentElement.getElementsByClassName("unit-price")[0].innerText;
  var quantity = element.value;
  element.parentElement.parentElement.getElementsByClassName("total-price")[0].innerText=price*quantity;
  getTotalPrice();

}


function getTotalPrice() {
  var items = document.getElementsByClassName('item');
  var totalPrice = 0;
  for (var i = 0; i < items.length; i++) {
    
    totalPrice += Number(document.getElementsByClassName('total-price')[i].innerText);
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
              '<input class="quantity" type="number" name="QTY" onchange="updatePriceByProduct(this);" value="0">'+ 
      '</div>'+
      '<div class="item-count">'+
          '<span>$</span>'+
          '<span class="total-price">0.00</span>'+
      '</div>'+    
      
      '<div class="delete-item">'+
      '<button class="delete-btn" onclick="deleteItem(this);"> Delete</button>'+
      '</div>'+
'</div>';
  var divContainer = document.getElementsByClassName('container');
  divContainer[0].insertAdjacentHTML('beforeend',divElement);
  getTotalPrice();
}



window.onload = function(){
  getTotalPrice();
};
