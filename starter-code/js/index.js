
var quanInput = document.querySelector(".quantity")
var newPrice = document.querySelector(".totPrice")
var myBtn = document.querySelector(".btn-success")
// var myDel = document.querySelector(".btn-delete")
var myPri = document.querySelector(".price")
var cont1 = document.querySelector(".container")

// _______________________________________________________

var quanInput2 = document.querySelector(".quantity2")
var newPrice2 = document.querySelector(".totPrice2")
var myPri2 = document.querySelector(".price2")
var cont2 = document.querySelector(".container2")
// _______________________________________________________

var mytota = document.querySelector(".tota span");

// _______________________________________________________

var myCrea = document.querySelector(".creaa")
var myPri3 = document.querySelector(".newIt")
var newItemName = document.querySelector(".newII")
var addItem = document.querySelector(".adding")
var addPrice = document.querySelector(".addingPrice")
var cont3 = document.querySelector(".container3")
var combinedDivs = document.querySelector(".Iteeems")

var allPrices = document.querySelectorAll(".pppp");
var allQuantities = document.querySelectorAll(".qqqq");
var allTotals = document.querySelectorAll(".tttt");


myBtn.onclick = function () {
  // console.log(Number(myPri.innerHTML.substr(1))* quanInput.value);
  // console.log(myPri.innerHTML.substr(1));
  
//  newPrice.innerHTML = "$" + Number(myPri.innerHTML.substr(1))*(quanInput.value);
//  newPrice2.innerHTML = "$" + Number(myPri2.innerHTML.substr(1))*(quanInput2.value);
//  mytota.innerHTML = "$" + (Number(newPrice.innerHTML.substr(1))+Number(newPrice2.innerHTML.substr(1)));

 var counterr = 0;
 for (var i=0; i< allPrices.length; i++) {
  allTotals[i].innerHTML = "$" + Number(allPrices[i].innerHTML.substr(1))*(allQuantities[i].value);
  counterr += Number(allPrices[i].innerHTML.substr(1))*(allQuantities[i].value);
 }

 mytota.innerHTML = "$" + counterr;

 
if (quanInput.value === "") {
    return;
  }

}

var deleteButtom = document.querySelectorAll(".btn-delete");

deleteButtom.forEach(function(oneBut){
  oneBut.onclick = function () {
    var deletedbutton = event.target;
    var clickedItem = deleteButtom.parentNode.parentNode;
    // var clickedItem2 = clickedItem.parentNode;

    cont1.removeChild(clickedItem);
    cont2.removeChild(clickedItem);
  }
});

myCrea.onclick = function() {

  if (newItemName.value !== "" && myPri3 !== "") {

    // addItem.innerHTML = newItemName.value;
    // addPrice.innerHTML = myPri3.value;
    
    var midDiv = document.createElement("div");
    combinedDivs.appendChild(midDiv);
    midDiv.className="container";

    var newItem = document.createElement("div");
    var priii = document.createElement("div");
    priii.className = "pppp";
    var qquaan = document.createElement("div");
    var totaalPrice = document.createElement("div");
    

    newItem.innerHTML = newItemName.value;
    priii.innerHTML = "$"+myPri3.value;

    midDiv.appendChild(newItem);
    midDiv.appendChild(priii);
    midDiv.appendChild(qquaan);
    midDiv.appendChild(totaalPrice);


    var lastInput = document.createElement("input")
    var laaastInput = document.createElement("label");
    laaastInput.htmlFor = "newwquan";
    lastInput.id="newwquan";
    lastInput.type="Number";
    lastInput.className="qqqq"
    laaastInput.innerHTML = "QTY";
    var lastInput2 = document.createElement("span")

    qquaan.appendChild(laaastInput);
    qquaan.appendChild(lastInput);
    totaalPrice.appendChild(lastInput2);
    totaalPrice.innerHTML = "$0.00";
    totaalPrice.className = "tttt";

    newItemName.value = "";
    myPri3.value = "";

    
    
    
    
    // + "<button>Delete</button>";

  }
  

}






// function deleteItem(e){
//   var deleteButtom = document.querySelector("btn-delete");
//   deleteButtom.onclick = function () {
//     var clikedbuttom = 
//   }
// }

// function getPriceByProduct(itemNode){
  
// }

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {
//  
// }

// function createQuantityInput(){
//   
// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){
//   document.createElement

// }

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
