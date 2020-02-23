// VARIABLES
let cartElement = document.querySelector('#cart tbody');
let calcElement = document.getElementById('calc');
let tbody = document.querySelector('tbody');
let deleteButton = document.querySelectorAll('.btn-delete');
let createButton = document.getElementById('create');

// ONHANDLERS
calcElement.onclick = calcAllHandler;
createButton.onclick = createButtonHandler;

//calcElement.oninput = updateSubtot; // works not with type=number
let inputField = document.getElementsByTagName('input') 
inputField.onchange = updateSubtot; // probably works not with type=number

//wasn't aware, that looping outside a function works - credits to Ian
for(let i=0; i < deleteButton.length; i++){
    deleteButton[i].onclick = deleteProductHandler;
  }

// FUNCTIONS  

// Iteration 1, 1.1, 1.2: Calculating a total price for one product
function updateSubtot(productElement) {
    let price = Number(productElement.querySelector('.pu').querySelector('span').innerText) 

    let quantity = Number(productElement.querySelector('.qty').querySelector('input').value)

    let subTot = Number(productElement.querySelector('.subtot').querySelector('span').innerText = price * quantity)

    return subTot
}

// Iteration 3: Total
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

// Iteration 4: Deleting a product
function deleteProductHandler(event) {
    let clickedButton = event.currentTarget
    // accessing correct tr
    let productToBeDeleted = clickedButton.parentElement.parentElement
    tbody.removeChild(productToBeDeleted)
    }  

    
// Iteration 5: Creating new products
function createButtonHandler (createProduct) {
    // clone existing product - must use lastELEMENTchild
    let newProduct = tbody.lastElementChild.cloneNode(true)
    console.log(newProduct)
    //get data from inputField
    let newDataText = document.getElementsByClassName('new')[0].getElementsByTagName('input')[0].value   
    console.log(newDataText)

    // did not yet get the point of nextSibling
    // let newDataPrice = Number(newDataText.nextSibling.value)
    let newDataPrice = document.getElementsByClassName('new')[0].getElementsByTagName('input')[1].value
    console.log(newDataPrice)
    //create new product row
    // get last row and insert pure HTML - didn't work
    // let newProduct = tbody.lastChild.innerHTML = 
        
    // setting up new product 
    newProduct.querySelector('.name').querySelector('span').innerText = newDataText
    console.log(newProduct)
    newProduct.querySelector('.pu').querySelector('span').innerText = newDataPrice
    
    // credits to dima for the appendchild
    let listOfProducts = document.querySelector("tbody")
    listOfProducts.appendChild(newProduct);

    //empty create row after input, ready for new input
    // newDataText.reset()
    // newDataPrice.reset()
    // return false
    // newDataText.value = '';
    // newDataPrice.value = '';
}

// function resetAfterSubmit() {
//     document.getElementsByClassName('new')[0].getElementsByTagName('input')[0].reset();

//     document.getElementsByClassName('new')[0].getElementsByTagName('input')[1].reset();
// }
