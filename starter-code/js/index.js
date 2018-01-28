  // //Use at least 3 onclick events

  // Use at least one getElementById
  
  // Use at least one getElementsByTagName
  
  // Use at least one getElementsByClassName//

// On Click Event for Calculating Prices Button
var button = document.getElementById('calc-prices-button');

button.onclick=function(){
    //Get Number of Products
      var products=document.getElementsByClassName('container');

        //Find the product's total price and send to the DOM for each product
      for(var i=0; i<products.length; i++){
        var element = document.getElementsByClassName("unit-price");
        // console.log(element);
        var unitPrice = element[i].innerHTML;
        // console.log(unitPrice);
        var input = document.getElementsByClassName('input');
        var quantity = input[i].value;
        console.log (input, unitPrice, quantity);
  
        var productTotalPrice=quantity * unitPrice;
        console.log(productTotalPrice);
  
        var totalPrices = document.getElementsByClassName("total-price");
        totalPrices[i].innerHTML = productTotalPrice;
        console.log(totalPrices[i])
      }

      var totalPrices2 = document.getElementsByClassName("total-price");
      var total=0;
      for(var j=0; j<totalPrices2.length; j++){
          total = total + parseInt(totalPrices2[j].innerHTML);
          console.log(total, totalPrices[j])
      }
      console.log(total);

      var domTotal = document.getElementById("total-price-products");
      domTotal.innerHTML='$' + total;
}



// button.onclick=function(e){
//       var products = document.querySelectorAll(".container");
// //  span, input position counters     
//       var x=1;
//       var y=0;
//       var z=3;

//   for(var i=0; i<products.length; i++){
      
//   var element = document.getElementsByTagName('span')[x];
//   var unitPrice = element.innerHTML;
//   var input = document.getElementsByTagName('input')[y];
//   var quantity = input.value;
//   console.log (unitPrice, quantity);

//   var totalPrice=quantity * unitPrice;
// //Sending product totalPrice to the DOM
//   var span = document.getElementsByTagName('span')[z];
//   span.innerHTML = '$' + totalPrice;
//     x += 6;
//     y++;
//     z+= 7;
//    }
//     //Get Total Price of Each Product
//   var productsTotalPrice = document.getElementsByClassName('total-price');
//   //Add together the values to get Total Price of all Products
//   var totalProductPrice = 0; 
//   for (j=0; j<productsTotalPrice.length; j++){
     
//      totalProductPrice += productsTotalPrice[j].innerHTML
//   }
//   console.log(totalProductPrice);

//   var total = document.getElementById('total-price-products');
//   total.innerHTML=totalProductPrice;
// }

function deleteItem(e){
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i=0; i<deleteButtons.length; i++){
    deleteButtons[i].onclick=function(e){
       var parent = e.currentTarget.parentElement;
       var container= parent.parentElement;
      var body = container.parentElement;
      body.removeChild(container);
    }
  }
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


    // var name = document.getElementById('name');
    // var unitPrice = document.getElementById('unit price');
    // console.log(name.value);
    // console.log(unitPrice.value);
//use getAttribute for type and data
function createItemNode(dataType, itemData){
        // console.log(dataType, itemData)
        if(dataType==='text'){
        // console.log('true')
          //Create new Div
        var newDiv=document.createElement('div');
        //Create Span element with Text
        var usernameNode = document.createElement('span');
        usernameNode.className="title";
        var textNode = document.createTextNode(itemData);
        usernameNode.appendChild(textNode); 
        //Add Span to Div
        newDiv.appendChild(usernameNode);
        return newDiv
        }

        else if(dataType==='number'){
            // console.log('number true')  
          //Create new Div
            var newDiv2=document.createElement('div');
            //Create Span element with Text
            newDiv2.innerHTML = "$";
            var priceNode = document.createElement('span');
            priceNode.className="unit-price";
            var textNode = document.createTextNode(itemData);
            priceNode.appendChild(textNode); 
            //Add Span to Div
            newDiv2.appendChild(priceNode);
            return newDiv2
            }
}


function createNewItemRow(itemName, itemUnitPrice){
  //Create New Container
  var container = document.getElementsByClassName('container')[0].cloneNode(true);
 
  //Select Product Name Div and Replace With New Product Name
  var div = container.firstElementChild;
  var newItem= createItemNode('text', itemName); 
  container.replaceChild(newItem, div);

  //Select Unit Price Div and Replace with New Unit Price Div
  var unit = container.children[1];
  var newItem2= createItemNode('number', itemUnitPrice);
  container.replaceChild(newItem2, unit);

  return container;
}

function createNewItem(){
  var button = document.getElementById('create');
  button.onclick = function(){
    console.log("It Works");
   
  var input1= document.getElementById("name");
  var username = input1.value;
  var input2=document.getElementById('unit price');
  var unitPrice = input2.value; 
  
  var container = createNewItemRow(username, unitPrice);
  var parent = document.getElementsByTagName('body')[0];
  var newRow = document.getElementsByClassName('new-row')[0];
  parent.insertBefore(container, newRow);
  // console.log(container);
}
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
