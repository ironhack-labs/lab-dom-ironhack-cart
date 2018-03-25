
function deleteItem(pepe){
  var margin = document.getElementsByClassName("qq")[0];
  var dTag = pepe.currentTarget.parentNode.parentNode;
  console.log(dTag);
  console.log(margin);
  margin.removeChild(dTag);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  var totalPrice = 0;

  for (let i = 0; i < document.getElementsByClassName("margin").length; i++) {
    var input =  document.getElementsByClassName("b")[i].value;
    var value = document.getElementsByClassName("a")[i].value;
    if (input === ""){
      continue;}
    else{
      totalPrice += value * input;
      document.getElementsByClassName("multi")[i].innerHTML = "$" + (value * input).toFixed(2);
    }
  }
  // document.getElementById("l").appendChild(document.createTextNode("$" + totalPrice));  //Crear un text en el hijo

  document.getElementById("h2").innerHTML = "$" + totalPrice.toFixed(2);
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
  var miDiv = document.createElement("div");
  miDiv.setAttribute("class", "margin");
  miDiv.innerHTML =( "<span>IronBubble-head</span>" + "<span class=\"a\" >$25.00</span>" +  "<label for=\"Cantidad\">QTY</label>" +  "<input type=\"number\" name=\"Cantidad\" class=\"b\">" + "<span class=\"multi\" >$0.00</span>" +  "<div><button class=\"btn btn-delete\">Delete</button>");
  console.log("Peina para atras!")
  
  // document.getElementsByClassName("margin").appendChild(miDiv);
  if (document.getElementsByClassName("margin")[document.getElementsByClassName("margin").length-1].nextSibling){
    document.getElementsByClassName("margin")[document.getElementsByClassName("margin").length-1].parentNode.insertBefore(miDiv,document.getElementsByClassName("margin")[document.getElementsByClassName("margin").length-1].nextSibling);
  } else {
    document.getElementsByClassName("margin")[document.getElementsByClassName("margin").length-1].parentNode.appendChild(miDiv);
  }
  document.getElementsByClassName("margin")[document.getElementsByClassName("margin").length-1].value = 25.00;
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  document.getElementsByClassName("a")[0].value = 25.00;
  document.getElementsByClassName("a")[1].value = 10.13;


  createItemButton.onclick = createNewItem;
  calculatePriceButton.onclick = getTotalPrice;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
