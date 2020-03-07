// ITERATION 1

function updateSubtotal($product) {

  for (let i=0; i < $product.length; i++) {
    let price = parseFloat($product[i].getElementsByClassName('price')[0].innerText.replace('$', ''));
    let quantity = $product[i].querySelector('.quantity').children.item(0).value;

    let subtotal = $product[i].querySelector('.subtotal').lastChild;
      subtotal.innerText = price * quantity;
  }
}

function calculateAll() {
  // ITERATION 2
    let products = document.getElementsByClassName('product')
    updateSubtotal(products);


  // ITERATION 3
    function getTotal() {
      const subtotals = [...document.getElementsByClassName("subtotal")];
      const total = subtotals.reduce(
        (acc, item) => (acc += Number(item.lastChild.innerText)),
        0
      );
      return total;
    }

    const total = document.getElementById("total-value").lastChild;
    total.innerText = getTotal();
}

window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');

  $calculateTrigger.addEventListener('click', calculateAll);
});


// ITERATION 4

let buttons = document.getElementsByClassName('btn btn-remove');
  for (let i=0; i < buttons.length; i++) {
      let button = buttons[i];
      button.addEventListener('click', function(event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}


// ITERATION 5

let button = document.getElementById('create')
  button.addEventListener('click', createProduct)

function createProduct (event) {
  let button = event.target

  let newProduct = document.querySelector('.create-product').children.item(0).firstElementChild.value;
  let newPrice = document.querySelector('.create-product').children.item(1).firstElementChild.value;

  addItemToCart(newProduct, newPrice)
}

function addItemToCart (product, price) {
  const cartRow = document.createElement('tr')
  const cart = document.getElementById('cart')

  cartRow.innerHTML = `
  <tr class="product">
    <td class="name">
      <span>${product}</span>
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
  `

  cart.appendChild(cartRow)
}



  



