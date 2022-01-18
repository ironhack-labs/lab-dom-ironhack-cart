// ITERATION 1

function updateSubtotal(product) {
    // console.log('Calculating subtotal, yey!');
    const price = product.querySelector('.price span').innerText;
    const quantity = product.querySelector('.quantity input').value;
    const subTotalPrice = price * quantity

    product.querySelector('.subtotal span').innerText = `${subTotalPrice}`

    return subTotalPrice;
}

function calculateAll() {
    // const singleProduct = document.querySelector('.product');
    // updateSubtotal(singleProduct);
    // end of test

    let sum = 0;

    // ITERATION 2
    const updateProductPrice = document.querySelectorAll('.product').forEach((product) => {
        sum += updateSubtotal(product)
    });


    // ITERATION 3
    document.querySelector('#total-value span').innerText = `${sum}`
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    event.currentTarget.parentNode.parentNode.remove()

    // const buttonParentNode = event.currentTarget.parentNode.parentNode;
    // buttonParentNode.parentNode.removeChild(buttonParentNode)
}

// ITERATION 5

function createProduct() {
    const newProductName = document.querySelector('.create-product input[type="text"]').value;

    if (newProductName.length === 0) {
        alert('Please enter the product name!')
        return;
    } else if (newProductName.length > 30) {
        alert('Maximum length of the product name is 30 characters')
        return;
    }

    const newUnitPrice = document.querySelector('.create-product input[type="number"]').value;

    if (newUnitPrice.length === 0) {
        alert('Please enter the product price!')
        return;
    }
    if (newUnitPrice <= 0) {
        alert('Invalid price!')
        return;
    }

    const myTable = document.querySelector('#cart tbody');
    const newRow = document.createElement('tr');

    newRow.classList.add('product');
    newRow.innerHTML = `
    <td class="name">
        <span>${newProductName}</span>
    </td>
    <td class="price">$<span>${newUnitPrice}</span></td>
    <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
        <button class="btn btn-remove">Remove</button>
    `
        // console.log(newRow)
    myTable.appendChild(newRow);
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
    document.querySelectorAll('.btn.btn-remove').forEach((button) => {
        button.addEventListener('click', removeProduct);
    })
    document.querySelector('.create-product button').addEventListener('click', createProduct)
});