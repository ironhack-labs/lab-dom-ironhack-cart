var glob=0;
function deleteItem(){
 console.log('teste');
}

function getPriceByProduct(itemNode){
  
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
console.log('teste')
}

function createNewItemRow(itemName, itemUnitPrice){

}



function calcula(e, totalItem, value ){
var j =  parseInt(e);
var x  = ((limpaNum(value)) * j);
totalItem.innerText = x;
}


function limpaNum(str,){
  var limpa = str.innerText;
  limpa = limpa.replace(/[^\d.-]/g, '');
  return parseFloat(limpa);
}

function createNewItem(){
  console.log('teste');
  }


window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementsByClassName('btn-add');
  var deleteButton = document.getElementsByClassName('btn-delete');
  var qty = document.getElementsByClassName('qtyI');
  var value = document.getElementsByClassName('price');
  var a = deleteButton[0].parentNode.parentNode;
  var i1 =document.getElementById('i1');
  var i2 =document.getElementById('i2');
  var totalItem = document.getElementsByClassName('totalI');
  

  calculatePriceButton.addEventListener("click", function() {
    value = document.getElementsByClassName('price');
    qty = document.getElementsByClassName('qtyI');
    var total =0 ;
    var totalS = [];
    for (var i=0;i<qty.length;i++){
    var j =  parseInt(qty[i].valueAsNumber);
    var x  = ((limpaNum(value[i])) * j);
    totalItem[i].innerHTML = 'Total '+ '$'+ x;
    totalS[i] = parseInt(x);
    }
    if (glob==0){
      var body = document.body;
      var b = document.createElement('div');
      b.className = 'divH';
        body.appendChild(b);
      glob++;
      var c=document.createElement('h2');
      var e=document.createElement('span');
      c.id='newH';
      e.id='spanH';
      var d=document.createElement('h1');
      b.appendChild(d);
      b.appendChild(c);
      c.innerText = 'Total:';
      c.appendChild(e); 
     }    
      var textT= document.getElementById('spanH');
      var j= 0;
      for (var i=0;i<qty.length;i++){
        j= totalS[i] +j;
      }
      textT.innerText = '$'+ j;          
  } 
  );       


  Object.keys(createItemButton).forEach(function(element){
    createItemButton[element].addEventListener("click", function() {
     var c=document.createElement('div');
     c.className = 'formu';
     i2.value = '$'+ parseFloat(i2.value).toFixed(2);
     c.innerHTML = a.innerHTML;
     c.firstElementChild.firstElementChild.innerText = i1.value;
     c.firstElementChild.nextElementSibling.firstElementChild.innerText = i2.value;
     value = document.getElementsByClassName('price');     
    deleteButton[element].parentNode.parentNode.parentNode.appendChild(c);
   
   Object.keys(deleteButton).forEach(function(element){
      deleteButton[element].addEventListener("click", function() {
        if (deleteButton.length==1){
        deleteButton[0].parentNode.parentNode.remove();
        }
        if (deleteButton.length>1){
          deleteButton[element].parentNode.parentNode.remove();
        }
      });
   }
    );
    });
    
  });
  var deleteButton = document.getElementsByClassName('btn-delete'); 
  Object.keys(deleteButton).forEach(function(element){
    deleteButton[element].addEventListener("click", function() {
      if (deleteButton.length==1){
      deleteButton[0].parentNode.parentNode.remove();
      }
      if (deleteButton.length>1){
        deleteButton[element].parentNode.parentNode.remove();
      }
    });
 }
  );

}