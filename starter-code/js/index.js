

window.onload = function(){
  // var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }


  const calcButton = document.getElementsByClassName("btn-success")[0];

  calcButton.onclick = function(){
  
    let totalCostArray = [...document.getElementsByClassName("single-prod-price")];
    let totalQuantityArray = [...document.getElementsByClassName("prod-qty")];
    let allTotals = 0;
    let totalOrder = document.getElementById("total-order-amount")
    let singleTotalsArray = [...document.getElementsByClassName("single-prod-total")]; 

    const allProductPrices = totalCostArray.map( oneSpan => {
      return +oneSpan.innerHTML.substr(1);
    })
  
    const allQtyPrices = totalQuantityArray.map( oneSpan => {
      return +oneSpan.value;
    })
    
    
    for(let i = 0; i < allProductPrices.length; i++){
      let total = allProductPrices[i] * allQtyPrices[i]; 
      singleTotalsArray[i].innerHTML = "$" + allProductPrices[i] * allQtyPrices[i];
      allTotals += total;
      
    }
    
    totalOrder.innerHTML = 'Total Price: $'+allTotals;
    
  
  }

  const deleteButton = document.querySelectorAll(".btn-danger");
  const deleteWrap = document.getElementsByClassName("products");



  deleteButton.onclick = function(elem){
    const container = document.getElementById('all-products');
    container.removeChild(elem.path[1]);
  }
  
  
  for(var i=0; i < deleteWrap.length ; i++){
  deleteButton[i].onclick = deleteButton.onclick;
  }

  
 
  //Create Prod Name
  function createProdName(newName){
    const newProdName = document.createElement("span");
    newProdName.setAttribute("class", "col-sm-10 col-md-2");
    newProdName.innerHTML = newName;

    return newProdName;
  }

  // create product price
  function createProdPrice(thePrice){
    const newProdPrice = document.createElement("span");
    newProdPrice.setAttribute("class", "col-sm-10 col-md-2 single-prod-price");
    newProdPrice.innerHTML = "$" + thePrice;

    return newProdPrice;
  }

  
  //create qty input
    function createQtyInput(){
      const qtyInput = document.createElement("input")
        qtyInput.setAttribute("class", "prod-qty");
        qtyInput.setAttribute("placeholder", "0");
        qtyInput.setAttribute("type", "0");

        return qtyInput;
    }

    //create input and append QTY
    function createProdQtyWrap(){
      const prodQtyWrap = document.createElement("span");
      prodQtyWrap.setAttribute("class", "col-sm-10 col-md-4");

      const qtyLabel = document.createElement("label");
      qtyLabel.innerHTML = "QTY";
      const inputField = createQtyInput();
      prodQtyWrap.appendChild(qtyLabel);
      prodQtyWrap.appendChild(inputField);

      return prodQtyWrap;
    }

    // create Single Product Price span

    function createSingleProdPrice(){
      const singleProdTotal = document.createElement("span");
      singleProdTotal.setAttribute("class", "col-sm-10 col-md-2 single-prod-total");
      singleProdTotal.innerHTML = "$0";

      return singleProdTotal;
    }
 
    // create Delete button

    function createDeleteButton(){
      const deleteBtn = document.createElement("button");
      deleteBtn.setAttribute("class", "btn btn-danger delete");
      deleteBtn.innerHTML = "Delete";

      return deleteBtn;

    }

    //create prodcut wrapper

    function createWrapper(){
      const prodWrapper = document.createElement("div");
      prodWrapper.setAttribute("class", "row");

    }

    

  const createButton = document.getElementById("create-btn");

  createButton.onclick = function(){

    const prodName = document.getElementById("new-prod-name").value;
    const prodPrice = document.getElementById("new-prod-price").value;
    

      const prodWrapper = document.createElement("div");
      prodWrapper.setAttribute("class", "row products");
      const theName = createProdName(prodName);
      const thePrice = createProdPrice(prodPrice);
      const theQty = createProdQtyWrap();
      const singleTotalPrice = createSingleProdPrice();
      const theDeleteBtn = createDeleteButton();

      prodWrapper.append(theName, thePrice, theQty, singleTotalPrice, theDeleteBtn);

      document.body.appendChild(prodWrapper);
      document.body.insertBefore(prodWrapper, calcButton);

    
  }


};