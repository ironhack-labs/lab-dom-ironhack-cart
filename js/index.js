// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here
  console.log('Calculating subtotal, yey!');
  //select the price value
  let price = 0

  if (product.querySelector('.price span')) {

    price = product.querySelector('.price span').innerHTML

  } else {

    price = 0

  }
  //select the quantity value
  let quantity = product.querySelector('.quantity input').value
  //calculate the subtotal
  let subTotal = price * quantity
  //select the subtotal html element
  let sub = product.querySelector('.subtotal span')
  //set the elements innerText to the subtotal calculated earlier
  sub.innerText = subTotal

  return subTotal
  // console.log(quantity)
  // console.log(price)
  // console.log(subTotal)
  // console.log(sub)
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // console.log(updateSubtotal(singleProduct).innerText)
  // end of test



  // ITERATION 2
  //... your code goes here

  let elements = document.getElementsByClassName('product')
  let stotal = 0
  for (let item of elements) {

    updateSubtotal(item)

    stotal += updateSubtotal(item)
  }



  // ITERATION 3
  //... your code goes here

  const total = document.querySelector('#total-value span')

  // const total
  total.innerText = `${stotal}`
  console.log(total)
  console.log(stotal)


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);


  const parent = target.parentNode
  const furtherParent = parent.parentNode

  while (furtherParent.firstChild) {
    furtherParent.removeChild(furtherParent.firstChild)
  }




  //... your code goes here


}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove')

  removeBtn.forEach((button) => {
    button.addEventListener('click', removeProduct)
  })




  //... your code goes here
});
