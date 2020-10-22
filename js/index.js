// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!")

  //capture the price and quantities value & convert them to numbers
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;

  // Get the subtotal value from each 
  const subTotal = Number(price) * parseFloat(quantity)

  // Render the subtotal value in the span element with ".subtotal" class 
  const subTotalElement = product.querySelector(".subtotal span")
  
  // modify HTML value using declared variable subT
  subTotalElement.innerHTML = subTotal;
  return subTotal;
}

// ITERATION 2
function calculateAll() {
  // your code goes here
  // Calling the updateSubtotal function for each tr elements with '.product' class as ID.
  // getElementsByClassName is prefered as it runs through all similar elements, unlinke querySelector.
  const cartItemElements = document.getElementsByClassName('product'); 
  
  let totalValue = 0;
  
  // for of loop updating subtotal for each product node.
  for (let cartItemElement of cartItemElements) {
    totalValue+= updateSubtotal(cartItemElement); // the total value is the addition of all subtotals within the product nodes.
  }

 // variable totalValue = totalValue + updateSubtotal(cartItemElement) 

// ITERATION 3
// your code goes here
// the totalValue needs to be injected into the span node that has the ID 'total-value'
  document.querySelector('#total-value span').innerHTML = totalValue;
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget; // not sure I understand this. /!| Need to ask TAs. /!|

//Steps to access current target parentNode:
// 1 - Need to delete the child associated to the current target: target.parentNode
// 2 - chain parent node again to target the whole row that contains the remove button.

const productRow = target.parentNode.parentNode; // double layer of housing. btn-remove -> td -> tr.

// 3 - get parent of full table
const productTable = productRow.parentNode;

productTable.removeChild(productRow) 

// 4 - Re-calculate the total after product removal
calculateAll();

}
// ITERATION 5

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //add a click event listener to each button, creating a click event for each button
  //will pass the remove product function remove Product as a call back function
  const productRemoveButtons = document.getElementsByClassName("btn-remove");
  for (const removeButton of productRemoveButtons) {
  removeButton.addEventListener("click", removeProduct)
  }

  // const productCreateButton = document.getElementById("create");
  // productCreateButton.addEventListener("click", createProduct);
});



/* Resources 

Iteration 1
1 - https://www.w3schools.com/jsref/jsref_parsefloat.asp
2 - https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
3 - https://www.w3schools.com/jsref/met_document_queryselector.asp
Iteration 2
4 - https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp
5 - 
*/
