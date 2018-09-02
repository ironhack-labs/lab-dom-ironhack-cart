  window.onload = function(){
  
    var calculatePriceButton = document.getElementById('calculate'); 
    //grab calculate price button from HTML, store it in variable CalculatePriceButton. Its above the function because the function has to use it, so it has to already exist.
    
    calculatePriceButton.onclick = () => { 
    //when calculatePriceButton is clicked, run the function below
      
      var rows = document.getElementsByClassName('product-row');  //grab product-row class and store it in variable rows.
      
      var realTotal = 0;
      
      for(let i = 0; i < rows.length; i++){
        
        var quantity = rows[i].querySelector('input').value; //this grabs whatever someone types into the input box
        //find me, inside this thing with this class .product-price inside of this row, and set it to equal pricePerUnit
        var pricePerUnit = Number(rows[i].querySelector('.product-price').innerHTML.substr(1)); //removes the $ from the string by starting at the 1 index, so $25, is now 25
        //find me, inside this thing with this class .product-price inside of this row, and set it to equal pricePerUnit
        //part 1, grab 

        var tempTotal = quantity * pricePerUnit;
        realTotal += tempTotal;
        //part 2, execute

        rows[i].querySelector('.calculated-price').innerHTML = '$'+tempTotal.toFixed(2); 
        //part 3, change content to equal this new content, reflect
        //toFixed adds however many places next to the right of a decimal point, so toFixed(2) is .00  
    }
        document.getElementById('calculated-total').innerHTML = '$'+realTotal.toFixed(2); 
        //find, inside the content (innerHTML) with class .product-price, and set it to equal pricePerUnit
        //toFixed adds however many places next to the right of a decimal point, so toFixed(2) is .00
    }
  
    var deleteButtons = document.getElementsByClassName('btn-delete');
  
    for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
    }
   
    function deleteItem(deleteEvent){ 
        deleteEvent.currentTarget.parentNode.remove(); //click a delete button and removing a corresponding product row
    }
  
    var createButton = document.getElementById('create-item-btn');
  
    createButton.onclick = () => {
      var theTitle = document.querySelector('.create-title').value; //.value are for inputs
      var thePrice = document.querySelector('.create-price').value + '.00' 
  
      var newRow = document.createElement('div'); //via back ticks`, interpolate theTitle and thePrice
      newRow.className = 'product-row';
  
      newRow.innerHTML = `
                  <span class="create-title">${theTitle}</span>
                  <span class="create-price">$${thePrice}</span>
                  <span>
                    <label>QTY</label>
                    <input type="number">
                  </span>
                  <span class="calculated-price">$0.00</span>
                  <button class="btn btn-delete">Delete</button>

        document.getElementById('all-product-rows').appendChild(newRow); //place new row at the bottom of the 'list' of rows
  
        document.querySelector('.create-title').value = '';
        document.querySelector('.create-price').value = '';
  
  
          for(var i = 0; i<deleteButtons.length ; i++){ //adding delete for loop again becuase the delete button wont work with any new product row, that function already ran its loop and wont rerun until called again
            deleteButtons[i].onclick = deleteItem;
          }
  
    }
  
  };
  
