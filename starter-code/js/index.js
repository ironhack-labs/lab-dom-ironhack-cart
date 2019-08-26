
console.log(document.querySelector("body > div.calculatePrices > button"))

document.querySelector("body > div.calculatePrices > button").onclick = function(){
  var unitPriceOne = document.querySelector("#product > ul > li:nth-child(1) > div:nth-child(2) > span");
  var unitQuantityOne = document.querySelector("#product > ul > li:nth-child(1) > div:nth-child(3) > input[type=text]");
  
  document.querySelector("#product > ul > li:nth-child(1) > div:nth-child(4) > span").innerHTML = "$" + unitPriceOne.innerHTML.slice(1) * unitQuantityOne.value
  
  console.log(unitPriceOne.innerHTML.slice(1) * unitQuantityOne.value);
  
  var unitPriceTwo = document.querySelector("#product > ul > li:nth-child(2) > div:nth-child(2) > span");
  var unitQuantityTwo = document.querySelector("#product > ul > li:nth-child(2) > div:nth-child(3) > input[type=text]");
  
  document.querySelector("#product > ul > li:nth-child(2) > div:nth-child(4) > span").innerHTML = "$" + unitPriceTwo.innerHTML.slice(1) * unitQuantityTwo.value
  
  console.log(unitPriceTwo.innerHTML.slice(1) * unitQuantityTwo.value);
  

  var unitPriceThree = document.querySelector("#linethree > div:nth-child(2) > span");
  var unitQuantityThree = document.querySelector("#linethree > div:nth-child(3) > input[type=text]");

  document.querySelector("#linethree > div:nth-child(4) > span").innerHTML = "$" + unitPriceThree.innerHTML.slice(1) * unitQuantityThree.value

  console.log(unitPriceThree.innerHTML.slice(1) * unitQuantityThree.value);
  let totalPrice = unitPriceOne.innerHTML.slice(1) * unitQuantityOne.value + unitPriceTwo.innerHTML.slice(1) * unitQuantityTwo.value + unitPriceThree.innerHTML.slice(1) * unitQuantityThree.value ;
  document.querySelector("body > div.total > h1 > span").innerHTML = totalPrice;
}

// document.querySelector("body > div.calculatePrices > button").onclick = function(){
//   // document.querySelector("#product > ul > li:nth-child(1) > div:nth-child(4) > span")
//   // document.querySelector("#product > ul > li:nth-child(2) > div:nth-child(4) > span")
//   document.querySelector("body > div.total > h1 > span").innerHTML


// }







function deleteItem(e){
let remove = document.getElementsByClassName("btn-delete");
for (let d= 0;d<remove.length; d++){
  if(d == 1){
    //document.querySelector("#product > ul > li:nth-child(1)").innerHTML("");
    console.log("works");
  } else if (d == 2){
    document.querySelector("#product > ul > li:nth-child(2)").innerHTML("");
  } else;
  
 
}

  console.log("works");



}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  // let rows = document.getElementsByClassName("product-group");
  // for(let r=0; r< rows.length; r++){
  //     let price = document.querySelector(`#product > ul > li:nth-child(${r+1}) > div:nth-child(2) > span`);
  //     let quantity = document.querySelector(`#product > ul > li:nth-child(${r+1}) > div:nth-child(3) > input[type=text]`);


  //     console.log(price*quantity.value);
  //   }

}

function createQuantityInput(){

}

document.querySelector("#product-one").onclick = function createDeleteButton(){
  document.querySelector("#product > ul > li:nth-child(1)").innerHTML = ""
}
document.querySelector("#del").onclick = function createDeleteButton(){
  document.querySelector("#lineTwo").innerHTML = ""
}
document.querySelector("#del").onclick = function createDeleteButton(){
  if (document.querySelector("#linethree") != null){
    document.querySelector("#linethree").innerHTML = ""
  } else {
    null;
  }
  
}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

document.querySelector("#new-item-create > button").onclick = function createNewItem(){
  console.log("workssss");
  let prodName= prompt("What would you like to add to the store?");
let prodPrice= prompt("How much does that cost?");

return document.querySelector("#linethree").innerHTML = `
<div>
<span>${prodName}</span> 
</div>
<div>
  <span>${prodPrice}</span> 
</div>
<div>
<label class="quantity">QTY</label>
<input name="quantity" type="text">
</div>
<div>
<span>
  $0.00
</span>
</div>

<div>
<button id="product-three" class="btn-delete">Delete</button>
</div>`
}
// let button = document.getElementById("body > div.calculatePrices > button");
// button.onclick = function(){
//   //document.querySelector("#product > div:nth-child(3) > input[type=text]")
//   return console.log("works");
// }

//document.querySelector("body > div.calculatePrices > button").onmouseover. = "red"
// = function(e){

// }

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
