console.clear()

var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $del = document.getElementsByClassName("btn btn-delete"); //retorna un htmlcollection. Estos contienen los diferentes elementos en forma de lista y para poder acceder hacemos uso del for(foreach no funciona).
//console.log($del)
var $add = document.getElementById('create');
//console.log($add)

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
  
  let parent = document.getElementsByTagName("tbody")
  let selectProduct = document.getElementsByTagName("tr");
  let deleteProduct = parent.removeChild(selectProduct);  
}

function addProduct(){
  console.log("Añadido")
  let trAdd = document.querySelector(".new").nextSibling;
  console.log(trAdd)
  //let nameOfNewProduct= 

  //para añadir hacer un appendchild al tbody
}

$calc.onclick = calcAll;
for (let i=0; i<$del.length; i++){ //la unica forma de poder controlar los botones.
  $del[i].onclick = deleteProduct;
}
$add.onClick = addProduct;// no entiendo porque no funciona

addProduct()//acordarse de luego quitarlo