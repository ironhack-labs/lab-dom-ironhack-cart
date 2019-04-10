// let quantityInput= 
// document.getElementById('quantity').value;
// console.log(quantityInput);

function deleteItem(e){

}

function createQuantityInput(){
  let quantityInput= 
  document.getElementById('quantity').value; 
  return quantityInput
}
function getUnitCost(){
  let unitCost =  parseInt(document.querySelector(".unit-cost").innerHTML);
  return unitCost
}
function getPriceByProduct(itemNode){
  let calcPrice = document.querySelector("#calc-price");
  calcPrice.onclick = function () {
    let priceByProduct= (createQuantityInput()* getUnitCost());
    console.log(priceByProduct);
 };
 return priceByProduct;
}
 getPriceByProduct()
// priceByProduct.onclick = function(){
//  let totalPriceDiv = document.getElementById('totalPriceDiv');
//  let totPrice = document.getElementsByClassName("price")

//  totalPriceDiv.append(totPrice);
//  totPrice.innerHTML= (getPriceByProduct());
// }

// getPriceByProduct(){
// let totalPriceDiv = document.getElementById('#totalPriceDiv');
// totalPriceDiv.append('.price');
// price.innerHTML=getPriceByProduct();


function updatePriceByProduct(productPrice, index){
  // priceByProduct.onclick = function(){
    let totalPriceDiv = document.getElementById('totalPriceDiv');
    let totPrice = document.getElementsByClassName("price")
   
    totalPriceDiv.append(totPrice);
    totPrice.innerHTML= (getPriceByProduct());
  //  }
}

function getTotalPrice() {
  


}

// function createQuantityInput(){

//   let quantityInput= 
//   document.getElementById('quantity').value; 
//   console.log(quantityInput)
// }
//had to add "on change=functionName" in the HTML input for it to get the value
function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

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
// getPriceByProduct()