function deleteItem(e){
}

function getPriceByProduct(itemNode){
 document.querySelectorAll(itemNode).forEach((price) => {
   console.log(price)
 });

}

function updatePriceByProduct(input, price, totalPriceNode){
  const qty =  +(input.value);
  price  = +(price.substr(1));
  let totalProductPrice = qty * price;
  totalPriceNode.textContent = "$" + totalProductPrice
}

function getTotalPrice(price) { 
  let arr = []; 
  const totalPrice = document.querySelectorAll(".product");
  totalPrice.forEach((e)=> arr.push(getPriceByProduct(e)));
  let bigTotalPrice = document.querySelector(".big-total-price");
  bigTotalPrice.innerHTML = arr.reduce((acc, cur) => acc + cur);

let sum = document.querySelectorAll(".total-price").innerHTML 
+ updatePriceByProduct(price);
console.log(`$ ${sum}`)
}

function createQuantityInput(){
document.querySelectorAll(".input").forEach((input)=> {
  return input.value;
}) ;
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
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');


  var products = document.querySelectorAll(".product");
  products.forEach(product => {
    let price = product.querySelector(".price").textContent;
    let totalPrice = product.querySelector(".total-price");

    product.querySelector(".input-product").onchange = function(e){
      updatePriceByProduct(e.target,price,totalPrice)
    }
  })




  // var inputs = document.querySelectorAll(".input-product");
  // inputs.forEach(input => {
  //   input.onchange = function(e){
  //     updatePriceByProduct()
  //   }
  // })

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
