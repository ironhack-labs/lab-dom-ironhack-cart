function deleteItem(e){//
  //console.log("Delete Button Pressed");
var deleteObjetive = document.getElementById('shop');
var child =document.getElementsByClassName('container')[e.length];
//console.log("vamos a borrar"+child);
deleteObjetive.removeChild(child);

}

function getPriceByProduct(itemNode,i){
var price= Number(document.getElementsByClassName(itemNode)[i].textContent);
return price;
}

function getContent(itemNode,i){
var quantity= document.getElementsByClassName(itemNode)[i].value;
return quantity;
}

function updatePriceByProduct(productPrice, index){
return productPrice*index;
}

function setTotal(item,i,total){
document.getElementsByClassName(item)[i].innerHTML=total;
return total;
}


function getTotalPrice() {// la llama On click una unidad

var productNumber=document.getElementsByClassName('Unit-price').length;
var totalPrice=0;
////////////////
for (i = 0; i < productNumber;i++){
  var itemUnitPrice = getPriceByProduct("Unit-price",i);
  var quantity =getContent('Input-value',i) ;
  var total=quantity*itemUnitPrice;
  setTotal("Total-Price",i,total);
  totalPrice+=total;
}//for
setTotal("Cart-price",0,totalPrice);
}
/////////////////////////////////////////////////////////////////
function createDeleteButton(rowName){//
  //Mete el Span
  var spanXs7=document.createElement('span');
  rowName.appendChild(spanXs7);//mete el item
    //Mete el boton
    var deleteB=document.createElement('button');
    spanXs7.appendChild(deleteB);//mete el item
    deleteB.className += "btn btn-delete";
    deleteB.innerHTML="DELETE";
}

function createQuantityNode(rowName){//
  //Mete el Span
  var spanXs4=document.createElement('span');
  rowName.appendChild(spanXs4);//mete el item
  spanXs4.innerHTML="QTY";
    //////Mete el input
    var iXs4=document.createElement('input');
    spanXs4.appendChild(iXs4);//mete el item
    iXs4.className += "Input-value";
    iXs4.value += 0;
}

function createItemNode(className, tag){//
  var xs=document.createElement(tag);
  xs.className += className;
  return xs;
}

function createNewItemRow(itemName){//
  //mete el Row1
  var row=document.createElement('div');
  row.className += "row";
  itemName.appendChild(row);//mete el item
  return(row);

}

function createNewItem(){//
  //var itemName=document.getElementById(("Product-Name").textContent);
  var text=getContent('Text-Content',0) ;
  //console.log(text);
  var unitPrice =getContent('Unit-Price',0) ;
  //console.log(unitPrice);
  //crear nuevo section
  var element = createItemNode("container","section");
  var parent =document.getElementsByTagName('section')[0];//definir donde lo mete
  parent.appendChild(element);//mete el elemento
  var item=createItemNode("item","article");
  element.appendChild(item);//mete el item
  ///////////////////////
  var row=createNewItemRow(item);
  //Mete la columnaxs2
  var xs2= createItemNode("col-xs-2","div");
  row.appendChild(xs2);//mete el item
    //Mete el Span
    var spanXs2=document.createElement('span');
    xs2.appendChild(spanXs2);//mete el item
    spanXs2.innerHTML=text;
  ///////////////////////
  //Mete la columna3
  var row1=createNewItemRow(item);
  //Mete la columnaxs3
  var xs3=createItemNode("col-xs-3","div");
  row1.appendChild(xs3);//mete el item
    //Mete el Span
    var spanXs3=document.createElement('span');
    xs3.appendChild(spanXs3);//mete el item
    spanXs3.innerHTML="$";
      //////Mete el P
      var pXs3=document.createElement('p');
      spanXs3.appendChild(pXs3);//mete el item
      pXs3.className += "Unit-price";
      pXs3.innerHTML=unitPrice;
  ///////////////////////
  //Mete la columna4
  var row3=createNewItemRow(item);
  //Mete la columnaxs4
  var xs4=createItemNode("col-xs-4","div");
  row3.appendChild(xs4);//mete el item
  createQuantityNode(xs4);
      ///////////////////////
      //Mete la columna5
      var row4=createNewItemRow(item);
      //Mete la columnaxs5
      var xs5=createItemNode("col-xs-5","div");
      row4.appendChild(xs5);//mete el item
      xs5.innerHTML="$";
        //Mete el Span
        var spanXs5=document.createElement('span');
        xs5.appendChild(spanXs5);//mete el item
        spanXs5.className += "Total-Price";
        spanXs5.innerHTML="0.00";
        ///////////////////////
        //Mete la columna7
        var row5=createItemNode("row","div");
        item.appendChild(row5);//mete el item
        //Mete la columnaxs5
        var xs7=createItemNode("col-xs-7","div");
        row5.appendChild(xs7);//mete el item
          createDeleteButton(xs7);
  //Metemos el reset-float
  var reset=createItemNode("reset-float","div");
  parent.appendChild(reset);
  }
///////////////////////////////////////////////////////////////////////////////
window.onload = function(){
  var calculatePriceButton = document.getElementById('calculate');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
      var e= currentTarget;
     deleteButtons[i].onclick = deleteItem(e);
 }

  //deleteButtons.onclick = deleteItem(deleteButtons.length);

};
