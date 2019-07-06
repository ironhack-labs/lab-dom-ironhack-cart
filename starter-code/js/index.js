window.onload = function(){

  let calculatePriceButton = document.getElementById('btn-success');
  let createItemButton = document.getElementById('new-item-create');
  let deleteButtons = document.getElementsByClassName('btn-delete');

  getTotalPrice(calculatePriceButton);
  createItemButton.onclick = createNewItem;




//Delete button element on the screen is declared above. Upon window load, this grabs all of the elements of the class "btn-delete." Then, we go through that
//array of each button item, and for each one, when clicked we assign the function delete item. At the bottom, when we
//create a new row, we will need to load our delete button count again, because the previous one was based on
//when the window loaded and we cannot refresh the page without losing our data. 
for(let i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

// -----------------------------------------------

function deleteItem(e){ 
// use the e function to grab the element that we are currently clicking on. 
  let parent = document.getElementById("parent");
  //Removes the child of variable parent, which is the parent element containing all of the product wrapper rows.
  //Then the e.currenttarget specifies the currently selected item, 2 parents above (essentially the product wrapper row) and remooves
  //that item. The whole row now disappears. 
  parent.removeChild(e.currentTarget.parentElement.parentElement);
  
  //Then, once the row is removed, the below updates the count of the rows in the products container. 
  //Below returns an HTML collection of the parent element of the products, the container with class "products"
  let productLines = document.getElementsByClassName("products");
  //Then, for the first item in the products array, index 0, (the parent element) it counts the child elements,
  //which are all of the product rows. 
  let numOfProducts = productLines[0].childElementCount;

  for(i = 1; i <= numOfProducts; i++){
    //Update total to new count
  }
}

/*
function getRowCount () => {
  let productCount = document.getElementsByClassName('product-wrapper');
  for(i = 1; i <= productCount; i++){
        //Update total to new count
      }
}*/


// ------------------------------------------------------------------------------------------------------------------

function getTotalPrice(calculatePriceButton) {
  
//On click of the calculate price button (defined below) assign the following function
  calculatePriceButton.onclick = function(){
    //The variable that contains all of the product rows. Product rows are wrapped in a product wrapper.
    let productLines = document.getElementsByClassName('product-wrapper');

    //start adding the total of all products in this variable:
    let grandTotal = 0;

    //Then loop through the product rows
    for(let i = 0; i < productLines.length; i++){
      //while(document.getElementById("quantity" + i) === null){
        //i++;
        //numOfProducts++;
      //first, grab the value of the quantity of each item ordered, which changes based on our input:
      let productQty = document.querySelector(`.product-wrapper:nth-child(${i+1}) .input-div > input`).value;
      let newInputQuantity = productQty
      //then, grab the price:
      let thePrice = document.querySelector(`.product-wrapper:nth-child(${i+1}) .product-cost-div > span`);
      let thePriceInNumbers = Number(thePrice.textContent.replace(/[^0-9.-]+/g,""))
      //then calculate total price by multiplying the new quantity from our input field by the price:
      let getTotalPrice = newInputQuantity * thePriceInNumbers;
      let totalPrice = document.querySelector(`.product-wrapper:nth-child(${i+1}) .total-price-div > span`);
      totalPrice.innerText = `${getTotalPrice.toFixed(2)}`
      

      grandTotal = getTotalPrice + grandTotal;

    }
    
    let grandTotalAmount = document.getElementById("grand-total");
    grandTotalAmount.innerText = `$${grandTotal}`
  
  }  
}

// ------------------------------------------------------------------------------------------------------------------  


function createNewItem(){


      let productNameInput = document.querySelector('.new-item-div .product-name-div > input').value;
      let productPriceInput = document.querySelector('.new-item-div .product-cost-div > input').value;

      let newProductRow = document.createElement('div');

      newProductRow.classList.add('product-wrapper');

      newProductRow.innerHTML = `<div class="product-name-div">
        <span class="product-name">${productNameInput}</span>
        </div>

      <div class="product-cost-div">$<span class="product-cost">${productPriceInput}</span>
      </div>
    
      <div class="input-div">
        <label for="quantity-label">QTY</label>
        <input type="number">
      </div>

      <div class="total-price-div">
        $<span class="total-price">0.00</span>
      </div>

      <div class="delete-button">
        <button class="btn-delete">
          Delete
        </button>
      </div>`

     let parent = document.getElementById('parent');
      parent.appendChild(newProductRow);

      document.querySelector('.new-item-div .product-name-div > input').value = ""
      document.querySelector('.new-item-div .product-cost-div > input').value = ""

      deleteButtons = document.getElementsByClassName('btn-delete');
      //deleteButtons[deleteButtons.length - 1].onclick = deleteItem;
      for(let i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
      }

}; //end create new item function


}// end window onload
