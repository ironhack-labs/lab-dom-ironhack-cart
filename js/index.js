// ITERATION 1

function calTotal() {
    let product = document.querySelectorAll('.product')
  let suma = 0
  product.forEach(function (eachProduct) {
    suma = suma + updateSubtotal(eachProduct)
  })
  calculateAll(suma)
}
document.querySelector('#calculate').onclick = function () {
  calTotal()

}
  

function updateSubtotal(product) {

  const price = product.querySelector(".price span").innerText
  const quantity = product.querySelector(".quantity input").value
  const subtotal = product.querySelector(".subtotal span")
  const result = (price * quantity)
  subtotal.innerText = result
  return result
}


 
function calculateAll(num) {
document.querySelector('#total-value').innerText = '$' + num;

}



function removeProduct(event) {
  
   const confirmation = window.confirm('If you remove the product, i hope it will desapeared')

  if (confirmation == true) {
    const rowProduct = event.currentTarget.parentNode.parentNode;
    rowProduct.remove()
    calTotal()
  } 
}




  window.addEventListener('load', () => {
    const removebtn = document.querySelectorAll('.btn-remove')
    removebtn.forEach(function (btn) {
      btn.addEventListener('click', removeProduct)
    })

  }

  )
