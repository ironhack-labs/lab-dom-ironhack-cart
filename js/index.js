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
    total.innerText = subtotalArray.reduce((a, b) => Number(a) + Number(b));
    // ITERATION 3
    //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log("The target in remove is:", target);
    //... your code goes here
}

// ITERATION 5

function createProduct() {
    //... your code goes here
}

window.addEventListener("load", () => {
    const calculatePricesBtn = document.getElementById("calculate");
    calculatePricesBtn.addEventListener("click", calculateAll);

    //... your code goes here
});