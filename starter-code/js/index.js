var count = 0;
var currentProd = "";
var prevProd = "";
var inputprod = "";
var inputprice = "";
var inputqty = 0;
var itemDiv = "";
var itemSpan = "";
var producto = 0;
var sumArray = [];
var priceArray = [25];
var formatPrice = 0;
var formatProducto = 0;

function numberformatter (n, currency) {
  n = parseFloat(n);
  return currency + "" + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}

function getinputThenCreate() {
  inputprod = document.querySelector('input[name="createme"]').value;
  inputprice = document.querySelector('input[name="createprice"]').value;
  priceArray.push(inputprice);
  formatPrice = numberformatter(inputprice, "$");

  createNewItemRow(inputprod, formatPrice);
  console.log(`Stored - ${inputprod} - ${formatPrice}`);
}


//start creating all of the ELements needed

function createNewItemRow(itemName, itemUnitPrice){
  //refers to previous element
  var currentElement = document.getElementsByClassName('product')[count];

  count++;
  //before inserting the new element need to update the currenet element
  currentElement = currentElement;
  //create a row
  currentElement.insertAdjacentHTML('afterend', `<div class = "row product"</div>`);
  //create columns, but this is a bit of a hack cause I haave to create them in reverse order.
  currentElement.insertAdjacentHTML('afterend', `<div class = "col-xs-2 pricecol"><span class = "item">${itemUnitPrice}</span></div>`);
  currentElement.insertAdjacentHTML('afterend', `<div class = "col-xs-2"><span class = "item">${itemName}</span></div>`);
  // also a hack to give these elements time to construct
  setTimeout(createQuantityInput(currentElement), 50);
  console.log(`Created Row for: ${itemName} which cost ${itemUnitPrice}`);
}

function createQuantityInput(currentE){

  //there is always one less pricecol than the amount of products...another hack
  var elementTarget = document.getElementsByClassName('pricecol')[count-1];

  console.log(elementTarget);
  elementTarget.insertAdjacentHTML('afterend', `<div class = "col-xs-4 inputcol"><span class ="item">QTY<input type ="text" value="1" name="calculateme-${count}"></span></div>`);
  console.log(`Created: Input-${count}`);
  // and then create the product columns
  var afterInput = document.getElementsByClassName('inputcol')[count-1];
  afterInput.insertAdjacentHTML('afterend', `<div class = "col-xs-2 prod"><span class = "item prodcol">$0.00</span></div>`);
  createDeleteButton();
}


function createDeleteButton(){
  var afterProd = document.getElementsByClassName('prod')[count-1];
  afterProd.insertAdjacentHTML('afterend', '<div class = "col-xs-2"><span class ="item"><button class = "btn btn-danger btn-delete" type="button">Delete</button></span></div>')
 updateDeletelist();
}

function getPriceByProduct(itemNode){
  sumArray = [];
  for (var calcLoop = 0; calcLoop <= count; calcLoop++) {

    var inputedQty = document.querySelector(`input[name="calculateme-${calcLoop}"]`).value; //when created it doesn't have a value.
    var prodColclass = document.getElementsByClassName('prodcol')[calcLoop];
    var producto = parseInt(inputedQty) * parseInt(priceArray[calcLoop]);
    formatProducto = numberformatter(producto, "$");
    console.log(count);
    console.log(calcLoop);
    console.log(inputedQty);
    console.log("This is the input price: " + inputprice);
    console.log("This is the price we have selected in array: " + priceArray[calcLoop]);
    console.log(producto);
    prodColclass.innerHTML = formatProducto;
    sumArray.push(producto);
    getTotalPrice();
  } //close for loop
} //close function


function deleteItem(e){
  // deleteElement = document.getElementsByClassName('product');
  var parent = this.parentNode.parentNode.parentNode;
  parent = parent.childNodes;
  console.log(e);
  console.log(parent);
  // parent.innerHTML = "";
  // count -= 1;
}


function getTotalPrice() {
 var sumAll = sumArray.reduce((a, b) => a + b);
 console.log(sumAll);
 var sumclass = document.getElementsByClassName('sumsum');
 var sumAll = numberformatter(sumAll, "$");
 sumclass.innerHTML = sumAll;
}


function updateDeletelist (){
   var deleteButtons = document.getElementsByClassName('btn-delete');

   for(var i = 0; i<deleteButtons.length ; i++){
     deleteButtons[i].onclick = deleteItem;
   }
}

window.onload = updateDeletelist ();
