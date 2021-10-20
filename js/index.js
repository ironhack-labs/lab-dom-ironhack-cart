// ITERATION 1

/**
 * let element = document.getElementById('some-id-goes-here');
 * 
 * // TO ADD TEXT TO DOM USE "innerHTML" 
    theCatDiv.innerHTML = "I'm a cat";
 * 
    let elements = document.getElementsByClassName(names); Collection

    let elements = document.getElementsByTagName(name);

    let theFirstFoundElem = document.querySelector(selectors); first

    let elementList = document.querySelectorAll(selectors);

    .className Getting and Setting the Class Name

    // get the class name of "element"
    let cName = element.className;
    
    // set the class name of "otherElement"
    otherElement.className = cName;

 * 


    To get the value of an element, we will use the method .getAttribute().
    To change the value of an existing attribute on the specified element, call the method .setAttribute().

    The method .removeAttribute() allows us to remove an element’s attribute.   
    You can also create elements in the DOM using document.createElement(tagName);
    Add content into the element and add the element to the DOM h2Tag.innerHTML = 'Elephant';
    To remove an existing element in the DOM, we will need to use the method .removeChild().
 */

function updateSubtotal(product) {
    const price = product.querySelector('.price span').innerHTML;
    const quantity = product.querySelector('.quantity').getElementsByTagName('input')[0].value;
    const subtotal = price * quantity;

    let subtotalHtml = product.querySelector('.subtotal span');

    subtotalHtml.textContent = subtotal;
    return subtotal;


    console.log('Calculating subtotal, yey!', price, quantity, ' ', subtotal);

    //... your code goes here
}

function calculateAll() {
    const products = document.getElementsByClassName('product');
    const totalHtml = document.getElementById('total-value').querySelector('span');
    let total = 0;
    console.log(totalHtml);

    for (let i = 0; i < products.length; i++) {
        total += updateSubtotal(products[i]);
    }

    totalHtml.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target, event.target.parentNode);
    event.target.parentNode.parentNode.remove();
    calculateAll();

    //... your code goes here
}

// ITERATION 5

function createProduct() {
    //... your code goes here
    const productName = document.getElementById('productoName').value;
    const productPrice = document.getElementById('productoPrice').value;
    const tbody = document.getElementsByTagName('tbody');
    console.log()
    tbody[0].innerHTML = `
        <tr class="product">
              <td class="name">
                <span>${productName}</span>
              </td>
              <td class="price">$<span>${productPrice}</span></td>
              <td class="quantity">
                <input type="number" value="0" min="0" placeholder="Quantity" />
              </td>
              <td class="subtotal">$<span>0</span></td>
              <td class="action">
                <button class="btn btn-remove">Remove</button>
              </td>
            </tr>
        `
    console.log(productName)
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    //... your code goes here
});


const buttons = document.getElementsByClassName('btn-remove');
for (let i = 0; i < buttons.length; i++) {
    let boton = buttons[i];
    boton.addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
    const crateButon = document.getElementById('create');
    crateButon.addEventListener('click', createProduct);

    //... your code goes here
});