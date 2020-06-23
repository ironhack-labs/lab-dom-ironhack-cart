// ITERATION 1

function updateSubtotal(product) {
  const  price  =  product.querySelector ( '.price span' ); 
  const  quantity  =  product.querySelector ( '.quantity input' ) ;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = Number(price.innerHTML) * quantity.value;
  return Number(subtotal.innerHTML);
}

// ITERATION 2 - 3

function calculateAll() {
  const allProducts = document.querySelectorAll(".product");
  let sum = 0;
  for (let i = 0; i < allProducts.length; i++) 
{
  sum += updateSubtotal(allProducts[i]);
  console.log(updateSubtotal(allProducts[i]))
}
  const totalPrice = document.querySelector("#total-value span");
  totalPrice.innerHTML = sum;
}

//Bonus
// ITERATION 4

window.addEventListener('load', () => {
  const removeProductsBtn = document.getElementsByClassName('btn btn-remove');
  
  for(let i = 0; i<removeProductsBtn.length; i++){
    removeProductsBtn[i].addEventListener('click', removeProduct);
  }
})
function removeProduct(ev) {
  ev                
    .target         
    .parentElement  
    .parentElement 
    .remove()       
}

// ITERATION 5