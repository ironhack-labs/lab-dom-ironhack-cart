// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  const price = product.querySelector('.price span')

  const quantity = product.querySelector('.quantity input')
  const textOninput = quantity.value * price.innerText


  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = textOninput
  return subtotal.innerText
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test



  // ITERATION 2
  //... your code goes here

  const allproducts = document.querySelectorAll('.product')

  for (i = 0; i < allproducts.length; i++) {
    const oneproduct = allproducts[i]
    // console.log(oneproduct)
    updateSubtotal(oneproduct)

  }

  // ITERATION 3
  //... your code goes here

  const subtotaltotal = document.querySelectorAll('.subtotal span')

  let newtotal = 0
  for (let i = 0; i < subtotaltotal.length; i++) {
    let element = Number(subtotaltotal[i].innerText); //convertir a numero desde string 

    let newtotal += element
    //let newtotalvalue = parseFloat("newtotal").innerText

    const totaltotal = document.querySelector('#total-value span')
    totaltotal.innerText = element
    // let realtotal = document.querySelector('#total-value span')
    // realtotal = newtotalvalue
    // newtotalvalue = textOninput
    // const valuetotal = document.querySelector('#total-value span')
    // newtotal.innerText = textOninput
  }

  console.log(newtotal)
  // for (i = 0; i < subtotal.value.length; i++) {
  // const total = quantitytotal[i]



}

// const allsubtotals = document.querySelectorall('.product subtotal span')
// for (i = 0; i < allsubtotals.length.value; i++) {
//   const total = allsubtotals[i]
//   updateSubtotal(total)

// }

// const total = document.querySelector('#total-value span')
// total.innerText = allsubtotals.value





// console.log("Funciona?")




// const subtotal = product.querySelector('.subtotal span')
// subtotal.innerText = textOninput
// return subtotal.innerText

// const allsubtotals = document.querySelectorall('.subtotal span')
// for (i = 0; i < allsubtotals.length; i++) {
//   allsubtotals += allsubtotals[i]
//   updateSubtotal(totalfromsubtotals)
//   console.log("Funciona?")

// const allsubtotals = document.querySelectorAll('.product subtotal').value
// for (i = 0; i < allsubtotals.length; i++)
//   allsubtotals += allsubtotals[i]
// {

//   const total = document.querySelector('#total-value span')
//   total.innerText = textOninput


//   allsubtotals.innerText += textOninput
// }

// const total = document.querySelector('#total-value span')
// for (i = 0; i < updateSubtotal.length.value; i++)
//   total.value += total[i].textOninput

// const alltotal = alltotal.value
console.log("funciona?")








// for i = 0, i < updateSubtotal.length; i++ {
// updatedsubtotal.innerText = textOninput
// return updatedsubtotal.innerText
// }

//.total-value span <- ahi se inserta el resultado








// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here




}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
