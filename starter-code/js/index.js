let deleteButtons = document.getElementsByClassName('btn-delete');

function deleteItem(e){

 let child = e.path[2];
  console.log(e)
 child.parentNode.removeChild(child);

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  let products = document.getElementsByClassName('product');
  let totalPrice = 0;
  for(product of products){

    let qty = product.getElementsByTagName("input")[0].value;
    let price = product.getElementsByClassName("price")[0].children[0].innerText;
    
    let total = product.getElementsByClassName("total")[0].children[0].innerText = (price * qty).toFixed(2);
    totalPrice =  totalPrice + parseInt(total);
  }

  let totalPriceDOM = document.getElementById("total-price").children[0].children[0];

  totalPriceDOM.innerText = parseInt(totalPrice).toFixed(2);

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

    let parent = document.getElementById("product-listing");

    let productItemTemplate = `<div class="name"><span>${itemName}</span></div>
                        <div class="price">$<span>${itemUnitPrice}</span></div>
                        <div class="qty"><label>QTY <input name="qty" type="text" value="0"></label></div>
                        <div class="total">$<span>0.00</span></div>
                        <div class="action">
                            <button class="btn btn-delete">Delete</button>
                        </div>`;

    let productDOM =  document.createElement("div");

    productDOM.setAttribute('class', 'product')
    productDOM.innerHTML = productItemTemplate;

    parent.appendChild(productDOM);
    
    let deleteButtons = document.getElementsByClassName('btn-delete');
    
    for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
    }


}

function createNewItem(){

      let parent = document.getElementById("add-product");
      let name = parent.getElementsByTagName("input")[0].value;
      let price = parent.getElementsByTagName("input")[1].value;

      price = parseInt(price).toFixed(2)

      createNewItemRow(name, price);

}

window.onload = function(){

  let calculatePriceButton = document.getElementById('calc-prices-button');
  let createItemButton = document.getElementById('new-item-create');

  let deleteButtons = document.getElementsByClassName('btn-delete');
    
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

};
