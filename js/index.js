// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const priceSpan = product.querySelector('.price span');
  const price = Number(priceSpan.innerText);
  console.log('price', price)

  const quantityInput = product.querySelector('.quantity input');
  const quantity = Number(quantityInput.value);
 
  let subtotal = price * quantity;
  const subTotalSpan = product.querySelector(".subtotal span");
  subTotalSpan.innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');

  let total = 0;

  products.forEach(product => {
    total+= updateSubtotal(product);
  })

  document.querySelector("#total-value span").innerText = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove();
  calculateAll()
  
}

// ITERATION 5

function createProduct() {
  
    let newProduct = document.getElementsByClassName('create-product input').value;
    const newPrice = document.getElementsByClassName('creat-product :nth-child(2) input').value;

    const Products = document.querySelector('tbody');

    const NewElement =document.createElement('tr');
    NewElement.setAttribute('class', 'product');
     NewElement.innerHTML = `
  <td class="name">
    <span> ${newProduct} </span>
  </td>
  <td class="price">$<span>${newPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`

  Products.append(NewElement);
    }

  window.addEventListener('load', () => {
     calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    //... your code goes here
    const removeBtns = document.querySelectorAll('btn-remove');
    removeBtns.forEach((element) => {
      element.addEventListener('click', removeProduct)
    });
    

    const AddBtns = document.getElementById('create')
    AddBtns.addEventListener ('click', createProduct);

  });
  

