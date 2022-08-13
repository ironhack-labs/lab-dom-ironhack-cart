// ITERATION 1

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});


function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value

  total = quantity * price

  //alert("Calculate Prices clicked!")

  let subtotal = product.querySelector('.subtotal')
  subtotal.textContent = "$" + total
  console.log(total)

  return total;
}


function calculateAll() {

  const products = document.querySelectorAll('.product')
  console.log(products)

  let suma = 0;
  for (item of products) {
    suma += updateSubtotal(item)
  }

  const total = document.getElementById('total-value')
  total.innerText = `Total $${suma}`

}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode; //cojo toda la fila del producto seleccionado (el nodo completo)

  target.parentNode.removeChild(target)

  calculateAll()

}

// ITERATION 5

function createProduct() {

  const name = document.querySelectorAll('.create-product input')[0].value
  const price = document.querySelectorAll('.create-product input')[1].value
  const tbody = document.querySelector('tbody')


  const nodoDuplicado = document.querySelector('.product').cloneNode(true)

  nodoDuplicado.querySelector('.name span').innerText = name

  nodoDuplicado.querySelector('.price span').innerText = price;

  if (!nodoDuplicado.querySelector('.price span').innerText.includes('.')) {
    nodoDuplicado.querySelector('.price span').innerText += ".00"
  }

  nodoDuplicado.querySelector('.quantity input').value = 0
  nodoDuplicado.querySelector('.subtotal').innerText = 0 + "$"

  tbody.appendChild(nodoDuplicado)

  document.querySelectorAll('.create-product input')[0].value = ""
  document.querySelectorAll('.create-product input')[1].value = 0


  //cuando se carga la página aun no existe este nodo, por eso luego hay que asignarle particularmente la función
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons[removeButtons.length - 1].addEventListener('click', removeProduct);


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove')
  console.log(removeButtons)

  for (item of removeButtons) {
    item.addEventListener('click', removeProduct)
  }

  document.getElementById("create").addEventListener('click', createProduct)

});
