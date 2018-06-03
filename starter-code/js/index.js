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
  for (var i = 0; i < items.length; i++) {
    //[0] pq el byClassName devuelve una array, con 0 te refieres al primero
    var unitPrice = items[i].getElementsByClassName('unit-price')[0].innerHTML;
    var qty = items[i].getElementsByClassName('quantity')[0].value;
    var totalUnit = parseFloat(unitPrice) * parseFloat(qty);
    items[i].getElementsByClassName('total-price')[0].innerHTML = totalUnit;
    count += totalUnit;
  }
  document.getElementById('total-cart').innerHTML = count;
  return totalUnit;
}


function createQuantityInput(){

}

function createDeleteButton(){


}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){
  

}

function createNewItemRow(inputName, inputPrice){
  var container = document.createElement('div');
  container.setAttribute('class', 'item');
  var titleContainer = container.appendChild(document.createElement('div'));
  var spanTitle = titleContainer.appendChild(document.createElement('span'));
  spanTitle.appendChild(document.createTextNode(inputName));
  var secondChild = container.appendChild(document.createElement('div'));
  secondChild.innerHTML = '<span>$</span> <span class="unit-price">' + inputPrice + '</span>';
  var thirdChild = container.appendChild(document.createElement('div'));
  thirdChild.innerHTML = '<span>QTY</span><input type="number" name="QTY" id="input" class="quantity">';
  var fourChild = container.appendChild(document.createElement('div'));
  fourChild.innerHTML = '<span>Total: $</span><span class="total-price">0.00</span>';
  var fiveChild = container.appendChild(document.createElement('div'));
  fiveChild.innerHTML = '<button class="btn btn-delete">Delete</button>';

  return container;

  // console.log(spanTitle);
}

// function createNewItem(){

//   function insert1(){
//   var newDiv = document.createElement('div');
//   newDiv.setAttribute('class', 'item');
//   var parent = document.getElementsByClassName('cart')[0]
//   parent.appendChild(newDiv)
//   var div = document.createElement('div')
//   newDiv.appendChild(div)
//   var newSpan = document.createElement('span')
//   div.appendChild(newSpan)
//   var newContent = document.createTextNode('Soy un nuevo item');
//   newSpan.appendChild(newContent) 

//   }
//   insert1()

// }


function create() {
  var inputName = document.getElementById('createName').value;
  var inputPrice = document.getElementById('createPrice').value;
  var row = createNewItemRow(inputName, inputPrice);
  document.getElementsByClassName('cart')[0].appendChild(row);
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
}



window.onload = function () {
  
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = create;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
