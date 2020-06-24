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
    console.log("The target in remove is:", target);
    //... your code goes here
    console.log(target.parentNode.parentNode.parentNode);

    target.parentNode.removeChild(target);
}

// ITERATION 5

function createProduct() {
    //... your code goes here
}

window.addEventListener("load", () => {
    const calculatePricesBtn = document.getElementById("calculate");
    calculatePricesBtn.addEventListener("click", calculateAll);

    const removeProductBtn = document.querySelectorAll(".btn-remove");
    console.log({ removeProductBtn });
    removeProductBtn.forEach((elem) => {
        elem.addEventListener("click", removeProduct);
    });
});
