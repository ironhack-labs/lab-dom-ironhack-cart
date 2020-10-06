// ITERATION 1

function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');
    const price = product.querySelector('.price span').innerText;
    const quantity = product.querySelector('.quantity input').value;
    const subtotal = product.querySelector(`.subtotal span`)
    subtotal.innerText = price * quantity;
    return price * quantity;
}

function calculateAll() {
    // ITERATION 2
    const singleProduct = document.querySelectorAll('.product');
    console.log(singleProduct)

    // ITERATION 3
    let total = 0;
    singleProduct.forEach(function(precio) {
        let subtotal = updateSubtotal(precio)
        total += subtotal
    })

    const value = document.querySelector('#total-value span')
    value.innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    const row = target.parentNode.parentNode;
    const body = target.parentNode.parentNode;
    body.remove(row)
}

// ITERATION 5

function createProduct() {
    const create = document.getElementById('.create-product button');
    create.addEventListener('click', createProduct);
    const name = document.querySelector('create-product input').placeholder = "Product Name";
    const unit = document.querySelector('create-product input').placeholder = "Product Price";
    //... your code goes here
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('create');
    calculatePricesBtn.addEventListener('click', calculateAll);

    //... your code goes here
    const elimina = document.getElementsByClassName('btn btn-remove');
    for (let i = 0; i < elimina.length; i++) {
        elimina[i].addEventListener('click', removeProduct);
    }

});