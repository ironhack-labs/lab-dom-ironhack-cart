// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

   // Paso 1: Obtener elementos del DOM
  const price = product.querySelector('.price span'); // Obtener el precio
  const quantity = product.querySelector('.quantity input'); // Obtener la cantidad

  // Paso 2: Extraigo los valores
  const priceValue = parseFloat(price.textContent); // Convierto precio a float (para dejar decimales)
  const quantityValue = parseInt(quantity.value); // Convierto la cantidad a int (para que quede como entero)

  // Paso 3: Calcular el subtotal
  const subtotal = priceValue * quantityValue; // Calcular el subtotal

  // Paso 4: Obtener el elemento del subtotal en el DOM
  const subtotalElement = product.querySelector('.subtotal span'); // Obtener el span del subtotal

  // Paso 5: Establecer el subtotal en el DOM y devolverlo
  subtotalElement.textContent = subtotal.toFixed(2); // Mostrar subtotal con dos decimales

  return subtotal; // Devolver el subtotal
}

function calculateAll() {
  
  // ITERATION 2

  const products = document.getElementsByClassName('product'); // Obtener todos los productos

  for (let product of products){
    updateSubtotal(product); // Llamo a la funcion subtotal para cada prod.
  }

  // ITERATION 3
 
let total = 0; 
for (let product of products){
  total += updateSubtotal(product); 

}

const totalElement = document.getElementById('total-value').querySelector('span');
totalElement.textContent = total.toFixed(2);

}





// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const row = target.closest('.product');

  console.log('The target in remove is:', target);

row.remove();

/*const row = event.currentTarget.parentNode.parentNode;
row.parentNode.removeChild(row);*/

calculateAll(); 

  

}

// ITERATION 5

function createProduct() {
 
    const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');
  
  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value).toFixed(2);

    if (!name || price <= 0) {
    alert('Por favor ingresa un nombre y un precio válido.');
    return;
  }
  
    const tableBody = document.querySelector('#cart tbody');
  const newRow = document.createElement('tr');
  newRow.classList.add('product');

  newRow.innerHTML = `
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
  `;

  tableBody.appendChild(newRow);

//agrego evento de eliminar producto al nuevo boton remove
    newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

    //reseteo los inputs

    nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


  const removeButtons = document.querySelectorAll('.btn-remove'); 
  removeButtons.forEach(btn => {
    btn.addEventListener('click', removeProduct);
  });



  const createBtn = document.getElementById('create');
createBtn.addEventListener('click', createProduct);
});
