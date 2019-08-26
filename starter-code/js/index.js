function deleteItem(e){

}

function getPriceByProduct(itemNode){
//let price1 = getElementsByClassName("first_price").inn;
}

function updatePriceByProduct(productPrice, index){

}
function getTotalPrice() {
  let products = document.querySelectorAll(".product");
  console.log("en el carro hay: " + products.length + " productos");
  
  products.forEach(element => {
    let productPrice = parseInt(element.querySelector(".value").innerHTML);
    console.log("el valor de este producto es :" + productPrice);

    let productQuantity = parseInt(element.querySelector(".input").value);
    console.log("la cantidad de este producto es :" + productQuantity);

    let finalPrice = productPrice*productQuantity;
    document.querySelector(".price_final").innerHTML= finalPrice;
    
    //con  productPrice un split para quitarle el dollar y asi poder sumar solo el numero
    //coger el inner html de price_final 

  });
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
  var calculatePriceButton = document.getElementById('calc-prices-button');
 // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
