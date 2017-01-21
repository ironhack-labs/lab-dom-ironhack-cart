

// Add all prices and also add the total price to a hidden div


// we create all the variables to get info from the document that we will need and also some empty arrays to operate with

var itemPrice = document.getElementsByClassName("item-price");
var totalItemPrice = document.getElementsByClassName("final-price");
var itemQty = document.getElementsByClassName("input-qty");

var finalPriceArr = [];
var totalPriceArr = [];

// we create a function that will be triggered when clicking on the calculate button
// this function, first will multiplie the item price with the current value we set on the input field and will store this value into an empty array
// then will set this value to the innerHTML (so what really appears on the screen) to the variable that contains that array information
// we will empty the array again, so in every iteration we won't keep previous values that will modify the total summatory

// the function also will push those values into an other empty array
// we will use the reduce method to sum all the values on the array, that way we get the total amount of the products.
// we will again empty this array so if we iterate again we won't keep previous values
// we show the total value using the id of a hidden div

function calculatePrice() {

  // code to represent the total price of every product
  for (var i = 0; i < itemQty.length; i++) {

    totalPriceArr.push(itemQty[i].value * itemPrice[i].textContent);

    totalItemPrice[i].innerHTML = totalPriceArr[0];
    totalPriceArr = [];

    finalPriceArr.push(Number(totalItemPrice[i].textContent));

  }

  var sum = finalPriceArr.reduce(function(a, b) {
    return a + b;
  }, 0);

  finalPriceArr = [];

  document.getElementById("overall-price").innerHTML = "<h2>Total Price: $" + sum + "</h2>" ;

}


// ------------------------ Delete Element --------------------

// we get the element from the document and then, using the current target, we remove the whole product row

var element = document.getElementsByClassName("remove");
console.log(element);

function delete_element(event)
{
  //  e.currentTarget.parentElement.parentNode.removeChild(parentElement);
  event.currentTarget.parentElement.parentNode.remove();
}

// --------------------------------------------------------------


// ----------------------- Create product -----------------------

// Create a function that will get the value of the 2 new inputs
// we will add the whole product into the new-product we have prepared passing the variables of the inputs

function createProduct() {

  var addItem = document.getElementById("add-item").value;
  var addPrice = document.getElementById("add-price").value;

  console.log(addItem);
  console.log(addPrice);

  document.getElementById("new-product").innerHTML+= '<div class="product">' +
        '<div class="item">' + addItem + '</div>' +
        '<div class="price">$<span class ="item-price" id="item-price1">' + addPrice + '</span></div>' +
        '<div class="qty">QTY<input class ="input-qty" id="input-qty1" type="number" value="0"></div>' +
        '<div class="total-price">$<span class ="final-price" id="final-price1">0.00</span></div>' +
        '<div class="delete"><button id="remove-button" onclick="delete_element(event)" class="remove left btn btn-delete">Delete</button></div>' +
      '</div>';

}
