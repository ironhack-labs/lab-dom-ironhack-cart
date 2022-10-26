const ironProducts = [
  {
    id: 0,
    name: "Ironhack Rubber Duck",
    price: 25.00
  },
  {
    id: 1,
    name: "Ironhack Beach Towel",
    price: 12.50
  },
  {
    id: 2,
    name: "Ironhack pencil",
    price: 10.00
  }
]

const productsIronhack = document.querySelector('.product');

function renderProducts() {
    ironProducts.forEach((prod, index) =>{
      productsIronhack.innerHTML += 
   `
  <tr class="fila${index} tabla-productos">
    <td class="name">
        <span>${prod.name}</span>
    </td>
    <td class="price">$<span>${prod.price.toFixed(2)}</span></td>
    <td class="quantity">
      <input name="cantidad" type="number" value="0" min="0" placeholder="Quantity"/>
    </td>
    <td class="subtotal">$<span name="subtotal">0</span></td>
    <td class="action">
      <button class="btn btn-remove remove${index}">Remove</button>
    </td>
  </tr>`;
    })
}

renderProducts();

// ITERATION 1


//const cantidadProducto = document.querySelector('.product');


const updateSubtotal = (product) => {
  const price = product.querySelector('.price span');
  const cantidad = product.querySelector('.quantity input');
  const subt = product.querySelector('.subtotal span'); 
  let precio = parseFloat(price.textContent);
  let quantity = parseInt(cantidad.value);
  let subtotal = precio * quantity;
  subt.textContent = subtotal.toFixed(2);
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const totalProucts = document.querySelector('#total-value span')
  const productos = document.getElementsByClassName('tabla-productos');
  let total = 0;
  for( i = 0; i < productos.length; i++){
    const collectionProducts = document.querySelector(`.product .fila${i}`);
    total += updateSubtotal(collectionProducts);
  } 
  totalProucts.textContent = total.toFixed(2);
}

/* const btnCalculate = document.getElementById('calculate');
btnCalculate.addEventListener('click', calculateAll); */

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  console.log(event)
  //... your code goes here
}

const btnRemove = document.querySelector('.btn-remove');
btnRemove.addEventListener('click', removeProduct)

// ITERATION 5

function createProduct() {
  let nombre = addProduct.getElementsByClassName('name-product');
  let precio = addProduct.getElementsByClassName('price-product');
  let idProduct = ironProducts.length;
  let newProduct = {
    id: idProduct,
    name: nombre.name.value,
    price: parseFloat(precio.precio.value)
  }
  ironProducts.push(newProduct)
  productsIronhack.innerHTML += 
   `
  <tr class="fila${newProduct.id} tabla-productos">
    <td class="name">
        <span>${newProduct.name}</span>
    </td>
    <td class="price">$<span>${newProduct.price.toFixed(2)}</span></td>
    <td class="quantity">
      <input name="cantidad" type="number" value="0" min="0" placeholder="Quantity"/>
    </td>
    <td class="subtotal">$<span name="subtotal">0</span></td>
    <td class="action">
      <button class="btn btn-remove remove${newProduct.id}">Remove</button>
    </td>
  </tr>`;
}

const addProduct = document.querySelector('.create-product');
addProduct.addEventListener('click', createProduct);


window.addEventListener('load', () => {
  const btnCalculate = document.getElementById('calculate');
  btnCalculate.addEventListener('click', calculateAll);
  /*
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  */
  //... your code goes here
});
