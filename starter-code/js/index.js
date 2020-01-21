'use strict';

var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var unitPr = document.querySelector('.pu span').textContent;

function updateSubtot($product) {
  // Iteration 1.1 
  //subtotal= unit price * quantity
  var unitPr = Number($product.querySelector('.pu span').textContent); //console logs the string inside / Number considered more efficient
  var quantity = Number($product.querySelector('.qty input').value);
  var subTotal = $product.querySelector('.subtot span');

  var subTotalPrice = unitPr * quantity;
  console.log(subTotal);
  //update inner html with new product subtotal
  subTotal.innerHTML = subTotalPrice; 

  return subTotalPrice;
  }

  
function calcAll() {
  // Iteration 1.2 
  var products = document.getElementsByClassName('product');
  var productsArr = [...products];
  var sum = 0;
  productsArr.forEach(function(el){
    var updatedSubTotal = updateSubtot(el) //put it in a var to make the subtots reachable for sum
    sum += updatedSubTotal;
  });
  //foreach, u will get an array of all the products
  var totalPrice = sum;
  var h2 = document.querySelector('h2 span');
  h2.innerHTML = totalPrice;
};

var deleteBtns = [...document.getElementsByClassName('btn-delete')]; //one-liner for calling and turning it into an array

function deleteProduct(deleteBtns) { 
  deleteBtns.addEventListener('click', function(e) {
    var button = e.currentTarget; //to where we are specifically in the skeleton
    var productToDelete = button.parentNode.parentNode; //to reach the child node we want to delete
    var tBody = document.querySelector('tbody');
    tBody.removeChild(productToDelete);
  });
};

deleteBtns.forEach(element=> deleteProduct(element));

var createBtn = document.getElementById('create');

function createProduct() {
  createBtn.addEventListener('click', function(e) {
    e.preventDefault();

    var productName = document.getElementById('new-name').value;
    var priceUnit = Number(document.getElementById('new-qty').value);
    
    var newRow =
    `<tr class="product">
        <td class="name">
          <span>${productName}</span>
        </td>
    
        <td class="pu">
          $<span>${priceUnit}</span>
        </td>
    
        <td class="qty">
          <label>
            <input type="number" value="0" min="0">
          </label>
        </td>
    
        <td class="subtot">
          $<span>0</span>
        </td>
    
        <td class="rm">
          <button class="btn btn-delete">Delete</button>
        </td>
      </tr>`;

      productName.setAttribute('id')
      var tBody = document.querySelector('tbody');
      tBody.innerHTML += newRow;
    //IT DOESNT WOOOOOORK
    //make vars from what the user fills
    //append those vars into the skeleton
    //set the same attributes to the new row as the others
    //reset the inputs
  });
};
createBtn.onclick = createProduct();

$calc.onclick = calcAll();