var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1

const $priceSpan = $product.querySelector('td.pu span');      //point the td.pu span element for read the price of the product
const priceValue = $priceSpan.innerText    //extract the value that we have from the html and assign to a const

const $quantityInput = $product.querySelector('input')    //point the input for read the quantity
const quantityValue = $quantityInput.value     //extract the value of quantity assign to a new const


const subtotal = parseFloat(priceValue) * parseInt(quantityValue);  //found the subtotal. Using also the parses for transform the value from string to number

const $subtotalSpan = $product.querySelector('.subtot span')  //point the output cell for the subtotal

$subtotalSpan.innerText = subtotal.toFixed(2);   //fix the subtotal to two decimal numbers

}
 
// Iteration 1.2  / 3

function calcAll($subtotal) {

const $allProducts = document.querySelectorAll('tr.product');    //point the list of the product
 for (let $product of $allProducts) {       //iterate throught all the product for update the price
   updateSubtot($product);
   total += subtotal;    //add subtotal to the general total
  }
}

const $totalSpan = document.querySelector('h2 span'); //point the total cell

$totalSpan.innerText = total.toFixed(2)   //fix the total to two decimal numbers

const $firstProduct = document.querySelector('tr.product');

updateSubtot($firstProduct)

$calc.onclick = calcAll;



//Iteration 4


const removeProduct = event => {

  const $button = event.target;          //point the button as this event target
  const $productRow = $button.parentNode.parentNode;   //we come back to the first parent for remove all the row
  const $tableBody = $tableRow.parentNode;
  
  $tableBody.removeChild($productRow);     //remove row 

  calcAll();
};

const $$removaButtons = document.getElementsByClassName('btn--delete')

for (let $removeButton of $$removeButtons) {                // for every single remove button
  $removeButton.addEventListener('click', removeProduct);
} 
                                                    
