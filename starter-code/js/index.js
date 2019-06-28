window.onload = function(){

let button = document.getElementById('calculate-prices-btn');

button.onclick = function(){ 
  let allPrices = document.getElementsByClassName("product-price");
  let allQty = document.getElementsByClassName("quantity");
  let priceSum = document.getElementsByClassName("price-times-qty");
  let totalPriceText = document.getElementById('total-price');
  let totalPrice = 0;
  
  for(let i = 0; i < allPrices.length; i++){
    priceSum[i].innerHTML = (allPrices[i].innerHTML)*(allQty[i].value);
    totalPrice += Number(priceSum[i].innerHTML);
  }

  totalPriceText.innerHTML = `\$${totalPrice}`;  
}


let deleteBtn = document.getElementsByClassName("btn-delete");

for(let counter = 0; counter < deleteBtn.length; counter++){
  deleteBtn[counter].onclick = function(e){
    let parent = document.getElementById('all-items');  
    let child = e.currentTarget.parentNode.parentNode;
    parent.removeChild(child);
  }
}

let createBtn = document.getElementById("create-item");

createBtn.onclick = function(){
  let list = document.getElementById("all-items");
  let newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'product-line')
  let newProductName = document.getElementById('new-product-name').value;
  let newProductPrice = document.getElementById('new-product-price').value;
  newDiv.innerHTML = `<div>
    <span class="product-name">${newProductName}</span>
  </div>
  <div>
    $<span class="product-price">${newProductPrice}</span>
  </div>
  <div>
    <label>QTY</label>
    <input class="quantity" type="text" name="qty" placeholder="0">      
  </div>
  <div>
    $<span class="price-times-qty">0.00</span>
  </div>
  <div>
    <button class="btn btn-delete">Delete</button>
  </div>`
  list.appendChild(newDiv);
  document.getElementById('new-product-name').value = "";
  document.getElementById('new-product-price').value = "";
  let newDeleteBtn = deleteBtn[deleteBtn.length - 1];
  newDeleteBtn.onclick = function(){
    let parent = document.getElementById('all-items');  
    let child = newDeleteBtn.parentNode.parentNode;
    parent.removeChild(child);
  }

}




} //end window.onload