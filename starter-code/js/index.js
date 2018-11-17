function deleteItem(element){
  

}

function getPriceByProduct() {
  //Get all the prices for all the items, this shows up as an array of prices
  let prices = [...document.getElementsByClassName("price")];
  const allPrices = prices.map(span => {
    return +span.innerHTML.substr(1);
  })
  
  //Get all the quantities for all the items, this shows up as an array of quantities
  let quantities = [...document.getElementsByClassName("quantity")];
  const allQuantities = quantities.map(span => {
    return +span.value;
  })
    console.log(quantities)
  //Iterate through the arrays, match up prices and quantities, return the final price
  const finalPrices = document.getElementsByClassName("final-price");

  for(let i = 0; i < allPrices.length; i++) {

    console.log(allPrices[i]);
    console.log(allQuantities[i]);
    finalPrices[i].innerHTML = "$" + allPrices[i] * allQuantities[i];
  }

  //Iterate through the final prices for each product and return with a grand total
  const grandTotal = document.getElementById("grand-total");

  const grandTotalArray = [...document.getElementsByClassName("final-price")];
  grandTotalArray2 = grandTotalArray.map(span => {
    return +span.innerHTML.substr(1);
  })

  console.log(grandTotalArray2);
  let grandTotal2 = grandTotalArray2.reduce((a, b) => a + b);
  grandTotal.innerHTML = "$" + grandTotal2;
}

//Button that calculates all totals
document.getElementById("calc-prices-button").onclick=function() {
  getPriceByProduct();
}

function updatePriceByProduct(productPrice, index) {

}

function createQuantityInput() {


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

}
