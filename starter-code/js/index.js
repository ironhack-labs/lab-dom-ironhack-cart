

//click event to calculateButton
document.getElementById('calculete-button').onclick = function() {
  let card                 = document.querySelectorAll('.card');
  let finalPrice              = 0;
  console.log(card)
  for(let i=0; i<card.length; i++){
    
    let productPrice          = document.getElementsByClassName('product-price')[i].innerText;
    let quantity              = document.getElementsByClassName('quantity')[i];
    let totalUnitPrice        = document.getElementsByClassName('total-unit-price')[i];
    totalUnitPrice.innerText  = productPrice*(quantity.value);
    
    // console.log(totalUnitPrice.innerText)
    finalPrice = finalPrice+parseInt(totalUnitPrice.innerText);
  }

  //change the "total" background with the price and att the final price
  document.querySelector('.card-total').classList = 'card card-total';

  var cardTotal = document.querySelector('.card-total');


  if( finalPrice < 51 ){
    cardTotal.classList.add('bg-success', 'text-white');
  }else if( finalPrice >= 50 || finalPrice <= 100){
    cardTotal.classList.add('bg-danger', 'txt-white');
  }

  
  document.querySelector('#total-price').innerHTML = finalPrice;
 
}

//delete itens
// let deleteButton = document.getElementsByClassName('btn-danger');
var btnDanger = document.querySelectorAll('.btn-danger');

for(var i=0; i < btnDanger.length; i++){
  let btn = btnDanger[i];

  btn.addEventListener('click', function(){

    console.log(this)
    
    var card = this.parentNode.parentNode.parentNode.parentNode;
  
    card.remove();

  });
  
}

//add new itens




function deleteItem(e){

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

}

window.onload = function(){
  // var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};
