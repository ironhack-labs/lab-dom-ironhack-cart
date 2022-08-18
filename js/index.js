// ITERATION 1

function updateSubtotal(product) {
 // console.log('Calculating subtotal, yey!');
 //... your code goes here

  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input")
  const priceValue = price.innerText  //Passo 2
  const quantityValue = quantity.value //Passo 2
  let subTot = priceValue * quantityValue  //Passo 3

  
  const subTotal = product.querySelector(".subtotal span"); //Passo 4
  subTotal.innerText = subTot  //Passo 5

    return subTot  //Passo 5
  // console.log(subTotal)
  
}

   // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // ITERATION 2
  
  function calculateAll() {
   
  const products = document.querySelectorAll('.product');
  console.log(products);

    let preTotal = 0;
  products.forEach(element => {
    preTotal += updateSubtotal(element)

  })

  const totalValue = document.querySelector('#total-value span');
  totalValue.innerText = preTotal;

}
  // ITERATION 4

   function removeProduct(event) {
    const target = event.currentTarget;
    const tbody = target.closest('tbody');
    const row = target.closest('tr');
    tbody.removeChild(row);
  }
  

  



// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  console.log(calculatePricesBtn)

  //... your code goes here
});
