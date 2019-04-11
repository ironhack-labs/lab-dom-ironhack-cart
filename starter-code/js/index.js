


let theButton = document.querySelector("theButton");

let calcPrice = document.querySelector("#calcPrice");
calcPrice.onclick = function (){
     
  return getPriceByProduct(), replaceByTotal(), getTotalPrice()
  
}



let deleteButton = document.querySelector(".btn-delete");
deleteButton.onclick = function (){
  
  return createDeleteButton();


}







/*******************************************************************
                      getUnitCost                                              
 *******************************************************************/

function getUnitCost(){
  let final=[];
  let unitCost1 =  document.querySelectorAll(".unitCost");
    for(var i=0; i < unitCost1.length; i++){
      final.push((Number(unitCost1[i].innerHTML)))
    }
    
   return final

 }

 getUnitCost()



/*******************************************************************
                      createQuantityInput                                              
 *******************************************************************/

 function createQuantityInput(){
  
  
  let final = [];
  let quantityInput= document.querySelectorAll('.quantity');
  
  for(var i=0; i < quantityInput.length; i++) {
    final.push(parseInt(quantityInput[i].value))
  }
 
  
  return final
 }
 
 /*******************************************************************
                      getPriceByProduct                                              
 *******************************************************************/
function getPriceByProduct(){
  let priceByProduct= [];
  for(var i = 0; i < getUnitCost().length; i++) {
    total = 0;
    var unitCost = getUnitCost()[i];
    var quantity = createQuantityInput()[i];
    
    total = Number((unitCost * quantity));
    priceByProduct.push(total)
        
  }
    console.log(priceByProduct)
    return priceByProduct
  }
  

getPriceByProduct()




/*******************************************************************
                      replaceByTotal                                              
 *******************************************************************/

function replaceByTotal(){
  
  total = getPriceByProduct()
  let totalPrice = document.querySelectorAll(".totalprice");

  for(var i=0; i < totalPrice.length; i++) {
    totalPrice[i].innerHTML = parseFloat(total[i]);
  }
      
  
    return total
}


//!!!!!!!!!



/*******************************************************************
                      updatePriceByProduct                                             
 *******************************************************************/

function updatePriceByProduct(productPrice, index) {}



/*******************************************************************
                      getTotalPrice                                            
 *******************************************************************/
function getTotalPrice() {
  var bigTotal = 0;
  var totals = getPriceByProduct()
  for(var i =0; i < totals.length; i++){
    bigTotal += totals[i];
  }
  console.log(bigTotal)
  let finalPrice = document.getElementById("finalPrice");
  finalPrice.innerHTML = bigTotal;

}


/*******************************************************************
                      createDeleteButton                                            
 *******************************************************************/
function createDeleteButton() {
let parent = document.getElementsByTagName('body')[0];
let theDiv = document.querySelectorAll(".sections");
  console.log(theDiv)
  for(var i=0; i<theDiv.length; i++){
   var deleteItem = parent.removeChild(theDiv[i]);
    event.currentTarget.addEventListener(deleteItem)
    deleteButtons[i].onclick = deleteItem;
  }

}

/*******************************************************************
                      createQuantityNode                                            
 *******************************************************************/
function createQuantityNode() {}



/*******************************************************************
                      createItemNode                                            
 *******************************************************************/
function createItemNode(dataType, itemData) {}



/*******************************************************************
                      createNewItemRow                                            
 *******************************************************************/
function createNewItemRow(itemName, itemUnitPrice) {}




/*******************************************************************
                      createNewItem                                           
 *******************************************************************/
function createNewItem() {}







// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');
 

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// }
