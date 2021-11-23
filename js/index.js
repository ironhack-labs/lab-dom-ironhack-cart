// ITERATION 1

function updateSubtotal(product) {
  // target in the PRODUCT, NOT the DOCUMENT: prices, quantity
  const precio = product.querySelector('.price span').innerText;
  const cantidad = product.querySelector('input').value;

  // declare a variable for the sub total
  const subTotal = precio*cantidad;

  // target the field to modify and modify it
  product.querySelector('.subtotal span').innerText = subTotal;

  // return the multiplication result we are going to use for the great total
  return subTotal;
}

function calculateAll() {
  // ITERATION 2
  // target all the "product" classes of the document and store each one in an array;
  const arrProducts = document.getElementsByClassName('product');

  // for each product, using the above function :
  // modify the relative subtotal field  &&
  // update the counter that will be the great total
  let counter = 0; 
  for (let i = 0; i < arrProducts.length; i++){
    counter += updateSubtotal(arrProducts[i]);
  }

  // ITERATION 3
  // target the field  "TOTAL h2"  && modify it
  document.querySelector('h2 span').innerText = counter;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  
  //access the removeBtn PARENT node 
  const parent = target.parentNode;
  const grandParent = parent.parentNode;
  const grandGrandParent = grandParent.parentNode; // aka BODY

  //  call "removeChild" on it.
  grandGrandParent.removeChild(grandParent);
  
  // re-do the calculations of the Grand total
  calculateAll();
  
}

// ITERATION 5

function createProduct() {
  // target the name and unit price input DOM nodes,
  const newProductEl = document.getElementById('newProduct');
  const newPriceEl = document.getElementById('newProductPrice');
  
  //extract their values,
  let newProduct = newProductEl.value;
  let newPrice = newPriceEl.value;

  console.log(newProduct, newPrice);

  // target table Body
  const tableBody = document.getElementsByTagName("tbody")[0];
  console.log(tableBody)
  
  if (newProduct && newPrice){
    //crea una linea
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td");
    const cell5 = document.createElement("td");
    cell1.innerHTML = `<class="name" > <span>${newProduct}</span>`;
    cell2.innerHTML = `<class="price"> $<span>${newPrice}</span>`;
    cell3.innerHTML = `<class="quantity"> <input type="number" value="0" min="0" placeholder="Quantity" />`;
    cell4.innerHTML = `<class="subtotal"> $<span>0</span>`;
    cell5.innerHTML = '<class="action"> <button class="btn btn-remove">Remove</button>';
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    tableBody.appendChild(row);
    newProduct = "";
    newPrice = 0;
  }
  // ya sta..... toy muerto
  
}




window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);



  // target in the document all the "Remove" buttons
  const removeBtn = document.getElementsByClassName('btn btn-remove');

  // for each button add an event listener
  // passing a function "removeProduct" as the callback argument. 
  for (let i = 0 ; i < removeBtn.length; i ++){
    removeBtn[i].addEventListener('click', removeProduct);
  }



  // target the "create product" button
  const createBtn = document.querySelector('#create');
  
  // add  a click event handler
  // passing a function "createProduct" as a callback.
  createBtn.addEventListener('click', createProduct);
});
