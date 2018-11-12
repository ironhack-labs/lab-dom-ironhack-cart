

function deleteItem(element){ 
    var product = document.getElementById('container-products'); 
    product.removeChild(element.target.parentNode.parentNode); 
  }
  
  
  function getPriceByProduct(product) {
    var productUnitPrice = product.querySelector('.price-unit');
    var productUnits = product.querySelector('.product-quantity').value;

    return parseInt(productUnitPrice.innerText) * productUnits;
  }
  
  function updatePriceByProduct(product, price){ 
    var productTotalPrice = product.querySelector('.total-product-price');
    productTotalPrice.innerText = price;
  }

  
  function getfinalProductPrice() {
    var products = document.querySelectorAll('.product-wrapper');
    var total = 0;
    for (var i = 0; i < products.length; i++) {
        var productPrice = getPriceByProduct(products[i]);
        updatePriceByProduct(products[i], productPrice);
        total += productPrice;
    }
    var totalSpanPrice = document.getElementById('total-price-span');
    totalSpanPrice.innerText = total;
  }
  
  function createQuantityInput(){
    var newQtyDiv = document.createElement('div');
    newQtyDiv.classList.add('quantity');
  
    var newQtyLabel = document.createElement('label');
    newQtyLabel.setAttribute('for', 'product-quantity');
    newQtyLabel.appendChild(document.createTextNode('QTY '))
    newQtyDiv.appendChild(newQtyLabel);
  
    var newQtyInput = document.createElement('input');
    newQtyInput.classList.add('product-quantity');
    newQtyInput.setAttribute('type', 'number');
    newQtyInput.setAttribute('name', 'product-quantity');
    newQtyInput.setAttribute('value', '0');
    newQtyInput.setAttribute('min', '0');
    newQtyDiv.appendChild(newQtyInput);
  
    return newQtyDiv;
  }
  
  function createDeleteButton(){
  
  }
  
  function createUnitName(name) {
  
    var unitNameDiv = document.createElement('div');
    unitNameDiv.classList.add('product-name');
    var unitNameSpan = unitNameDiv.appendChild(document.createElement('span'));
    unitNameSpan.appendChild(document.createTextNode(name));
  
    return unitNameDiv;
  }
  
  function createUnitPrice(price) {
  
    var unitPriceDiv = document.createElement('div');
    unitPriceDiv.classList.add('price-unit');
    var unitPriceSpan = unitPriceDiv.appendChild(document.createElement('span'));
    unitPriceSpan.appendChild(document.createTextNode(price));
  
    return unitPriceDiv;
  }
  
  function createTotalProductPriceDiv() {
    var unitTotalPriceDiv = document.createElement('div');
    unitTotalPriceDiv.classList.add('total-product-price');
    var unitTotalPriceSpan = unitTotalPriceDiv.appendChild(document.createElement('span'));
    unitTotalPriceSpan.appendChild(document.createTextNode('0'));
    
    return unitTotalPriceDiv;
  }
  
  function createNewItemRow(name, price){
  
    var rowNewItem = document.createElement('div');
    rowNewItem.classList.add('product-wrapper', 'flexbox-container');
    rowNewItem.appendChild(createUnitName(name));
    rowNewItem.appendChild(createUnitPrice(price));
    rowNewItem.appendChild(createQuantityInput())
    rowNewItem.appendChild(createTotalProductPriceDiv())
  
    return rowNewItem;
  }
  
  function createNewItem(){
    var name = document.getElementById('product-name-creater').value;
    var price = document.getElementById('product-price-creater').value;
    var containerProducts = document.getElementById('container-products');
  
    if ( name !== '' || price >= 0){
      containerProducts.appendChild(createNewItemRow(name, price))
    } 
  
  
  }
  
  window.onload = function(){
    var calculatePriceButton = document.getElementById('calc-prices-button');
    var createItemButton = document.getElementById('new-item-create');
    var deleteButtons = document.getElementsByClassName('btn-delete');
  
    calculatePriceButton.onclick = getfinalProductPrice;
    createItemButton.onclick = createNewItem;
  
    for(var i = 0; i < deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
    }
  };
  