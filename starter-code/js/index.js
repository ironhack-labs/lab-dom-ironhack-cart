


//let $totalItemPrice = document.querySelector('.totalItemPrice');
//$totalItemPrice.innerText = "!"
 //console.log( $TotalItemPrice );


function deleteItem(e){
}

//function getPriceByProduct(itemNode){
function getPriceByProduct(){
//calc-prices-button totalItemPrice
//"ItemPrice" "TotalItemPrice" input
let $itemPriceString = document.querySelectorAll('.itemPrice');
let $totalItemPrice = document.querySelectorAll('.totalItemPrice');
let $input = document.querySelectorAll('.inputQty');
console.log(document.querySelectorAll('.inputQty'))

console.log(parseFloat($itemPriceString[0].innerText.replace('$','')));
let $itemPrice = [];
for(let i = 0; i < $itemPriceString.length; i++){
  $itemPrice.push(parseFloat($itemPriceString[i].innerText.replace('$', '')));
}
console.log($itemPrice[0]);
console.log($totalItemPrice[0].innerText);
console.log($input[0].value);

for(let i=0; i <$itemPrice.length; i++){
  $totalItemPrice[i].innerText = '$' + $itemPrice[i] * $input[i].value;
  }

  console.log($totalItemPrice[0].innerText)

}

//getPriceByProduct()
let $button = document.querySelector('.calc-prices-button')
$button.onclick = getPriceByProduct;



function createNewItem(){


  let $itemList = document.querySelector('.itemList');
  let $newInputItem = document.querySelector('.inputItem')
  let $newInputPrice = document.querySelector('.inputPrice')

  console.log($newInputItem);
  console.log($newInputPrice);

  

  let newItem = ` <div class = "btn">
  <div class = "ItemName" > ${ $newInputItem.value }</div>
  <div class = "itemPrice">${ $newInputPrice.value }</div>
  <div class = "quantity" > QTY: <input type="text" class="inputQty"> </div>
  <div><span class = "totalItemPrice"> $0.00 </span></div>
  <div><button class="btn-delete"> Delete </button></div>
</div>`

  $itemList.innerHTML += newItem;
  console.log('Add Prduct was clicked')
 


}
let $newButton = document.querySelector('.newButton')
$newButton.onclick = createNewItem;




/*
$button.onclick = function (){
  getPriceByProduct()
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


function updatePriceByProduct(productPrice, index){
}

function getTotalPrice() {

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


*/