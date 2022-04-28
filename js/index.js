// ITERATION 1

function updateSubtotal(product) {
  
  console.log('Calculating subtotal, yey!');
  
  //!Se van a traer los objetos que necesitamos para acceder al precio, a la cantidad y al subtotal

  
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')

  const subtotaField = Number(price.innerText) * Number(quantity.value)
  subtotal.innerText = subtotaField
  return subtotaField
}

function calculateAll() {

 
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const getProducts = document.querySelectorAll('.product');
  let suma = 0;
 for (let product of getProducts ){
  suma += updateSubtotal(product)
 }

  // ITERATION 3
  let total = document.querySelector('#total-value span').innerText = suma

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const row = target.parentNode.parentNode;
  const parent = row.parentNode;
  parent.removeChild(row)

  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const createRow = document.querySelector('.create-product');
  let newProdNameInput = createRow.querySelector('input');
  let newProdNameValue = newProdNameInput.value;
  let newProdPriceInput = createRow.querySelector("input[type='number']");
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);


  const newTableRow = document.createElement('tr')

  newTableRow.className = 'product';
  newTableRow.innerHTML = `

  <td class="name">
            <span>${newProdNameValue}</span>
          </td>
          <td class="price">$<span>${newProdPriceValue}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>

  `
  const parent = document.querySelector('#cart tbody')

  parent.appendChild(newTableRow)
  const removeBtn = newTableRow.querySelector('.btn-remove')
  removeBtn.addEventListener('click',removeProduct)



  newProdNameValue.value  = '';
  newProductPriceValue = 0;



}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeBtn = document.querySelectorAll('.btn-remove')
  for(let btn of removeBtn){
    btn.addEventListener('click',removeProduct)
  }


  const createBtn = document.getElementById('create')
  if(createBtn) {
    createBtn.addEventListener('click',createProduct)
  }


});
