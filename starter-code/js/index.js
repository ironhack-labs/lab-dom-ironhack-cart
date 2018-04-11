
var getCreateBtn = document.getElementById('createBtn');
var getCreateDiv = document.getElementById('create');

var getProduct = document.getElementsByClassName('productName');
var getUnitPrice = document.getElementsByClassName('productCost');
var getUnitQty = document.getElementsByClassName('qty');
var getTotalProductPrice = document.getElementsByClassName('totalProductPrice');
var deleteButtons = document.getElementsByClassName('btn-delete');



//Calculate prices for individual products
  function calculatePrices() {

    for( i = 0; i < getProduct.length; i++ ) {
      var totalPrice = Number(getUnitPrice[i].innerHTML.replace(/[^0-9\.]+/g,"")) * getUnitQty[i].value;
      document.getElementsByClassName('totalProductPrice')[i].innerHTML = totalPrice;
    }
    getTotalPrice();
  }


//Add Total Product Prices and Update Total Price
function addTotalProductPrice(a, b) {
  return a + b;
}

function getTotalPrice() {
  var priceArray = [];
  for(i = 0; i < getProduct.length; i++) {
    var productPriceValue = parseInt(getTotalProductPrice[i].innerHTML);
    priceArray.push(productPriceValue);
  }
  var total = priceArray.reduce(addTotalProductPrice, 0);

  document.getElementById('spanTotal').innerHTML =  total;
}



function deleteRow(){
  for(i = 0; i < getProduct.length; i++) {
    // delteButtons[i].onclick(function(e){
    // });
    deleteButtons[i].addEventListener('click', function (e) {
      //this is dependent on the structure of HTML (i have a div inside a div)
      e.currentTarget.parentNode.parentNode.remove();
    });
  }
}


function createRow() {
  // anonymous function added to even listener
  getCreateBtn.addEventListener('click', function (e) {
    var getValueofProductName = document.getElementById('productNameValue').value;
    var getValueofProductCost = document.getElementById('productCostValue').value;
    var newProductRow = document.createElement('div');
    newProductRow.setAttribute('class','row');
    newProductRow.innerHTML = newProductHtml();
    // document.getElementsByClassName('productName')[0]
    // The same thing ^
    newProductRow.querySelector('.productName').innerHTML = getValueofProductName;
    newProductRow.querySelector('.productCost').innerHTML = getValueofProductCost;
    document.getElementById('something').appendChild(newProductRow);
    // document.getElementsByClassName('container')[0].insertBefore(newProductRow, getCreateDiv.parentNode);
// activate the Delete Button
    deleteRow();
  });
}


function newProductHtml(){
  return '<div class="col-xs-5"> <span class="productName"> </span> </div> <div class="col-xs-5">' +
    '<span class="productCost"></span>' +
  '</div>' +
  '<div class="col-xs-5">' +
    '<label for="qty">QTY</label>' +
    '<input type="text" value="0" class="qty">' +
  '</div>' +
  '<div class="col-xs-5">' +
    '$<span class="totalProductPrice">0.00</span>' +
  '</div>' +
  '<div class="col-xs-5 delete">' +
    '<button class="btn btn-delete">DELETE</button></div>';
}


createRow();