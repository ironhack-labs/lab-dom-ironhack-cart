function deleteItem(e){
  let product = e.currentTarget.parentNode.parentNode;
  let wrapper = document.getElementById('wrapper');

  wrapper.removeChild(product);
  console.log(e)
  getTotalPrice();
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
    let body = document.getElementsByTagName('body');

    let cost = document.getElementsByClassName('cost')
    let qty = document.getElementsByClassName('quantity');

    let totalAccount = 0;

    let costNumber, qtyNumber, total, totalPriceSum = 0;

    for(let i = 0; i < qty.length; i++){
      costNumber = parseInt(cost[i].innerText);
      qtyNumber = parseInt(qty[i].value);

      total = document.getElementsByClassName('total');

      totalAccount =  parseFloat(costNumber * qtyNumber).toFixed(2);
      total[i].innerText = totalAccount;
      totalPriceSum += costNumber * qtyNumber;
    }
    
    
    let h2 = document.getElementsByTagName('h2');

    if(h2.length > 0){
      h2[0].innerHTML = `Total Price: <span>$${parseFloat(totalPriceSum).toFixed(2)}</span>`;
    }else{
      let totalPrice = document.createElement('h2');
      totalPrice.style.marginLeft = '610px';
      totalPrice.innerHTML = `Total Price: <span>$${parseFloat(totalPriceSum).toFixed(2)}</span>`;

      body[0].appendChild(totalPrice);
    }
    
    //alert(total);
}
/*
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
*/
function createNewItem(){
  let newProduct = document.getElementById('newPdt').value;
  let newPrice = document.getElementById('newPrc').value;

  let wrapper =  document.getElementById('wrapper');

  let product = document.createElement('div');
  product.setAttribute("class","product");
  

  let productName = document.createElement('div');
  productName.setAttribute("class","productName");
  let productNameSpan = document.createElement('span');
  productNameSpan.innerText = newProduct;
  productName.appendChild(productNameSpan);

  let costValue = document.createElement('div');
  costValue.setAttribute("class", "costValue");
  let costValueSpan = document.createElement('span');
  costValueSpan.setAttribute("class","cost");
  costValueSpan.innerText = newPrice;
  costValue.appendChild(costValueSpan);
  
  let qtyValue = document.createElement('div');
  qtyValue.setAttribute("class", "qtyValue");
  qtyValue.innerHTML = `<label>QTY</label>
                        <input type="number" name = "qty" class = "quantity" >`;

  let totalValue = document.createElement('div');
  totalValue.setAttribute("class", "totalValue");
  totalValue.innerHTML = `$<span class= "total">0.00</span>`;

  let btnDelete = document.createElement('div');
  btnDelete.setAttribute("class", "btnDelete");
  btnDeleteBtn = document.createElement('button');
  btnDeleteBtn.setAttribute("class",'btn btn-delete');
  btnDeleteBtn.innerHTML = "delete";
  btnDelete.appendChild(btnDeleteBtn);
  // btnDelete.innerHTML = `<button class = 'btn btn-delete'>delete</button>`;

  product.appendChild(productName);
  product.appendChild(costValue);
  product.appendChild(qtyValue);
  product.appendChild(totalValue);
  product.appendChild(btnDelete);

  wrapper.appendChild(product);
  
  console.log(newProduct);
  console.log(newPrice);
  console.log(product);
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
