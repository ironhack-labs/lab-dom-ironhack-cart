// ITERATION 1

function updateSubtotal(product) {
    //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = Number(price.innerHTML) * Number(quantity.value)
  const subtotalDispĺay = product.querySelector('.subtotal span')
  subtotalDispĺay.innerHTML = subtotal 
  return subtotal
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here 
  const products = [...document.getElementsByClassName('product')]
  let total = 0;
  //No pude utilizar el metodo forEach en el arreglo products ¿Por que pasa esto?
  //for(let i = 0; i < products.length; i++) {total += updateSubtotal(products[i])}
  products.forEach(product => {
    total += updateSubtotal(product)
  })

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML = total;

}

// ITERATION 4
const remove = [...document.getElementsByClassName("btn-remove")]
console.log(remove)

function removeProduct(event) {
  const target = event.target.parentNode.parentNode.remove();
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const inputs = document.querySelectorAll('.create-product td input');
  console.log(inputs)
  const container = document.querySelector("tbody")
  const tr = document.createElement("tr")
  tr.className = "product"
  tr.innerHTML = `
    <td class="name">
      <span>${inputs[0].value}</span>
    </td>
    <td class="price">$<span>${inputs[1].value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `
  container.appendChild(tr)
  const button = tr.querySelector("button");
  button.onclick = removeProduct

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  remove.forEach(button => {
    button.onclick = removeProduct;
  })
  const create = document.getElementById("create")
  create.addEventListener('click', createProduct)
  //... your code goes here
});
