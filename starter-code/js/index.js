function deleteItem(e){
  e.currentTarget.parentNode.parentNode.parentNode.removeChild(e.currentTarget.parentNode.parentNode);
}

function getPriceByProduct(product){
  let productPrice = product.getElementsByClassName("unitPrice")[0].innerText;
  console.log(productPrice);
  let quantity=product.querySelector("input").value;
  console.log(quantity);
  let totalProductAmount= parseFloat(productPrice)*quantity;
  return `${totalProductAmount}.00$`;
}

function updatePriceByProduct(element, productPrice){
  let subTotalZero= element.getElementsByClassName("subTotal")[0];
  subTotalZero.innerText = productPrice;
}

function getTotalPrice() {
  let wrappers=document.querySelectorAll(".wrapper");
  let totalPrice=0;
  for (let i=0; i<wrappers.length; i++){
    let totalProductPrice = getPriceByProduct(wrappers[i]);
    updatePriceByProduct (wrappers[i], totalProductPrice);
    totalPrice+=parseFloat(totalProductPrice);
  }
  //Seleccionamos y cambiamos el TOTAL PRICE 
  let totalPriceSpan=document.getElementById("total-price");
  totalPriceSpan.innerText = `${totalPrice}.00$`;
  
}
//ESTO ES LO QUE HICE INICIALMENTE PERO NO FUNCIONÓ:
// let wrappers=document.querySelectorAll(".wrapper");
// for (let i=0; i<wrappers.length; i++){
//   let productPrice=wrappers[i].querySelector(".unitPrice").innerText;
//   console.log(productPrice);
//   let quantity=wrappers[i].querySelector("input").value;
//   console.log(quantity);
//   let subTotalZero= wrappers[i].querySelector(".subTotal").innerHTML;
//   console.log(subTotalZero);
//   let total= quantity*parseFloat(productPrice);
//   console.log(total);
//   subTotalZero.innerText = total;
//   console.log(subTotalZero);
// }

function createQuantityInput(){

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

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

