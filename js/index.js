// ITERATION 1

function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');
    const price = product.querySelector(`.price span`).innerText;
    const quantity = product.querySelector(`.quantity input`).value;
    const result = Number(price * quantity)

    let subtotal = product.querySelector(`.subtotal span`).innerText = result;
    return subtotal;
}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    const singleProduct = document.querySelector('.product');
    updateSubtotal(singleProduct);
    // end of test

    // ITERATION 2
    let productRow = document.getElementsByClassName("product")
    let totalValue = (document.querySelector(`#total-value span`));
    let finalResult = 0;

    for (let i = 0; i < productRow.length; i++) {
        finalResult += (updateSubtotal(productRow[i]));
    }
    // ITERATION 3
    return totalValue.innerText = finalResult;
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);

    const rowToRemove = event.currentTarget.parentNode.parentNode;
    rowToRemove.parentNode.removeChild(rowToRemove);

    calculateAll();
}

// ITERATION 5

function createProduct() {
    const newProductName = document.getElementById("new-product-name").value;
    const newProductPrice = document.getElementById("new-product-price").value;

    let newProduct = document.createElement('tr')
    newProduct.className = "product";
    newProduct.innerHTML = `
                <td class="name">
                <span>${newProductName}</span>
                </td>
                <td class="price">$<span>${newProductPrice}</span></td>
                <td class="quantity">
                  <input type="number" value="0" min="0" placeholder="Quantity"/>
                </td>
                <td class="subtotal">$<span>0</span></td>
                <td class="action">
                  <button class="btn btn-remove">Remove</button>`;

    let productsParent = document.querySelector('tbody');
    productsParent.appendChild(newProduct)

    const removeBotton = newProduct.getElementsByClassName("btn-remove");
    for (let i = 0; i < removeBotton.length; i++) {
        removeBotton[i].addEventListener('click', removeProduct);
    };
}
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    //... your code goes here
});