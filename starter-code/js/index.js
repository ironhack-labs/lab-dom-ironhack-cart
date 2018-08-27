
function deleteItem(e){
  var i = 0;
  var child = e.target;

  while(true){
    //para encontrar el indice de la fila a borrar
    if (child.previousElementSibling === null ) {
      break;
      }else {
        child = child.previousElementSibling;
        i++;
      }
    }

  //Iterar por los distintos divs borrando el indice encontrado

  queries = [".product-name > span", "product-name", ".cost > span", 
  "cost",".quantity > input","quantity",".price > span", "price",".delete > button","delete" ]

  for (q = 0 ; q<queries.length;q+=2) {
    var toRemove = document.querySelectorAll(queries[q])[i]
    var parent = document.getElementsByClassName(queries[q+1])[0]
    parent.removeChild(toRemove);
  }

  //hacerle refresh al precio total
  getTotalPrice();

}

function getPriceByProduct(itemNode){
  dirty = itemNode.innerHTML;
  cleaner = dirty.slice(1,dirty.length);
  cleanest = parseFloat(cleaner);
  return cleanest;

}

function updatePriceByProduct(productPrice, index){
  price = document.querySelectorAll(".price > span")[index];
  price.innerHTML = "$" + productPrice.toFixed(2);

}

function getTotalPrice() {
  var list = document.querySelectorAll(".cost > span");
  var grandTotal = 0;

  for (i=0; i<list.length; i++)
    {var price = getPriceByProduct(list[i]);
    var quantity = document.getElementsByClassName("input")[i].value;
    var total = price * quantity;
    updatePriceByProduct(total,i);
    grandTotal+=total;}

    document.getElementsByTagName("h2")[0].innerHTML = "Total Price:$" + grandTotal.toFixed(2);

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
  node = document.createTextNode("$0.00");
  document.getElementsByClassName("price")[0].appendChild(node);
  name = document.createElement("span")
  name.innerHTML = document.getElementById("create-name").value;
  console.log(name.innerHTML);
 // document.getElementsByClassName("product-name")[0].appendChild(name);


}

window.onload = function(){

  var calculatePriceButton = document.getElementById('btn-success');
  var createItemButton = document.getElementById('btn-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
