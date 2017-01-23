
//this starts when the html is loaded
  window.onload = function(){
//we store the inner html of the price span in a variable
var itemPrice = document.getElementsByClassName("price");
var intPrice = parseInt(itemPrice.innerText);
//we store the path to the total element in a variable
var total= document.getElementsByClassName("total-price")[0];
//we store the path to the button in a variable
var button= document.getElementsByClassName("calculate")[0];
// this gets the length of the array that contains all the containers
var arrayOfProducts = Array.prototype.slice.call(document.getElementsByClassName('container'));

// let's find out the occurency of the button

function getTotalPrice(arrayOfProducts){
  arrayOfProducts.forEach(function(elem,index){
    var x = itemPrice[index].innerText;
    var input = document.getElementsByTagName('input')[index].value;
    var totalPrice= x*input;
    document.getElementsByClassName("total-price")[index].innerText="$"+totalPrice;
    return totalPrice;
  });
}

function getGlobalTotal(arrayOfProducts) {
  var globalTotal=0;
  arrayOfProducts.forEach(function(elem,index){
    var x = itemPrice[index].innerText;
    var input = document.getElementsByTagName('input')[index].value;
    globalTotal += x*input;
    });
  document.querySelector('h2>span').innerText= "$"+globalTotal;
}

//when clicked, the button returns into the total price the input* the price
button.onclick = function(){
  getTotalPrice(arrayOfProducts);
  getGlobalTotal(arrayOfProducts);
};

deleteButton.onclick= function(){
  console.log("touché");
};
}
