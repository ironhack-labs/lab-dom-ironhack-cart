// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  //Number () convierte a float --> comprobar si es un numero
  let subtotalPrice = Number(price) * Number(quantity);
  subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;
  return (subtotalPrice);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  let absoluteTotal = 0;
  let products = document.getElementsByClassName('product');
  for (let i=0; i<products.length; i++){
    absoluteTotal += updateSubtotal(products[i]);
  }
  let cartTotal = document.querySelector('#total-value span');
  cartTotal.innerHTML = absoluteTotal;
  return (absoluteTotal);

}

// ITERATION 4

//But let's try to solve our problem one bit at a time. 
//Inside of the existing function you're passing to window.addEventListener(), 

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let td = target.parentNode;
  let tr = td.parentNode;
  let tbody = tr.parentNode;
  tbody.removeChild(tr);
  //change the total once the element is removed
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //you should target the name and unit price input DOM nodes, 

  let parent = document.querySelector('#cart tbody');

  const product = document.querySelectorAll(".create-product > td > input");
  let name = product[0].value;
  let price = product[1].value;
  //extract their values, add a new row to the table with the product name
  const newProduct = `
    <tr class="product">
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
     <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`;

  parent.innerHTML +=  newProduct;

  //restart the input fields
  product[0].value = '';
  product[1].value = 0;

// Read this : https://ultimatecourses.com/blog/attaching-event-handlers-to-dynamically-created-javascript-elements

  /*
  PORQUE NO FUNCIONAN LOS DOS PRIMEROS?

  const newProduct = document.createElement("product");

  const newTd1= document.createElement("name");
  newTd1.innerHTML = `<span>${name}</span>`
  newProduct.appendChild(newTd1);

  const newTd2= document.createElement("price");
  newTd2.innerHTML = `$<span>${price}</span>`
  newProduct.appendChild(newTd2);

  const newTd3= document.createElement("quantity");
  newTd3.innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />`
  newProduct.appendChild(newTd3);

  const newTd4= document.createElement("action");
  newTd4.innerHTML = `<button class="btn btn-remove">Remove</button>`
  newProduct.appendChild(newTd4);

  parent.appendChild(newProduct);

  */
}


function callback () {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //start with querying the document for all "Remove" buttons, 

  //read this: https://www.kirupa.com/html5/handling_events_for_many_elements.htm 
  //and change this!
  
  let allRemoveButtons = document.querySelectorAll (".btn-remove");
  for (let i=0; i<allRemoveButtons.length; i++){
    allRemoveButtons[i].addEventListener('click', removeProduct);
  }

  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);
  }

window.addEventListener('load', callback);

window.addEventListener ('click', callback);
