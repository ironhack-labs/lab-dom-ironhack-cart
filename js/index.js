// ITERATION 1

console.log(' js is working ')

function updateSubtotal(product) {
  console.log(product);   // como acessar index [] ?

  // console.log(`Calculating subtotal, yey!`);
  const price = product.querySelector('.price span').innerHTML   // pq o ponto antes da classe?
  const qty = product.querySelector('.quantity input').value;
  let subTotal = price * qty;
  
  let newSubtotal = product.querySelector('.subtotal span');
  newSubtotal.innerHTML = subTotal;
  
  return subTotal;   // TERIA OUTRA FORMA?

}
// ITERATION 2

function calculateAll() {
  let sumTotal = 0;

  const singleProducts = document.querySelectorAll('.product');
  for (products of singleProducts) {
    updateSubtotal(products);
    sumTotal += updateSubtotal(products)   // está rodando duas vezes.
  }

const totalValue = document.querySelector(`#total-value span`);
totalValue.innerHTML = sumTotal;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;  // já estava nao entendi a sintaxe . 
  console.log('The target in remove is:', target);
 
  let child = target.parentNode.parentNode;  //   TR
  let parent = child.parentNode;  // tbody 
  // console.log (parent);
  parent.removeChild(child)

  calculateAll()  

}

// ITERATION 5

function createProduct() {
  console.log('Creating product , nice!');

  let newProductname = document.querySelector('.new-product input').value;   // eu criei classe no index, podia?

  let newPrice = document.querySelector('.new-price input').value; // mesma coisa aqui
 
  if (newProductname === '' || newPrice === '') return false;  // tem outra forma?

  
  let newLine = document.createElement("tr");
  newLine.setAttribute("class", "product");   // poderia evitar tudo isso e colocar tudo no innerHTML? 

  newLine.innerHTML = `<td class="name">
    <span>${newProductname}</span>
  </td>
  <td class="price">$<span>${newPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;

 
 let tBody = document.querySelector('tbody');
 tBody.append(newLine);  

newProductname.innerHTML  = '';   // nao ta limpando
newPrice.innerHTML = '';


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);  //pq nao tem ()

  const createProductsBtn = document.getElementById('create');
  createProductsBtn.addEventListener('click', createProduct);

  const removeProductsBtn = document.getElementsByClassName('btn btn-remove');
    for (btn of removeProductsBtn){
      btn.addEventListener('click', removeProduct);   // pq nao pega o criado?
    }
  
});


