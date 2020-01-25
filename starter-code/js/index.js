console.clear()

var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $del = document.getElementsByClassName("btn btn-delete"); //retorna un htmlcollection. Estos contienen los diferentes elementos en forma de lista y para poder acceder hacemos uso del for(foreach no funciona).
var $add = document.getElementById('create');

function updateSubtot(product) {
  // Iteration 1.1
  //console.log($product)
  //const selectProduct = $product.childNodes;
  //console.log(selectProduct);
  const priceOfProduct = parseInt(product.querySelector(".pu>span").textContent);
  console.log("The price of the product is " + priceOfProduct)
  
  const quantityOfProducts = parseInt(product.querySelector(".qty>label>input").value);
  console.log("The quantity of the products selectioned are " +quantityOfProducts)
  
  const subTotalOfProduct = product.querySelector(".subtot>span")
  //console.log(subTotalOfProduct)
  const sum = priceOfProduct*quantityOfProducts
  console.log("The sub-total is " + sum)
  subTotalOfProduct.innerHTML = `${sum}`
  return sum;
}

//updateSubtot($cart)

function calcAll() {
    const takeProducts = $cart.getElementsByClassName("product");
    //console.log(takeProducts)
    let totalPriceOfProducts = 0
    for (let i = 0; i<takeProducts.length; i++){
      totalPriceOfProducts += updateSubtot(takeProducts[i])
    }
    console.log(totalPriceOfProducts)
    const totalPrice = document.getElementsByTagName("h2")[0].lastElementChild;
    //console.log(totalPrice)
    totalPrice.innerHTML =`${totalPriceOfProducts}`
}

function deleteProduct(){
  console.log("Eliminado")
  //como indico el producto que queremos eliminar?
  
  let selectProduct = document.querySelector('tr');
  $cart.removeChild(selectProduct);  //error saying that tbody is not a parent of tr?!
}

function addProduct(){
  console.log("Añadido")
  let nameOfNewProduct = document.querySelector("tfoot>tr>td>input").value;
  console.log("Esto es el nombre del nuevo producto "+ nameOfNewProduct);
  let priceOfNewProduct = parseInt(document.querySelector("tfoot>tr>td:nth-child(2)>input").value);
  console.log("Este es el precio del nuevo producto "+ priceOfNewProduct);
  
  let trNode = document.createElement("tr");
  trNode.className = "product";
  const codeOfNewProduct = `
        <td class="name">
          <span>${nameOfNewProduct}</span>
        </td>
    
        <td class="pu">
          $<span>${priceOfNewProduct}</span>
        </td>
    
        <td class="qty">
          <label>
            <input type="number" value="0" min="0">
          </label>
        </td>
    
        <td class="subtot">
          $<span>0</span>
        </td>
    
        <td class="rm">
          <button class="btn btn-delete">Delete</button>
        </td>`
  trNode.innerHTML = codeOfNewProduct;
  $cart.appendChild(trNode);

  let clearNameOfNewProduct = document.querySelector("tfoot>tr>td>input")
  clearNameOfNewProduct.value = ""; //why not is possible with innerHTML?
  priceOfNewProduct.value = "";
  

}

$calc.onclick = calcAll;
for (let i=0; i<$del.length; i++){ //la unica forma de poder controlar los botones.
  $del[i].onclick = deleteProduct;
}
$add.onclick = addProduct;// no entiendo porque no funciona