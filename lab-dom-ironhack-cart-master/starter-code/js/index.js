
  

function calculatePrices(){
 
       let priceElement = document.getElementById("costPerItem");
       let qtyElement = document.getElementById("formQty").value;
       let totalPrice = document.getElementById("totalId");
       let calculatePrice = document.getElementById("totalPrice")
       

        let total = 0;

        priceElement = Number(priceElement.innerText.replace("$", " "));
        
        total = total + (priceElement * qtyElement);
        qtyElement = qtyElement
        totalPrice.innerText = "$" + total ;
        calculatePrice.innerText = "Total Price: $ " + total;
        

}

let calculate = document.getElementById("calculate");

calculate.addEventListener("click",function(){
calculatePrices();   
})



// function deleteItem(e){

// }

 function getPriceByProduct(itemNode){
   let priceElement = document.getElementById("costPerITem");
   let qtyElement = docuemnt.getElementById("qtyElement");
   let totalPrice = document.getElementById("totalId");

   priceElement = Number(priceElement.innerText.replace("$"," "));

 }

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {

// }

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
