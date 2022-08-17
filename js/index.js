// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = price * quantity

  product.querySelector('.subtotal span').innerText = subTotal

  console.log(quantity)
  console.log(price)
  console.log(subTotal)

    return subTotal

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  
  // end of test

  // ITERATION 2
  //... your code goes here
  let productsInTable = document.getElementsByClassName('product')
  let indProduct
  let total = 0
  //console.log(productsInTable)
  //console.log(productsInTable.length)

  for (let i = 0; i < productsInTable.length; i++) {
  indProduct = document.getElementsByClassName('product')[i]
  updateSubtotal(indProduct)
 }

  // ITERATION 3
  //... your code goes here
  for (let i = 0; i < productsInTable.length; i++) {
    indProduct = document.getElementsByClassName('product')[i]
    total += Number(indProduct.querySelector('.subtotal span').innerText)
    //console.log(total)
    }

    document.querySelector('h2 span').innerText = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log(target)
  let nodeToDelete = target.parentNode.parentNode
  //console.log(nodeToDelete)
  nodeToDelete.parentNode.removeChild(nodeToDelete)

  
  

  //console.log('The target in remove is:', target);


}

// ITERATION 5

function createProduct() {
let nameOfNewProd = document.querySelector('.create-product td input').value
let priceOfNewProd = document.querySelector('.create-product td input[type="number"]').value
console.log(nameOfNewProd)
console.log(priceOfNewProd)
let row = `<td class="name"><span>${nameOfNewProd}</span></td><td class="price">$<span>${priceOfNewProd}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>`

let newProductChild = document.createElement('tr')
newProductChild.classList.add('product')
newProductChild.innerHTML = row

console.log(newProductChild)

document.querySelector('tbody').appendChild(newProductChild)

}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  

  let removeButtonProd
  let productsInTableTwo = document.getElementsByClassName('product')
  for (let i = 0; i < productsInTableTwo.length; i++) {
    removeButtonProd =  document.getElementsByClassName('product')[i].querySelector('.btn')
    //console.log(removeButtonProd)
    removeButtonProd.addEventListener('click', removeProduct);
  }

  const addProdBut = document.getElementById('create')
  addProdBut.addEventListener('click', createProduct)
});


