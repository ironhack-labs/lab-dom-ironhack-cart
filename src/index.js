// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value

  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = price * quantity

}


  // ITERATION 2

  function calculateAll() {

    const multipleProducts = document.getElementsByClassName("product");
    
    for(let i=0; i< multipleProducts.length; i++) {
    singleProduct = multipleProducts[i]
    updateSubtotal(singleProduct);
    }
  

  // ITERATION 3
  
let totalPrice = document.querySelector('#total-value span')
let subtotalPrices = document.querySelectorAll('.subtotal span')
let total = 0;

for(let i=0; i< subtotalPrices.length; i++) {
  total += Number(subtotalPrices[i].innerText)

}
totalPrice.innerText = total

}




// ITERATION 4

function removeProduct(event) {
  let buttonNow = event.currentTarget
  let deleteData= buttonNow.parentNode.parentNode
  deleteData.remove()

}

// <button class="btn btn-remove">Remove</button>
// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let eliminarBoton = document.querySelectorAll(".btn-remove")
  eliminarBoton.forEach((cadaElemento)=>{
    cadaElemento.addEventListener("click", removeProduct )
  })

});

//remove y parent node otro.parentnode borramos todos los padres
// hasta borrar todo el html
