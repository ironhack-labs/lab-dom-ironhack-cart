// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  
  //console.log('Price is ' + price.innerHTML );
  //console.log('Quantity selected is ' + quantity.value );
  const subtotalNum = price.innerHTML*quantity.value;
  //console.log(subtotalNum);
  
  //console.log(product.querySelector('.subtotal span').innerHTML)
  product.querySelector('.subtotal span').innerHTML = subtotalNum; 
  return subtotalNum;
} 

function calculateAll() {

/*   
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test 
*/

  // ITERATION 2
  const allProductsHtmlColl = document.getElementsByClassName('product')
  //console.log(allProductsHtmlColl);
  const allProducts = [...allProductsHtmlColl];
  //console.log(allProducts);
  const allSubtotals = [];
  allProducts.forEach( product => {
    allSubtotals.push(updateSubtotal(product))
  })
  
  
  // ITERATION 3
  const total = allSubtotals.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  document.querySelector('#total-value span').innerHTML = total;

}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  const rowToRemove = target.parentNode.parentNode;
  const parentOfRowToRemove = rowToRemove.parentNode;
  //console.log('The element to remove is:', rowToRemove);
  //console.log('The parent element is:', parentOfRowToRemove);
  parentOfRowToRemove.removeChild(rowToRemove);
}


// ITERATION 5

function createProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in create is:', target);
  const infoOfRowToAdd = target.parentNode.parentNode.parentNode;
  const parentOfRowToAdd = document.querySelector('tbody');
  //console.log('The parent of the info is:', infoOfRowToAdd);
  //console.log('The parent of the row to add is:', parentOfRowToAdd);

  const name = infoOfRowToAdd.querySelector('.name input').value;
  const price = infoOfRowToAdd.querySelector('.price input').value;
  //console.log(name);
  //console.log(price);


    // ---> Approach with clone node 

  let oneRow = document.querySelector('.product');
  //console.log(oneRow);
  let clonedNode = oneRow.cloneNode(true);
  parentOfRowToAdd.appendChild(clonedNode);
  clonedNode.setAttribute("id", "newProduct1");
  document.querySelector('#newProduct1 :nth-child(1)').innerHTML=name;
  document.querySelector('#newProduct1 :nth-child(2)').innerHTML=price;

  // ---> Approach with appending every single node 
  
  //const newRow = document.createElement('tr.product');
  
  // parentOfRowToAdd.appendChild(newRow);
  // const newTd1 = document.createElement('td.name');
  // newRow.appendChild(newTd1);
  // const newSpan1 = document.createElement('span.name');
  // newSpan1 = newTd1.appendChild(newSpan1)
  // const newTd2 = document.createElement('td.price');
  // newRow.appendChild(newTd2);
  // const newTd3 = document.createElement('td.quantity');
  // newRow.appendChild(newTd3);
  // const newTd4 = document.createElement('td.subtotal');
  // newRow.appendChild(newTd4);
  // const newTd5 = document.createElement('td.action');
  // newRow.appendChild(newTd5);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //console.log(calculatePricesBtn);

  const removeButtonsBtn = document.getElementsByClassName('btn btn-remove')
  const removeButtons = [...removeButtonsBtn];
  //console.log(removeButtons);
  removeButtons.forEach( element => {
    element.addEventListener('click', removeProduct);
  })

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
