// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal= product.querySelector('.subtotal span');
  let soma = price*quantity;
  subtotal.innerHTML=soma;
  return soma;
}

function calculateAll() {
  let products = document.getElementsByClassName('product');
  let products_array = [...products]
  let total_array = [];

  for (p of products_array){
    let a = updateSubtotal(p);
    total_array.push(a);
  }

  let total = 0;

  for (let i=0;i<total_array.length;i++){
    total+=total_array[i];
    
  }

  document.getElementById('total-value').innerHTML = 'Total: $'+total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let parent = target.parentNode;
  let product = parent.parentNode;
  let tbody = product.parentNode;
  tbody.removeChild(product)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  var inputName= document.getElementById('inputName').value;
  var inputQuantity= document.getElementById('inputQuantity').value;
  var inputPrice = document.getElementById('inputPrice').value;
  

  
  let item = document.querySelector('.product');
  
  let rowClone = item.cloneNode(true);

  if (inputQuantity !=0 && inputName && inputPrice!=0){
    document.getElementsByTagName('tbody')[0].appendChild(rowClone)
  } else{
    alert('Please Input Name, Quantity and Suggested Price')
  }

  rowClone.querySelector('.name span').innerText = inputName;
  rowClone.querySelector('.quantity input').value = inputQuantity;
  rowClone.querySelector('.price span').innerText = inputPrice;

  calculateAll();

  window.addEventListener('click',()=>{
    const removeButton = document.getElementsByClassName('btn btn-remove');

    for (btn of removeButton){
      btn.addEventListener('click', removeProduct)
    }
  })
}

function update() { window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const remove_buttons = document.getElementsByClassName('btn btn-remove');

  for (btn of remove_buttons){
    btn.addEventListener('click', removeProduct)
  }

  const create = document.getElementById('create');
  create.addEventListener('click', createProduct)

})};
update();
