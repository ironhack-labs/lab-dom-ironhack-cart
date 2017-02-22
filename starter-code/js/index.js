

var listOfProduct = [];
var totalsum = [];
var total;
var totaleverything = 0 ;
var count = 0;
    var quantity;

// =======================================================
function Products(productname, price, input, total1){
  this.name = productname;
  this.price = price;
  this.inputForQuantity = input;
  this.quantityTimesPrice = total1;
  this.inputIdforObjects=function(){
quantity = document.querySelector(input).value;
  return quantity;
};
  this.calculateEverything = function(){
          this.inputIdforObjects();
          getTotalPrice(price, total1);
  };
}
// =======================================================

var calculatebutton = document.getElementById('btncalculate');
calculatebutton.onclick = function(){
console.log(listOfProduct);
console.log(typeof listOfProduct);
    listOfProduct.forEach(function(product){
      console.log('Product', product);
      console.log( " input quantity "+product.inputForQuantity);
      console.log( "the id of the object"+product.inputIdforObjects());

      product.calculateEverything();
      });
  };
  // =======================================================
  // var quantity = document.querySelector('#amountFirst').value;




function getTotalPrice(variableprice, total1){
  var totalPriceForProduct = document.getElementById(total1);
  total = quantity * variableprice;
  totalPriceForProduct.innerHTML=('$'+total+'.00');
  totalsum.push(total);
  totalsum.forEach(function(prod){
      totaleverything += prod;
    });
 totalsum = [];
  console.log(totalsum);
  count++;
  console.log(count);
  if (count > 3) {
    var clear = document.getElementById('totalprice').innerHTML = "";
    count = 0;
    totaleverything = 0;
  } else {
     document.getElementById('totalprice').innerHTML = totaleverything;
  }
return totalsum;
}
// =======================================================

// =======================================================
// var totaleverything = 0 ;
// totalsum.forEach(function(word){
//     totaleverything += word;
//   });
// document.getElementById('totalprice').innerHTML = totaleverything;
// =======================================================
var deleteBut1 = document.getElementById('deleteButtonFirst');
var firstdiv = document.getElementById('firstproduct');
deleteBut1.onclick= function(e) {
  while (firstdiv.firstChild) {
      firstdiv.removeChild(firstdiv.firstChild);
      // totaleverything = 0;
  }
};
// ============================================================
var secondDiv = document.getElementById('secondProduct');
var deleteBut2 = document.getElementById('deleteButtonSecond');
deleteBut2.onclick = function(e) {
  console.log(secondDiv);
  while (secondDiv.firstChild) {
      secondDiv.removeChild(secondDiv.firstChild);
  }
};
// ============================================================
function deleteItem(){
}
function getPriceByProduct(itemNode){}
function updatePriceByProduct(productPrice, index){}
function createDeleteButton(){}
function createQuantityNode(){}
function createItemNode(dataType, itemData){}
function createNewItemRow(itemName, itemUnitPrice){}
function createNewItem(){}
// window.onload = function(){
//   var calculatePriceButton = document.getElementById('btncalculate');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');
//   calculatePriceButton.onclick = function(){
//     quantity = parseInt(document.getElementById('amount').value);
//     console.log(quantity);
//     return quantity;
//   };
//   // calculatePriceButton.onclick = getTotalPrice(bubblehead.price);
//   // createItemButton.onclick = createNewItem();
//
//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
//
// };
//

var  createdivrest = document.querySelector('#creatediv');
      // createdivrest.setAttribute('class', 'row');
var  namedivrest = document.querySelector('#namedivrest');
var  pricedivrest = document.querySelector('#pricedivrest');

var buttonrest = document.getElementById("buttonrest");

var count3= 0;
function creatediv(){
  var creatediv = document.createElement('div');
  count3 ++;
  creatediv.setAttribute('class', 'row');
  creatediv.setAttribute('Id', 'divrest'+count3);
  createdivrest.appendChild(creatediv);
  creatediv.style.backgroundColor = "red";

}
function createnamespan(){
  var inputprodutname= document.querySelector('#nameinput').value;
  var createname = document.createElement('span');
  createname.appendChild(document.createTextNode(inputprodutname));
  namedivrest.appendChild(createname);

}

function createpricespan(){
  var inputprice = document.querySelector('#input').value;
  var createprice = document.createElement('span');
  createprice.appendChild(document.createTextNode(inputprice));
  pricedivrest.appendChild(createprice);
}

buttonrest.onclick = function(e){
creatediv();
createpricespan();
createnamespan();
};


var IronBubblehead = new Products ("IronBubblehead", 25, '#amountFirst', "totalpriceFirst" );
var IronShirthead = new Products ("IronShirthead", 15, '#amountSecond', "totalpriceSecond" );
listOfProduct.push(IronShirthead);
listOfProduct.push(IronBubblehead);
