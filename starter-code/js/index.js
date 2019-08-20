function deleteItem(e){
const deleteTarget=e.currentTarget;

const deleteParent=deleteTarget.parentNode;

const allProduct=document.querySelector(".all-product");

allProduct.removeChild(deleteParent);

updatePriceByProduct()

}

function getPriceByProduct(){
  totalPrice=0;

  let products = document.querySelectorAll(".product")
  products.forEach(product=>{

    const unitPrice= product.querySelector(`.unit-price`).innerText;
    const parsedPrice=Number(unitPrice.slice(1));
  
    const qntInput = product.querySelector(`.input`).value;
    const parsedQnt=Number(qntInput);
  
    let productPrice=parsedPrice*parsedQnt;
  
    product.querySelector(".product-price").innerText=`$${productPrice}`;
    
     totalPrice+=productPrice;
  })
  return totalPrice

}

function updatePriceByProduct(productPrice, index){

  getPriceByProduct()
  document.querySelector(".total-price span").innerText=`$${totalPrice}`;

}

function getTotalPrice() {
  
 let totalPrice= getPriceByProduct();
 console.log(totalPrice);

 document.querySelector(".total-price span").innerText=`$${totalPrice}`;

}

function createQuantityInput(){



}

function createDeleteButton(){

const newButton=document.createElement("button");
newButton.innerText="Delete";
newButton.className="btn btn-delete";
return newButton;
}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  createDeleteButton()

}

function createNewItem(){

const newName =document.querySelector(".input-name").value;
const newPrice=document.querySelector(".input-price").value;
console.log(newName,newPrice);
createNewItemRow()
const deleteButton=createDeleteButton()

const allProduct=document.querySelector(".all-product");

allProduct.appendChild(deleteButton);



// // var node = document.createElement("LI"); 
// // var textnode = document.createTextNode("Water");
// // deleteButton.appendChild(textnode);                             
// document.getElementsByClassName("all-product").appendChild(deleteButton);


}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
