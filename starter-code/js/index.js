function deleteItem(e){

  var productToBeDelete =e.currentTarget.parentNode.parentNode;
  productToBeDelete.parentNode.removeChild(productToBeDelete);

    //console.log(e.currentTarget.parentNode.parentNode.parentNode);

}

function getPriceByProduct(itemNode){
  var priceOne = itemNode.getElementsByClassName('price')[0].innerHTML;
  return priceOne;
  
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var products = document.getElementsByClassName('products')[0].getElementsByClassName('product');
  console.log(products.length);
  var total=[];
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    var price = product.getElementsByClassName('price')[0].innerHTML;
    var quantity = product.getElementsByClassName('quantity')[0].value;  
    total.push(price*quantity)
    product.getElementsByClassName("total-price")[0].innerHTML=price*quantity;
    //console.log(price, quantity);
  }
  total=total.reduce(function(acc,actual){
    return acc+=actual
  })
  //console.log(total);
  //console.log(document.getElementById('total')[0]);
  document.getElementById('total').innerHTML = total;
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

function createNewItem(e){
  var newProductToAdd = e.currentTarget.parentNode.parentNode;
  var newProductName = newProductToAdd.getElementsByClassName("name")[0].value;
  var newProductPrice = newProductToAdd.getElementsByClassName("price")[0].value;

  var productTemplate="<div>"+
  " <span class=\"name\">"+newProductName+"</span>"+
  "</div>"+
  " <div>$<span class=\"price\">"+newProductPrice+"</span>"+
  "</div>"+
  "<div>"+
  "  <label for=\"qty\">QTY</label>"+
  "  <input class=\"quantity\" type=\"text\" name=\"qyt\" placeholder=\"0\">"+
  "</div>"+
  "<div>$<span class=\"total-price\">0</span>"+
  "</div>"+
  "<div><button class=\"btn btn-delete\">Delete</button>"+
  "</div>";

  console.log(newProductName, newProductPrice);

  var divProduct=document.createElement("div");
  divProduct.setAttribute("class","product");
  
  
  
  divProduct.innerHTML=productTemplate;
  divProduct.getElementsByClassName("btn-delete")[0].onclick=deleteItem;

  console.log(newProductToAdd);
  newProductToAdd.parentNode.insertBefore(divProduct,newProductToAdd);
  //newProductToAdd.parentNode.insertBefore(divProduct,null);
  console.log(divProduct.innerHTML);  


}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  //console.log(deleteButtons);
  //console.log(deleteButtons.length);

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;


  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
    //console.log(deleteButtons[i]);
  }





};
