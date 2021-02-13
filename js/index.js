// ITERATION 1

function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');
    const price = product.querySelector(".price span")
    const quantity = product.querySelector(".quantity input")
    const sub = product.querySelector(".subtotal span")
    const priceNumber = Number(price.innerHTML)
    const quantityNum = Number(quantity.value)
    const mult = (quantityNum * priceNumber)
    console.log(mult)
    sub.innerHTML = mult
    return mult
}


//... your code goes here


// end of test

// ITERATION 2 y 3
function calculateAll() {
    const primer = document.querySelectorAll(".product")[0]
    const segundo = document.querySelectorAll(".product")[1]
    updateSubtotal(primer)
    updateSubtotal(segundo)

    const total = document.querySelector("#total-value span")
    const sumar = Number(updateSubtotal(primer) + updateSubtotal(segundo))
    total.innerHTML = sumar
    return sumar
}



// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    //... your code goes here
    // console.log('The target in remove is:', target);
    const parentRow = target.parentNode.parentNode;
    const parentTable = parentRow.parentNode;
    parentTable.removeChild(parentRow);
    calculateAll();
}

// ITERATION 5
function checkPriceFormat(num) {
    return Number.isInteger(num) ? num.toFixed(2) : num;
}

function createProduct() {
    //... your code goes here
    const table = document.querySelector("#cart tbody");
    const createRow = document.querySelector('.create-product');

    let productName = createRow.querySelector('input[type="text"]').value;
    let productPrice = Number(createRow.querySelector('input[type="number"]').value);
    const newRow = document.createElement('tr');

    newRow.classList.add("product");

    newRow.innerHTML = `
      <td class="name">
        <span>${productName}</span>
      </td>
      <td class="price">$<span>${checkPriceFormat(productPrice)}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    `;

    table.appendChild(newRow);

    createRow.querySelector('input[type="text"]').value = "";
    createRow.querySelector('input[type="number"]').value = 0;

    manageEvents();
}

//Iteracion 6


window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
    window.alert("Hola")
});