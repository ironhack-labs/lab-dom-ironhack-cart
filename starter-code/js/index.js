

let calcButton = document.getElementById("calculate-button");
let inputQTY =document.getElementsByClassName("qty");
let prices = document.getElementsByClassName("price")

calcButton.onclick = function(){
let result = 0;
for (let i = 0; i < inputQTY.length; i++){

    document.getElementsByClassName("total-price")[i].innerHTML = "$" + ((Number((prices[i].innerHTML).substr(1)))*Number(inputQTY[i].value))

    result += ((Number((prices[i].innerHTML).substr(1)))*Number(inputQTY[i].value))

}

document.getElementById("actual-total").innerHTML = "$" + result
}

let DeleteButton = document.getElementsByClassName("button-form");
for ( let i = 0; i < DeleteButton.length; i++){
    DeleteButton[i].onclick = function(event){
        event.currentTarget.parentElement.parentElement.remove();
}
}



let createButton = document.getElementsByClassName("create-button");

createButton[0].onclick = function(){
    

let productName = document.getElementById("inputData1").value;
// console.log(productName);
let priceName = document.getElementById("inputData2").value;
// console.log(priceName)
if (!productName || !priceName ){
    return
}
let newSection = document.createElement("section");
newSection.className = "product";
// console.log(newSection)
newSection.innerHTML = `
<div class = "firstMiddle">
<span>${productName}</span> 
</div>
<div class = "secondMiddle">
<span class = "price">$${priceName}</span>
</div>
<div>
<label>QTY</label>
<input class = "qty" type="text" name="QTY-1">
</div>
<div class = "total-price">
<span>$0.00</span>
</div>
<div>
<button class = "button-form">Delete</button>
</div>`;
let productList  = document.getElementById("allProducts")
productList.appendChild(newSection);
document.getElementById("inputData1").value = "";
// console.log(productName);
document.getElementById("inputData2").value = "";
newSection.getElementsByClassName("button-form")[0].onclick = function(event){
    event.currentTarget.parentElement.parentElement.remove()
}
}



//
// let  a  = document.createElement("section")
// a.innerHTML = ` ${<div>}
// <span>IronBubble-head</span> 
// </div>
// <div>
// <span class = "price">$25</span>
// </div>
// <div>
// <label>QTY</label>
// <input class = "qty" type="text" name="QTY-1">
// </div>
// <div class = "total-price">
// <span>$0.00</span>
// </div>
// <div>
// <button class = "button-form">Delete</button>
// </div>`




























// let inputQTY =document.getElementsByClassName("qty");
    // let pricePerItem = Number((document.getElementsByClassName("price").firstChild.nodeValue).substr(1));
    // let totalPrice = 1;
    // for ( let i = 0; i <= inputQTY.length; i++){
// let inputQTY =document.getElementsByTagName('input')[0];
// let priceForSingleItem = Number((document.getElementById("price").firstChild.nodeValue).substr(1));
// let numberOfItems = Number(inputQTY.value);
// let totalPrice = priceForSingleItem * numberOfItems;
// let result = document.getElementById("total-price").innerHTML = "$" + totalPrice;
// let priceForSingleItem = Number((document.getElementById("price").firstChild.nodeValue).substr(1));
// let numberOfItems = Number(inputQTY.value);
// let totalPrice = priceForSingleItem * numberOfItems;
// let result = document.getElementById("total-price").innerHTML = "$" + totalPrice;




// function deleteItem(e){

// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {

// }

// function createQuantityInput(){

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

// }

// // window.onload = function(){
// //   var calculatePriceButton = document.getElementById('calc-prices-button');
// //   var createItemButton = document.getElementById('new-item-create');
// //   var deleteButtons = document.getElementsByClassName('btn-delete');

// //   calculatePriceButton.onclick = getTotalPrice;
// //   createItemButton.onclick = createNewItem;

// //   for(var i = 0; i<deleteButtons.length ; i++){
// //     deleteButtons[i].onclick = deleteItem;
// //   }
// // };
