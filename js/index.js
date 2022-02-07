// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let prices = product.querySelector('.price span');
  let quantity = product.querySelector('.quantidadeItens');
  let resultado = (quantity.value) * (parseFloat(prices.innerHTML))
  product.querySelector('.subtotal span').innerText = resultado  
  console.log('prices:', prices)
  console.log('quantity:', quantity)
  console.log('resultado:', resultado)
  return resultado
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.


  // end of test
  // ITERATION 2
  //... your code goes here
  const todosProdutos = document.getElementsByClassName('product');
  console.log('todosProdutos:', todosProdutos)
  let soma = 0
  for (let i = 0; i < todosProdutos.length; i++) {
    soma += updateSubtotal(todosProdutos[i]);
    console.log(todosProdutos[i])
  }
  //}

  // ITERATION 3
  //... your code goes here
  const valorFinal = document.querySelector('#total-value span');
  valorFinal.innerText = soma;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //... your code goes here
  const produtoExcluido = target.parentElement.parentElement;
  const todosOsProdutos = document.querySelector('.caixaDeItens');

  todosOsProdutos.removeChild(produtoExcluido);
  calculateAll()
}

// ITERATION 5

function createProduct() {
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeItemBtns = document.querySelectorAll('.btn-remove');
  for (let botaoRemoção of removeItemBtns) {
    botaoRemoção.addEventListener('click', removeProduct);
  }
  
  
  //... your code goes here
});
