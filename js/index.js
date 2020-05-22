class ProductToBuy {
  constructor (price, quantity, name) {
      this.price = price;
      this.quantity = quantity;
      this.name = name;
  }

  finalProductPrice(price,quantity){
    return parseInt(this.price)*parseInt(this.quantity);
  }
}


function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity > input').value;
  const subtotal = product.querySelector('.subtotal span');
  const p = new ProductToBuy(price, quantity);
  const finalPrice = p.finalProductPrice();
  subtotal.innerText = finalPrice;
  return finalPrice;
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product')
  let total = 0
  for (singleP of allProducts)
    total += updateSubtotal(singleP)
  
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerText = total;
}

function removeProduct(event) {
  const target = event.currentTarget.parentElement.parentElement.remove();
  calculateAll();
}

function createProduct() {
  const inputs = document.querySelectorAll('.create-product input');
  const inputsArr = [...inputs];
  const name = inputsArr[0].value;
  const price = inputsArr[1].value;
  const p = new ProductToBuy (price, 0, name);
  const row = document.getElementsByClassName("product")[0]; // without products won't work
  const table = document.getElementsByTagName("tbody")[0]; 
  const clone = row.cloneNode(true); 
  
  if (p.price == 0 || p.name === "") 
    window.alert('Please, complete all the information for the product')

  else {
    clone.querySelector('.price span').innerText = p.price;
    clone.querySelector('.name span').innerText = p.name;
    clone.querySelector('.quantity input').innerText = '';
    clone.querySelector('.subtotal span').innerText = 0;
    clone.querySelector('.quantity > input').value = 0;
    table.appendChild(clone); // add new row at the end of the table
    const allRemoveButtons = document.getElementsByClassName('btn btn-remove')
    const newRemove = allRemoveButtons[allRemoveButtons.length -1]
    newRemove.addEventListener('click', removeProduct);
    document.querySelectorAll('.create-product > td input')[0].value = '';
    document.querySelectorAll('.create-product > td input')[1].value = '0';
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  const removeProductBtnArr = [...document.getElementsByClassName('btn btn-remove')];
  for (removeProductBtn of removeProductBtnArr)
    removeProductBtn.addEventListener('click', removeProduct);

});
