var getProduct = document.getElementsByClassName('product');
var getUnitPrice = document.getElementsByClassName('productCost');
var getUnitQty = document.getElementsByClassName('qty');
var getTotalProductPrice = document.getElementsByClassName('totalPrice');
var deleteButtons = document.getElementsByClassName('btn-delete');

//Click event for delete buttons
// function deleteRow(){
  for(i = 0; i < getProduct.length; i++) {
    deleteButtons[i].addEventListener('click', function (e) {
      e.currentTarget.parentNode.parentNode.remove();
    });
  }
// }


// replace(/[^0-9\.]+/g,""))
//Calculate prices for individual products
  function calculatePrices() {
    for( i = 0; i < getProduct.length; i++ ) {
      var totalPrice = Number(getUnitPrice[i].innerHTML * getUnitQty[i].value);
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
  document.getElementById('spanTotal').innerHTML = priceArray.reduce(addTotalProductPrice, 0);
}

var getValueofProductName = document.getElementById('productNameValue').value;
var getValueofProductCost = document.getElementById('productCostValue').value;

// Create a new row of product


var getCreateBtn = document.getElementById('createBtn');
var getCreateDiv = document.getElementById('create');

// function createRow() {
  getCreateBtn.addEventListener('click', function (e) {
    var getValueofProductName = document.getElementById('productNameValue').value;
    var getValueofProductCost = document.getElementById('productCostValue').value;
    var newProductRow = document.createElement('div');
    newProductRow.setAttribute('class','row');
    newProductRow.innerHTML = newProductHtml();
    newProductRow.querySelector('.productName').innerHTML = getValueofProductName;
    newProductRow.querySelector('.productCost').innerHTML = getValueofProductCost;
    document.getElementsByClassName('container')[0].appendChild(newProductRow);
    //deleteRow();
  });
  // , getCreateDiv.parentNode
// }

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
// createRow();
// deleteRow();

//done
