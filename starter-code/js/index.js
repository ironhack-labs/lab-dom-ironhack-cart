function deleteItem(e){

  var product = document.querySelectorAll(`#id${e}`)[0]
  product.parentNode.removeChild(product);

  getTotalPrice();

}

function getPriceByProduct(itemNode){

  var id = itemNode.getAttribute('id').split('d')[1];
  var price = itemNode.querySelectorAll(`.price${id}`)[0].innerHTML.split('$')[1];
  var quantity = itemNode.querySelectorAll(`.quantity${id}`)[0].value
  
  return price * quantity

}

function updatePriceByProduct(productPrice, index){

  document.querySelectorAll(`.totalPriceProduct${index}`)[0].innerHTML = '$' + parseFloat(productPrice.toFixed(2));
  return productPrice;
}

function getTotalPrice() {

  var totalPrice = 0;

    document.querySelectorAll('.containerProduct').forEach(function(product) {

      var id = product.getAttribute('id').split('d')[1];
      totalPrice += updatePriceByProduct(getPriceByProduct(product),id);

    });
  
    document.querySelectorAll(`.totalPrice`)[0].innerHTML = '$' + parseFloat(totalPrice.toFixed(2));

}

function createQuantityInput(){

  return document.createElement('input');

}

function createDeleteButton(){

  return document.createElement('Button');

}

function createQuantityNode(){

  var divTag = document.createElement('div');
  var formTag = document.createElement('form');
  var labelTag = document.createElement('label');

/* <div>
  <form action="">
    <label for="">QTY</label>
    <input class="quantity0" type="number">
  </form>
</div> */

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

  var parent = document.querySelectorAll('.mainCointainer');
  var divTag = document.createElement('div');
  var spanTag = document.createElement('tag');

  var name = document.createTextNode = itemName; 

  spanTag.appendChild(name);

  return divTag.parent.insertBefore(spanTag, firstChild);


}

function createNewItem(){

  var lastChild = document.querySelectorAll(`.containerProduct`)[document.querySelectorAll(`.containerProduct`).length - 1];

  var name = document.querySelectorAll(`.newName`)[0].value;
  var price = document.querySelectorAll(`.newPrice`)[0].value;


  var parent = document.querySelectorAll('.mainContainer');
  parent.insertBefore(createNewItemRow(name,price),lastChild)

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
