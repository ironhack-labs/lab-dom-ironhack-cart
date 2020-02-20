let cartElement = document.querySelector('#cart tbody');
let calcElement = document.getElementById('calc');

function updateSubtot(productElement) {
    // Iteration 1.1
    // NOTE : productElement is ONE element (in this case a "tr" element !! )
    let price = Number(productElement.querySelector('.pu').querySelector('span').innerText) 

    let quantity = Number(productElement.querySelector('.qty').querySelector('input').value)

    let subTot = Number(productElement.querySelector('.subtot').querySelector('span').innerText = price * quantity)

    return subTot
}


function calcAllHandler(event) {
    event.currentTarget // <- this gives you the button that was clicked
    // just for keyboard keys event.keyCode

    let allProductElements = document.getElementsByClassName('product')

    let totalPrice = 0

    for (let i = 0; i < allProductElements.length; i++) {

        updateSubtot(allProductElements[i])
        totalPrice += updateSubtot(allProductElements[i])
    }
    document.querySelector('h2').querySelector('span').innerText = totalPrice
}

//calcElement.oninput = updateSubtot; // works not with type=number
let inputField = document.getElementsByTagName('input') 
inputField.onchange = updateSubtot; // probably works not with type=number
calcElement.onclick = calcAllHandler;

let deleteButton = document.getElementsByClassName('btn btn-delete');
// let deleteButton = document.querySelectorAll('btn btn-delete');

// got to figure out, how to access a specific button
// or maybe refactor html so that any button has its own id

// Iteration 4: Deleting a product
function deleteProductHandler(event) {
    let findTableRow = event.currentTarget.parentElement.parentElement
    findTableRow.remove()
}

deleteButton[0].onclick = deleteProductHandler;
// deleteButton.onclick = deleteProductHandler;
