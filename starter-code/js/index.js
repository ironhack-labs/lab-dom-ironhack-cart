function deleteItem(e){
    var button= e.currentTarget;
    var targetParent=button.parentElement.parentElement;
    var container =document.querySelector('.wrapper');

    container.removeChild(targetParent);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {  updatePriceByProduct ()

  var productCount= document.querySelectorAll('.product').length;

  for (var productSelect=0; productSelect<productCount;productSelect++){
    var price =Number(document.getElementsByClassName('price')[productSelect].innerHTML);
    var quantity = Number(document.querySelectorAll('input')[productSelect].value);
    document.querySelectorAll('.total')[productSelect].innerText=  price*quantity;
  }

  var productSumElementArray=document.querySelectorAll('.total');
  var acc =0;
  productSumElementArray.forEach(function (item){  // reduce did not work here?
      acc += Number(item.innerText);
    });

  document.querySelector('.basketSum').innerText=acc;
 
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
  var container = document.getElementsByClassName('wrapper')[0];
  var productTemplate=document.getElementsByClassName('product-template')[0];


  var copy= productTemplate.cloneNode(true);
    // appendChild requires NodeList object therefore querySelector
  container.appendChild(copy);
  container.lastChild.querySelector('.price').innerText= document.querySelector('.new-product-price').value;
  container.querySelector('.title').innerText =document.querySelector('.new-product-name').innerText;
  container.lastChild.removeAttribute('class');
  container.lastChild.setAttribute('class','product');

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

