// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here
  // obtengo el precio y la cantidad del producto los convierto a número
  const price = parseFloat(product.querySelector(".price span").textContent);
  const quantity = parseInt(product.querySelector(".quantity input").value);

  // calculo el subtotal multiplicando el precio por la cantidad
  const subtotal = price * quantity;

  // actualizo el subtotal en el DOM
  product.querySelector(".subtotal span").textContent = subtotal;

  // retorno el subtotal para usarlo si fuera necesario
  return subtotal;
}

function calculateAll() {
  
  // ITERATION 2
  // consigo todos los productos del DOM y los guardo en una variable
 
  const products = document.querySelectorAll('.product'); // devuelve un array con elementos

  //otra manera de obtener los productos es usando getElementsByClassName
  // .getElementsByClassName devuelve una colección de elementos, no un array, por lo que no tiene el método forEach. 
  // Para solucionarlo, podemos convertir la colección en un array usando Array.from()
  // let products = document.getElementsByClassName('product'); // Esto devuelve una colección de elementos
  // products = Array.from(products); // Convertimos la colección a un array
  // forEach para iterar sobre cada producto y actualizar su subtotal
  products.forEach(product => updateSubtotal(product));

  // ITERATION 3
  // products hay que convertirlo a un array para poder usar reduce, ya que querySelectorAll devuelve una NodeList, que no tiene el método reduce.
  // calculo el total sumando los subtotal de cada producto 
  
  const total = Array.from(products).reduce((acc, product)=>{
     return acc += parseFloat(product.querySelector(".subtotal span").textContent);
    
  }, 0);
  
 document.querySelector("#total-value span").textContent = total;

}

// ITERATION 4

function removeProduct(event) {
  // event.currentTarget es para saber que botón de eliminar se ha clicado.
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  //... your code goes here
  // obtenemos el elemento padre del botón eliminar, que es el producto que queremos eliminar
  const product = target.closest('.product');

  // eliminamos el producto del DOM
  product.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  // obtenemos el nombre y el precio del nuevo producto desde los inputs (text y number)
  const nameInput = document.querySelector('.create-product input[type="text"]'); // selecciona el input de texto 
  const priceInput = document.querySelector('.create-product input[type="number"]'); // selecciona el input de número
  
  // validamos que el nombre y el precio no estén vacíos o sean inválidos
  if (nameInput.value.trim() === '' || priceInput.value.trim() === '') {
    alert('Por favor, ingresa un nombre y un precio válidos.');
    return;
  }
  // extraemos sus valores 
  const name = nameInput.value;
  const price = parseFloat(priceInput.value).toFixed(2);

  // creamos nodo html
  const newNodo= document.createElement('tr');
  newNodo.classList.add('product');

  // meter el HTML dentro de newNodo
  newNodo.innerHTML = `
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

  // Añadir al DOM (al tbody)
  const tbody = document.querySelector('tbody');
  tbody.appendChild(newNodo);

  // IMPORTANTE: añadir evento al botón nuevo
  newNodo.querySelector('.btn-remove').addEventListener('click', removeProduct);

  //Vacias las casillas de input
  nameInput.value = '';
  priceInput.value = '';
 
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

//... your code goes here
// Agrego un event listener a cada botón de eliminar para que llame a la función removeProduct cuando se haga clic en ellos
window.addEventListener('load', () => {
  const removeButtons = document.querySelectorAll('.btn-remove');
  
   removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });
});

// Agrego .addEventListener al botón de crear para llamar a createProduct.
window.addEventListener('load', () => {
  const createButton = document.querySelector('.btn-create');
  createButton.addEventListener('click', createProduct);
});

