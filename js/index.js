// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const priceValue = parseFloat(price.innerText);
  const quantity = product.querySelector('.quantity input');
  const quantityValue = quantity.valueAsNumber;
  const subtotalValue = priceValue * quantityValue;
  const subTotalElement = product.querySelector('.subtotal span');
  subTotalElement.innerText = subtotalValue;
  return subtotalValue;
}
 
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //1- Duplicar o tr product para adicionar mais um item na lista
  //1- call updateSubtotal pra todo tr.product
  const products = document.getElementsByClassName('product');
  let totalValue = 0;
  for (let i=0; i<products.length; i++) {
 totalValue += updateSubtotal(products[i])
  }
  
  // ITERATION 3
  let totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = totalValue;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const trProduct = target.parentNode.parentNode;
  const trProductList = trProduct.parentNode;
  trProductList.removeChild(trProduct);

  calculateAll()
  
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  // 1-Referenciar productname e preço e btn create
  // 2- extrair as informaçoes de nome produto e preço
  // 3- gerar uma nova linha de produto como as anteriores
  // 4- vincular o botão create com a nova linha de produto
  // 4- fazer essa linha funcionar como as outras

  let productNameElement = document.querySelector('.create-product input[type=text]')
  let productNameValue= productNameElement.value
  let productPriceElement = document.querySelector('.create-product input[type=number]')
  let productPriceValue = productPriceElement.valueAsNumber
  let productPriceValueRound = productPriceValue.toFixed(2)
  let tbodyList = document.getElementsByTagName('tbody')[0]
  


  let newProduct = `
   <tr class="product">
      <td class="name">
          <span>${productNameValue}</span>
      </td>
      <td class="price">$<span>${productPriceValueRound}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>`;

  tbodyList.insertAdjacentHTML("beforeend", newProduct);

  const removeBtn = tbodyList.lastChild.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);
  }

  let btnCreateElement = document.getElementById('create')
  if (btnCreateElement) {
    btnCreateElement.addEventListener('click', createProduct)
  }
  //... your code goes here
});
