// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here
  const price = product.querySelector('.price span');
  console.log({ price });
  const quantity = product.querySelector('.quantity input');
  const total = price.textContent * quantity.value;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = total;
  console.log(`this is ${total}`);

  return total;
}




function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // end of test

  // ITERATION 2
  //... your code goes here

  const products = document.querySelectorAll(".product")
  let sum = 0;
  const totalValue = products.forEach(eachProduct => {

    sum += updateSubtotal(eachProduct)
  })
  console.log("this is " + sum)




  const value = document.querySelector('h2 span')
  value.textContent = sum;



  // ITERATION 
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  let a = target.parentNode

  let b = a.parentNode
  const asd = b.remove();
  calculateAll();





}


// ITERATION 5

function createProduct() {
  //... your code goes here
  const name = document.querySelector('.create-product input')
  const price = document.querySelector('.create-product :nth-child(2)')
  const a = document.querySelector('tbody')
  const b = document.querySelector('.product')
  var cln = b.cloneNode(true);
  const newRow = a.appendChild(cln)

  const removeButtons = document.querySelectorAll('.btn-remove')
  removeButtons.forEach(eachRemoveBtn => {
    eachRemoveBtn.addEventListener('click', removeProduct)
  })

  newRow.children[0].textContent;


  const createBtnValue = document.querySelector('.create-product input')
  console.log(createBtnValue.value)
  newRow.querySelector('.product span').textContent = createBtnValue.value
  const createBtnPrice = document.querySelector('.create-product td:nth-child(2) input')
  console.log("this is " + createBtnPrice.value)
  newRow.querySelector('.product .price span').textContent = createBtnPrice.value


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('.btn-remove')
  removeButtons.forEach(eachRemoveBtn => {
    eachRemoveBtn.addEventListener('click', removeProduct)
  })
  const createBtn = document.querySelector('.create-product button')
  createBtn.addEventListener('click', createProduct)
})
