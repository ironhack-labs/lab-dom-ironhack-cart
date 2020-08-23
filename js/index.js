// ITERATION 1


function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');
    const unitPrice = product.querySelector('.price span').textContent
    const quantity = product.querySelector('.quantity input').value
    const total = unitPrice * quantity
    const subtotal = product.querySelector('.subtotal').textContent = `$${total}`
    return total

  //... your code goes here
}

function calculateAll() {
    let subTotal = 0
  // ITERATION 2
    const allProducts = document.querySelectorAll('.product')
    allProducts.forEach(items => {
        subTotal += updateSubtotal(items)
        console.log(subTotal)
        const totalValue = document.querySelector('#total-value span').textContent = subTotal 
    })
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target.parentNode)
    target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    const removeBtn = document.querySelectorAll('.btn-remove')
    removeBtn.forEach(elm => elm.addEventListener('click', removeProduct))
    console.log(removeBtn)
  //... your code goes here
});
