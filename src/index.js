// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = Number(product.querySelector(".price span").innerHTML)
  let quantity = Number(product.querySelector(".quantity input").value)

  const total = price * quantity

  return product.querySelector(".subtotal span").innerHTML = total
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product')
  products.forEach(product => updateSubtotal(product))


  // ITERATION 3
  //... your code goes here
  let total = 0;

  products.forEach(product => total += updateSubtotal(product))
 return document.querySelector('#total-value').innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
 const target = event.currentTarget;
 // console.log('The target in remove is:', target);
  //... your code goes here
  const tr = target.parentNode.parentNode  // subimos hasta el tr
  const tbody = tr.parentNode  // subimos hasta el tbody

  tbody.removeChild(tr)  // eliminamos el tr del tbody
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const inputName = document.querySelector('[placeholder="Product Name"]').value
  const inputPrice = document.querySelector('[placeholder="Product Price"]').value
  const createEl = document.createElement('tr')
  

  createEl.className = 'product'
  createEl.innerHTML = `
  <td class="name">
            <span>${inputName}</span>
          </td>
          <td class="price">$<span>${inputPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
         
  `
  document.querySelector('tbody').appendChild(createEl)
  const newRemoveBtn = createEl.querySelector('.btn-remove')
  newRemoveBtn.addEventListener('click', removeProduct)

  document.querySelector('[placeholder="Product Name"]').value = ""
  document.querySelector('[placeholder="Product Price"]').value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let buton = document.querySelectorAll('.btn-remove')
  buton.forEach(btn => {
    btn.addEventListener('click', removeProduct);
  })
  const botonCreate = document.querySelector('#create')
  botonCreate.addEventListener('click', createProduct)

});
