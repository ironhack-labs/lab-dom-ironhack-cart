
// version 2
function deleteItem(e){
    // element.parentNode.removeChild(element);
    
    var wrapperx = e.target.parentNode; 
      wrapperx.parentNode.remove();
}

function getPriceByProduct(itemNode){
    
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
    console.log("total worked")
    var  productPrice = document.getElementsByClassName('productPrice');
    var  productQuantity = document.getElementsByClassName('quantity');
    var productTotal = document.getElementsByClassName('totalProductPrice');
    var totalCart = 0;

    for(var i=0; i<productPrice.length; i++) {
      console.log('price: ' + productPrice[i].innerText);
      console.log('qty: ' + productQuantity[i].value);

      console.log(Number( productQuantity[i].value) * Number( productPrice[i].innerText));
      totalCart = totalCart + productQuantity[i].value * productPrice[i].innerText;
      productTotal[i].innerText = '$ ' + productQuantity[i].value * productPrice[i].innerText;

    }
    var totalKart = document.getElementById('totalCart');
    totalKart.innerText= "$" + totalCart;
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
    console.log("create ...");
    var newName = document.getElementById('newName');
    var newPrice = document.getElementById('newPrice');
    var moreProducts = document.getElementById('moreProducts');

    var moreProducts_innerHTML = 

    `
      <div> <span class="productName">${newName.value}</span></div>
      <div>$<span class="productPrice">${newPrice.value}</span></div>
      <div ><label for="QTY2"> QTY &nbsp; <input id="QTY2" type="text" class="quantity" value="0"></label></div>
      <div><span class="totalProductPrice">$0.00</span></div>
      <div><button class="btn btn-delete">Delete</button></div> 
    `;

    newName.value = "";
    newPrice.value = "";
    let awrapperEle = document.createElement('div');
    awrapperEle.className = "wrapper";
    awrapperEle.innerHTML = moreProducts_innerHTML;

    moreProducts.appendChild(awrapperEle);

  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

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
