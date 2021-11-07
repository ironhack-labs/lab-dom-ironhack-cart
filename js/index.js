// ITERATION 1
let copyTr = ''

function updateSubtotal(product) {

  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;
 

  let updatedSubtotal = parseFloat(price) * parseInt(quantity)
  
  product.querySelector('.subtotal span').innerText = updatedSubtotal
  
  return updatedSubtotal
}




function calculateAll() {
  // ITERATION 2
  let products = document.getElementsByClassName("product")
  let total = 0

  for(let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i])
  }

    // ITERATION 3

  const totalCart = document.querySelector("#total-value span")
  totalCart.innerText = total
}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);

}

// ITERATION 5

function createProduct() {
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn-remove')
  
  for(let i = 0; i < removeButtons.length; i++){
    removeButtons[i].addEventListener('click', (event)=>{
      const button = event.currentTarget;
      button.parentNode.parentNode.remove()
    })
  }
});
