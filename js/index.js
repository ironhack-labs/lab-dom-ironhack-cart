// ITERATION 1

function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');
    let quantity = product.querySelector('.quantity input').value;
    let price = product.querySelector('.price span').textContent;
    let subtotal = quantity * price;
    product.querySelector('.subtotal span').innerHTML = subtotal;
    return subtotal;
}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    // ITERATION 2
    const singleProduct = document.querySelectorAll('.product');
    console.log(singleProduct);
    const arrayProduct = [...singleProduct];
    let total = 0;
    arrayProduct.forEach((element) => {
          total += updateSubtotal(element);
    });
    // ITERATION 3
    // document.getElementById('total-value span').innerHTML = total;
    document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    // console.log('The target in remove is:', target);
  
    const childProduct = target.parentNode.parentNode;
    const parentProduct = childProduct.parentNode;
    parentProduct.removeChild(childProduct);
    calculateAll();
}

// ITERATION 5

function createProduct() {

  const proNewName=document.querySelector(".create-product input[type='text']").value;
  const proNewPrice=document.querySelector(".create-product input[type='number']").value;
  const parentNode=document.querySelector('#cart tbody');
  let newProduct=document.createDocumentFragment();
  let tableTr= document.createElement('tr');
  tableTr.setAttribute('class', 'product');
  tableTr.innerHTML=
    `<td class="name">
        <span>${proNewName}</span>
      </td>
      <td class="price">$<span>${proNewPrice}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    `;
 
 newProduct.appendChild(tableTr);
 parentNode.appendChild(newProduct);
 
 const removeProductBtn=tableTr.querySelector('.btn');
 removeProductBtn.addEventListener('click', removeProduct, true);



}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    const removeProductBtn = [...document.getElementsByClassName('btn btn-remove')];
    removeProductBtn.forEach((element) => {
            element.addEventListener('click', removeProduct, true);
    });

    const createProductBtn = document.querySelector('#create');
    createProductBtn.addEventListener('click',createProduct);
});
