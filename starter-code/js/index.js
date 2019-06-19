let theShopList = document.getElementById(`shop-list`);

function deleteItem(e){
  let curButton = e.currentTarget;
  let targetProductDiv = curButton.parentNode.parentNode;
  targetProductDiv.parentNode.removeChild(targetProductDiv);

}

function getPriceByProduct(itemNode){
  // product = itemNode;
  // price = document.querySelector(`.price`)
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let shopListDivs = document.querySelectorAll('#shop-list > div');
  console.log(shopListDivs);
  console.log(shopListDivs.length);
  let listTotal = 0.00;
  for(let i = 0; i < shopListDivs.length; i++){
    let price = document.getElementsByClassName('price')[i].innerHTML.replace(`$`,``);
    let quantity = document.querySelectorAll('.quantity > input')[i].value;
    let total = Number((price * quantity).toFixed(2));
    document.getElementsByClassName('total-product-cost')[i].innerHTML = `$` + total;
    listTotal += total;
  }
  document.getElementById("list-total").innerHTML = listTotal;
}


function createQuantityInput(){
  let newDiv = document.createElement(`div`);
  //add class to div we created above- still havent done this

  let inputStr = `<div><span class="quantity"> <label>QTY</label><input type="text"></span></div>`
  // newDiv.innerHTML = inputStr; line 49(maybe?) below
  // console.log(newDiv);
  console.log(inputStr);

  let newTotalProductCost= document.createElement(`div`);
  let totalStr = `<div><span class="total-product-cost">$0.00</span></div>`
  console.log(totalStr);
  newTotalProductCost.innerHTML = totalStr;
  console.log(newTotalProductCost);

  console.log(inputStr + totalStr);
  newDiv.innerHTML = inputStr + totalStr;


  // document.getElementbyID thing then shop-list.apend(newDiv)
  // shop-list.append(newDiv)


  // console.log(inputStr + totalStr);
}

function createDeleteButton(){
  let newDiv = document.createElement(`div`);
  let domStr = `<div><button class="btn btn-delete">Delete</button></div>`;
}

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

function createNewItem(){
  let newShopItem = document.createElement(`div`);
  // newShopItem.innerHTML = 
  theShopList.appendChild(newShopItem);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

  createItemButton.onclick = createQuantityInput;
};
