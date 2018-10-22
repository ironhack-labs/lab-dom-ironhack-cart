// var productQuantity = document.querySelectorAll(".quantity");
var btnCalculatePrice = document.querySelector(".btn-success");

var totalSum = document.querySelector(".final-price");
var deleteBtn = document.querySelectorAll(".btn-delete");
var createBtn = document.querySelector(".creation");
var inputTagName = document.querySelector(".input-name");
var inputTagPrice = document.querySelector(".input-price");
var commentSection = document.querySelector(".tousproduits");
var inputTagAll = document.querySelectorAll("input");



createBtn.onclick = function () {
console.log("coucou bouton create");
  var newDiv=document.createElement ("div");
  newDiv.classList.add("general");
  newDiv.innerHTML =
    '<div><span>' + inputTagName.value + '</span></div>'
    + '<div><span>$</span><span class = "unique-price">' + inputTagPrice.value + '</span></div>'
    + '<div><label class="quantity" for="input">QTY</label>' 
         + '<input class = "input-quantity" type="number" placeholder="0"></div>'
    + '<div><span>$</span><span class = "total-price">0.00</span></div>'
    + '<div><button class="btn btn-delete">delete</button></div>'
  
  commentSection.appendChild(newDiv);


  //add the delete functionality to the new button
  var newBtn = newDiv.querySelector(".btn-delete");
  newBtn.onclick = function (){
    console.log("remove button");
    newBtn.parentNode.parentNode.remove ();
    totalSum.innerHTML = "";
    inputTagAll.value = "";

  }

  calculateTotalPrice();

};



// SECOND ITERATION
// Calculate Total Price (quantity*price)
function calculateTotalPrice(){
var retrievePrice = document.querySelectorAll(".unique-price");
var retrieveQuantity = document.querySelectorAll(".input-quantity");
var totalPrice = document.querySelectorAll(".total-price");
  var newTotalPrice=[];
  var counter = 0
  for (i=0;i<retrieveQuantity.length;i++){
    newTotalPrice.push(retrieveQuantity[i].value*retrievePrice[i].innerHTML);
    totalPrice[i].innerHTML = newTotalPrice[i];
    counter += newTotalPrice[i];
  };
  totalSum.innerHTML = counter;

}
btnCalculatePrice.onclick = calculateTotalPrice;


// DELETE PRODUCTS
deleteBtn.forEach (function (deleteItem){
deleteItem.onclick = function () {
  console.log("remove button");
  deleteItem.parentNode.parentNode.remove ();
  totalSum.innerHTML = "";
  inputTagAll.value = "";
}
});
