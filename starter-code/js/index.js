let calcButton = document.getElementById('calc');
let cart = document.getElementsByClassName('product');

function updateSubtot(product) {
    // Iteration 1.1
}

function calcAll() {
    // Iteration 1.2
}

calcButton.onclick = () => {
    let unitPrice = Number(document.querySelector('.pu > span').innerText);
    let quantity = Number(document.querySelector('.qty > label > input').value);
    let subToteSpan = document.querySelector('.subtot > span');

    subToteSpan.innerText = quantity * unitPrice;
    console.log(quantity * unitPrice);
};
