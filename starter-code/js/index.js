console.log("hello");

function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

// Function Calculate Prices


function CalculatePrices(itemNode){
  var itemNode = document.querySelector(".item");
  var totalPrice = 0;
  for (var i = 0; i < itemNode.length ; i++ )
  totalPrice += getTotalPrice; }


   
  var getTotalPrice = document.querySelector(".btn.btn-success");
  getTotalPrice.onclick = function() {
  
  // Retrieves the unit price of the product
  var pricePerProduct = document.querySelector(".price-unit").innerHTML;
      console.log(pricePerProduct);
  
  var numPricePerProduct = pricePerProduct.slice(1);
      console.log(numPricePerProduct);
  
  // Retrieves the quantity of items desired
  var numberOfProduct = document.querySelector(".input").value;
      console.log(numberOfProduct);
  
  // Calculates the total price based on this data
    getTotalPrice = numPricePerProduct * numberOfProduct;
      console.log(getTotalPrice);
  
   // Updates the total price in the DOM
   var myCart = document.querySelector(".total-cost");       
   myCart.innerHTML = "$" + getTotalPrice.toFixed(2);
       console.log(myCart.innerHTML);
      
   // Write Total Cost at the bottom of the page
  var finalTotal = document.querySelector(".tot");


  finalTotal.innerHTML = "Total Price = " + "$" + getTotalPrice.toFixed(2); 
      console.log(finalTotal.innerHTML);   
  };

// The End of Function Calculate Prices


function createQuantityInput(){

}
function createDeleteButton(){
  
    var dlt = document.querySelector(".btn-delete");
    dlt.forEach(function (oneButton){
      oneButton.onclick = function (){
        var clickedBtn = event.target;
        var clickedItem = clickedBtn.parentNode;
      };
    
        var allProducts = document.querySelector(".products");
        allProducts.removeChild(clickedItem);
        
        return allProducts;
      })};