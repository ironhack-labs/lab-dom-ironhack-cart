
function deleteItem(e){
  //console.log(e)
  var target=e.target||e.srcElement;
  var parent=target.parentElement;
  var grand=parent.parentElement;
  var final=grand.parentElement;
  final.removeChild(grand);
  getTotalPrice();//to update price once deleted
  console.log(final);
}

function getPriceByProduct(itemNode){
  console.log(itemNode);

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  let unitPriceList=document.querySelectorAll(".contents.unit-price");
  let quantityList=document.querySelectorAll(".quantity");
  let tot=document.querySelectorAll("#total-price")
  let final=document.getElementById("final-price")
  let buttondelet=document.querySelectorAll(".btn-delete")
  console.log(buttondelet);
  
  //console.log(tot);
  var sum=0;

  for(let i=0;i<unitPriceList.length;i++){
    let unitP=unitPriceList[i].innerText;
    //console.log(unitPriceList[i].innerText);
    let quantity=quantityList[i].value;
    //console.log(quantity);
    // console.log(unitP);
    let totalPerItem=unitP*quantity;
    tot[i].innerText=`$ ${totalPerItem}`;
    sum=sum+totalPerItem;
  }
  //console.log(sum)
      final.innerText=`Total Price: $ ${sum}`
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
  const name=document.getElementById("product-name")
  const units=document.getElementById("unit-price");
  const main=document.querySelector(".main")
  const newprod=document.getElementById("newproduct");
  const untprices=document.getElementById("untPrice")

  var updateProduct=newprod.value;
  var updatePrice=untprices.value;

  var elmnt=document.createElement("div")
  elmnt.classList.add("product")
  elmnt.innerHTML=`<div class="contents" id="product-name">${updateProduct}</div>
  <div class="contents unit-price">${updatePrice}</div>
  <div class="contents">Qty:<input type="text" class="quantity"></div>
  <div class="contents" id="total-price">0</div>
  <div class="contents"><button class="btn btn-delete">Delete</button></div>`
  main.appendChild(elmnt);  
  elmnt.querySelector("button").onclick = deleteItem

  
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.querySelectorAll('.btn-delete');
  console.log(deleteButtons)

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

 
};
var deleteButtons = document.querySelectorAll('.btn-delete');

for(var i = 0; i<deleteButtons.length ; i++){
  //console.log (deleteButtons[i]);
  deleteButtons[i].onclick = deleteItem;
}
