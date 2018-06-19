function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var itemPrice = itemNode.getElementsByClassName( "price" )[0].innerHTML;
  var itemQuantity = itemNode.getElementsByClassName( "quantity-item" )[0].value;
  var itemTotal = itemNode.getElementsByClassName( "total-price" );
  itemPrice = stringToFloat( itemPrice );
  itemQuantity = stringToFloat( itemQuantity );
  var itemTotalPrice = (itemPrice * itemQuantity).toFixed( 2 );
  itemTotal[0].innerHTML = "$" + itemTotalPrice;
  //return parseFloat(itemTotalPrice);
  
}

function updatePriceByProduct(productPrice, index){

}

/**
  * @desc Convierte iun string en float
  * @param string $string - el string con la cifra y símbolo dollar  ($XX.YY)
  * @return float - valor en formato float
*/
function stringToFloat( string ) {
  return parseFloat( string.replace( '$', '') );
}

function getTotalPrice() {
  var products = Array.from( document.getElementById( "products" ).children );
  //var acc = 0;
  products.forEach( function( product ) {
    getPriceByProduct( product );
    document.getElementsByClassName("price");
    //acc += getPriceByProduct( product );
  });

  // acumuladro de precios
  var a = 0;
  var totalPrices = Array.from( document.getElementsByClassName( "total-price" ) );

  totalPrices.forEach( function ( item ) {
     a += stringToFloat( item.innerHTML );
  });

  var totalCart = document.getElementById( "total-cart" );
  var span = totalCart.getElementsByTagName( 'span' )[0];
  span.innerHTML = "$" + a.toFixed( 2 );

  //Lo anterior en una sola instrucción
  //document.getElementById( "total-cart" ).getElementsByTagName('h2')[0].getElementsByTagName('span')[0].innerHTML = "$"+a.toFixed( 2 );
  
  // No es necesario entrar en el 'h2'
  //document.getElementById("total-cart").getElementsByTagName('span')[0].innerHTML = "$" + acc;

  // En caso de poder modificar el contenido interno del 'total-cart'
  // document.getElementById( "total-cart" ).innerHTML = "$" + acc;
  
  // Funcion flecha (ArrowFunction)
  // products.forEach( product => {
  //   getPriceByProduct(product);
  // });
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
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
