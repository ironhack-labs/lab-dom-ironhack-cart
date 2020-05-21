function createProductNew() {
    const newName = document.getElementById('new-product')
    const newPrice = document.getElementById('new-price')

    if(newName.value.length !== 0) {
        const product = new Product (newName.value, newPrice.value)
        product.createProduct()
        newName.value = ''
        newPrice.value = 0
    }
}

function removeProduct(event) {
    const target = event.currentTarget;
    const parent = (target.parentNode).parentNode
    parent.remove()
}

function updateSubtotal(product) {
      const quantity = product.querySelector('.subtotal span')
      const price = parseFloat(product.querySelector('.price span').innerText);
      const valueProduct = parseInt(product.querySelector('.quantity input').value);
      
      return quantity.innerText =  price * valueProduct
    
}

function calculateAll() {

    const products = document.getElementsByClassName('product');
    const productsArray = [...products]
    const totalValueProducts = productsArray.map(product => updateSubtotal(product)).reduce((acum, currentValue) => acum + currentValue)
    const totalValue = document.querySelector('#total-value span')
    totalValue.innerText = totalValueProducts;
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
    const removeProductButton = [...document.getElementsByClassName('btn-remove')];
    removeProductButton.map (boton => boton.addEventListener('click', removeProduct));
    const createProductButton = document.getElementById('create');
    createProductButton.addEventListener('click', createProductNew)
  
  });