// ITERATION 1

// const { product } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  const subTotal = price * quantity;

  console.log(subTotal)

  return product.querySelector('.subtotal span').innerHTML = subTotal


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const singleProduct = document.querySelector('.product')
  updateSubtotal(singleProduct);

  let totalValue = 0;

  for (let i = 0; i < document.querySelectorAll('.product').length; i++) {
    updateSubtotal(document.querySelectorAll('.product')[i])
    let multiprice = document.querySelectorAll('.product')[i]
    updateSubtotal(multiprice)
    totalValue += updateSubtotal(multiprice)
    document.querySelector('#total-value span').innerHTML = totalValue
  }


  // updateSubtotal(allProducts);
  // ITERATION 3
  //... your code goes here

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //... your code goes here

  let resta1 = document.querySelector('#total-value span').innerHTML
  let resta2 = document.querySelector('.subtotal span').innerHTML

  let resultadoTotal = resta1 - resta2

  document.querySelector('#total-value span').innerHTML = resultadoTotal

  let removePadre = document.querySelector('.padreProduct')
  let removeHijo = target.parentNode.parentNode
  let deleteProduct = removePadre.removeChild(removeHijo)

  console.log(target.parentNode.parentNode)


  return deleteProduct

  // for (let i = 0; i < removePadre.length; i++) {
  //   let removeHijo = document.querySelectorAll('.product')[i]
  //   removeHijo.remove(removeHijo)
  //   console.log(removeHijo)
  // }

  // let newPrice = 0;

  // if (removeProduct) {
  //   newPrice = totalValue.querySelector('#total-value span') - subTotal.querySelector('.subtotal')
  //   newPrice.querySelector('#total-value span').innerHTML = totalValue
  // }


  // for (let i = 0; i < removeProduct.length; i++) {
  //   let eliminar = document.querySelectorAll('.product')[i]

  //   eliminar.innerHTML = "new text"
  // }

}

// ITERATION 5

function createProduct() {
  // ... your code goes here

  let productName = document.querySelector('.create-product input').value
  let productUnit = document.querySelector('.create-product .productUnit').value
  let productSubTotal = document.querySelector('.subtotal span').innerHTML

  document.querySelector('.create-product .productUnit').innerHTML = productUnit


  let table = document.querySelector('.padreProduct')

  let row = table.insertRow(0)
  row.classList.add("product")

  let cell1 = row.insertCell(0)
  cell1.classList.add("name")

  let cell2 = row.insertCell(1)
  cell2.classList.add("price")

  let cell3 = row.insertCell(2)
  cell3.classList.add("quantity")

  let cell4 = row.insertCell(3)
  cell4.classList.add("subtotal")

  let cell5 = row.insertCell(4)
  cell5.classList.add("action")

  cell1.innerHTML = `$<pan>${productName}</span>`
  cell2.innerHTML = `$<pan>${productUnit}</span>`
  cell3.innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />`
  cell4.innerHTML = `$<span>${productSubTotal}</span>`
  cell5.innerHTML = `<button class="btn btn-remove">Remove</button>`


}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here

  let removeClass = document.querySelectorAll('.btn-remove')

  for (let i = 0; i < removeClass.length; i++) {
    let eliminar = document.querySelectorAll('.btn-remove')[i]
    eliminar.addEventListener('click', removeProduct)
  }

});
