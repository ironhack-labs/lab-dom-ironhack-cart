var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let $product = document.querySelectorAll(".product");
let $delete = document.querySelector("body");
let $newProduct = document.querySelector("#cart");

function updateSubtot ($product) {
  // Iteration 1.1
  let total = [];
  for (let i = 0; i < $product.length; i++){
    let priceUnit = $product[i].querySelector(".pu span").innerText;
    let quantity = $product[i].querySelector(".qty input").value;
    let subTotal = priceUnit * quantity;
    total.push(subTotal);
    console.log(subTotal);
  }
  return total;
}

function calcAll() {
  // Iteration 1.2
  //Actualiza SubTotal de cada Producto.
  let subTotal = updateSubtot($product);
  for (let i = 0; i < subTotal.length; i++){    
  let changeSubtot = $product[i].querySelector(".subtot span");
  changeSubtot.innerText = subTotal[i];
  }
  //Suma y Actualiza el Total.
  let total = 0;
  let totalNum = document.querySelectorAll(".product .subtot > span");
  for (let i = 0; i < totalNum.length; i++) {
  total += parseInt(totalNum[i].textContent);
}
} 
$calc.onclick = calcAll;
$delete.addEventListener("click", removeProduct);
$newProduct.addEventListener("click",createProduct);

function removeProduct(e) {
  let product = e.target.parentNode.parentNode;
  if (e.target.matches(".btn-delete")) {
    console.log("test")
    product.parentNode.removeChild(product);    
  }
}

function createProduct(e){
  // let tr = document.createElement("tr");
   let tbody = document.querySelector("tbody");
  // tr.setAttribute("class", "product");
  // tbody.insertBefore(tr,tbody.lastChild);
  // let td = document.createElement("td");
  // td.setAttribute("class", "name")
  // tr.insertBefore(td, tr.firstChild);
  //let content = document.querySelector("#mytemplate").content;
  // let targetContent = document.querySelector("tbody");
  //targetContent.appendChild(document.importNode(content, true));
  // console.log(content);
  // console.log(targetContent);
  //$('.tbody').append($('#mytemplate').html());
  
  

  if (e.target.matches("#create")){
    console.log("prueba")
    const template = document.querySelector("template");
  let useTemplate = document.importNode(template.content, true);
  tbody.insertBefore(useTemplate,tbody.lastChild)
    let dataName = document.querySelector("#inputName").value;
    let dataNum = document.querySelector("#inputNum").value;
    console.log(dataName);
    console.log(dataNum);

  }
}
