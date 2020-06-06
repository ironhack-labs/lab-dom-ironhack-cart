// ITERATION 1

function updateSubtotal(product) {


  const price = product.querySelector('.price span').innerHTML
  const quantity =  product.querySelector('.quantity input').value

  const totalPrice = price * quantity
 
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = totalPrice

  return totalPrice
  //... your code goes here
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let products = document.querySelectorAll('.product')

  let sumAll = 0

 products.forEach(function(elem) {
   sumAll += updateSubtotal(elem)
 })

   // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML = sumAll


}




// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove()

  calculateAll()

}



// ITERATION 5

function createProduct() {
  //... your code goes here
  let productNode = document.querySelector('.product')

  let cloneProduct = productNode.cloneNode(true)
// cloned
  let inputNameClone = cloneProduct.querySelector('.name span')
  let inputPriceClone = cloneProduct.querySelector('.price span')
// create
  let inputNameCreate = document.querySelector('.createName')
  let inputPriceCreate = document.querySelector('.createPrice')

  inputNameClone.innerHTML = inputNameCreate.value
  inputPriceClone.innerHTML = inputPriceCreate.value

  document.querySelector('tbody').appendChild(cloneProduct)
// borramos campos del create 
  inputNameCreate.value=''
  inputPriceCreate.value=0

  // el boton clonado no es funcional(window.addEventListener solo
  // se ejecuta al principio. hay que ponerselo individualmente)
  const button = cloneProduct.querySelector('.btn-remove')
  button.addEventListener('click', removeProduct)


}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


  // code from iteration 2
  const buttons = document.querySelectorAll('.btn-remove')
  console.log(buttons)
  buttons.forEach(function(elem){
    elem.addEventListener('click', removeProduct)
  })

  // code from iteration 3

  const createBtn = document.querySelector('#create')
  createBtn.addEventListener('click', createProduct)

  //createBtn.onclick = createProduct()

});
