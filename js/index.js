// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;
  //querySelector captura um elemento (o que está entre parênteses) - no caso queremos o span e o input
  //product.querySelector deixa a busca mais específica porque procura só dentro do product. Quando fazemos document.querySelector, estamos procurando no html inteiro
  //innerText já pego o preço que está dentro do meu span. Poderia fazer 'price.innerText;' É INER PORQUE É SPAN
  //value retorna o valor do atributo 'value' de um campo de texto É VALUE PORQUE É UM INPUT
  //usamos inner e value para extrair os valores específícos deles

  const subtotal = +price * +quantity;
  //+ transforma de string em number

  const subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.innerText = subtotal;
  //obtém o elemento DOM que deve conter o subtotal e exibir esse preço
  //o innerText vai colocar um texto novo dentro do substotal - que vai ser o subtotal que aparece lá no carrinho do supermercado
  return subtotal;
  //retornar para que possa usá-lo posteriormente
}

//essa função é para adicionar mais produtos no carrinho e calcular o subtotal de cada produto
function calculateAll() {
  // código a seguir é add apenas para fim de teste
  // É executado apenas quando a iteração 1 é concluída. POsteriormente pode ser removido
  //const singleProduct = document.querySelector(".product");
  //updateSubtotal(singleProduct);
  //esses dois códigos aqui era para fazer a functionSubtotal funcionar parece - já estava aqui no código
  // end of test

  // ITERATION 2
  let totalPricesSum = 0;
  const products = document.querySelectorAll(".product");
  products.forEach((singleProduct) => {
    totalPricesSum += updateSubtotal(singleProduct); //isso aqui faz part eda iteração 3 que a cada produto vai gerando essa iteração

    const totalPriceElement = document.querySelector("#total-value span");

    totalPriceElement.innerText = totalPricesSum;
  });

  // ITERATION 3
  //fazer o total somar todos os subvalores
  //... your code goes here
}

// ITERATION 4
//remover um produto e atualizar o total substraindo o subtotal

function removeProduct(event) {
  const productToRemove = event.currentTarget.parentNode.parentNode; //nos permite acessar dentro da remove product o proprio botao que foi clicado
  //com .parentNode.parentNode consigo pegar a tr inteira
  const tableBody = productToRemove.parentNode;
  //isso coloca pra quando remover um produto, o valor total diminui
  tableBody.removeChild(productToRemove);
  //pra remover a tr inteira quando remove o produto. Não deixa só ela vazia
  calculateAll();

  //productToRemove.innerHTML = ""; //tudo o que tinha no tr passa a ser um tr vazio quando clica no remove
  //calculateAll();
  //não usaremos mais esses dois porque tá dando problema na hora de remover os produtos
}

//evento é acionado quando a página carrega. Daí quando ela carregar vai executar a função que é colocar um evento de click no botão de calcular preços (aquele azul)
//toda vez que esse botão for clicado ele vai chamar o calculateAll - a calculateAll chama a função updateSubtotal --> tudo se ligaaa
//tem isso para garantir que quando for pegar o botão, ele já esteja carregado na tela. Se tirar essa função, vai funcionar igual

window.addEventListener("load", () => {
  //com o 'load' a gente só tá criando eventlistener quando a página já carregou então depois que insere uma coisa nova, não remove mais. Por isso precisa refatorar e deixei comentado umas linhas de código
  //essa parte é para calcular o preço total do carrinho
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.onclick = calculateAll;
  //esses dois são para criar um novo produto

  //iteração 5 --> quer que criemos novos produtos
  //criar um novo produto
  const createButton = document.getElementById("create");
  createButton.onclick = createProduct;

  //pegar todos os botões que tem o 'remove' e todos os botoes tem a clase btn btn remove
  //remover um produto da lista
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((button) => {
    //fiz um loop no botão e a cada iteração vou pegar cada um deles de forma separada
    button.onclick = removeProduct;
  });
});

//iteração 5 --> coloca um id "new-product-name" no html e "new-product-price" pra conseguir acessar com mais facilidade
function createProduct() {
  const productNameElement = document.querySelector("#new-product-name");
  const productPriceElement = document.querySelector("#new-product-price");

  const productsContainer = document.querySelector("tbody"); //a tag lá do html que contém os produtos

  //cria uma nova tr com todos os elementos dentro
  //colocamos um html novo dentro do já existente
  const newProduct = `
      <tr class="product">
          <td class="name">
            <span>${productNameElement.value}</span>
          </td>
          <td class="price">$<span>${productPriceElement.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>
  `;

  //+= porque daí ele pega tudo que já existe e concatena no fim. Se não faz isso, ele adiciona mas exclui todo o resto que já tem
  productsContainer.innerHTML += newProduct;
  //mas o 'remove' ainda não funciona e quero que os campos estejam limpos quando adicionar os produtos

  const removeButtons = productsContainer.querySelectorAll(".btn-remove");
  removeButtons.forEach((button) => {
    button.onclick = removeProduct;
  });
  //isso remove os produtos

  productNameElement.value = "";
  productPriceElement.value = 0;
  //isso limpa os campos
}
