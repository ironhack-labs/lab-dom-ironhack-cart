/* var allDeleteButtons = document.getElementsByClassName("delete")
        var clickDeleteHandler = function(event){
            var clickedElement = event.target
            var clickedShoppingItem = event.target.parentElement
            //var container = event.target.parentElement.parentElement
            var container = document.getElementById("cart-container")
            debugger
            container.removeChild(clickedShoppingItem)
        }

        for(let i =0; i < allDeleteButtons.length; i++) {
            allDeleteButtons[i].addEventListener("click", clickDeleteHandler)
        }
*/

function deleteItem(e) {
  e.target.parentElement.parentElement.remove();
    // node.removeChild(event.target.parentElement.parentElement);
  }
  // document.getElementById('btn-delete').addEventListener('click', () => document.getElementById('btn-delete').parentElement.parentElement.removeChild


function getPriceByProduct(e) {
  //removed itemNode argument
  return parseFloat(e.target.parentElement.getElementsByClassName('item-cost-span')) * getElementById('qty');
  //return parseFloat(document.getElementsByClassName('item-cost-span')[0].innerHTML);
  console.log(itemNode);
}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  document.getElementsByClassName('product-total-span')[0].innerHTML = (parseFloat(document.getElementById('qty').value * getPriceByProduct()));
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
  // const createNewItem = e => {
  var price = document.getElementById('new-item-price').value;
  var name = document.getElementById('new-item').value;
  var newProductRow = `
    <div class="item-name"><span class="item-name-span">${name}</span></div>
    <div class="item-cost">&#36;<span class="item-cost-span">${price}</span></div>
    <div class="qty">
      <label for="qty">QTY</label>
      <input type="number" id="qty" name="qty">
    </div>
    <div class="product-total">&#36;<span class="product-total-span"></span></div>
    <div class="delete-button-div"><button class="btn-delete" id="btn-delete">Delete</button></div>
    <div class="success-button-div"><button class="btn-success calc-prices-button">Calculate</button></div>
    `;
  var node = document.createElement("div");
  node.className = 'main';
  node.innerHTML = newProductRow;
  var body = document.getElementsByTagName('body')[0];
  var buttonsDiv = document.getElementById('buttons-div');
  body.insertBefore(node, buttonsDiv);
  //window.onload();


  node.getElementsByClassName('btn-delete')[0].addEventListener('click', function () {
    node.remove();
    // node.removeChild(event.target.parentElement.parentElement);
  });

  $('.calc-prices-button').click(function () {
    let itemCost = parseInt($('.item-cost-span').text());
    let qty = $('#qty').val();
    let result = itemCost * qty;
    $('.product-total-span').html(result);
  })

  //newDeleteButton();
}





window.onload = function () {
  var calculatePriceButton = document.getElementsByClassName('calc-prices-button')[0];
  var createItemButton = document.getElementById('new-row-button');
  var deleteButton = document.getElementsByClassName('btn-delete')[0];  // var deleteButtons = document.getElementsByClassName('btn-delete');

  var clickDeleteHandler = function (event) {
    var clickedShoppingItem = event.target.parentElement;
    var container = event.target.parentElement.parentElement.parentElement;    //var container = document.getElementById("basket")

    container.removeChild(clickedShoppingItem.parentElement)
  }
  //calculatePriceButton.onclick = getPriceByProduct;
  deleteButton.onclick = deleteItem;
  createItemButton.onclick = createNewItem;
 
  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};

$(document).ready(()=> {
  $('#btn-delete').click(()=> {
    $('.main').remove();
  });

  $('.calc-prices-button').click(function () {
    let itemCost = parseFloat($('.item-cost-span').text());
    let qty = $('#qty').val();
    let result = itemCost * qty;
    $('.product-total-span').html(result);
  })
})
