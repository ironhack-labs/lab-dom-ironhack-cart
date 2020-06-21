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






//********This was taken from someone else's work in a different class to see a more concise way of doing it.  
tableRef.innerHTML += `<tr class="product">
  <td class="name">
    <span>${newProductName}</span>
  </td>
  <td class="price">$<span>${newProductPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`
document.querySelector(".create-product td:first-child input").value = ""; // Clear input value
document.querySelector(".create-product td:nth-child(2) input").value = 0; // Reset input value again.

//remove button does not work after new product is created.




//******this is what I was working on.
  // insert row at the end of the table
  // var newRow = tableRef.insertRow(-1);
  // let newProductCell = newRow.insertCell(0);
  // let newProductText = document.createTextNode(newProduct)
  // newProductCell.appendChild(newProductText);


  // let newPriceCell = newRow.insertCell(1);
  // let newPrice = document.createTextNode(newProductPrice)
  // newPriceCell.appendChild(newPrice);


  // let newQuantityCell = newRow.insertCell(2);
  // let newQuantityInput = document.createElement("INPUT");
  // newQuantityInput.setAttribute("type", "number");
  // newQuantityInput.setAttribute("value", "0");
  // newQuantityInput.setAttribute("min", "0");
  // newQuantityInput.setAttribute("placeholder", "Quantity");

  // newQuantityCell.appendChild(newQuantityInput);

  
  // let newSubtotalCell = newRow.insertCell(3);
  // let newSubtotal = document.createElement("value");
  // newSubtotal.setAttribute("class", "subtotal")
  // newSubtotalCell.appendChild(newSubtotal);
  
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
