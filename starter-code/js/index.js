function deleteItem(e){
  //let divElement = document.getElementsByClassName('container');
  let divElements = document.getElementsByClassName('container');
  // let buttonDelete = document.getElementsByClassName('btn-delete');
  let div = document.getElementsByClassName('container')[e];
  div.remove()

  if(divElements.length === 1) {
    console.log("Nullo")
  } else {
    for(let i = 1; i <divElements.length; i++) {
      let buttonElement = divElements[i].getElementsByTagName('button')[0];
      buttonElement.setAttribute('onclick', 'deleteItem(' + i + ')');
    }
  }
  let spanTotalElement = document.getElementById('totalPrice');
  spanTotalElement.innerHTML = "Total Price: $0";
  return e;
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let divElement = document.getElementsByClassName('container');
  let spanTotalElement = document.getElementById('totalPrice');
  
  let total = 0;
  for(let i =0; i < divElement.length; i++) {
    let unitProductsElement = (divElement[i].getElementsByTagName('input')[0]).value;
    let priceProductElement = (divElement[i].getElementsByClassName('priceProduct')[0]).innerHTML;
    let priceTotalProductElement = divElement[i].getElementsByClassName('priceTotalProduct')[0];
  
    let multiplication = unitProductsElement * priceProductElement;
    priceTotalProductElement.innerHTML = multiplication;
    
    total += multiplication;
  }
  spanTotalElement.innerHTML = "Total Price: $" + total;
  return buttonDelete;
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
  
  let nameItemElement = document.getElementById('nameItem');
  let priceItemElement = document.getElementById('priceItem');

  if(nameItemElement.value == false || priceItemElement.value === '') {
    return "Input is empty";
  }
  let divElements = document.getElementsByClassName('container');

  let divCar = document.getElementById('car');
  console.log(divCar);
  let divElement = document.getElementsByClassName('container')[0];
  let dupNode = divElement.cloneNode(true);

  let nameElement = dupNode.getElementsByClassName('nameProduct')[0];
  let priceElement = dupNode.getElementsByClassName('priceProduct')[0];
  let priceTotalProductElement = dupNode.getElementsByClassName('priceTotalProduct')[0];
  let buttonElement = dupNode.getElementsByTagName('button')[0];
  let unitsElement = dupNode.getElementsByClassName('unitsProduct')[0];


  unitsElement.disabled = false;
  buttonElement.disabled = false;

  buttonElement.setAttribute('onclick', 'deleteItem(' + divElements.length + ')');

  nameElement.innerHTML = nameItemElement.value;
  priceElement.innerHTML = priceItemElement.value;
  priceTotalProductElement.innerHTML = 0;

  nameItemElement.value = '';
  priceItemElement.value = '';
  

  
  divCar.appendChild(dupNode);

 // return buttonElement;
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  deleteButtons[i].onclick = deleteItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  
  }
};
