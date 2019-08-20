function deleteItem(e){
const deleteTarget=e.currentTarget;

const deleteParent=deleteTarget.parentNode;
const deleteParent2=deleteParent.parentNode;

const allProduct=document.querySelector(".all-product");

allProduct.removeChild(deleteParent2);

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

 document.querySelector(".total-price span").innerText=`$${totalPrice}`;

}

function createQuantityInput(){



}

function createPrice(){

const price=document.createElement("div");
price.className="product-price ";
return price;
}


function createDeleteButton(){
  const div=document.createElement("div");
  div.className="col";
const newButton=document.createElement("button");
newButton.innerText="Delete";
newButton.className="btn btn-delete";
div.appendChild(newButton);
return div;
}

function createQuantityNode(){
const div=document.createElement("div");
div.className="col";
  const quantLabel=document.createElement("label");
  quantLabel.innerText="QTY";
  const quantity=document.createElement("input");
  quantity.className="input";
  div.appendChild(quantLabel);
  div.appendChild(quantity);
  return div;

}

function createItemNode(dataType, itemData){
  const div=document.createElement("div");
  div.className="col";
  const prodName=document.createElement("span");
div.appendChild(prodName);
return div;


}

function createPriceNode(dataType, itemData){
  const div=document.createElement("div");
div.className="col";
  const unitPrice=document.createElement("span");
  unitPrice.className="unit-price";
  div.appendChild(unitPrice);
  return div;
  
  }

function createNewItemRow(itemName, itemUnitPrice){
  const row=document.createElement("div");
  row.className="product";

  return row;

}

function createNewItem(){

const newName =document.querySelector(".input-name").value;
const newPrice=document.querySelector(".input-price").value;

const row=createNewItemRow();
const name=createItemNode();
const price=createPriceNode();
const quantity= createQuantityNode();
const prodPrice=createPrice();
const deleteButton=createDeleteButton();

const allProduct=document.querySelector(".all-product");

allProduct.appendChild(row);
row.appendChild(name);
row.appendChild(price);
row.appendChild(quantity);
row.appendChild(prodPrice);
row.appendChild(deleteButton);

name.innerText=newName;
price.innerText=`$${newPrice}`;

// updatePriceByProduct();
deleteItem(e);

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
