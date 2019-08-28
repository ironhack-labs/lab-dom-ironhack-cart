// class Toto {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

var toto = [];

function deleteItem(e){
 var target = e.target || e.srcElement;
 console.log(target.parentNode.parentNode)
 target.parentNode.parentNode.innerHTML = "";
}

function getPriceByProduct(){
  
}

function updatePriceByProduct() {
  let all = document.getElementsByClassName("container");
  all.forEach(element => {
    var price = element.querySelector
  });
}

function getTotalPrice() {
  let prices = document.getElementsByClassName("price");
  totalPrice = prices.reduce((acc, cv) => {acc+cv}, 0)
  return totalPrice;
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(){
  var daddy = document.getElementById("insert-coins-here")
  var child = document.createElement('div');
  var name = document.getElementById('product_name').value;
  var price = document.getElementById('product_price').value;
  child.classList.add('container')
  
  daddy.append(child);
  child.innerHTML = ` <div class="product"><span>${name || "empty"}</span></div>
                      <div class="product"><span class="unitPrice">$${price ||0}</span></div>
                      <div class="product"><label class="quantity"for="quantity">QTY</label></div>
                      <div class="product"> <input type="number" name="quantity" placeholder="0"></div>
                      <div class="product"> <span class="price">${price ||"0.00"}</span></div>
                      <iv class="product"> <button class="btn btn-delete">Delete</button></iv>`;
  var test = child.querySelector('button');
  console.log(test);
  test.onclick = deleteItem;
}



window.onload = function(){

// let text =  document.querySelector(".item").querySelector(".price").textContent;
// console.log(text)
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItemRow;
  

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;    
  }
};
