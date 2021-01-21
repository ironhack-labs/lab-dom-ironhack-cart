// ITERATION 1

function updateSubtotal(products) {
    console.log("Calculating subtotal, yey!");
    //... your code goes here
    let array = [];
    products.forEach((e) => {
        let price = Number(e.querySelector(".price span").innerText);
        let quantity = Number(e.querySelector(".quantity input").value);
        let subtotal = e.querySelector(".subtotal span");
        subtotal.innerText = price * quantity;
        array.push(subtotal.innerText);
    });
    return array;
    // product.querySelector(".subtotal span").innerText = price * quantity;
}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    // const singleProduct = document.querySelector(".product");
    // updateSubtotal(singleProduct);
    // end of test

    // ITERATION 2
    //... your code goes here
    const products = Array.from(document.querySelectorAll(".product"));
    let total = document.querySelector("#total-value span");
    let subtotalArray = updateSubtotal(products);
    console.log(subtotalArray);
    total.innerText = subtotalArray.reduce((a, b) => Number(a) + Number(b), 0);
    // ITERATION 3
    //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log("The target in remove is:", target);
    //... your code goes here
    const product = target.parentNode.parentNode.parentNode;
    console.log(product);
    product.removeChild(target.parentNode.parentNode);
    calculateAll();
}

// ITERATION 5

function createProduct() {
    //... your code goes here
    const productName = document.querySelector(
        ".create-product td input[type=text]"
    ).value;
    const productPrice = Number(
        document.querySelector(".create-product td input[type=number]").value
    ).toFixed(2);
    console.log(productName);
    console.log(productPrice);
    const tableBody = document.querySelector("#cart tbody");
    tableBody.innerHTML += `<tr class="product">
    <td class="name">
        <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice}</span></td>
    <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
        <button class="btn btn-remove">Remove</button>
    </td>
</tr>`;
    const removeButtons = document.querySelectorAll(".btn-remove");
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener("click", removeProduct);
    }
}

window.addEventListener("load", () => {
    const calculatePricesBtn = document.getElementById("calculate");
    calculatePricesBtn.addEventListener("click", calculateAll);
    const removeButtons = document.querySelectorAll(".btn-remove");
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener("click", removeProduct);
    }
    const createProductBtn = document.querySelector("#create");
    createProductBtn.addEventListener("click", createProduct);

    //... your code goes here
});