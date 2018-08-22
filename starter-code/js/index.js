window.onload = function(){
  // var createPriceButton = document.getElementById('calc');
  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }

  var calculatePriceButton = document.getElementById('calc');

  calculatePriceButton.onclick = () => {

  var rows = document.getElementsByClassName('row');
  
  var realTotal =0;

    for(let i = 0; i < rows.length; i++){
      
      var quantity = rows[i].querySelector(".quantity").value;
      var pricePerUnit = Number(rows[i].querySelector('.product-price').innerHTML.substr(1));
     
      var tempTotal = quantity * pricePerUnit;

      realTotal += tempTotal;
      rows[i].querySelector('.product-calculated-price').innerHTML = '$' + tempTotal.toFixed(2);
      

    }

    document.getElementById('real-actual-total').innerHTML = '$' + realTotal.toFixed(2);
  }

  var deleteButtons = document.getElementsByClassName('btn-delete');

  for(var i = 0; i<deleteButtons.length; i++){
    deleteButtons[i].onclick = deleteItem;
  }

  function deleteItem(event){
    event.currentTarget.parentNode.remove();
  }

  var createItemButton = document.getElementById('new-item-create');

  
  createItemButton.onclick = () =>{
    
    var newProduct = document.getElementById("create-name").value;
    var newPrice = document.getElementById("create-price").value;
    // console.log(newProduct);
    // console.log(newPrice)

    var newElement = document.createElement('div');
    newElement.className = "row";
    newElement.innerHTML = 
              `<span class="product-name"> ${newProduct} </span>
              <span class="product-price">$${newPrice}</span>
              <span>
                <label>QTY</label>
                <input type="number" class="quantity">
              </span>
              <span class="product-calculated-price">$0.00</span>
          
              <button type="button" class="btn btn-delete">Delete</button>`

    document.getElementById("all-rows").appendChild(newElement);

    var deleteButtons = document.getElementsByClassName('btn-delete');
    for(var i = 0; i<deleteButtons.length; i++){
      deleteButtons[i].onclick = deleteItem;
    }

  }
};
