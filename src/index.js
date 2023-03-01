// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  let subtotalPrice = price*quantity;
  subtotal.textContent = subtotalPrice;
  
  return subtotalPrice;
  }

  function calculateAll() {
     const allProducts = document.getElementsByClassName('product');
      let total = 0;
      for (let i = 0; i < allProducts.length; i++) {
        const product = allProducts[i];
        const subtotal = updateSubtotal(product);
        total += subtotal;
      }
      document.querySelector('#total-value span').textContent = total;
    }
  
   


 



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let parent = target.parentNode.parentNode.parentNode;
  let children = target.parentNode.parentNode;

parent.removeChild(children);
 }
  

  

// ITERATION 5

function createProduct() {
  let newProduct = document.querySelectorAll('.create-product input');
  let newProductName = newProductInputs[0].value;
  let newProductPrice = newProductInputs[1].value;
  const tableBody = document.querySelector("tbody");
  tableBody.createElement(newProduct, newProductName, newProductPrice);
  
}
  



  

   


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  let removeButton = document.querySelectorAll('.btn-remove')
  removeButton.forEach(removeButton => removeButton.addEventListener('click', removeProduct));
})
window.onload = () => {
  document.getElementById('create').onclick = () => {
    createProduct();
  }
}
