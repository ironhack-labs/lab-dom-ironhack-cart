
function deleteItem(e){
  let product = document.querySelectorAll('.product'); 
  let wrapper = document.getElementById('wrapper');
  let deleteButtons = document.getElementsByClassName('btn-delete');
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', function() {
      wrapper.removeChild(product[i]);
    });
  }
}

// Otras pruebas

 /*  
for (let i=0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', function (e) {
      e.currentTarget.wrapper.removeChild(product[i]);
    })
  }

  let product = document.querySelectorAll('.product'); 
  let wrapper = document.getElementById('wrapper');
  let deleteButtons = document.getElementsByClassName('btn-delete');
  deleteButtons.forEach(function (e) {
      e.wrapper.removeChild(product);
    }
  )
  
  deleteButtons.addEventListener('click', wrapper.removeChild(product[0]));  
  */

function getProductCartPrice(product) {
  let productPrice = product.getElementsByClassName('product-price')[0].innerText;
    console.log(productPrice)
  let productUnits = product.getElementsByClassName('product-quantity')[0].value;
    console.log(productUnits)
  let totalProductAmount = parseFloat(productPrice) * productUnits;
   return `${totalProductAmount}.00$`;
}

function updateProductCartPrice(product, price){
  let productTotalPrice = product.getElementsByClassName('total-product-amount')[0]; 
  productTotalPrice.innerText = price;
}

function getAllProductPrice() {
  let products = document.querySelectorAll('.product'); 
  let totalCart = 0;
    for (let i = 0; i < products.length; i++) { 
        let totalProductPrice = getProductCartPrice(products[i]);
        updateProductCartPrice(products[i], totalProductPrice);
        totalCart += parseFloat(totalProductPrice);
    }
  console.log(`${totalCart}.00$`);
  let totalPrice = document.getElementById('total-price');
  totalPrice.innerText = `Total Price: ${totalCart}.00$`;
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

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  let deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getAllProductPrice;
 // createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};



