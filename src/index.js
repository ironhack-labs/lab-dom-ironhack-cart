// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price').querySelector("span").innerText)
  const quantity = Number(product.querySelector('.quantity').querySelector("input").value)
  product.querySelector('.subtotal').querySelector('span').innerText = `${price*quantity}`

}

function calculateAll() {

  let total = 0
  let trproduct = document.querySelectorAll('.product')
  console.log(trproduct)
  for (i=0; trproduct[i]; i++){
    updateSubtotal(trproduct[i])
    let subtotal = Number(trproduct[i].querySelector('.subtotal').querySelector("span").innerText)
    console.log(subtotal)
    total += subtotal
  }
  document.querySelector("#total-value").querySelector('span').innerText = `${total}`
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let a = target.parentElement.parentElement
  console.log(a)
  a.remove()

}

// ITERATION 5

function createProduct() {
  let create = document.querySelector(".create-product").querySelectorAll("input")
  let pName = create[0].value
  let pPrice = create[1].value
  document.querySelector('tbody').innerHTML += `<tr class="product"><td class="name"><span>${pName}</span></td><td class="price">$<span>${pPrice}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td></tr>`
  create[0].value = ''
  create[1].value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const createBtn = document.getElementById('create')
  createBtn.addEventListener('click', createProduct)
  const removeBtn = document.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);
});
