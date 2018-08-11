



function deleteItem(e){
  
}

function getPriceByProduct( ){
  var precio=document.getElementById("idPre").innerHTML;
  var cantidad=document.getElementById("cost1").value;
  var total=precio+cantidad;
  console.log("precio",precio);
  console.log("cantidad",cantidad);
  console.log("total",total);
}

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

function createNewItem(){

}

window.onload = function(){
  var items=document.getElementsByClassName("items");
  var precio=document.getElementsByClassName("idPre");
  var cantidad=document.getElementsByClassName("costs");
  var total=0.0;
  

  var butcalc=document.getElementById('btn-calc');
  
  
  butcalc.onclick = function(){
    
  console.log("cantidadZZZZZZZZZZ",cantidad[0].value);
  console.log("precoozzz",precio[0].innerHTML);  
     
    for  (i=0;i<items.length;i++){
      console.log("i",i);
      total=((parseFloat(precio[i].innerHTML) *parseInt(cantidad[i].value))+total); 
      console.log("precio",parseFloat((precio[i])));
      console.log("cantidad",cantidad[i].value);      
    }  
    
   
  console.log("total",total);

   }
 


  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');


  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
