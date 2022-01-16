// ITERATION 1
function updateSubtotal(product) {
    const price = product.querySelector('.price span').textContent;
    const quantity = product.querySelector('.quantity input').value;
    const subTotal = product.querySelector('.subtotal span');
    subTotal.innerHTML = price * quantity;
}

function calculateAll() {
    // ITERATION 2
    const singleProduct = document.querySelectorAll('.product');
    singleProduct.forEach(elm => updateSubtotal(elm));

    // ITERATION 3
}


// ITERATION 4
function removeProduct(event) {
    // const target = event.currentTartotalget;
    // console.log('The target in remove is:', target);
    const node = document.querySelector('.product');
    node.parentNode.removeChild(node);
}
document.querySelectorAll('.btn-remove').forEach(btn => btn.onclick = element => removeProduct(element));


// ITERATION 5
document.getElementById('create').onclick = function createProduct() {
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdPrice = document.createElement('td');
    let tdQuantity = document.createElement('td');
    let tdSubtotal = document.createElement('td');
    let tdAction = document.createElement('td');
    let spanName = document.createElement('span');
    let spanPrice = document.createElement('span');
    let spanSubtotal = document.createElement('span');
    let input = document.createElement('input');
    let button = document.createElement('button');

    tr.className = 'product';
    tdName.className = 'name';
    tdPrice.className = 'price';
    tdQuantity.className = 'quantity';
    tdSubtotal.className = 'subtotal';
    tdAction.className = 'action';
    button.className = 'btn btn-remove';

    tdPrice.innerHTML = '$';
    tdSubtotal.innerHTML = '$';
    button.innerHTML = 'Remove';

    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tr.appendChild(tdQuantity);
    tr.appendChild(tdSubtotal);
    tr.appendChild(tdAction);
    tdName.appendChild(spanName);
    tdPrice.appendChild(spanPrice);
    tdQuantity.appendChild(input);
    tdSubtotal.appendChild(spanSubtotal);
    tdAction.appendChild(button);

    input.setAttribute('type', 'number');
    input.setAttribute('value', '0');
    input.setAttribute('min', '0');
    input.setAttribute('placeholder', 'Quantity');
    document.querySelector('tbody').appendChild(tr);

    button.onclick = function() {
        removeProduct();
    }

    const createText = document.querySelector('.create-text').value;
    const createNumber = document.querySelector('.create-number').value;
    spanName.innerHTML = createText;
    spanPrice.innerHTML = createNumber;
}


// Calculate Total
document.getElementById('calculate').onclick = () => calculateAll();