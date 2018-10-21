function deleteItem(e){

}

function getPriceByProduct(){
  let itemNode = document.getElementsByClassName('cost');
  for(let i=0; i < itemNode.length; i=+1){
    console.log(itemNode.length, i);
    let idProductClass = itemNode[i].id;
    finalValue = itemNode[i].innerText.split('');
    finalValue = finalValue.slice(1);
    finalValue = finalValue.join('');
    i++;
    // updatePriceByProduct(finalValue, idProductClass);
  }
}
 getPriceByProduct();

function updatePriceByProduct(productPrice, index){
  
  console.log(productPrice, index);

}

function getTotalPrice() {
  getPriceByProduct();
  let total = 0;
  for (let i = 0; i < arrTotalPrice.length; i += 1) {
    total += parseFloat(arrTotalPrice[i].textContent.split('').slice(1).join(''));
  }
  document.getElementById('total-price').innerHTML = `Total Price: $${total.toFixed(2)}`;
}
  // var array1 = [1, 4, 9, 16];

  // // pass a function to map
  // const map1 = array1.map(x => x * 2);
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
  let newPrice = document.getElementById('new-price').value;
  let newName = String(document.getElementById('newName').value);

  newPrice = parseFloat(newPrice).toFixed(2);

  if (isNaN(newPrice) || newPrice === 0) {
    console.log('No price');
    alert('Input an value for the price!');
    return;
  }
  if (newName === '') {
    console.log('No name');
    alert('Input a name to the product!');
    return;
  }

  const newRow = arrProducts[0].cloneNode(true);
  arrProducts[arrProducts.length - 1].parentNode.insertBefore(newRow, null);

  arrName[arrName.length - 1].innerHTML = `${newName}`;
  arrPrice[arrPrice.length - 1].innerHTML = `$${newPrice}`;
  arrQuantity[arrQuantity.length - 1].value = 0;
  arrPrice[arrPrice.length - 1].value = '$0.00';
  document.getElementById('new-price').value = 0;
  document.getElementById('newName').value = '';
};

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice();
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
