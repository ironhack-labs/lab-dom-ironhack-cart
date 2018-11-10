function deleteItem(e){
 
  var target = document.getElementById(e.currentTarget.id);
  var parent = target.parentElement.parentElement;
  
  
       while (parent.firstChild != null) {
         parent.removeChild(parent.firstChild);
       }




} 

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

//Función para calcular el precio total
function getTotalPrice() {

  var quantity = 0;
  var products = document.getElementsByClassName("product-div");
  var singlePrice = 0;
  var totalPrice = 0;
  var precioTotal = 0;

  //precios indivuduales
  for (var index = 0; index < products.length; index++) {
    
     quantity = products[index].getElementsByTagName("input")[0].value;
     singlePrice = products[index].getElementsByClassName("product-price")[0].innerText.replace("$","");
     totalPrice = parseFloat(quantity) * parseFloat(singlePrice);
     products[index].getElementsByClassName("totalPrice")[0].innerText =
     parseFloat(totalPrice).toFixed(2);

    //para calucular el precio total
     precioTotal = precioTotal + totalPrice;
  }

    //asignación del precio total a la etiqueta
    document.getElementById("total-final").innerText = precioTotal;
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

  debugger;
  var inputName = document.getElementById("input-text").value;
  var inputPrice = document.getElementById("input-price").value;

  var father = document.getElementById("father");
  var item =  document.getElementsByClassName("product-div")[0];
  clone = item.cloneNode(true); // true means clone all childNodes and all event handlers
  clone.class = "cloned-node";
  father.appendChild(clone);

}

window.onload = function(){
 
  var calculatePriceButton = document.getElementById('calc-prices-button');
  calculatePriceButton.onclick = getTotalPrice;


  var createItemButton = document.getElementById('new-item-create');
   createItemButton.onclick = createNewItem;

 
   var deleteButtons = document.getElementsByClassName('btn-delete');
  
   for(var i = 0; i<deleteButtons.length ; i++){
     deleteButtons[i].onclick = deleteItem;
   }
};
