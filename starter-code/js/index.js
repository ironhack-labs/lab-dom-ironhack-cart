



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

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
 
 

  deleteButtons[0].onclick = function () { 
    var productlist = document.getElementById('products-list');
    var productstodelete1 =  document.getElementById("product1");
    productlist.removeChild(productstodelete1)
  }

  deleteButtons[1].onclick = function () { 
    var productlist = document.getElementById('products-list');
    var productstodelete2 =  document.getElementById("product2");
    productlist.removeChild(productstodelete2)
  }


 // for (var i = 0; i < deleteButtons.length; i++) {
   // deleteButtons[0].onclick = function () { 
     // productlist.removeChild('productstodelete');
  //}
// };
 
 // deleteButtons[0].onclick = function () { 
   // var productlist = document.getElementById('products-list');
   // var productstodelete =  document.getElementById("2");
    // productlist.removeChild(productstodelete);
    
    
    
   // var element = document.getElementById("products-list");
    //while (element.firstChild) {
    //  element.removeChild(element.firstChild);
    


   // var productremove = document.getElementById('products-list')
    //productremove.removeChild(deleteButtons[0])
    //deleteButtons[i].parentNode.remove();
   // for (var i = 0; i < deleteButtons.length; i++) {
    //deleteButtons[i].parentNode.remove();
    //deleteButtons.removeChild();

  
  calculatePriceButton.onclick = function(){
    var uprice1 = document.getElementById('unitprice1').innerText;
    console.log("das ist der Unitprice1: " + uprice1);
    var input1 = document.getElementById('quantity1').value;
    console.log("das ist der Input1: " + input1);
    var tprice1 = document.getElementById('totalPriceEl1');
    tprice1.innerHTML = (Number(uprice1) * parseFloat(input1)); 

    var uprice2 = document.getElementById('unitprice2').innerText;
    console.log("das ist der Unitprice2: " + uprice2);
    var input2 = document.getElementById('quantity2').value;
    console.log("das ist der Input2: " + input2);
    var tprice2 = document.getElementById('totalPriceEl2');
    tprice2.innerHTML = (Number(uprice2) * parseFloat(input2)); 

    var total = document.getElementById('total-price');
    total.innerHTML = (Number(uprice1) * parseFloat(input1)) + (Number(uprice2) * parseFloat(input2));
    

   

    //element = document.createElement('span')
    //element.innerHTML =(Number(uprice) * parseFloat(input));  
    //tprice.appendChild(element)
    // 
  }

};


 // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }