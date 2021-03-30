// ITERATION 1

function updateSubtotal(product) {
    // console.log('Calculating subtotal, yey!');
    // console.log(product);
    
    const price = product.querySelector('.price span').innerHTML;
    let quantity = product.querySelector('.quantity input').value;
    let subtotal = price * quantity;
    product.querySelector('.subtotal').innerHTML = `<span>$${subtotal}</span>`;
    // console.log(subtotal);
    return subtotal;
  }

function calculateAll() {
    let products = document.querySelectorAll('.product');
    console.log(products);
    let total = 0;
    products.forEach(function (product) {
      total += updateSubtotal(product);
    })
    // console.log(total);
    
    document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    //... your code goes here
    const table = document.querySelector('tbody'); 
    const row = target.parentNode.parentNode;
    const subtotal =  row.querySelector('.subtotal span').innerText;
    document.querySelector('#total-value span').innerText - subtotal;
    row.querySelector('.subtotal span').innerText = 0;
    table.removeChild(row);

    calculateAll();
}

// ITERATION 5

function createProduct() {
    const newProduct = document.querySelector('.create-product')
    const name = newProduct.querySelector('input[type="text"]').value;
    const price = newProduct.querySelector('input[type="number"]').value;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
    <tr class="product">
      <td class="name">
        <span>${name}</span>
      </td>
      <td class="price">$<span>${price}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>
    `;
    newRow.classList.add('product');
    document.querySelector('tbody').append(newRow);
    newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);
    document.querySelector('.create-product input[type=text]').value = '';
    document.querySelector('.create-product input[type=number]').value = 0;

}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    //... your code goes here
    const removeButtons = document.querySelectorAll('.btn-remove');
    removeButtons.forEach(function (btn) {
      btn.addEventListener('click', removeProduct);
    })

    const createProductBtn = document.querySelector('#create');
    createProductBtn.addEventListener('click', createProduct);
});