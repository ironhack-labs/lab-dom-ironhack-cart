// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = parseFloat(product.querySelector('.price span').innerHTML);
  let quantity = parseFloat(product.querySelector('.quantity input').value);
  let subtotal = price * quantity;

  return product.querySelector('.subtotal span').innerHTML = subtotal;

}

function calculateAll() {
  const total = document.querySelectorAll('.product');
  let totalGeneral = 0;
  for (let i = 0; i < total.length; i++){
    totalGeneral += updateSubtotal(total[i]);
  }

  document.querySelector('#total-value span').innerHTML = totalGeneral;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  let primerParent = target.parentNode;
  let parentFinal = primerParent.parentNode;
  let removeOneProduct = parentFinal.parentNode.removeChild(parentFinal);

  calculateAll();

}

// ITERATION 5

function createProduct() {
  //crear variables con el nombre y precio
  let name = document.querySelector('.create-product input[type=text]').value;
  let price = document.querySelector('.create-product input[type=number]').value;

  //crear tr vacía y añadirla al final
  let newProduct = document.createElement('tr');
  let bodyTable = document.getElementsByTagName('tbody')[0];
  bodyTable.appendChild(newProduct);

  //añadir todas las propiedades
  newProduct.setAttribute('class', 'product');

  let stringProduct = 
  `<td class="name">
    <span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;

  newProduct.innerHTML = stringProduct;

  
  const removeProductBtn = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeProductBtn.length; i++){
    removeProductBtn[i].addEventListener('click', removeProduct);
  }

  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);

  let nameReset = document.querySelector('.create-product input[type=text]');
  nameReset.value = "";
  let priceReset = document.querySelector('.create-product input[type=number]');
  priceReset.value = "0";
  
}





window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //eliminar productos
  const removeProductBtn = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeProductBtn.length; i++){
    removeProductBtn[i].addEventListener('click', removeProduct);
  }

  //añadir productos
  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);
});