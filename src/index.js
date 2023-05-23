// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  updateSubtotal(products);
  // end of test
  let totalValue = 0;
  [...products].forEach((e)=>{
    const priceTag = e.querySelector('.price > span');
    const priceValue = Number(priceTag.textContent);
    const quantyTag = e.querySelector('.quantity > input');
    const quantity = Number(quantyTag.value);
    const subTotalValue = priceValue * quantity;
  
    const subTotalTag = e.querySelector('.subtotal > span');
    subTotalTag.textContent = subTotalValue.toFixed(2);
    
    //Totales
    
    totalValue = totalValue + Number(subTotalValue.toFixed(2))
  })
  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('#total-value > span')
  total.textContent = totalValue.toFixed(2);

}

// ITERATION 4

function removeButton(btnEvent){
[...btnEvent].forEach(e=>e.addEventListener('click',removeProduct));

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  event.target.closest('tr').remove();

}
}



// ITERATION 5

// Selección de tabla
const getTable = document.getElementById('table')


function createProduct() {
  //... your code goes here
  const newProductsection = document.querySelector('.create-product')
  
  //obtención de valores
  const productsName = newProductsection.querySelectorAll('input');
  const productName = [...productsName][0].value;
  const productPrice = Number([...productsName][1].value).toFixed(2);

  //nueva fila
  const newRow = document.createElement('tr');

  //Name Cell
  const nameCell = document.createElement('td');
  const spanName = document.createElement('span');
  spanName.textContent = productName;
  nameCell.appendChild(spanName);
  nameCell.classList.add('name');

  //Price Cell
  const priceCell = document.createElement('td');
  priceCell.classList.add('price');
  priceCell.textContent='$'
  const spanPrice = document.createElement('span');
  spanPrice.textContent = productPrice;
    priceCell.appendChild(spanPrice);
  

  //Quantity
  const quantityCell = document.createElement('td');
  quantityCell.classList.add('quantity');
  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.value = '0';
  quantityInput.min = '0';
  quantityInput.placeholder = 'Quantity';
  quantityCell.appendChild(quantityInput)

  //Subtotal
  const subTotalCell = document.createElement('td')
  subTotalCell.classList.add("subtotal")
  const sTotalPrice = document.createElement('span');
  sTotalPrice.textContent = '0';
  priceCell.innerHTML = '$';
  priceCell.appendChild(sTotalPrice);
  priceCell.classList.add('price');



  //Button
  const buttonCell = document.createElement('td');
  buttonCell.classList.add('action')
  const newButtonRemove = document.createElement('button');
  newButtonRemove.classList.add('btn');
  newButtonRemove.classList.add('btn-remove');
  newButtonRemove.textContent = 'Remove';
  buttonCell.appendChild(newButtonRemove);

  
  newRow.append(nameCell, priceCell,quantityCell,subTotalCell, buttonCell);
  getTable.appendChild(newRow);
console.log(productPrice)
console.log(priceCell)


  //dar evento al botón remover
  const buttonRemove = document.querySelectorAll('.action > button');
removeButton(buttonRemove)
 
}


const btnCreate = document.getElementById('create');
btnCreate.addEventListener('click',createProduct)



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
