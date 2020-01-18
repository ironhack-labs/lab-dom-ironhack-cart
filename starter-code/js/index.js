var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let $productArr = document.querySelectorAll('.product');
var $product

// ----- ACTUALIZAR SUBTOTALES
function updateSubtot($product) {
  // Iteration 1.1
  let price = $product.querySelector('.pu').querySelector('span').innerText

  let quantity = $product.querySelector('.qty').querySelector('label').querySelector('input').value

  let subTotal = price * quantity

  $product.querySelector('.subtot').querySelector('span').innerText = subTotal

  return subTotal
}

// ----- SUMAR SUBTOTALES
function calcAll() {
  // Iteration 1.2
  // Cargamos $productArr aqui apra que al llamar la funcion cargue de nuevo el array
  $productArr = document.querySelectorAll('.product');
  let sum = 0
  $productArr.forEach(elem => {
    sum = sum + updateSubtot(elem)

  })

  document.querySelector('h2 span').innerText = sum
}
$calc.onclick = calcAll;


// ----- BORRAR LINEAS
function deleteProduct(e) {
  e.target.parentElement.parentElement.remove()
  calcAll()
}

function loadDeleteButtons() {
  let boton = document.querySelectorAll('.rm')

  boton.forEach(el => {
    el.querySelector('button').onclick = deleteProduct
  })
}
loadDeleteButtons()

// ANADIR LINEA
document.querySelector('#create').onclick = addProduct

function addProduct() {
  let name = document.querySelector('#newName').value

  let price = document.querySelector('#newPrice').value

  // INSERTA LA LINEA
  let newProduct = document.createElement('tr')
  newProduct.classList.add("product")
  newProduct.innerHTML = `<td class="name">
          <span>${name}</span>
        </td>

        <td class="pu">
          $<span>${price}</span>
        </td>

        <td class="qty">
          <label>
            <input type="number" value="0" min="0">
          </label>
        </td>

        <td class="subtot">
          $<span>0</span>
        </td>

        <td class="rm">
          <button class="btn btn-delete">Delete</button>
        </td>`

  $cart.appendChild(newProduct)
  // VUELVE A CARGAR LOS BOTONES
  loadDeleteButtons()
  // CALCULA EL TOTAL CUANDO INSERTA UNA LINEA
  calcAll()
}