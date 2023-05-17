// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
console.log(product)

const price = product.querySelector('.price span')
//console.log(price)

const priceValue = Number(price.innerText)
//console.log(typeof priceValue)

  //... your code goes here
const quantity = product.querySelector('.quantity input')
//console.log(quantity)

const quantityValue = Number(quantity.value)
//console.log(typeof quantityValue)

let rowTotal = priceValue * quantityValue;
const subTotal = product.querySelector('.subtotal span')
console.log(subTotal)


subTotal.innerHTML = rowTotal
return rowTotal

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  // end of test

  // ITERATION 2

  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  
  const productsTotal = document.getElementsByClassName("product");
  const productArray = [...productsTotal];
  let productsPrice = 0;
  productArray.forEach((element)=>{
  productsPrice += updateSubtotal(element)
  })


  // ITERATION 3
const totalValue = document.querySelector('#total-value span')
totalValue.innerText = productsPrice
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5
const createButton = document.querySelector('#create')
createButton.addEventListener("click", createProduct)
function createProduct() {
const newProduct = document.createElement('tr')
newProduct.className = 'product'
const productName = document.querySelector('.create-product input[type="text"]').value
const productPrice = document.querySelector('.create-product input[type="number"]').value

newProduct.innerHTML = ` <td class="name">
<span>${productName}</span>
</td>
<td class="price">$<span>${productPrice}</span></td>
<td class="quantity">
<input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
<button class="btn btn-remove">Remove</button>
</td>`
console.log('newProduct', newProduct)
let tBody = document.getElementsByTagName('tbody')[0]
tBody.appendChild(newProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

/* <tr class="product">
          <td class="name">
            <span>Ironhack Rubber Duck</span>
          </td>
          <td class="price">$<span>25.00</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr> */