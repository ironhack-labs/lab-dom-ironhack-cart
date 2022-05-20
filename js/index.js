function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  product.querySelector('.subtotal span').innerText = parseFloat(price) * parseInt(quantity);
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  for (let singleProduct of products) {
    updateSubtotal(singleProduct);
  }
  updateTotalValue();
}

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
  updateTotalValue();
}

function updateTotalValue() {
  const subtotal = document.querySelectorAll('.subtotal span');
  document.querySelector('#total-value span').innerText = Array.from(subtotal).reduce((total, subtotal) => total += parseInt(subtotal.innerText), 0)
}

function createProduct() {
  if (!document.querySelector('.create-product [type="text"]').value) {
    alert('Por favor, rellena con un nombre el producto del carro');
    return;
  }
  const product = document.createElement('tr')
  product.className = 'product';
  for (let column of Object.keys(attributes)) {
    const element = document.createElement('td');
    element.className = column;
    for (let tag of attributes[column]['element']) {
      switch(tag.tag) {
        case 'span':
          const itemSpan = document.createElement(tag.tag);
          switch(column) {
            case 'subtotal':
              element.innerText = '$';
              itemSpan.innerText = 0;
              break;
            case 'price':
              element.innerText = '$';
              itemSpan.innerText = document.querySelector('.create-product [type="number"]').value;
              break;
            case 'name':
              itemSpan.innerText = document.querySelector('.create-product [type="text"]').value;
          }
          element.appendChild(itemSpan);
          break;
        case 'button':
          const itemButton = document.createElement(tag.tag);
          itemButton.innerText = 'Remove';
          itemButton.className = tag.characteristics.class;
          element.appendChild(itemButton);
          break;
        case 'input':
          const itemInput = document.createElement(tag.tag);
          element.appendChild(itemInput);
          for (let characteristic of Object.keys(attributes[column]['element'][0]['characteristics'])) {
            itemInput.setAttribute(characteristic, attributes[column]['element'][0]['characteristics'][characteristic]);
          }
          itemInput.value = 0;
          break;
      }
      product.appendChild(element);
    }
  }
  document.querySelector('#cart tbody').appendChild(product);
  addDeleteAction();
}

window.addEventListener('DOMContentLoaded', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const createBtn = document.getElementById('create');
  addDeleteAction();
  calculatePricesBtn.addEventListener('click', calculateAll);
  createBtn.addEventListener('click', createProduct)
});

function addDeleteAction() {
  const deleteBtns = document.querySelectorAll('.btn-remove');
  for (let deleteBtn of deleteBtns) {
    deleteBtn.addEventListener('click', removeProduct);
  }
}
