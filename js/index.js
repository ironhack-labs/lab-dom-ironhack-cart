// ITERATION 1
function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  // Step 1 Get DOM elements that hold price and quantity.
  let price = product.querySelector(".price span").innerHTML
  let quantity = product.querySelector(".quantity input").value

  //Step 3 Save subtotal to variable.
  const subtotal = (quantity*price);

  //Step 4 Get DOM element for class "subtotal"
  let sub = product.querySelector(".subtotal span");

  //Step 5 Set subtotal price to the corresponding DOM element.
  sub.innerHTML = subtotal;

  //Return value of subtotal
  return subtotal
}



//this function fires with calculateButton Click.
function calculateAll() {
  // ITERATION 2
  let allProducts = document.getElementsByClassName("product");
  // console.log(allProducts)


  //sum iterations of updateSubtotal
  let subTotalsum = 0;

  for(i=0;i<allProducts.length;i++){
    updateSubtotal(allProducts[i])
    subTotalsum += updateSubtotal(allProducts[i])
  };

  
// ITERATION 3
  //display subTotalsum on the DOM.
  document.querySelector("h2 span").innerHTML = subTotalsum

};


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);

  //remove product
  target.parentNode.parentNode.remove();
 
  //update price
  calculateAll(); 


};


// ITERATION 5

function createProduct() {
  //select newProduct
  let newProductName = document.querySelector(".create-product input[type='text']").value;

  console.log(newProductName)
  //select newProductPrice
  let newProductPrice = document.querySelector(".create-product input[type='number']").value;
  console.log(newProductPrice)

  //get reference to table
  //add tbody id to table to get the correct part of the table. 
  let tableRef = document.querySelector("tbody");
  console.log(tableRef)


  //insert row at the end of the table
  let newRow = tableRef.insertRow(-1);
  newRow.setAttribute("class","product");


  //PRODUCT
  //insert new row cell at index 0 for PRODUCT NAME
  let newProductCell = newRow.insertCell(0);

  //set attributes to cell.
  newProductCell.setAttribute("class", "name")
  
  // create span element
  let newProductSpan = document.createElement("span");
  //add innerHTML of newProductName (input)
  newProductSpan.innerHTML=newProductName
  //append span to cell
  newProductCell.appendChild(newProductSpan)


  //PRICE
  //insert new row cell at index 1 for PRICE
  let newPriceCell = newRow.insertCell(1);

  //set attributes of cell.
  newPriceCell.setAttribute("class", "price")
  // newPriceCell.setAttribute("placeholder", "Price")
  // create span element
  let newPriceSpan = document.createElement("span");
  //add innerHTML of newPriceName (input)
  newPriceSpan.innerHTML=newProductPrice
  //append span to cell
  newPriceCell.innerHTML = "$";
  newPriceCell.appendChild(newPriceSpan);


  //QUANTITY
  //insert new cell at index 2 for Quantity
  let newQuantityCell = newRow.insertCell(2);

  //create input element
  let newQuantityInput = document.createElement("INPUT");
  
  //set attributes of inputs element
  newQuantityCell.setAttribute("class","quantity")
  newQuantityInput.setAttribute("type", "number");
  newQuantityInput.setAttribute("value", "0");
  newQuantityInput.setAttribute("min", "0");
  newQuantityInput.setAttribute("placeholder", "Quantity");

  //append input to cell
  newQuantityCell.appendChild(newQuantityInput);


  //SUBTOTAL
  //insert new row cell at index 3 for SUBTOTAL
  let newSubtotalCell = newRow.insertCell(3);

  //set attributes of cell.
  newSubtotalCell.setAttribute("class", "subtotal")
  // create span element
  let newSubtotalSpan = document.createElement("span");
    
  //append span to cell
  newSubtotalCell.innerHTML = "$";
  newSubtotalCell.appendChild(newSubtotalSpan);

  
  //REMOVE BUTTON
  //insert new row cell at index 4 for REMOVE BUTTON
  let removeButton = newRow.insertCell(4);


  //create element 
  let newButton = document.createElement("button")

  //set attributes for button
  removeButton.setAttribute("class","action")
  newButton.setAttribute("class","btn btn-remove")

  //Add innerHTML
  newButton.innerHTML = "Remove"

  //Append 
  removeButton.appendChild(newButton)


 
};

// let reset = document.getElementsByTagName('input')
// for(i = 0;i<reset.length;i++){
// reset[i].setAttribute("value","0")
// };

// console.log(reset[0])

const createProductBtn = document.getElementById("create");
createProductBtn.addEventListener("click", createProduct);


window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  let removeButton = document.getElementsByClassName("btn btn-remove"), i;
  for (i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener("click",removeProduct);
  }
  // console.log(removeButton)
});
