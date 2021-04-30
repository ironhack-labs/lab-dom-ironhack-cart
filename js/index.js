// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = Number(price.innerHTML) * Number(quantity.value);
  product.querySelector(".subtotal span").innerHTML = subtotal;
      

  return subtotal
  //console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  
  const products = [...document.getElementsByClassName('product')]
  let total = 0;

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

const inputs = document.querySelectorAll(".create-product td input");
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

//... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  remove.forEach(button => {

    button.onclick = removeProduct;
  })
  //... your code goes here
  const create = document.getElementById("create");
  create.addEventListener('click', createProduct);
});
