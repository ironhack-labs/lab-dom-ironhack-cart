function deleteItem(e){

  let deleted = e.currentTarget.parentNode.parentNode;

  let allProducts = document.getElementById('allProducts');

  console.log(deleted);

  console.log(allProducts);

  allProducts.removeChild(deleted);

  getTotalPrice();

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  let totalArray = []

  let prodArray = document.getElementsByClassName('product');

  for (i = 0; i < prodArray.length; i++) {

    let prodPrice = prodArray[i].querySelector('.productPrice').innerHTML;
    let prodQTY = prodArray[i].querySelector('.quantity').value;
    console.log(prodPrice);

    let prodTotal = (parseFloat((prodPrice.substr(1))*prodQTY));
      console.log (prodTotal);

    let roundedTotal = prodTotal.toFixed(2);

    totalArray.push(roundedTotal);

    console.log (roundedTotal);

    prodArray[i].querySelector('.itemTotalPrice').innerHTML = `$ ${roundedTotal}`;
  }

    // let totalArray = document.querySelector('.itemTotalPrice');

    console.log(totalArray);

   let grandTotal =  totalArray.reduce((sum, price)=> {

     return sum + parseFloat(price);
   },0);

   console.log(grandTotal);

   let totalSpan = document.getElementById('grandTotalSpan');

   totalSpan.innerHTML = `$ ${grandTotal.toFixed(2)}`


}


// let button = document.getElementById('calc-prices-button');
//   button.onclick = () => {

    // let productArr = document.getElementsByClassName('productName');
    // let priceArr = document.getElementsByClassName('productPrice');
    // let qtyArr = document.getElementsByClassName('quantity');
    // let totalArr = document.getElementsByClassName('itemTotalPrice');

    // productArr.forEach((product)=>{

    //   for (i = 0; i < productArr.length; i++) {
    //     product.price = priceArr[i];
    //     product.qty = qtyArr[i];
    //     product.total = totalArr[i];

    //   }

    //   let numPrice = parseFloat(product.price.substr(1));
    //   let newTotal = Math.round((product.qty * numPrice)*100)/100;






    // })


    // let itemPriceString = document.getElementById('productPrice');
    // console.log(itemPriceString);
    // let itemPriceHTML = itemPriceString.innerHTML;

    // console.log(itemPriceHTML);

    // let itemPrice = parseFloat(itemPriceHTML.substr(1));
    // // let itemPrice = Number(itemPriceHTML.substr(1));

    // // let itemPrice = itemPriceHTML;

    // console.log(itemPrice);

    // let cartCount = document.getElementById('QtyAmount');
    // let priceCount = cartCount.value;
    // console.log(priceCount)
    // let totalPrice = (priceCount * itemPrice);
    // console.log(totalPrice)
    // let finalTotal = document.getElementById('totalPrice')
    // finalTotal.innerHTML = ('$' + totalPrice);





function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

  let newItem = document.getElementbyId('nameInput').value;
  let newItemPrice = document.getElementbyId('newPrice').value;

  let newRow = newWrapper.createElement('div');



}

function createNewItem(){

  let newWrapper = document.getElementById('allProducts');
  let newItemInput = document.getElementById('nameInput').value;
  let newPriceInput = document.getElementById('newPrice').value;
  let newPriceInputNum = parseInt(newPriceInput).toFixed(2);

  console.log(newItemInput);
  console.log(newPriceInput);

  var newRow = document.createElement('div');

  newRow.className = "product";

  newRow.innerHTML = `
  <div>
    
    <span class="productName">${newItemInput}</span>
  </div>
  
  <div>
    <span class="productPrice">$${newPriceInputNum}</span>
  </div>
  
  <div class="productQty">
    <label for="qty">QTY</label>
    <input type="number" name="qty" class="quantity">
  </div>
  
  <div >
    <span class="itemTotalPrice">Total</span>
  </div>
  
  <div>
    <button class="btn-delete">Delete</button>
  </div>`;

newWrapper.appendChild(newRow);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
    
  }
  console.log(deleteButtons[0]);

  createItemButton.onclick = createNewItem;
}

