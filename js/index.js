// ITERATION 1

function updateSubtotal(product) {
    const price = product.querySelector(".price span").innerHTML;
    const quantity = product.querySelector(".quantity input").value;
    const subtotal = product.querySelector(".subtotal span");

    let newSubtotal = +price * +quantity;
    // console.log(newSubtotal);

    subtotal.innerHTML = newSubtotal;
    return newSubtotal;
}

function calculateAll() {
    const singleProduct = document.querySelectorAll(".product");
    // console.log(".product", singleProduct);

    singleProduct.forEach((elem) => {
        updateSubtotal(elem);
    });

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
