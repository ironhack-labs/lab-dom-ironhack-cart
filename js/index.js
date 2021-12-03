// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span'); 

  const subTotalValue = quantity.valueAsNumber * parseFloat(price.innerText);

  subtotal.innerText = subTotalValue
  
  return subTotalValue
}



function calculateAll() {
  const allProducts = document.getElementsByClassName('product');
  const arrayProducts = [...allProducts]
  
  let total = 0;
  const totalValue = document.querySelector('#total-value span')

  arrayProducts.forEach(el => {
    updateSubtotal(el)
    total += updateSubtotal(el);
  })

  totalValue.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.target;

  const row = target.parentNode.parentNode

  row.remove() 
}


// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector('.create-product input');
  const nameValue = nameInput.value;

  const priceInput = document.querySelector('.create-product input[type="number"]');
  const priceValue = priceInput.valueAsNumber;

  if (!priceValue || !nameValue){
    window.alert("É necessário preencher o nome do produto e o valor");
    return
  }


  const newProduct = `
  <tr class="product">
    <td class="name">
      <span>${nameValue}</span>
    </td>
    <td class="price">$<span>${priceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `
  const tbody = document.querySelector('#cart tbody');
  tbody.innerHTML += newProduct;

  const removeBtns = document.getElementsByClassName('btn-remove')
  for (let button of removeBtns){
    button.addEventListener('click', removeProduct)
  };

  nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.getElementsByClassName('btn-remove')
  for (let button of removeBtns){
    button.addEventListener('click', removeProduct)
  };
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct)
});
