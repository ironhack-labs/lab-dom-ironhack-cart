// ITERATION 1
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeitems = document.querySelectorAll('.action')
  console.log(removeitems[0])


  for (let i = 0; i < removeitems.length; i++) {
    console.log(removeitems[i])
    removeitems[i].addEventListener('click', removeProduct)
  }
  
  const addItem = document.getElementById('create');
  addItem.addEventListener('click', createProduct);
});


function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  console.log(product)
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')

  let suma = 0;
  suma = price.innerHTML * quantity.value;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = suma

  return suma
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // ITERATION 2
  const singleProduct = document.querySelectorAll('.product')
  let total = 0;
  for (let i = 0; i < singleProduct.length; i++) {
    total += updateSubtotal(singleProduct[i]);

  }

  // ITERATION 3
  const totalcount = document.querySelector('#total-value span')
  totalcount.innerHTML = total
  console.log(total)
}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  const padre = target.parentNode
  target.parentNode.remove
  document.querySelector('tbody').removeChild(padre)
  calculateAll()
  //En esta tontertia me he tirado mas de 3 horas, impresionante
}

// ITERATION 5


  
function createProduct(event) {

  let selector = document.getElementById('nameprod')
  const nameprod = selector.querySelector('input').value 
  selector = document.getElementById('costproduct')
  
  const tbody = document.getElementById('pepe')
  const costproduct = selector.querySelector('input').value
  const newParagraph = document.createElement('tr')

    tbody.appendChild(newParagraph)
  newParagraph.innerHTML = 
    `<td class="name">
      <span>${nameprod}</span>
      </td>
      <td class="price">$<span>${costproduct}</span></td>
      <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class ="action">
      <button class="btn btn-remove">Remove</button>
      </td>`

      newParagraph.setAttribute('class', 'product')

      const removeitems = document.querySelectorAll('.action')
      console.log(removeitems)
      for (let i = 0; i < removeitems.length; i++) {
        console.log(removeitems[i])
        removeitems[i].addEventListener('click', removeProduct)
      }
      

  }





