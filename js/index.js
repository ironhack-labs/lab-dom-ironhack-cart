// ITERATION 1

function updateSubtotal(product) {

  let subTotal = product.querySelector('.price span').innerHTML

  const quantity = product.querySelector('input').value
  
  subTotal *= quantity;
  product.querySelector('.subtotal').innerHTML = subTotal
  return subTotal

}

function calculateAll() {

  // ITERATION 2

  let products = []
  products = document.getElementsByClassName('product')

  
  // ITERATION 3

  let total = 0

  for (let i = 0; i < products.length; i++){

    total += updateSubtotal(products[i])
  }

  document.querySelector('h2 span').innerHTML = total
}

// ITERATION 4

function removeProduct() {

  const buttonTarget = event.currentTarget;

/* Para borrar toda la linea no debemos borrar solo el botón actal (event.currentTarget). 
  Por ello tenemos que buscar el padre y el hijo correcto para elimar toda la fila
  El padre esta tres niveles más arriba (parentNode*3) del currentTarget que tenemos,
  corresponde al bodey, el hijo sera el siguiente (parenNode*2) corresponde al tr class "product"
  que queremos borrar */

  buttonTarget.parentNode.parentNode.parentNode.removeChild(buttonTarget.parentNode.parentNode)

}

// ITERATION 5

function createProduct(event) {

  let selector = document.getElementById('newName')
  const newName = selector.querySelector('input').value

  selector = document.getElementById('newPrice')
  const newPrice = selector.querySelector('input').value

  const newParagraph = document.createElement('tr')

  selector.parentNode.parentNode.parentNode.appendChild(newParagraph)
  newParagraph.innerHTML = 
    `<td class="name">
      <span>${newName}</span>
      </td>
      <td class="price">$<span>${newPrice}</span></td>
      <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td>
      <button class="btn btn-remove" onclick="removeProduct();">Remove</button>
      </td>`

  newParagraph.setAttribute('class', 'product')

}

window.addEventListener('load', () => {

  const buttonRemove = document.querySelectorAll('.btn-remove')
  
  buttonRemove.forEach(function (elm) {
    elm.addEventListener('click', removeProduct)
  })
  
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)
  
  const buttonCreate = document.getElementById('create')
  buttonCreate.addEventListener('click', createProduct)
  
});
