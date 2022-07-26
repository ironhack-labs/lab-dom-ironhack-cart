// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');


  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input');
  let subtotal = product.querySelector(".subtotal span");
  let sumSubTotal = Number(price) * Number(quantity.value);
  return subtotal.innerText = Number(sumSubTotal);





  //... your code goes here
}

function calculateAll() {

const totalValue = document.querySelector("#total-value span");
const allInputs = document.querySelectorAll(".product");
let grandTotal = 0;
    for (eachInput of allInputs) {
      updateSubtotal(eachInput)
    }
    
    for (eachInput of allInputs ) {
      grandTotal += updateSubtotal(eachInput);
      
    }
    
 totalValue.innerText = Number(grandTotal);
}

// ITERATION 3



// ITERATION 4 - // Don't understand how event should be used here. I understand e.target but I don't get how to apply it to this situation. 

let allRemoveBtn = document.querySelectorAll(".btn-remove");
let tableBod = document.getElementsByTagName("tbody")[0];// must use [i] inside
let rowToRemove =  document.querySelectorAll('.product');
for (let i = 0; i < allRemoveBtn.length; i++) {

allRemoveBtn[i].onclick = function removeProduct (event) {
  // rowToRemove[i].remove();
  tableBod.removeChild(rowToRemove[i]);
  calculateAll();
}
}




// ITERATION 5 // only partially works / makes a new button but can't delete but also can't figure out how to add the values inputed in the create button row to the new tr

let createBtn = document.querySelectorAll("#create.btn")[0];
let rowExample = document.querySelectorAll(".product")[0];
let anyRow = document.querySelectorAll(".product")
let lastRow = document.querySelectorAll(".product").length -1;
let newRow = rowExample.cloneNode(true);
let rowLength = anyRow.length;

createBtn.onclick = function createProduct() {
  //... your code goes here
  //onclick...
  //let newRowData = create button row input.values
  //let newRow = 

  console.log("is this working?")
  let addingRow = anyRow[lastRow].after(newRow);
  console.log(rowLength);
  // return addingRow;

}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});


// / THIS WORRRKKKSSSS!!!!// OTHER WAY (DOESN"T PASS TEST AND CAN"T DELETE NEW ONES IF I ADD THEM VIA the dev tools)

// let allRemoveBtn = document.querySelectorAll(".btn-remove");
// let rowToRemove =  document.querySelectorAll('tr.product');

// for (let i = 0; i < allRemoveBtn.length; i++) {

// allRemoveBtn[i].onclick = function () {
//   rowToRemove[i].remove();
//   calculateAll();
// }
// }






























