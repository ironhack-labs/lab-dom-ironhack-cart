// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceContent = Number(price.textContent);
  const quantityContent = Number(quantity.value); //aqui vai pegar o valor do input

  const subtotalContent = priceContent * quantityContent;   //cálculo do subtotal do produto

  //colocar esse subtotalContent no campo exato dele no html (colocar esse campo/local numa variavel)
  const subtotal =  product.querySelector ('.subtotal span');

  subtotal.innerText = subtotalContent; //innerText colocando o texto, o cálculo, lá no campo do subtotal 

  return subtotalContent; 
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product');    //é um array de vários produtos
  let totalMultiply = 0;
  products.forEach(product => {            //método de array
    totalMultiply += updateSubtotal(product);
  });


  // ITERATION 3
  let totalValue = document.querySelector('#total-value span')   //onde é dirigido o valor calculado
  totalValue.innerText = totalMultiply;     //colocando texto da multiplicaçao de valores nesse campo
}

// ITERATION 4 
//botão do remove, lá na window onde já carrega a função quando carrega a página (load), automático

function removeProduct(event) {
  const target = event.target;
  //preciso deletar o product, que é pai do pai do button, então:
  const row = target.parentNode.parentNode;
  row.remove();
  calculateAll();       //chamo novamente para somar novamente os produtos que nao foram removidos
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn btn-remove');   //é um array de vários botoes possiveis de remove
  [...removeButtons].forEach(button => {
    button.addEventListener('click', removeProduct);
    //button.onclick(removeProduct);           //chamando a funçao que quero ao clicar o botao do remove
  });

});
