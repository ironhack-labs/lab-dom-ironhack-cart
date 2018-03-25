//function for the calculating button
var myBtn = document.querySelector(".btn.btn-success");

myBtn.onclick = function() {
  //retrieve the unit price
  var myUnitPrice = document.querySelector(".unit-price").innerHTML;
  //retrieve quantity
  var myQuantity = document.querySelector(".quantity").value;
  //calculate the total price
  var totalPrice = myUnitPrice * myQuantity;
  //updates the total price
  var myTotalPrice = document.querySelector(".totalPrice");
  myTotalPrice.innerHTML = totalPrice;
};

//function for the delete button

var deleteButton = document.querySelector(".btn.btn-delete");
deleteButton.onclick = function() {
  var clickedButton = event.target;
  var clickedDiv = clickedButton.parentNode;
  var clickedParent = clickedDiv.parentNode;
  var product = document.querySelector(".product");
  product.removeChild(product);
};
// x.parentNode.removeChild(x);

// deleteButton.forEach(function(oneButton) {
//   oneButton.onclick = function() {
//     var clickedButton = event.target;
//     var clickedDiv = clickedButton.parentNode;
//     var clickedParent = clickedDiv.parentNode;
//     var product = document.querySelector(".product");
//     product.removeChild(product);
//   };
// });

//code with an attempt with querySelectorAll

// var myBtn = document.querySelector(".btn.btn-success");
// var myUnitPrice = [];
// myUnitPrice = document.getElementsByClassName(".unit-price").innerHTML;
// var myQuantity = document.getElementsByClassName(".quantity").value;

// myBtn.onclick = function() {
//   for (var i = 0; i <= myUnitPrice.length; i++) {
//     var totalPrice = [];
//     totalPrice.push(myUnitPrice[i] * myQuantity[i]);
//   }
//   //update the total price
//   var myTotalPrice = document.querySelectorAll(".totalPrice");
//   for (var i = 0; i <= myTotalPrice.length; i++) {
//     myTotalPrice[i].innerHTML = totalPrice[i];
//   }
// };
