function deleteItem(d){
  console.log(d.target)

  var yoyo = d.target.parentElement;
 console.log(yoyo)
 var tata = yoyo.parentElement;
 var chapo = tata.parentElement;
  chapo.removeChild(tata);
  console.log(tata);

}

function getPriceByProduct(itemNode){
 let productPrice = itemNode.querySelector('.price').innerHTML;
 let quant = itemNode.querySelector('input').value;
 let priceItem = productPrice * quant;
 itemNode.querySelector('.total').innerHTML = `$${priceItem.toFixed(2)}`;
  console.log(priceItem);
return priceItem;
}

// function updatePriceByProduct(productPrice, index){

// }

function getTotalPrice() {
  cal = [];
  fullTotal=document.getElementById('final_price');
  document.querySelectorAll('.container').forEach((cont)=>{
    cal.push(getPriceByProduct(cont));
  });
  console.log(cal);
  fullTotal.innerHTML = `$${(cal.reduce((a,b)=>a+b)).toFixed(2)}`;

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
  var name = document.getElementById("new_1").value;
  var price = document.getElementById("new_2").value;
  // var section = document.getElementById("main");
  newProduct = document.createElement('div');
  newProduct.classList.add('container');
  newProduct.innerHTML = `<div class="first-item"><span class="name">${name}</span></div>
  <div class="second-item"><span class="price">${price}</span></div>
  <div class="third-item"><span class="qty">QTY</span></div>
  <div  class="fourth-item"><input type="number" id="amount2" min="1" class="amount" max="100"></div>
  <div  class="fifth-item"><span class="total">$</span></div>
  <div  class="sixth-item"><button class="btn-delete btn">Delete</button></div>`;
  var finalNewProduct = main.appendChild(newProduct);
  console.log(finalNewProduct);
  console.log(newProduct);
  
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  
  return finalNewProduct;


}

window.onload = function(){
  var calculatePriceButton = document.getElementById('precio');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  
};
