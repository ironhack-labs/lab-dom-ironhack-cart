// ITERATION 1

function updateSubtotal(product) {
  
  const quantity = document.querySelector(".quantity input").value
  const price = product.querySelector('.price span')

  const display = document.querySelector('.subtotal span')
  
  let subtotal = price.textContent*quantity

      display.textContent = subtotal + " $"
  
  //console.log("subtotal", price)///la que se saca directamente del htlm product.querySelector('.price span')
  //console.log(subtotal)
  //console.log(quantity)
  //console.log('Calculating subtotal, yey!', price);
  //... your code goes here
  return display
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
 //allTd es un array con todos los td's y la clase subtotal
 let calculation = 0
      const allTr = document.querySelectorAll('.product')
     allTr.forEach(function (eachTr) {

         const price = eachTr.querySelector(".price span").textContent
         const cantidad = eachTr.querySelector(".quantity input").value
        // console.log("Ël price es", price)
        // console.log ("cantidad", cantidad)
        const subtotales = cantidad*price
        eachTr.querySelector('.subtotal span').textContent =  subtotales 

        calculation = calculation + subtotales

        console.log("calculation = ", calculation)
        })
  // ITERATION 3
  //... your code goes here

      console.log("total = ", calculation)
      document.querySelector('#total-value span').textContent =  calculation;
      


}

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
