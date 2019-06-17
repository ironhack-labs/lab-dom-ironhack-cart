

window.onload = function(){

  //ADD UP ALL ITEMS
  function getPriceByProduct(){
    var price = [...document.getElementsByClassName('price')];
    var qty = [...document.getElementsByClassName('quantity')];
    var totalPerUnitPrice = [...document.getElementsByClassName('total-per-unit')];

    let finalPrice = price.map((unitPrice, i)=>{
      return (Number(unitPrice.getAttribute('value')) * qty[i].valueAsNumber).toFixed(2);
    });

    totalPerUnitPrice.forEach((total, i)=>{
      total.innerText = `$ ${finalPrice[i]}`;
    });

    return finalPrice;
  }

  //CREATE NEW ITEMS
  function createNewItem(){
  //NEW ITEM DETAILS
  let newItemName = document.getElementById('item-name').value;
  let newItemPrice = document.getElementById('item-price').valueAsNumber;

  //ITEM TEMPLATE
  let newItem = document.createElement('div');

  newItem.setAttribute('class', 'merch-container');
  newItem.innerHTML = `<span>${newItemName}</span>
                        <span class="price" value="${newItemPrice}">$${newItemPrice}.00</span>
                        <span >QTY
                          <input type="number" class="quantity">
                        </span>
                        <span class="total-per-unit">$0.00</span>
                        <span>
                          <button class="btn-delete">Delete</button>
                        </span>`

    //APPEND NEW ITEM TO DOM
    document.querySelector('.merch-list').appendChild(newItem);
    updateDeleteButtonEvents();
  }

  //DELETE ITEMS
  function deleteItem(e){
    e.target.parentElement.parentElement.remove();
  } 

  function getGrandTotal(){
    let prices = getPriceByProduct();
    let grandTotal = prices.reduce((totalPrice, accumulator)=>{
      return Number(parseFloat(totalPrice) + parseFloat(accumulator)).toFixed(2);
    });

    let totalElement = document.querySelector('#grand-total span:last-of-type');
    totalElement.innerText = `$ ${grandTotal}`
  }

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  //BUTTON CLICKS
  calculatePriceButton.onclick = function(){
    getGrandTotal();

  }
  createItemButton.onclick = createNewItem;

  function updateDeleteButtonEvents(){
    for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
    }
  }

  updateDeleteButtonEvents();
};
