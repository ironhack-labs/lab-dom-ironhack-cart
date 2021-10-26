// ITERATION 1

function updateSubtotal(product) {
    const priceSpan = product.querySelector(".price span");
    const quantityInput = product.querySelector("input");
    const subtotalSpan = product.querySelector(".subtotal span");

    return subtotalSpan.innerText = +priceSpan.innerText * quantityInput.value;
}

function calculateAll() {
    let total = 0;
    // ITERATION 2
    const products = document.getElementsByClassName('product');
    for (let product of products) {
        total += updateSubtotal(product);
    }
    // ITERATION 3
    document.querySelector('#total-value > span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {

    const target = event.currentTarget;
    target.parentNode.parentNode.remove();

    calculateAll();
}

// ITERATION 5

function createProduct() {

    const price = document.querySelector('.create-product > td > input[type="number"]').value;
    const name = document.querySelector('.create-product > td > input[type="text"]').value;
    if (name === '' || price === 0) return null;

    const newProductHTML = document.createElement("tr");
    newProductHTML.innerHTML =
        `<tr class="product">
        <td class="name">
            <span>${name}</span>
        </td>
        <td class="price">$<span>${price}</span></td>
        <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity"/>
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
            <button class="btn btn-remove">Remove</button>
        </td>
    </tr>`;

    const productsTable = document.querySelector('#cart > tbody');
    productsTable.appendChild(newProductHTML);
    onRemove();
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    onRemove();

    const createProductBtn = document.querySelector('#create');
    createProductBtn.addEventListener("click", createProduct)
});

function onRemove() {
    const removeProductButtons = document.querySelectorAll('.btn.btn-remove');
    for (let btn of removeProductButtons) {
        btn.addEventListener("click", removeProduct)
    }
}
