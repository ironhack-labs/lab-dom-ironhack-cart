// // ITERATION 1
// window.addEventListener('load', () => {
//     const calculatePricesBtn = document.getElementById('calculate');
//     calculatePricesBtn.addEventListener('click', calculateAll);
// });

function updateSubtotal(product) {
    // console.log('Calculating subtotal, yey!');

    const price = product.querySelector('.price span').innerText;
    const quantity = product.querySelector('.quantity input').value;
    const subTotal = price * quantity
    let returnSubtotal = product.querySelector('.subtotal span')
    returnSubtotal.innerHTML = subTotal
    return subTotal

    //... your code goes here
}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    // end of test
    const testElements = document.getElementsByClassName('product');
    let total = 0
    for (let i = 0; i < testElements.length; i++) {
        total += updateSubtotal(testElements[i])
    }
    let totalNumber = document.querySelector('#total-value span')
    totalNumber.innerHTML = total
    console.log(totalNumber)


}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    //... your code goes here
}

// ITERATION 5

function createProduct() {
    //... your code goes here
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    //... your code goes here
});
