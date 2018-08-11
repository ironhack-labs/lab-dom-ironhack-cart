  function deleteItem(e){
    var body = document.getElementsByTagName('body')[0],
        currentParent = e.path[2];

    body.removeChild(currentParent);
    return getTotalPrice();
  };
  
  function getPriceByProduct(itemNode){
    
  };
  
  function updatePriceByProduct(productPrice, index){
    
  };
  
  function getTotalPrice() {
    var costs = document.getElementsByClassName('costs'),
        units = document.getElementsByClassName('units'),
        subTotals = document.getElementsByClassName('subtotals'),
        total = document.getElementById('total'),
        allCosts = [],
        allUnits = [];
        allSubTotals = [];
        sumTotal = 0;
    
    for (var i = 0; i < costs.length; i++) {
      allCosts.push(parseFloat(costs[i].textContent));
      allUnits.push(parseFloat(units[i].value));
      allSubTotals.push(allCosts[i] * allUnits[i]);
      subTotals[i].innerText = '$' + allSubTotals[i].toFixed(2);
      sumTotal += allSubTotals[i];
    };

    return total.innerText = sumTotal.toFixed(2);
  };
  
  function createQuantityInput(){
    
  };
  
  function createDeleteButton(){
    
  };
  
  function createQuantityNode(){
    
  };
  
  function createItemNode(dataType, itemData){
    
  };
  
  function createNewItemRow(itemName, itemUnitPrice){
    
  };
  
  function createNewItem(){
    var product = document.getElementById('input-product').value,
        price = document.getElementById('input-price').value,
        body = document.getElementsByTagName('body')[0],
        before = document.getElementById('input-info'),
        wrapper = document.createElement('div');
        
    wrapper.className = 'wrapper';
    wrapper.innerHTML = '<div class="info"><span class="products"></span></div><div class="info">$<span class="costs"></span></div><div class="info"><div class="quantity"><label class="qty">QTY</label><input class="units" type="text" placeholder="Enter quantity" value="1"></div></div><div class="info info-subtotals"><span class="subtotals">$0.00</span></div><div class="info info-btn"><button class="btn btn-delete">Delete</button></div>';
    wrapper.childNodes[0].childNodes[0].innerHTML = product;
    wrapper.childNodes[1].childNodes[1].innerHTML = parseFloat(price).toFixed(2);
    body.insertBefore(wrapper, before);

    deleteButtons = document.getElementsByClassName('btn-delete');
    for(var i = 0; i < deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
    };

    return getTotalPrice();
  };
  
  
  window.onload = function() {
    var calculatePriceButton = document.getElementById('calc-prices-button');
    var createItemButton = document.getElementById('new-item-create');
    var deleteButtons = document.getElementsByClassName('btn-delete');
    
    calculatePriceButton.onclick = getTotalPrice;
    createItemButton.onclick = createNewItem;
    
    for(var i = 0; i < deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
    };
  };