// var shoppingCartSum = 0
// var button = document.getElementsByClassName("button")[0]


//     // select the input field with result multiply by 100 and input to
//     // usin

//     button.onclick = function() {
//     var input = document.getElementsByTagName('neww')[0] * 100;
//    console.log (input);
// }



window.onload = function (){
var products = document.getElementsByClassName("product");//["shirts"]["shirts"],["shirts"]
var productPrice = document.getElementsByClassName("item-price"); 
var productQuantity = document.getElementsByTagName("input"); 
var totalPriceButton = document.getElementById("grandTotal"); 
var deleteButtons = document.getElementsByClassName("btn-delete");
var container = document.getElementsByClassName("container");
totalPriceButton.onclick = function getTotal (){
let counter = 0;
for (let i = 0; i < products.length; i++){
   
   let totala = productPrice[i].innerHTML * productQuantity[i].value;
   document.getElementsByClassName("total-price")[i].innerHTML = totala;
   counter += totala;
}
document.getElementById("showCaseTotal").innerHTML = counter;
}

function deleteRow (e){
    container[0].removeChild(e.currentTarget.parentNode.parentNode)

}

for (let i = 0; i < deleteButtons.length; i++){
deleteButtons[i].onclick = deleteRow;
}


} 



 // MAYBE REMOVE THIS

// windows onload says load only when the html pages have been loaded so our page does not break

 //windows.onload = function() {
   //  let deletBotton = document.getElementsByClassName("new")
   // good to define the var prise at the begining so the price keeps updating the 
   //new value as we change or update.

   // append child makes it easier to remove and add HTML list to the page and vice versa
   // so this appends a child at the bottom.
   // we need to know how we can append HTML as text. read up how to add event listners.
   // loop is used to calculate sub totala nd complete total. we can also use debugger
   // to see the values change

 




