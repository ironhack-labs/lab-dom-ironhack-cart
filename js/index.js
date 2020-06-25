// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // Step 1 Get DOM elements that hold price and quantity.
  let price = product.querySelector(".price span").innerHTML
  let quantity = product.querySelector(".quantity input").value

  //Step 3 Save subtotal to variable.
  const subtotal = (quantity*price);

  //Step 4 Get DOM element for class 'subtotal'
  let sub = product.querySelector('.subtotal span');

  //Step 5 Set subtotal price to the corresponding DOM element.
  sub.innerHTML = subtotal;

  //Return value of subtotal
  return subtotal
}



//this function fires with calculateButton Click.
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let allProducts = document.getElementsByClassName("product");
  // console.log(allProducts)


  //sum iterations of updateSubtotal
  let subTotalsum = 0;

  for(i=0;i<allProducts.length;i++){
    updateSubtotal(allProducts[i])
    subTotalsum += updateSubtotal(allProducts[i])
  }

  
  // ITERATION 3
//display subTotalsum on the DOM.
document.querySelector("h2 span").innerHTML = subTotalsum

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //remove product
 target.parentNode.parentNode.remove();
 
  //update price
  calculateAll(); 


}

// ITERATION 5

function createProduct() {
  console.log('this button works!')

  //select newProduct
  let newProductName = document.querySelector(".create-product input[type='text']").value;

  console.log(newProductName)
  //select newProductPrice
  let newProductPrice = document.querySelector(".create-product input[type='number']").value;
  console.log(newProductPrice)

  //get reference to table
  //add tbody id to table to get the correct part of the table. 
let tableRef = document.querySelector('tbody');
console.log(tableRef)


  //insert row at the end of the table
  var newRow = tableRef.insertRow(-1);
  newRow.setAttribute("class","product");


  let newProductCell = newRow.insertCell(0);
  newProductCell.setAttribute("class", "name")
  // let newProductSpan = document.createElement("span")
  let newProductText = document.createTextNode(newProductName)
  newProductCell.appendChild(newProductText);


  let newPriceCell = newRow.insertCell(1);
  newPriceCell .setAttribute("class", "price")
  let newPrice = document.createTextNode(newProductPrice)
  newPriceCell.appendChild(newPrice);


  let newQuantityCell = newRow.insertCell(2);
  let newQuantityInput = document.createElement("INPUT");
  newQuantityCell.setAttribute("class","quantity")
  newQuantityInput.setAttribute("type", "number");
  newQuantityInput.setAttribute("value", "0");
  newQuantityInput.setAttribute("min", "0");
  newQuantityInput.setAttribute("placeholder", "Quantity");
  newQuantityCell.appendChild(newQuantityInput);

  
  let newSubtotalCell = newRow.insertCell(3);
  newSubtotalCell.setAttribute("class","subtotal")
  let newSubtotal = document.createElement("value");
  newSubtotal.setAttribute("class", "subtotal")
  newSubtotalCell.appendChild(newSubtotal);
  

  let removeButton = newRow.insertCell(4);
  removeButton.setAttribute("class","action")
  
}






const createProductBtn = document.getElementById('create');
createProductBtn.addEventListener('click', createProduct);


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeButton = document.getElementsByClassName('btn btn-remove'), i;
  for (i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener('click',removeProduct);
  }
  // console.log(removeButton)



});
