
function deleteItem(event) {
  let delBut = event.currentTarget
  delBut.closest('.item').remove()
}

function getPriceByProduct() {
  let totalAll = 0;

  let itPri = document.getElementsByClassName('price');
  let itCou = document.getElementsByTagName('input')
  for (let i = 0; i < itPri.length; i++) {

    let totPri = parseFloat(itPri[i].innerText) * parseFloat(itCou[i].value)
    let itPrice = parseFloat(totPri);

    let totalPrice = document.getElementsByClassName('total-price')[i];
    console.log("itPrice", itPrice)
    totalAll += itPrice;
    totalPrice.innerHTML = `${itPrice}`;
    document.getElementsByClassName('total-price-all')[0].innerHTML = totalAll;



  }
}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {



  // select stuff
  // convert to number
  // alert it


}

function createQuantityInput() {

}

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {
  let newItemEl = document.getElementsByClassName('item1')[0].cloneNode(true)
  document.getElementsByClassName('items')[0].appendChild(newItemEl)
  newItemEl.getElementsByClassName('item-name')[0].innerText = document.getElementById('new-item-name').value
  newItemEl.getElementsByClassName('price')[0].innerText = document.getElementById('new-item-price').value
  // let newItemNa = document.getElementById('new-item-name')
  // let newItemPri = document.getElementById('new-item-price')
  // newItemEl.innerText = newItemNa
  // newItemEl.innerText = newItemPri

}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');




  calculatePriceButton.onclick = getPriceByProduct;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
