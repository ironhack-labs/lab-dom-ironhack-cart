// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  //console.log (`Hola ${price}`)

  const subtotal = price * quantity
  //console.log(subtotal)
  
  const subtotalDOM = product.querySelector('.subtotal span')
  //console.log(subtotalDOM)
  
  subtotalDOM.innerHTML = subtotal

  return subtotal

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
 
 const products = document.querySelectorAll ('.product')
  //console.log (products)
 let sum = 0 
 products.forEach(element => {
   sum += updateSubtotal(element)
 }); 
  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('#total-value span')
  //console.log(total)
  total.innerHTML = sum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target)
  //... your code goes here

  const action = target.parentNode
  const row = action.parentNode
  const table = row.parentNode

    table.removeChild(row)
  
  calculateAll()
}

// ITERATION 5

function createProduct() {
  const body = document.getElementsByTagName('table')[0]
  
  const table   = document.createElement("tbody");

  for (let i = 0; i < 1; i++) {
    const row = document.createElement("tr");
 
    for (let j = 0; j < 5; j++) {
      const cell = document.createElement("td");

      // const textCell = document.createTextNode("celda en la fila " + i + ", columna " + j);
      // cell.appendChild(textCell);

      row.appendChild(cell);

    }
    table.appendChild(row);
  }

  const rowTable = document.createElement("tr");
  rowTable.appendChild(table);
  
  body.appendChild(table);
  
  //calculateAll()
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  //console.log (calculatePricesBtn)
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const btnsRemove = document.querySelectorAll('.btn-remove')
  //console.log(btnsRemove)
  const newBtnsRemove = [...btnsRemove]
  //console.log (newBtnsRemove)
  newBtnsRemove.forEach( (button) => {
    button.addEventListener('click', removeProduct)
  })

  //Button create products
  const createNewProduct = document.getElementById('create')
  //console.log(createNewProduct)
  createNewProduct.addEventListener('click', createProduct)
});
