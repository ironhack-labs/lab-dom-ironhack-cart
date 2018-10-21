function calculateTotalPrice(){
  var product = document.querySelectorAll(".product");
  var total =0;
  for( var i = 0; i<product.length;i++){
    var productPrice = product[i].querySelector(".product-price").innerHTML
    var productQuantity =product[i].querySelector(".qty").value
    var productIndividualPrice = Number(productPrice)*(productQuantity);
    var productPriceSpan = product[i].querySelector(".price-qty");
    productPriceSpan.innerHTML=productIndividualPrice;
    total=total+productIndividualPrice;

  }
  console.log(total);
    var totalPriceSpan = document.querySelector(".totalprice")
    totalPriceSpan.innerHTML=total+"$";
}
function deleteItem(e){
  var productContainer = document.querySelector(".product-container")
  var productElement = e.currentTarget.parentElement.parentElement;
  productContainer.removeChild(productElement)
  calculateTotalPrice()
   


}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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
 var newProduct = document.querySelector("#newProduct")
 var newProductName = newProduct.querySelector("#newProductName");
 var newProductPrice = newProduct.querySelector("#newProductPrice"); 
 var productContainer = document.querySelector(".product-container");
//step 1. creation of product div
 var product = document.createElement("div");
 product.className="product";

//step 2. creation of productName div section
 var productNamediv = document.createElement("div");
 var productNameSpan = document.createElement("span");
 productNameSpan.className="product-name";
 productNamediv.appendChild(productNameSpan);

 //step 3. adding produt name div to product
 product.appendChild(productNamediv);

 //step 4. creation  of product price div section
 var productPriceDiv = document.createElement("div");
 var productPriceSpan = document.createElement("span");
 productPriceSpan.className="product-price";
 productPriceDiv.appendChild(productPriceSpan);

 //step 5. adding product price div to product
 product.appendChild(productPriceDiv); 

 //step 6.


//last step . adding product price div to product
 productContainer.appendChild(product);




}

 window.onload = function(){
  //var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  var calculatePriceBtn = document.querySelector("#calc-price-button");
  calculateTotalPrice();

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
