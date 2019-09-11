
function deleteItem(e){
  let buttonClicked=e.currentTarget;
  var parent=document.getElementById("products");
  var child=buttonClicked.parentElement.parentElement;
  parent.removeChild(child);
 }

function getUnitPrice(itemNum){
  let unitPriceCollection = document.querySelectorAll('.products .row .costPerUnit');
  let unitPrice = unitPriceCollection[itemNum].innerHTML; 
  return parseFloat(unitPrice).toFixed(2);
}
function getPriceByProduct(itemNum){
  var costPerUnit=document.getElementsByClassName("costPerUnit")[itemNum].innerHTML;
  var costPerUnitContainer=parseInt(costPerUnit.replace(/\D/g ,''));
  var quantity=document.getElementsByClassName("quantity-number")[itemNum].value
  var totalContainer=costPerUnitContainer*quantity;
  totalContainer=totalContainer.toString().slice(0,-2);
  totalContainer=+totalContainer+".00";

  var total=document.getElementsByClassName("totalPrice")[itemNum];
  total.innerHTML=totalContainer;
}
 function updatePriceByProduct(productPrice, index){

 }
 
function getTotalPrice() {
  var rowsLength=document.getElementsByClassName("row").length;
  var totalAll=0;
  for(let i=0;i<rowsLength;i++){
    getPriceByProduct(i);
    totalAll+=getPriceByProduct(i)
  }
}
function createQuantityInput(){
var quantityInput=document.createElement("input");
quantityInput.innerHTML.value=0;
quantityInput.type="number";
quantityInput.classList.add()
document.getElementsByClassName("quantity")[0].appendChild(quantityInput);
}

function createNewItemRow(itemName, itemUnitPrice){
  let products=document.getElementById("products");
  let newItem=document.createElement("div");
  newItem.classList.add("row");
  newItem.innerHTML= `
     <div class="productName">
        <span>${itemName}</span>
      </div>

      <div>
        <p>$<span class="costPerUnit">${itemUnitPrice}</span></p>
      </div>

      <div class="quantity">
        <label>QTY</label><input class="quantity-number" type="number">
      </div>

      <div>
        <p>$<span class="totalPrice">0.00</span></p>
      </div>

      <div class="deleteButton">
        <button class="btn btn-delete">Delete</button>
      </div>
  
  `
  products.appendChild(newItem);
 }

function createNewItem(){
  var productName=document.getElementById("nameInput").value;
  var costInput=document.getElementById("costInput").value;
  createNewItemRow(productName,costInput);
  calcDel();
}
function calcDel(){
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i< deleteButtons.length ; i++){
    deleteButtons[i].onclick=deleteItem;
 }

}
function calcTotal(){
  var total=document.getElementById("totalAll");
  var rows=document.getElementsByClassName("row");
  debugger
  var container2=0
  for(let i =0; i<rows.length;i++){
    container2+=parseInt(rows[i].getElementsByClassName("totalPrice")[0].innerHTML.replace(/\D/g ,'').slice(0,-2),10) 
  }
  container2=container2.toString();
  total.innerHTML=container2;
}
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('create');
  createItemButton.onclick = createNewItem;
    calculatePriceButton.addEventListener("click",function(){
      getTotalPrice();
      calcTotal();
    })
    calcDel();
  }




