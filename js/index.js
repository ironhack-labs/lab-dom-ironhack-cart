// ITERATION 1

function updateSubtotal(product) {
  //console.log(product);

  const priceElementContent = product.querySelector('.price span').innerText;
  const quantityElementContent = product.querySelector('.quantity input').value;
  
  const subtotal  = priceElementContent * quantityElementContent;

  product.querySelector('.subtotal span').innerText = subtotal;

  return subtotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product');
  //console.log(products);
  const productsArr = Array.from(products);
  //console.log(productsArr);

  function total () {
    const reducer = (sum, item) => {
      return sum + updateSubtotal(item)
    }

    return productsArr.reduce(reducer, 0);
  }
  
  //console.log(total());


  // ITERATION 3
  //... your code goes here
  const totalElement = document.getElementById('total-value');
  totalElement.firstElementChild.innerText =  total();


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const elementToRemove = target.parentNode.parentNode;
  target.parentNode.parentNode.parentNode.removeChild(elementToRemove);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productToCreate = document.querySelector('.create-product');
  const productName = productToCreate.firstElementChild.firstElementChild.value;
  const productPrice = productToCreate.childNodes[3].firstElementChild.value;

  const newProduct = `
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
`;

  const tbody = document.querySelector('tbody');

  tbody.innerHTML = tbody.innerHTML + newProduct;

  //????
  const products = document.querySelectorAll('.product');
  const productsArr = Array.from(products);

  productsArr.map((item) => {
    const btnRemove = item.lastElementChild.firstElementChild;
    btnRemove.addEventListener('click', removeProduct);
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const products = document.querySelectorAll('.product');
  const productsArr = Array.from(products);

  productsArr.map((item) => {
    const btnRemove = item.lastElementChild.firstElementChild;
    btnRemove.addEventListener('click', removeProduct);
  });
  
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

});
