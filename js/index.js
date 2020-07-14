// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span').innerText;
  console.log(price);
  let quantity = product.querySelector('.quantity input').value;
  console.log(quantity)
  let subtotal = price * quantity;
  console.log(subtotal);
  product.querySelector('.subtotal span').innerHTML = subtotal;
}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // end of test

  // ITERATION 2
  let products = document.querySelectorAll('.product');
  console.log(products)
  products.forEach((elem)=>{
    console.log(elem);
    updateSubtotal(elem);
  })


  // ITERATION 3
  let totalAmount = 0;
  let subtotalsArr = document.querySelectorAll('.subtotal span')
  console.log(subtotalsArr);
  subtotalsArr.forEach((elem)=>{
    totalAmount = totalAmount + Number(elem.innerHTML)
  })
  console.log(totalAmount)
  document.querySelector('#total-value span').innerText =totalAmount;

}

// ITERATION 4

function removeProduct(element) {

  element.addEventListener('click',(event)=>{
  let delElem = event.target.parentNode.parentNode;
  console.log(delElem);
  delElem.parentNode.removeChild(delElem);
  })
}

// ITERATION 5

function createProduct() {
  document.querySelector('#create').addEventListener('click',()=>{
    let Products = document.querySelector('tbody');
    let NewProductName = document.querySelectorAll('.create-product input')[0].value;
    let NewProductPrice = document.querySelectorAll('.create-product input')[1].value;
    let NewProduct = document.createElement('tr')
    console.log(NewProduct);
    NewProduct.classList.add('product');
    NewProduct.innerHTML = `<td class="name">
    <span> ${NewProductName} </span>
    </td>
    <td class="price">$<span> ${NewProductPrice} </span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
     <button class="btn btn-remove">Remove</button>
    </td>`
    console.log()
    Products.appendChild(NewProduct);
    document.querySelectorAll('.create-product input').forEach((elem)=>{
      elem.value = "";
    });
    let dltBtn = NewProduct.querySelector('.btn-remove');
    removeProduct(dltBtn);
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const deleteBtns = document.querySelectorAll('.btn-remove');
  deleteBtns.forEach((elem)=>{
    removeProduct(elem);
  });

  createProduct();
});
