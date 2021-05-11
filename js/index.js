

// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').textContent;
  //const quantity = product.querySelector('.quantity input[type="number"]')
  const quantity = product.querySelector('.quantity input').value;
  //subtotalProduct calcula el total de un producto en funcion del numero de articulos
  let subtotalProduct = price * quantity
  //totalProduct es la variable que modifica la parte visual del css
  const totalProduct = product.querySelector('.subtotal span');
  totalProduct.innerHTML = subtotalProduct
  return subtotalProduct

  //return subtotal //Es necesa

  //return subtotal //Es necesario el return si luego se le va a pasar a otra funcion
  //... your code goes here
}

function calculateAll() {
  //Obtenemos el primer elemento elemento del DOM
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //Recorro con el metodo forEach todos los selectores de clase "product".
  //Apunto a traves del metodo querySelectorAll
  //Todos estos productos los almaceno en la variable Products
  //Cada producto que recorro lo envio como argumento llamando a la funcion updateSubotal
  //que me devolvera el importe total (subtotalProduct) para ese producto en funcion del numero de unidades compradas (cantidad)
  //Este importe se ira sumando al del siguiente producto, acumulandose en la variable totalCart,
  //que hemos definido como la direccion donde se encuentra el id="total-value" y el tag span
  let total = 0 // ¿por que hay que definir una variable total y no puede usarse totalCart que ya empieza con valor 0?
  const Products = document.querySelectorAll('.product').forEach(singleProduct => {
    total += updateSubtotal(singleProduct);

  });

  let totalCart = document.querySelector('#total-value span').textContent = total
  //totalCart = total ¿por que no funciona así?

  // const spantotalCart = totalCart.getElementsbyTagName('span')





  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  //element.createElement
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
