// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  
  const preco = product.querySelector('.price span');
  const quantidade = product.querySelector('input');

  const precoDoProduto = preco.innerHTML;
  const quantidadeDoProduto = quantidade.value;

  const valorDoSubtotal = precoDoProduto * quantidadeDoProduto;

  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = valorDoSubtotal;

  return valorDoSubtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // console.log('calculateAll')
  // end of test

  // ITERATION 2
  const listaDeProduto = document.getElementsByClassName('product');
  const produtoArr = [...listaDeProduto];
  let valorTotal = 0;
  produtoArr.forEach( (product) => { 
    valorTotal += updateSubtotal(product);
  })
  // ITERATION 3
  const total = document.querySelector('#total-value span');
  total.innerHTML = valorTotal;
}

// ITERATION 4

function removeProduct(event) {
  const remover = event.currentTarget;
    const removerProduto = remover.parentNode.parentNode.parentNode;
   removerProduto.removeChild(remover.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  
  const createProduct = document.querySelectorAll('.create-product input');
  // console.log('createProduct', createProduct);
  const createProductName = createProduct[0].value;
  const createProductPrice = createProduct[1].value;
  // console.log('createProductName', createProductName);
  // console.log('createProductPrice', createProductPrice);

  const productTemplate = document.createElement('tr');
  productTemplate.className = 'product'
  productTemplate.innerHTML = 
  `
      <td class="name">
        <span>${createProductName}</span>
      </td>
      <td class="price">$<span>${createProductPrice}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
  `
  const parent = document.querySelector('tbody');
  // console.log('parent', parent)
  parent.appendChild(productTemplate)

  const removeButton = productTemplate.getElementsByClassName('btn btn-remove');
  removeButton[0].addEventListener('click', removeProduct)
  
  createProduct[0].value = '';
  createProduct[1].value = '';

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.getElementsByClassName('btn btn-remove');
  for (let i = 0 ; i < removeButton.length ; i++) {
    removeButton[i].addEventListener('click', removeProduct)
  }

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});