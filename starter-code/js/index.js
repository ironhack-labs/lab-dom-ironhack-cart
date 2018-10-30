
//   let product = document.getElementsByClassName('product');

// function priceForEachOne(){
//   let costOfUnit = document.getElementsByClassName('costOfUnit');
//   let labelAndUnit = document.getElementsByClassName('labelAndUnit');
//   // let totalPrice = costOfUnit[0].innerHTML * labelAndUnit[0].value;

//   return parseInt(costOfUnit).value * parseInt(labelAndUnit)

//   document.getElementsByClassName('totalPrice')[0].innerHTML = `$ ${totalPrice}`;

// }

// function getTotalPrice(){
//   let totalPrice = 0;
//   for(let i = 0 ; i < product.length; i++){
//     let eachProduct = product[i]
//   }
// }

// let theButton = document.getElementById('theButton');

// theButton.onclick = getTotalPrice;




let calculateButton = document.getElementById('calc');

calculateButton.onclick = function(){
let productPrices = document.getElementsByClassName('product-price');

  let fullTotal = 0;

  for(let i = 0; i < productPrices.length; i++){

    
    let singleProductPrice =  productPrices[i].innerHTML.substr(1);
    let singleProductQuantity = document.getElementsByClassName('the-quantity')[i].value;
    
    let singleProductTotal = (singleProductPrice * singleProductQuantity).toFixed(2);
    
    
    let individualProductTotalDiv = document.getElementsByClassName('product-total-price')[i];
    
    individualProductTotalDiv.innerHTML = `$ ${singleProductTotal}`;
    
    fullTotal += Number(singleProductTotal);
  }

  document.getElementById('actual-total').innerHTML = `$ ${fullTotal.toFixed(2)}`;

}


let deleteButtons = document.getElementsByClassName('btn-delete');

for(let i = 0; i < deleteButtons.length; i++ ){
  deleteButtons[i].onclick = function(e){
    e.target.parentElement.remove()


  }
}

document.getElementById('create').onclick = function(){

  let newProductName = document.getElementById('new-product-name').value;
  let newProductPrice = document.getElementById('new-product-price').value;
  newProductPrice = Number(newProductPrice).toFixed(2);
  let newThing = document.createElement('div')
  newThing.className = "row";

  newThing.innerHTML = `
              <span class="product-name">$${newProductName}</span>

            <span class="product-price">$${newProductPrice}</span>

            <div>
              <label>QTY</label>
              <input class="the-quantity" type="number">
            </div>

            <span class="product-total-price">$0.00</span>
            <button class="btn-delete btn">Delete</button>

`
      document.getElementById('master-div').appendChild(newThing)
      document.getElementById('new-product-name').value = ""
      document.getElementById('new-product-price').value = ""

      newThing.getElementsByClassName('btn-delete')[0].onclick = function(e){
        e.target.parentElement.remove(e)
      }

}










// function deleteItem(e){

// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {

// }

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
