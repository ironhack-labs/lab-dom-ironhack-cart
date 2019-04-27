
function deleteItem(e){
  let product = event.currentTarget.parentNode
  product.remove()    
}

// FUNCION PRINCIPAL DE CREAR
function createNewItem(){
  let i =[2];
  
  let pricePdt="<div class='col-md-2'><span class='costPerUnit'>"+document.getElementById("newPrice").value+"</span></div>"
  
  let totalPriceDiv = "<div class='col-md-2'><span id='totalPrice' class='totalPrice'>FUNCTION Total Price</span></div>"
  
  let createQty ="<div class='col-md-2'><label class='quantity' for='amount'"+ (++i[0]) +"'>Quantity</label> <input name='amount' type='number' id='amount'" + (i[0]) +' value='+"placeholder"+'></div>'
  
  let delBtn ="<div class='btn-delete col-md-2'>Delete</div>"
  
  let newItemsField = "<div class='product-name col-md-4'>"+document.getElementById("newProduct").value +"</div>"
  
  
  document.getElementById("newItemsField").innerHTML += "<div class='row'>"+(newItemsField + pricePdt + createQty+ totalPriceDiv +delBtn)+"</div>"
  var deleteButtons = document.getElementsByClassName('btn-delete');
  
  for(let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem
    
  }
  
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  
  function getTotalPrice() {
    let cartField = document.getElementById("totalCart")
    let cartValue = 0
    let totalPriceField = document.getElementsByClassName('totalPrice')
    for (let i = 0; i<totalPriceField.length; i++) {
       
      let costPetUnit = document.getElementsByClassName(`costPerUnit`)[i].innerHTML
      console.log(costPetUnit)
      let quantity = document.getElementsByTagName(`input`)[i].value
      console.log(quantity)
      let totalCost = costPetUnit*quantity
      console.log(totalCost)
      totalPriceField[i].innerHTML = totalCost + '€'
      cartValue += totalCost
    }

    cartField.innerHTML = cartValue
  
      
    }


  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
