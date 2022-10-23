// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')

  const priceValue = price.innerText
  const quantityValue = quantity.value

  const subtotalValue = priceValue * quantityValue

  subtotal.innerHTML = subtotalValue

  return subtotalValue
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  const allProducts = document.getElementsByClassName('product')
  
  let soma = 0

  for(let i=0; i<allProducts.length; i++) {
    soma += updateSubtotal(allProducts[i])
  }

  const total = document.querySelector('#total-value span')
  total.innerHTML = soma
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const parent = document.querySelector('tbody')
  const product = target.parentNode.parentNode
  parent.removeChild(product)
}

// ITERATION 5

function createProduct() {
  console.log('Chamou a função createProduct')
  //1. Obter o nome do novo produto
  const newProdForm = document.querySelector('.create-product')
  const newProdNameInput = newProdForm.querySelector('#new-product-name')
  const newProdNameValue = newProdNameInput.value

  //2. Obter o valor do novo produto
  const newProdPriceInput = newProdForm.querySelector('#new-product-value')
  const newProdPriceValue = newProdPriceInput.value
  console.log(newProdPriceValue)
  //3. Criar uma nova tr com a classe product
  const tr = document.createElement('tr')
  tr.className = 'product'
  //4. Incluir o nome, o valor e a quantidade do novo produto na tr criada
  const trContent = `
    <td class="name">
      <span>${newProdNameValue}</span>
    </td>
    <td class="price">$<span>${newProdPriceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `
  tr.innerHTML = trContent
  //5. Adicionar a tr criada ao tbody da tabela
  const tbody = document.querySelector('tbody')
  tbody.appendChild(tr)

  const btnRemove = tr.querySelector('.btn-remove')
  btnRemove.addEventListener('click', removeProduct)

  newProdNameInput.value = ''
  newProdPriceInput.value = ''
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //Seleciona todos os botões de remover
  const btnsRemove = document.querySelectorAll('.btn-remove')
  for(let removeBtn of btnsRemove) {
    removeBtn.addEventListener('click', removeProduct)
  }

  //Seleciona o botão de criar
  const createBtn = document.getElementById('create')
  createBtn.addEventListener('click', createProduct)
});