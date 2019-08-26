

let parent = document.querySelector("body");
let productCount = 0;
let test= document.createElement("div");

let newProduct= function createNewProdct(name ="Product Name", price = 25) {

  let parent = document.querySelector(".products");
  let productHtml = document.createElement("div");
  parent.appendChild(productHtml);
  productHtml.setAttribute("class", `product product-${productCount}`);
  document.querySelector(`.product-${productCount}`).appendChild(document.createElement("div"));

  let divName= document.querySelector(`.product-${productCount}`).firstChild;
  divName.appendChild(document.createElement("span"));
  divName.firstChild.setAttribute("class", `product-name product-name-${productCount}`);
  divName.firstChild.innerText= name;

  let divPrice= document.querySelector(`.product-${productCount}`);
  divPrice.appendChild(document.createElement("div"));
  divPrice.querySelectorAll("div")[1].appendChild(document.createElement("span"));
  divPrice.querySelectorAll("div")[1].firstChild.setAttribute("class", `price price-${productCount}`);
  divPrice.querySelectorAll("div")[1].firstChild.innerText= price;

  let divInput= document.querySelector(`.product-${productCount}`)
  divInput.appendChild(document.createElement("div"));
  divInput.querySelectorAll("div")[2].appendChild(document.createElement("label"));
  divInput.querySelectorAll("div")[2].firstChild.setAttribute("for", "quantity")
  divInput.querySelectorAll("div")[2].firstChild.appendChild(document.createElement("input"));
  divInput.querySelectorAll("div")[2].firstChild.firstChild.setAttribute("type", "text");
  divInput.querySelectorAll("div")[2].firstChild.firstChild.setAttribute("name", "quantity");
  divInput.querySelectorAll("div")[2].firstChild.firstChild.setAttribute("placeholder", "0");
  divInput.querySelectorAll("div")[2].firstChild.firstChild.setAttribute("class", `input input-${productCount}`);

  let divTotalAndDel= document.querySelector(`.product-${productCount}`);
  divTotalAndDel.appendChild(document.createElement("div"));
  divTotalAndDel.querySelectorAll("div")[3].appendChild(document.createElement("span"));
  divTotalAndDel.querySelectorAll("div")[3].firstChild.setAttribute("class", `total-price total-price-${productCount}`);
  divTotalAndDel.querySelectorAll("div")[3].firstChild.innerText= 0;

  divTotalAndDel.appendChild(document.createElement("div"));
  divTotalAndDel.querySelectorAll("div")[4].appendChild(document.createElement("a"));
  divTotalAndDel.querySelectorAll("div")[4].firstChild.setAttribute("class", `btn btn-delete btn-delete-${productCount}`);
  divTotalAndDel.querySelectorAll("div")[4].firstChild.setAttribute("href", "#");
  divTotalAndDel.querySelectorAll("div")[4].firstChild.innerText= "Delete";
  productCount++;
};

newProduct("Sticker", 30);
newProduct("NY Cap", 1);


function deleteItem(e) {
  e.currentTarget.parentNode.parentNode.parentNode.removeChild(e.currentTarget.parentNode.parentNode)
 
  // document.querySelector("body").style.backgroundColor = "red";

  
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

document.querySelector(".calc-prices-button").onclick = function getTotalPrice() {
 document.querySelectorAll(".product").forEach(product=> {
   if (+product.querySelector("input").value >0) {
     product.querySelector(".total-price").innerHTML= `${(+product.querySelector("input").value)* (+product.querySelector(".price").innerHTML)}`;

     let totalPrice= 0;
     document.querySelectorAll(".total-price").forEach(x=>totalPrice+= +x.innerHTML);
     document.querySelector(".calculate-price").innerHTML= totalPrice;
   }
 }
 );
 };   


function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

// function createItemNode(dataType, itemData){
//   document.querySelector("body").insertBefore(document.createElement("div"),document.querySelector(".btn-container"));
//   ocument.querySelector(".btn-container").previousSibling.setAttribute("class","create-container");


// }

// function createNewItemRow(itemName, itemUnitPrice){
//   appendChild(document.createElement("input"));
// }

function createNewItem(){
  let name= document.querySelector(".input-name").value;
  let price= document.querySelector(".input-price").value;
  if(name.length >0 && +price>0) newProduct(name, price);
  

  // document.querySelector(".create-container").firstChild.setAttribute("placeholder", "Product Name");
  // document.querySelector(".create-container").firstChild.setAttribute("type", "text");

}
// .onclick= 

window.onload = function(){
  // var calculatePriceButton = document.querySelector('calc-prices-button');
  let createItemButton = document.querySelector(".btn-create");
  let deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
