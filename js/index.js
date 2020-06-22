// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subTot = price * quantity;


  product.querySelector('.subtotal span').innerText = subTot;
  return subTot
}

function calculateAll() {

  // ITERATION 2
  const productsList = document.getElementsByClassName('product'); //returns HTML collection
  let tot = 0;

  for (let product of productsList){ //loop runs through the HTML collection to get each of the products
    tot+= updateSubtotal(product) //function passed for each one of the products
  }
  alert('Calculating subtotal, yey!'); //alert every time e click "Calculate Price"

  // ITERATION 3
  let totalCart = document.querySelector('#total-value span');
  totalCart.innerHTML = tot;
  return totalCart
  }

// ITERATION 4

function removeProduct(event) {
  
  const target = event.currentTarget;

  // the child I need to remove is the row ( <tr class="product">), it's parent is  tbody is <tbody> ==> x3 parentNode

  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  calculateAll(); //amends the subTotal
}

// ITERATION 5

function createProduct() {
  
// get input value
let productName = document.querySelectorAll('.create-product input')[0].value;
let productPrice = document.querySelectorAll('.create-product input')[1].value;

let row = document.createElement('tr'); // create new row 
row.className = 'product'; // add class to row
// to speed up the process - create all blanks and remove button
row.innerHTML += `<td class="name"> 
  <span></span>
</td>
<td class="price">$<span>0</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`


  // add row to DOM
  document.querySelector('tbody').appendChild(row);
  //add product name
  document.querySelector('tbody').lastElementChild.querySelector('.name span').innerText = productName
  //add product price
  document.querySelector('tbody').lastElementChild.querySelector('.price span').innerText = productPrice
  



//reset values
 document.querySelectorAll('.create-product input')[0]. value = "";
document.querySelectorAll('.create-product input')[1]. value = 0;
//}


}

window.addEventListener('load', () => {

  // == Remove Button
  const removeBtnNode = document.querySelectorAll('.btn-remove'); // returns NodeList of Buttons
  removeBtnNode.forEach (btn => { //loops through NodeList
    btn.addEventListener('click', removeProduct) //adds a click event listener to each, passing removeProduct as the callback argument
  })

  // == Calculate Price Button
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // == Create new Product  Button
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
