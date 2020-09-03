let parentLine = document.querySelector('tbody');

function updateSubtotal(product) {
 // console.log('Calculating subtotal, yey!');
  
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let displaySubTotalPrice = product.querySelector('.subtotal span');

  var subTotalPrice = price * quantity;



  return displaySubTotalPrice.innerHTML = subTotalPrice;;
}


function calculateAll() {
  const singleProduct = document.getElementsByClassName('product');
  let total = 0;

  Array.prototype.forEach.call(singleProduct, function(element) {
    let oneLineProduct = element;
    let oneProductSubTotal = updateSubtotal(oneLineProduct);
    total = oneProductSubTotal + total;
});

document.querySelector('#total-value span').innerHTML = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  let productLine = target.parentNode.parentNode;
   parentLine.removeChild(productLine);
  calculateAll();

}

// ITERATION 5

function createProduct() {
  console.log("create button works")
  let nameValueInputed = document.querySelector('.create-product input:nth-child(1)').value;
  let priceValueInputed = document.querySelector('.create-product td:nth-child(2) input').value;
  const tr = document.createElement("tr");
  tr.classList.add("product");
  tr.innerHTML += `
    <td class="name">
      <span>${nameValueInputed}</span>
    </td>
  <td class="price">$<span>${priceValueInputed}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td> `
  parentLine.appendChild(tr);




document.querySelector('.create-product td:nth-child(1)').innerHTML = `<input type="text" placeholder="Product Name" />`;
priceValueInputed.value = 0;
 
/*
const allRemoveBtn = document.querySelectorAll(".btn.btn-remove");
  console.log(allRemoveBtn)
  Array.prototype.forEach.call(allRemoveBtn, function(element) {
  element.addEventListener('click',removeProduct);  
  });
  */
 const allRemoveBtn = document.querySelectorAll(".btn.btn-remove");

 Array.prototype.forEach.call(allRemoveBtn, function(element) {
 element.addEventListener('click',removeProduct);  
 });

  
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const allRemoveBtn = document.querySelectorAll(".btn.btn-remove");
  console.log(allRemoveBtn)
  Array.prototype.forEach.call(allRemoveBtn, function(element) {
  element.addEventListener('click',removeProduct);  
  });

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
  
});
