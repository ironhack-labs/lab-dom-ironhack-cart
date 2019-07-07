window.onload = function(){


  function deleteItem(e){
  
  }
  
  function getPriceByProduct(itemNode){
  
  }
  
  function updatePriceByProduct(productPrice, index){
  
  }
  
  function getTotalPrice() {
  
  }
  
  function createQuantityInput(){
  
  }
  
  function createDeleteButton(){
  }
  
  function createQuantityNode(){
  
  }
  
  function createItemNode(dataType, itemData){
  
  }
  
  function createNewItemRow(itemName, itemUnitPrice){
  
  }
  
  function createNewItem(){
  
  }

  let calculate = document.getElementById("calculate")

  calculate.onclick = () => {  
    let price = document.getElementsByName("itemPrice")
    let quantity = document.getElementsByName("qty")
    let subtotal = document.getElementsByName("subtotal")
    let totalPrice = 0
    
  
    for (let i = 0; i < price.length ; i++) {
  
      let mathProduct = parseFloat(price[i].innerHTML) * parseInt(quantity[i].value)
      subtotal[i].innerHTML = mathProduct
      
      totalPrice += mathProduct
    }
    
    document.getElementById("totalPrice").innerHTML = totalPrice

  }
  
  //variales boton delete
  botondelete = document.getElementById("btn-delete")
  botondelete2 = document.getElementById("btn-delete2")
  
  
  //variables a borrar
  
  
  let borrar1 = document.getElementById("contenedor1");
  let borrar2 = document.getElementById("contenedor2");
  
  //funciones borrar para cada boton
  
  botondelete.onclick = () => {
    borrar1.remove()
  }
  
  botondelete2.onclick = () => {
    borrar2.remove()
  }
  
  /*
  function calculatePrice (){
  
    let price = parseFloat(document.getElementById("productPrice").innerHTML)
    
    let quantity = document.getElementById("qty").value
    
    let addPrice = price * quantity
    
    green = document.getElementById("calcular");
  
    botonsucces = (document.getElementById("multiplicar").innerHTML = addPrice
      
      green.onclick = () => {  
        addPrice.calculateprice()
          
      }
      }
  
  
  
    function calculatePrice2 (){
  
      let price2 = parseFloat(document.getElementById("productPrice2").innerHTML)
      
      let quantity2 = document.getElementById("qty2").value
      
      let addPrice = price * quantity
      document.getElementById("multiplicar").innerHTML = addPrice
    
      
  
      }
  
  /*
  
    var calculatePriceButton = document.getElementById('calc-prices-button');
    var createItemButton = document.getElementById('new-item-create');
    var deleteButtons = document.getElementsByClassName('btn-delete');
  
    calculatePriceButton.onclick = getTotalPrice;
    createItemButton.onclick = createNewItem;
  
    /*for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
    }
  */
  }; 