// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
 
  //... your code goes here
  const price =parseFloat (product.querySelector('.price span').textContent)
  const quantity = parseInt(product.querySelector('.quantity input').value)

  const priceSubtotal= price*quantity

  return priceSubtotal;

  product.querySelector('.subtotal span').textContent= Number(priceSubtotal.toFixed(2));


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  //const total =Array.from (document.queryselector('.product'))
  //  .reduce((total,product)=>total + updateSubtotal(product),0)
  //o
  //.map(product=> updateSubtotal(product))
  //.reduce((total,subtotal)=> total+priceSubtotal)

const Products =document.queryselector('.product')
const listOfProducts = [...Products]
listOfProducts =forEach((product)=>{
  total += priceSubtotal
  updateSubtotal()
})
 

  // ITERATION 3
  //... your code goes here

  document.querySelector(#total-value span)

}

// ITERATION 4

function removeProduct(event) {
  const deleteBtn = event.currentTarget;
  console.log('The target in remove is:', deleteBtn);
  
  //... your code goes here
  deleteBtn.closest('.product').remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const name =document.querySelector('.create-product [name="name"]').value
  const price =parseFloat(document.querySelector('.create-product [name="price"]').value)
  if(name && price){
    const product =document.querySelector('#templates ,product)
  }

  //... your code goes here
}

window.addEventListener('load', () => {
  console.log('cart loaded')
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
   document.querySelectorAll('.product .btn-remove ')
  .forEach=> btn.addEventListener('click',removeProduct)
});
