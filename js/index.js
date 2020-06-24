// ITERATION 1

function updateSubtotal(product) {
    const price = product.querySelector(".price span");
    const quantity = product.querySelector(".quantity input");
    const subtotal = product.querySelector(".subtotal span");

    let newSubtotal = +price.innerHTML * +quantity.value;

    subtotal.innerHTML = newSubtotal;
    return newSubtotal;
}

function calculateAll() {
    const singleProduct = document.querySelectorAll(".product");
    const totalValue = document.querySelector("#total-value span");
    let total = 0;

    // ITERATION 2
    singleProduct.forEach((elem) => {
        total += updateSubtotal(elem);
    });

    // ITERATION 3
    totalValue.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget.parentNode.parentNode;
    target.parentNode.removeChild(target);
    calculateAll();
}

// ITERATION 5

function createProduct() {
    console.log("create btn clicked");
    const inputProductName = document.querySelectorAll(".create-product input");
    console.log(inputProductName[0].value, inputProductName[1].value);

    // let row = document.createElement("tr");
}

window.addEventListener("load", () => {
    //  calculate total
    const calculatePricesBtn = document.getElementById("calculate");
    calculatePricesBtn.addEventListener("click", calculateAll);

    // remove product
    const removeProductBtn = document.querySelectorAll(".btn-remove");
    removeProductBtn.forEach((elem) => {
        elem.addEventListener("click", removeProduct);
    });

    // add new product
    const createProductBtn = document.querySelector("#create");
    createProductBtn.addEventListener("click", createProduct);
});
