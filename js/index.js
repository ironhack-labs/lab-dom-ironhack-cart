// ITERATION 1
//let products = document.querySelectorAll(".product")

function updateSubtotal(product) {
    //console.log('Calculating subtotal, yey!');
    let price = product.querySelector('.price span').innerText;
    console.log(price)
    let quantity = product.querySelector('.quantity input').value;

    console.log(quantity)
    let subtotal = price * quantity;
    console.log(subtotal);
    product.querySelector('.subtotal span').innerText = subtotal;
    return subtotal;
}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    const singleProduct = document.querySelector('.product');
    updateSubtotal(singleProduct);
    // end of test
    let total = 0;
    const products = document.getElementsByClassName('product');
    // ITERATION 2
    //... your code goes here
    for (let item of products) {
        total += updateSubtotal(item);
    }


    // ITERATION 3
    //... your code goes here
    let totalValue = document.querySelector('#total-value span');
    totalValue.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    //... your code goes here
    const product = target.parentNode.parentNode;
    console.log(product)
    product.parentNode.removeChild(product);

}

// ITERATION 5

function createProduct() {
    //... your code goes here
    let product = document.querySelector('.create-product');
    let attributes = product.querySelectorAll('td input');
    let productName = attributes[0].value;
    let price = attributes[1].value;
    const newProduct = document.createElement('tr');
    newProduct.className = 'product';
    newProduct.innerHTML = `<td class="name"> 
    <span>${productName}</span>
    </td>
    <td class="price"><span>$${price}</span></td>
    <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
                <td class="action"><button class="btn btn-remove">Remove</button>
                </td>`;
    const removeBtn = newProduct.querySelector('.btn-remove');
    removeBtn.addEventListener("click", removeProduct);
    const addProduct = document.querySelector("#cart");
    addProduct.append(newProduct);

    attributes[0].value = ""
    attributes[1].value = 0;
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    //... your code goes here
    const removeProductBtn = document.getElementsByClassName("btn-remove")[0];
    console.log(removeProductBtn)
    removeProductBtn.addEventListener('click', removeProduct);

    const createBtn = document.getElementById("create");
    createBtn.addEventListener('click', createProduct)
});