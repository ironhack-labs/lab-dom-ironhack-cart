// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  const total = Number(price.innerText) * Number(quantity.value);

  subtotal.innerText = total;

  return total;
}

  /*
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
  */

  // ITERATION 2
// call updateSuptotal with every tr.product in the tabel#cart  

  // ITERATION 3
  //reuse subtotalAll and update the corresponding DOM element
  //Display the value on your DOM


function calculateAll() {

  const priceAll = document.querySelectorAll('.product');
  console.log("priceAll", priceAll)

  let subtotalAll = 0;
  priceAll.forEach((aProduct) => {
  subtotalAll += updateSubtotal(aProduct)
   });

  console.log (subtotalAll);

  const totalAll = document.querySelector('#total-value span');
  totalAll.innerText = subtotalAll;
  

  return subtotalAll;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const row = target.parentNode.parentNode;
  const tableBody = row.parentNode;
  console.log('The target in remove is:', row, tableBody);
  tableBody.removeChild(row);
}

// ITERATION 5

function createProduct() {
  const currentRow = document.querySelectorAll('.product')[0];
  const rowClone = currentRow.cloneNode(true);
  const tableBody = document.getElementsByTagName('tbody');

  document.tableBody.appendChild(rowClone);
  

}

window.addEventListener('load', () => {
  
  const calculatePricesBtn = document.getElementById('calculate');
  
  calculatePricesBtn.addEventListener('click', calculateAll);

    // select remove buttons and loop through
    const rmvButtons = document.querySelectorAll('.btn-remove');
    rmvButtons.forEach((eachButton) => {
      eachButton.addEventListener('click', removeProduct)
    })
  
    console.log(rmvButtons);

    //select create product and add click event
    const customProduct = document.querySelector('#create');
    customProduct.addEventListener('click', createProduct);

    console.log(customProduct);

});

// window object refers to entire browser
// this event listener will only execute this code when the browser has downloaded everythig
// That is what the 'load' is referring to


/*
go to the documentation and look at inputHTML tag - the value is a special
attribute that is uncommon to other elements. Only input elements have value
attributes.
Getting the value out of an input shouldn't be difficult with the input HTML

*/