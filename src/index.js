// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  
  let subtotalPrice = price * quantity;

  let subtotal = product.querySelector(".subtotal span")

  subtotal.innerHTML = subtotalPrice
  
  return subtotalPrice;
}



function calculateAll() {  
 /*  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct) */

  // ITERATION 2
 
  const products = document.getElementsByClassName("product");

  let total = 0;
  for(let i = 0; i<products.length; i++) {
    total += updateSubtotal(products[i]);
  }
  // ITERATION 3
  document.querySelector("#total-value span").innerHTML = total;
  return total;
}

 


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;  //o user clicou por último; o último evento
  console.log('The target in remove is:', target.parentNode.parentNode);
  target.parentNode.parentNode.remove()

}

// ITERATION 5

function createProduct(event) {
  const productParent= document.querySelector("#parent");

  let productName = product.querySelector(".create-product input").innerHTML;
  let priceValue = product.querySelector(".create-product input").value;


  
  //INCOMPLETO
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removedProduct = document.querySelectorAll(".btn-remove")
  // query retorna um objecto; da para usar loop
  // getlementbyclass retorna array like obj
  removedProduct.forEach(product => product.addEventListener('click', removeProduct))
 
  let newProduct = document.querySelector(".create-product");
  newProduct.addEventListener('click', createProduct);
});

