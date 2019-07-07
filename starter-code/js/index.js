
// function deleteItem(e){

// }


// function getPriceByProduct(itemNode){

// ------------------------PRODUCT ONE-------------------------



  let user_input_product1= document.getElementsByClassName("userInput product1")[0]
  let product_cost_product1 = document.getElementsByClassName("productCost product1")[0]
  let multi_product_cost_product1 = document.getElementsByClassName("multiProductCost product1")[0]
  
// -------------------------PRODUCT TWO ---------------------------------


  let user_input_product2= document.getElementsByClassName("userInput product2")[0]
  let product_cost_product2 = document.getElementsByClassName("productCost product2")[0]
  let multi_product_cost_product2 = document.getElementsByClassName("multiProductCost product2")[0]
 // let multi_product_cost = document.getElementsByClassName(".multiProductCost")
  

    //-------------------- INDIVIDUAL COST CALCULATOR -------------------------------
    
  let calculate_button = document.getElementById("calculateButton")  
  let total_price = document.getElementsByClassName(".totalPrice")[0]
    
  calculate_button.onclick = () => {
    let total_product_cost_product1 = user_input_product1.value * product_cost_product1.innerHTML
    multi_product_cost_product1.innerHTML = total_product_cost_product1
    let total_product_cost_product2 = user_input_product2.value * product_cost_product2.innerHTML
    multi_product_cost_product2.innerHTML = total_product_cost_product2

    // let cost_of_all_individual_products = document.getElementsByClassName(".multiProductCost")

    // cost_of_all_individual_products.forEach(element => {
    //   let price_of_all_items = 0
    //   price_of_all_items += cost_of_all_individual_products[element]
    //   total_price.innerHTML = price_of_all_items
    // });


function calculatePrices (quantity, price) {
  
}

    
  }


 
 //-------------------- TOTAL PRICE CALCULATOR -----------------------------------------
//  let cost_of_all_individual_products = document.getElementsByClassName(".multiProductCost")
 
//  calculate_button.onclick = () => {
//   cost_of_all_individual_products.forEach(element => {
//     multi_product_cost.push(cost_of_all_individual_products[element]) 
//     multi_product_cost_product1.innerHTML
//   }

//  }

// console.log(cost_of_all_individual_products)

// }
// getPriceByProduct(totalProductCost)

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
// }
