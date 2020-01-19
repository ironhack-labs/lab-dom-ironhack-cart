var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');

// Creates span element to show message to the user and adds it after the table:
let message = document.createElement('span');
message.id = 'message';
let brotherElement =  document.getElementById('cart').nextElementSibling;
document.getElementsByTagName('body')[0].insertBefore(message, brotherElement);

// Call these two functions at the start to add neccesary events to inputs and buttons:
addEventToQtyInput();
addEventToDeleteButton();

// This function adds event ("input" type) to the quantity inputs, so when a product's quantity changes, it calls the "updateSubtot" function in order to show the updated subtotal of the product:
function addEventToQtyInput() {
    cart.querySelectorAll('.qty input').forEach(inputQty => {
        inputQty.addEventListener('input', updateSubtot, false);
    });
}

// This function adds the click event to all "delete" buttons to call "deleteProduct" function when clicked.
function addEventToDeleteButton() {
    cart.querySelectorAll('button.btn-delete').forEach(button => button.addEventListener('click', deleteProduct, false));
}

// Adds event ("input" type) to the input for the new product's name and call "checkInput" function:
document.querySelector('tfoot input[type=text').addEventListener('input', checkInput, false);


// Adds click event to "create" button to call "createProduct" function when clicked.
document.querySelector('tfoot button#create').addEventListener('click', createProduct, false);

// Adds click event to "calc" button:
calc.onclick = calcAll;


// Updates the subtotal of the product, based on the product's quantity that has changed:
function updateSubtot(e) {
    let product = e.currentTarget.parentNode.parentNode.parentNode;
    let productPrice = Number(product.querySelector('.pu > span').innerHTML);
    let productQty = product.querySelector('.qty input').value;
    let subTotal = productPrice * productQty;
    product.querySelector('.subtot > span').innerHTML = subTotal;
}


// Adds the subtotal of all products and show the total:
function calcAll() {
    let total = 0;
    let subtotals = cart.querySelectorAll('td.subtot > span');
    subtotals.forEach(subtotal => total += Number(subtotal.innerHTML));
    document.querySelector('h2 > span').innerHTML = total;
}


// Deletes the corresponding product when "delete" button is clicked:
function deleteProduct(e) {
    // Selects the product row (tr) from the delete button that was clicked.
    let product = e.currentTarget.parentNode.parentNode;
    product.parentNode.removeChild(product);
}


// Check whether the user has entered the name for the new product and show a warning message if not:
function checkInput() {
    let inputOk = false;
    let inputName = document.querySelector('tfoot tr.new input[type=text]');
    let productName = document.querySelector('tfoot tr.new input[type=text]').value;
    if(productName.length === 0) {
        message.innerHTML = `Please, insert product's name`;
        inputName.classList.add('warning');
        return inputOk;
    } else {
        inputName.classList.remove('warning');
        message.innerHTML = "";
        inputOk = true;
        return inputOk;
    }
}

// This function creates a new row with all his cells on the table, adding a new product:
function createProduct() {
    // First of all, it calls the "checkInput" function and countinues executing only if the input is correct:
    if(checkInput()) {
        // Creates the new row with his cells and assigns the neccesary classes:
        let newRow = document.createElement('tr');
        newRow.className = 'product';
        let classNamesArray = ['name', 'pu', 'qty', 'subtot', 'rm'];    
        classNamesArray.forEach(name => {
            let newCell = newRow.insertCell();
            newCell.className = name;
        });

        // Creates a new span element we are going to clone several times later and add it to other elements:
        let newSpan = document.createElement('span');

        // Creates a new text node we are going to clone several times later and add it to other elements:
        let currency = document.createTextNode('$');

        // Gets the name of the new product from the input and puts it on the corresponding span element inside the name's cell:
        let productName = document.querySelector('tfoot input[type=text]').value;
        let nameCell = newRow.querySelector('td.name');
        nameCell.appendChild(newSpan.cloneNode());
        nameCell.firstElementChild.innerHTML = productName;
        
        // Gets the price of the new product from the input and puts it on the corresponding span element inside the price's cell:
        let productPrice = document.querySelector('tfoot input[type=number]').value;
        let priceCell = newRow.querySelector('td.pu');
        priceCell.appendChild(currency.cloneNode());
        priceCell.appendChild(newSpan.cloneNode());
        priceCell.firstElementChild.innerHTML = productPrice;
        
        // Creates the "inputQty" input field and assigns its attributes. Also creates the label element. The input is placed inside the label and the label is placed in its corresponding cell:
        let inputQty = document.createElement('input');
        inputQty.type = 'number';
        inputQty.defaultValue = '0';
        inputQty.min = '0';
        let labelQty = document.createElement('label');
        labelQty.appendChild(inputQty);
        newRow.querySelector('td.qty').appendChild(labelQty);
        
        // Appends children (a text node and a span) to the "subtot" cell:
        let subtotCell = newRow.querySelector('td.subtot');
        subtotCell.appendChild(currency.cloneNode());
        subtotCell.appendChild(newSpan.cloneNode());
        subtotCell.firstElementChild.innerHTML = '0';

        // Creates the "delete" button and places it inside his cell:
        let rmButton = document.createElement('button');
        rmButton.className = 'btn btn-delete';
        rmButton.innerHTML = ('Delete');
        newRow.querySelector('td.rm').appendChild(rmButton);
        
        // Adds the new row to the table's body:
        cart.appendChild(newRow);

        // Clears the inputs:
        document.querySelectorAll('tfoot input').forEach(input => input.value = "");

        // Calls these functions to add the neccesary events to the new created row:
        addEventToQtyInput();
        addEventToDeleteButton();
    }   
}