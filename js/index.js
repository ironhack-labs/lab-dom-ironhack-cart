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
// ITERATION 1
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

// ITERATION 2
function calculateAll() {
  const allProducts = document.querySelectorAll('.product')
  let total = 0
  for (singleP of allProducts)
    total += updateSubtotal(singleP)
  
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerText = total;
  
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5
function createProduct() {
  const inputs = document.querySelectorAll('.create-product input');
  const inputsArr = [...inputs];
  const name = inputsArr[0].value;
  const price = inputsArr[1].value;
  const p = new ProductToBuy (price, 0, name);
  const row = document.getElementsByClassName("product")[0]; // without products won't work
  const table = document.getElementsByTagName("tbody")[0]; 
  const clone = row.cloneNode(true); 
  if (p.price == 0 || p.name === "") window.alert('complete the info')
  else{
    clone.querySelector('.price span').innerText = p.price;
    clone.querySelector('.name span').innerText = p.name;
    clone.querySelector('.quantity input').innerText = 0;
    table.appendChild(clone); // add new row at the end of the table
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
