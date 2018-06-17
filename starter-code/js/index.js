function deleteItem(e){
  e.currentTarget.parentNode.parentNode.remove()
}

function getPriceByProduct(){
  var text=document.getElementById("n-price")
  var spa=document.createElement("span")
  var newDiv=document.createElement("div")
  var texto=document.createTextNode(text.value+".00")
 
  spa.appendChild(texto)
  spa.setAttribute("class","unit")
  newDiv.appendChild(spa)
  return newDiv
    
}

function updatePriceByProduct(){
  var unit= document.getElementsByClassName("unit")
  var qty=document.getElementsByClassName("qty")
  var totalUnit=document.getElementsByClassName("totalUnit")
  var lolo= unit.length
    for(i=0;i<lolo;i++){
      unidad=parseInt(unit[i].innerHTML)
      qt=qty[i].value
      qt=parseInt(qt)
      if(qt>0){
        var total="$"+(unidad*qt)+".00"
        totalUnit[i].innerHTML= total
      }else{totalUnit[i].innerHTML="$0.00"}
   }
}

function getTotalPrice() {
  var totalUnit=document.getElementsByClassName("totalUnit")
  var total=document.getElementById("total")
  var lolo=totalUnit.length
  var cont=0;
  for (i=0;i<lolo;i++){
    var num=(totalUnit[i].innerHTML).slice(1)
    cont=cont+parseInt(num)
  } 
 total.innerHTML="$"+cont+".00"
}
function createQuantityInput(){
  var inp=document.createElement("input")
  var newDiv=document.createElement("div")
  var lbl=document.createElement("label")
  var texto=document.createTextNode("QTY")
  inp.setAttribute("class","qty") 
  inp.setAttribute("type","number")
  inp.setAttribute("placeholder","0")
  inp.setAttribute("onchange","updatePriceByProduct()")
  lbl.appendChild(texto)
  lbl.appendChild(inp)
  newDiv.appendChild(lbl)
  return newDiv
}

function createDeleteButton(){
  var borrar=document.createElement("button")
  var newDiv=document.createElement("div")
  var texto=document.createTextNode("Delete")
  borrar.appendChild(texto)
  borrar.setAttribute("class","btn btn-delete")
  
  borrar.addEventListener("click",deleteItem)
  newDiv.appendChild(borrar)
  return newDiv
}

function createQuantityNode(){
  var spa=document.createElement("span")
  var newDiv=document.createElement("div")
  var texto=document.createTextNode("$0.00")
  spa.setAttribute("class","totalUnit") 
  spa.setAttribute("onchange","updatePriceByProduct()")
  spa.appendChild(texto)
  newDiv.appendChild(spa)
  return newDiv
 
}

function createItemNode(){
  var texto=document.getElementById("n-name")
  var spa=document.createElement("span")
  var newDiv=document.createElement("div")
  var text=document.createTextNode(texto.value)
  spa.appendChild(text)
  //spa.setAttribute("class","btn btn-delete") no tiene clases
  newDiv.appendChild(spa)
  return newDiv

}

function createNewItemRow(itemName, itemUnitPrice){
}

function createNewItem(){
  var newDiv=document.createElement("div")
  var b=document.getElementById("big")
  var l=document.getElementById("last")
  newDiv.setAttribute("class", "container")
  newDiv.appendChild(createItemNode())
  newDiv.appendChild(getPriceByProduct())
  newDiv.appendChild(createQuantityInput())
  newDiv.appendChild(createQuantityNode())
  newDiv.appendChild(createDeleteButton())

  b.appendChild(newDiv)
 // document.getElementById("big").appendChild(d)
  
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

