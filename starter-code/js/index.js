var item=document.getElementsByClassName("product-name");

var itemPrice=document.getElementsByClassName('item-price');

var quantity=document.getElementsByTagName("input");

var allProducts=document.getElementById("all-products");


// calculate prices and total________________________

var totalPrice=document.getElementsByClassName("total-price");

var calcPriceButton = document.getElementById('calc-prices-button');

var finalPrice=document.getElementById("final-price");

var totalPriceArray=[];

calcPriceButton.onclick= function(){
  totalPriceArray=[];
  for(i=0;i<item.length;i++){
    totalPrice[i].innerHTML=(itemPrice[i].innerHTML*quantity[i].value).toFixed(2);
    totalPriceArray.push(totalPrice[i].innerHTML);
  }
  var totalPriceArrayNumbers=totalPriceArray.map(Number);
  console.log (totalPriceArrayNumbers);
  finalPrice.innerHTML=totalPriceArrayNumbers.reduce(function(previous,current){
    console.log(previous+current);
    return (previous+current).toFixed(2);
    // return (previous+current).toFixed(2);
  });

};

// delete items _____________________________________

var deleteButton=document.getElementsByClassName("btn-delete");

for (var i=0; i<deleteButton.length;i++){
    deleteButton[i].onclick=function(e){
      var child=e.currentTarget;
      var parent=child.parentNode;
      allProducts.removeChild(parent);
    };
}



// add items _______________________________

var emptyProduct=document.getElementById("empty-product");
var emptyPrice=document.getElementById("empty-price");
var createButton=document.getElementById("btn-create");


var newProduct="";
var newPrice="";



var section=document.createElement('section');
section.setAttribute("class","product");

var newProductHTML='<div class="product-name in-row">Apple</div>\
      <div class="in-row"> $<span class="item-price">2.75</span> </div>\
      <div class="quantity in-row">Quantity<input type="number" name="quantity"></div>\
      <div class="in-row"> $<span class="total-price">0.00</span> </div>\
      <button class="btn-delete in-row">Delete</button>';

section.innerHTML=newProductHTML;

createButton.onclick=function(){

allProducts.appendChild(section);

};
