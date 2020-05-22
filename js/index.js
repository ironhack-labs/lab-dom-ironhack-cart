// ITERATION 1
let totalPrice = 0;

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('input').value;
  const curProduct = price * quantity;
  const subtotal = product.querySelector('.subtotal > span');
  subtotal.innerHTML = curProduct;
  totalPrice += curProduct;
}

function calculateAll() {
  // const singleProduct = document.querySelector('.product');   --- Testing code
  // updateSubtotal(singleProduct);
  totalPrice = 0;
  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach(product => updateSubtotal(product));
  // ITERATION 3
  const totalAmount = document.querySelector('#total-value > span');
  totalAmount.innerHTML = totalPrice;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  const parentTRow = target.parentNode.parentNode;
  const parentTBody = parentTRow.parentNode;
  parentTBody.removeChild(parentTRow);
  calculateAll()
  console.log('remove clicked')
}


// ITERATION 5
function createChildNode(tagName, innerHtml, attributes, method) {
  const newNode = document.createElement(tagName);
  if (attributes) {
    Object.assign(newNode, attributes)
  }
  if (innerHtml) newNode.innerHTML = innerHtml;
  if (method) newNode.addEventListener('click', removeProduct);
  return newNode;
}

function appendNodeToParent(parentSelector, childNode) {
  document.querySelector(parentSelector).appendChild(childNode);
}


function createProduct() {  
  const newProduct = {
    productName: document.querySelectorAll('tfoot input')[0].value,
    unitPrice: document.querySelectorAll('tfoot input')[1].value,
  }

  const dataArrayForNewProductNode = [
    {
      parentSelector: 'tbody',
      tagName: 'tr', 
      attributes: {
        className: 'product'
      }
    },
    {
      parentSelector: '.product:last-child ',
      tagName: 'td', 
      attributes: {
        className: 'name'
      }
    },
    {
      parentSelector: '.product:last-child > .name',
      tagName: 'span', 
      innerHtml: newProduct.productName,
    },
    {
      parentSelector: '.product:last-child ',
      tagName: 'td', 
      innerHtml: '$',
      attributes: {
        className: 'price',
      }
    },
    {
      parentSelector: '.product:last-child > .price',
      tagName: 'span', 
      innerHtml: (Math.round(newProduct.unitPrice * 100) / 100).toFixed(2)
    },
    {
      parentSelector: '.product:last-child ',
      tagName: 'td', 
      attributes: {
        className: 'quantity',
      }
    },
    {
      parentSelector: '.product:last-child > .quantity',
      tagName: 'input', 
      attributes: {
        type: 'number',
        value: '0',
        min: '0',
        placeholder: 'Quantity'
      }
    },
    {
      parentSelector: '.product:last-child ',
      tagName: 'td', 
      innerHtml: '$',
      attributes: {
        className: 'subtotal',
      }
    },
    {
      parentSelector: '.product:last-child > .subtotal',
      tagName: 'span', 
      innerHtml: 0,
    },
    {
      parentSelector: '.product:last-child ',
      tagName: 'td', 
      attributes: {
        className: 'action',
      }
    },
    {
      parentSelector: '.product:last-child > .action',
      tagName: 'button', 
      innerHtml: 'Remove',
      attributes: {
        className: 'btn btn-remove',
      },
      method: removeProduct
    }
  ]

  dataArrayForNewProductNode.forEach(ele => {
    return appendNodeToParent(ele.parentSelector,  createChildNode(ele.tagName, ele.innerHtml, ele.attributes, ele.method))
  })

  document.querySelectorAll('tfoot input')[0].value = '';
  document.querySelectorAll('tfoot input')[1].value = 0;

  return 
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('btn-remove');
  [...removeBtn].forEach(btn => btn.addEventListener('click', removeProduct));
  
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
