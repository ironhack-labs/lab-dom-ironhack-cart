 // Calculate the total price of one product

 function getTotalPrice (oneProduct) {
   var unitPrice = oneProduct.querySelector(".unit-cost");
   var price = unitPrice.innerHTML;
   var quantityItems = oneProduct.querySelector("input");
   var quantity = quantityItems.value;
   var total = price * quantity;
   return total;
 }
 
 // Create a click event for the Calculate Prices button + calculate the final price
 
 var success = document.querySelector(".btn-success");
 
 success.onclick = function () {
 
   var allProducts = document.querySelectorAll(".product");
   var finalCost = document.querySelectorAll(".final-cost");
   var totalPrice = document.querySelector(".total-span");
   var sum = 0; 
 
   for (i=0;i < allProducts.length; i++){
 
     console.log( getTotalPrice (allProducts[i]) ); 
     finalCost[i].innerHTML = getTotalPrice(allProducts[i]);
     
     sum += getTotalPrice(allProducts[i]);
     console.log("The sum is " + sum);
 
   }
 
   totalPrice.innerHTML = sum;
 
 };
 
 // Delete items
 
 var deleteButton = document.querySelectorAll(".btn-delete");
 deleteButtonsFunc(); 
 
 function deleteButtonsFunc() {
   deleteButton.forEach( function (element, index) {
 
     element.onclick = function deleteItem(){
       
       console.log("hello delete button onlick");
       
       // confirm with the user that the delete is ok
       var isOkay = confirm ("Are you sure you want to delete this item?");
 
       // if the delete is okay, then do this
       if (isOkay) {
         element.parentNode.parentNode.remove();
       }
 
     } 
 
   });
 }
 
 // Create new item 
 
 var createItemButton = document.getElementById('btn-create');
 
   createItemButton.onclick = function createNewItem () {
 
     var element = document.createElement("div");
     var personnalizePrice = document.querySelector("#personnalize-cost");
     var newPrice = parseInt(personnalizePrice.value);
     var personnalizeName = document.querySelector("#personnalize-name");
     var newName = personnalizeName.value;
     var productList = document.querySelector(".product-list");
 
 
     element.className = ("product");
     
     element.innerHTML = [
       '<div class= "product-name"><span>' + newName + '</span></div>',
       '<div class="inline-div"><span>$</span><span class="unit-cost">' + newPrice + '</span></div>',
       '<div><div class="quantity inline-div">QTY</div><input type="number" placeholder="0"/></div>',
       '<div><span>$</span><span class="final-cost">0.00</span></div>',
       '<div><button class="btn btn-delete">Delete</button></div>',
     ].join("\n");
     
     productList.appendChild(element);
     personnalizePrice.value = "";
     personnalizeName.value = "";
     deleteButton = document.querySelectorAll(".btn-delete");
     deleteButtonsFunc(); 
   
     };