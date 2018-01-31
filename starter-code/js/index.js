function deleteItem(e){

  console.log(e);
  var item = e.currentTarget.parentNode.parentNode; 
  var container = document.getElementById("container");
   container.removeChild(item);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
var precio = document.getElementsByClassName("precio-x");
var quantidad = document.getElementsByClassName("quantidad-y") // precio y quantidad son arrays // Las clase siempre son array
var totalPrice = 0;
for (var i = 0; i < precio.length; i++){
  document.getElementsByClassName("totalP")[i].innerHTML="$" + (precio[i].innerHTML.slice(1) * quantidad[i].value).toFixed(2);
  totalPrice += precio[i].innerHTML.slice(1) * quantidad[i].value; // .innerHTML car on va l'envoyer au DOM ! "$" porque el precio tiene el dollar // [i] porque la mejor formar de capturar esos elementos es hacerlo en un ARRAY en este momento iteracion 1, es un elemento // precio    // Quantidad: .value porque como se puede escribir ahi en "number" se llama value y es lo que queremos capturar  // cuando esta escrito hay que poney innerHTML cuando hay que escribirlo : .value  // .slice(1) car solo queremos lo que sigue el $ para que sea un numero y no un string : $25.00
  
}
document.getElementById("gran-total").innerHTML = "$"+totalPrice;
}
 /*
function getTotalPrice() {
  +  var prices = document.getElementsByClassName("price");
  +  var quantity = document.getElementsByClassName("quantity");
  +  var totalPrice = 0;
  +  for (var i = 0; i<prices.length ; i++){
  +    document.getElementsByClassName("total-price")[i].innerHTML="$"+(prices[i].innerHTML.slice(1)*quantity[i].value).toFixed(2);
  +    totalPrice+=prices[i].innerHTML.slice(1)*quantity[i].value;
  +  }
  +  document.getElementById("gran-total").innerHTML = "$"+totalPrice.toFixed(2);
*/


function createQuantityInput(){

}

function createDeleteButton(){
}

// Encuentra una manera para agarar el Item !!!


//var button = document.getElementsByClassName("bbtn-delete");

//button.onclick = function(){
  //console.log("adding an element to the list");
//}


/* function createDeleteButton(item1){
  var item = document.getElementById("item1");
  while(item.item1)
  item.removeChild(item.item1);
}  */


//function removeElement(node) {
  //node.parentNode.removeChild(node);}


  //function removeElement(node) {
  //node.parentNode.removeChild(node);}


 /* var mydiv = document.getElementById('FirstDiv');
while(mydiv.firstChild) {
  mydiv.removeChild(mydiv.firstChild);
}*/
function createQuantityNode(){
g
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
var name = document.getElementById('name').value
var precio = document.getElementById('price').value
var htmlNew = "<div class=\"item\" name=\"product\" id=\"item1\"><div class=\"col\"><span name=\"name\">"+name+"</span></div><div class=\"col\"><span class=\"precio-x\" name=\"price\" value=\"25\">$"+Number(precio).toFixed(2)+"</span></div><div class=\"col\"><label>QTY</label><input class=\"quantidad-y\" type=\"number\" name=\"quantity\" value=\"0\"/></div><div class=\"col\"><span class= \"totalP\" name=\"total-price\">$0.00</span></div><div class=\"col\"><button class=\"btn btn-delete\" >Delete</button></div></div>";
document.getElementById('container').innerHTML+=htmlNew;
 // Number: ajouter pour transformer precio (qui etait un string) en numéro // toFixed qui ne s'applique qu'aux nums.  // había que quitar los simbolos "" con \\ para que las comillas sean consideradas dentro del string. // HTML cambiamos el name de IronBuuble- head por nuestra var name y $25.00 por precio // que sacamos del input (en la pagina web).
 var deleteButtons = document.getElementsByClassName('btn-delete');
 for(var i = 0; i<deleteButtons.length ; i++){
  deleteButtons[i].onclick = deleteItem;
}
}
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
console.log(deleteButtons)
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
