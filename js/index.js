// ITERATION 1

function updateSubtotal(product) {
  // Originalmente eu tinha usando document ao invés de .product aqui
  // isso tinha me travado em pegar apenas o primeiro elemento
  // não conseguia pensar em um jeito de fazer de fazer pra função passar pelos outros produtos
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  const subTotalValue = quantity.valueAsNumber * parseFloat(price.innerText);

  subtotal.innerText = subTotalValue;

  // Adicionado o return fazendo com que o retorno função possa ser aproveitado para calcular o total
  return subTotalValue;
}

function calculateAll() {
  // Originalmente o que eu tinha escrito aqui funcionaria,
  // se na primeira função eu não tivesse locado no primeiro elemento com o document.querySelector.
  // Esse loop passa pelos elementos da classe ".product" e depois transformei em array com um spread operator,
  // nesse array eu posso passar um .forEach e usar esses elementos pra passar a função de subtotal
  const allProducts = document.getElementsByClassName('product');
  const arrayProducts = [...allProducts];

  let total = 0;
  const totalValue = document.querySelector('#total-value span');

  arrayProducts.forEach((el) => {
    updateSubtotal(el);
    // tendo esse passo abaixo já há uma atualização da variável "total" 
    // com isso pode ser usada depois pra atualizar o total do carrinho
    total += updateSubtotal(el);
  });

  totalValue.innerText = total;
}

// Lembro da ideia do código no codeAlong, mas achei que ficou bem enxuto.
function removeProduct(event) {
  const target = event.target;

  const row = target.parentNode.parentNode;

  row.remove();
}

function createProduct() {
  // Era necessário primeiro pegar o elemento e depois pegar o valor desses elementos
  const nameInput = document.querySelector('.create-product input');
  const nameValue = nameInput.value;

  // Apesar de ter sido eu que fiz o comentário demorei
  // um pouco pra lembrar que eu poderia usar o atributo para a busca.
  const priceInput = document.querySelector('.create-product input[type="number"]');
  const priceValue = priceInput.valueAsNumber;

  // Adição interessante de verificação, mas não era obrigatória no tes
  if (!priceValue || !nameValue) {
    window.alert('É necessário preencher o nome do produto e o valor');
    return;
  }
  
  // Criar o produto usando os valores capturados pelos .querySelectorS acima
  const newProduct = `
  <tr class="product">
    <td class="name">
      <span>${nameValue}</span>
    </td>
    <td class="price">$<span>${priceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `;
  // Adicionar o produto criado ao carrinho.
  const tbody = document.querySelector('#cart tbody');
  tbody.innerHTML += newProduct;

  // Adicionar a funcionalidade ao botão remover quando é criado
  // não lembrava como tinha sido feito no codeAlong
  // o código abaixo funciona, mas com certeza não é o jeito mais inteligente de fazer
  const removeBtns = document.getElementsByClassName('btn-remove');
  for (let button of removeBtns) {
    button.addEventListener('click', removeProduct);
  }

  nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.getElementsByClassName('btn-remove');
  for (let button of removeBtns) {
    button.addEventListener('click', removeProduct);
  }
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
