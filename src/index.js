// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!', product);

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = price.innerText * quantity.value
  const holdSubtotal = product.querySelector('.subtotal span')
  holdSubtotal.innerText = subtotal
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product')
  // updateSubtotal(singleProduct)
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll(".product")
  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i])
  }
  // ITERATION 3
  //... your code goes here
  let sumTotal = 0
  for (let i = 0; i < allProducts.length; i++) {
    sumTotal += updateSubtotal(allProducts[i])
  }
  const finalPrice = document.querySelector("#total-value span")
  finalPrice.innerText = sumTotal
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const whatToRemove = target.parentNode.parentNode
  whatToRemove.remove()
  // while (what) {
  //   whatToRemove.removeChild(whatToRemove.firstChild)
  // }
}

// ITERATION 5

function createProduct() {
  // ... your code goes here
  const newProdName = document.querySelector('.create-product input[type="text"]').value
  const newProdPrice = document.querySelector('.create-product input[type="number"]').value
  const newProduct =
    `<tr class="product">
      <td class="name">
        <span>${newProdName}</span>
      </td>
      <td class="price">$<span>${newProdPrice}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>`

  document.querySelector('tbody').innerHTML += newProduct
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const remBttns = document.querySelectorAll("tbody .btn")

  for (let i = 0; i < remBttns.length; i++) {
    const remButton = remBttns[i];
    remButton.addEventListener('click', removeProduct)
  }

  const addProductBtn = document.getElementById('create')
  addProductBtn.addEventListener('click', createProduct)
});
