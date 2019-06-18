window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  let copy = document.querySelector('.copy-me').cloneNode(true);
  copy.className = "whole-product";
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  function deleteItem(e){
    let currDiv = e.currentTarget.parentNode.parentNode;
    let parentDiv = e.currentTarget.parentNode.parentNode.parentNode;
    parentDiv.removeChild(currDiv);
  }
  
  function getPriceByProduct(itemNode){
  
  }
  
  function updatePriceByProduct(productPrice, index){
  
  }
  
  function getTotalPrice() {
    let cartTotal = 0;
    let products = document.getElementsByClassName('whole-product');
    let arr =[...products];
    arr.forEach((eachProduct)=>{
    let price = eachProduct.querySelector('.price span').innerHTML;
    let str2Num = "";
    for(let i = 1; i<price.length; i++){
      str2Num += price[i];
    }
    str2Num = Number(str2Num);
    str2Num *= eachProduct.querySelector(".user-in .qty").value;
    cartTotal += str2Num;
    let total = eachProduct.querySelector('.total-amount');
    total.innerHTML = `$${str2Num}`
    });
    document.querySelector('.cart-total span').innerHTML = `$${cartTotal}`;
  }
  
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
    let parent = document.getElementById("all-items");
    let newCopy = copy.cloneNode(true);
    newCopy.querySelector(".name span").innerHTML = document.querySelector("#btn-name").value;
    newCopy.querySelector(".price span").innerHTML = document.querySelector("#btn-price").value;
    newCopy.querySelector(".user-in .qty").value = 0;
    parent.appendChild(newCopy);
    newCopy.querySelector(".btn-delete").onclick = deleteItem;
  }
};
