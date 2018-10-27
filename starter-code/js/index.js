var divTag = document.createElement('div');
var formTag = document.createElement('form');
var labelTag = document.createElement('label');
var inputTag = document.createElement('input');
var spanTag = document.createElement('span');
var buttonTag = document.createElement('button');

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

  

}

function createDeleteButton(){

  divTag = document.createElement('div');
  buttonTag = document.createElement('button');

  var text = document.createTextNode('Delete');
  buttonTag.appendChild(text);
  buttonTag.setAttribute('onclick', `deleteItem(${getLastId() - 1})`)
  buttonTag.setAttribute('class', 'btn btn-delete');
  divTag.appendChild(buttonTag);
  getLastChild(0).appendChild(divTag);

}

function getLastId() {

  return document.querySelectorAll(`.containerProduct`).length;

}

function getLastChild(type) {

  if (type === 0) {
    return document.querySelectorAll(`.containerProduct`)[document.querySelectorAll(`.containerProduct`).length - 1];
  } else {
    return document.querySelectorAll(`.containerProduct`)[document.querySelectorAll(`.containerProduct`).length];
  }
 
}

function createQuantityNode(){

  divTag = document.createElement('div');
  formTag = document.createElement('form');
  labelTag = document.createElement('label');
  inputTag = document.createElement('input');
  spanTag = document.createElement('span');
  
  
  var text = document.createTextNode('QTY');
  
  labelTag.appendChild(text);
  formTag.appendChild(labelTag);
  formTag.appendChild(inputTag);

  inputTag.setAttribute("class", `quantity${getLastId() - 1}`);
  inputTag.setAttribute('type', 'number');

  divTag.appendChild(formTag);

  getLastChild(0).appendChild(divTag);



/* <div>
  <form action="">
    <label for="">QTY</label>
    <input class="quantity0" type="number">
  </form>
</div> */

}

function createItemNode(dataType, itemData){

  divTag = document.createElement('div');

  var parent = document.querySelectorAll('.mainContainer')[0];

  divTag.setAttribute("id", `id${getLastId()}`);
  divTag.className = "containerProduct";

  parent.insertBefore(divTag, getLastChild(1))

}

function createNewItemRow(itemName, itemUnitPrice){

  var items = [itemName, itemUnitPrice];

  items.forEach(function(item, i) {

    console.log(i);

    divTag = document.createElement('div');
    spanTag = document.createElement('span');

    if (i === 1) {
      var text = document.createTextNode('$' + item);
    } else {
      var text = document.createTextNode(item);
    }

    if (i === 1) {
      
      spanTag.appendChild(text);
      spanTag.setAttribute('class', `price${getLastId()-1}`)
      divTag.appendChild(spanTag);
      getLastChild(0).appendChild(divTag);
    }

    spanTag.appendChild(text);
    divTag.appendChild(spanTag);
    divTag.setAttribute('class','itemName');
    getLastChild(0).appendChild(divTag);



    console.log(divTag);

  })

  createQuantityNode();

  var text = document.createTextNode('$0.00');
  divTag = document.createElement('div');
  spanTag = document.createElement('span')

  spanTag.appendChild(text);
  spanTag.setAttribute('class', `totalPriceProduct${getLastId() - 1}`);
  divTag.appendChild(spanTag);

  getLastChild(0).appendChild(divTag);



}

function createNewItem(){

  var name = document.querySelectorAll(`.newName`)[0].value;
  var price = document.querySelectorAll(`.newPrice`)[0].value;


  createItemNode();
  createNewItemRow(name,price);
  createDeleteButton();





  // var parent = document.querySelectorAll('.mainContainer');
  // parent.insertBefore(createNewItemRow(name,price),lastChild)

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
