// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = price.innerHTML*quantity;
  product.querySelector('.subtotal span').innerText = subtotal
  return subtotal
}

function calculateAll() {
  const productArr = [...document.getElementsByClassName('product')];
  let total = 0;
  productArr.forEach(singleProd=>{
      total += updateSubtotal(singleProd);
  });
  document.querySelector('#total-value span').innerText = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  let tbody = document.querySelector('tbody')
  tbody.removeChild(target)
  calculateAll()
  console.log('The target in remove is:', tbody);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const name = document.querySelectorAll('.create-product input')[0].value
  const price = document.querySelectorAll('.create-product input')[1].value
  let tr = document.createElement('tr')
  tr.setAttribute('class', 'product')
  tr.innerHTML = `<td class="name"><span>${name}</span></td><td class="price">$<span>${price}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>`
  let tbody = document.querySelector('tbody')
  tbody.append(tr)
  eventListeners()
}

let eventListeners = ()=>{
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  [...document.getElementsByClassName('btn btn-remove')].forEach(el=>{
    console.log(el)
    el.addEventListener('click', e=>{
      console.log('remove')
      removeProduct(e)
    })
  })
  document.getElementById('create').addEventListener('click', createProduct)
}

window.addEventListener('load', () => {
  eventListeners()
  //... your code goes here
});
