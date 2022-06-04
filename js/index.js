// ITERATION 1

function updateSubtotal(product) {

    console.log('Calculating subtotal, yey!');

    const price = product.querySelector('.price span').innerText
    const quantity = product.querySelector('.quantity>input').value
    const subtotal = price * quantity

    product.querySelector('.subtotal span').innerHTML = subtotal

    return subtotal
}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    /*     const singleProduct = document.querySelector('.product');
        updateSubtotal(singleProduct); */
    // end of test

    // ITERATION 2

    const productTotal = document.querySelectorAll('.product')

    let total = 0

    productTotal.forEach(product => {
        total += updateSubtotal(product)
    })

    // ITERATION 3
    let totalValue = document.querySelector('#total-value span').innerText = total.toFixed(2)
}

// ITERATION 4

function removeProduct(event) {

    /*     const target = event.currentTarget;

        console.log('The target in remove is:', target);

        const productElement = target.parentElement.parentElement
        const tableProductElement = productElement.parentElement.parentElement

        tableProductElement.forEach((product) => product.remove()) */
    // Pedir consejo German o Clara el lunes
}

// ITERATION 5

function createProduct() {

    /*    const tableBodyElement = document.querySelector('#cart tbody')
       const createProductElement = document.querySelector('create-product input[type="text]')
       const createdProducElementPrice = document.querySelector('create-product input[type="number"]')
       const name = createProductElement.value
       const price = createdProducElementPrice.value
       const productElement = document.createElement('tr')

       productElement.classList.add('product')
       productElement.innerHTML =
           `
       <td class="name">
         <span>${name}</span>
       </td>
       <td class="price">$<span>${price.toFixed(2)}</span></td>
       <td class="quantity">
         <input type="number" value="0" min="0" placeholder="Quantity" />
       </td>
       <td class="subtotal">$<span>0</span></td>
       <td class="action">
         <button class="btn btn-remove">Remove</button>
       </td>
     ` */
}


window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    //... your code goes here
});