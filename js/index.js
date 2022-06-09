// ITERATION 1


function updateSubtotal (product) {  
  console.log(product);
  const price = Number(product.querySelector('.price span').textContent);
  const quantity= Number(product.querySelector('.quantity input').value);
  
  const valueSubtotal=price*quantity;
  const subtotalEl= product.querySelector(".subtotal span");
  subtotalEl.textContent = valueSubtotal
   
  return valueSubtotal
}

function calculateAll() {
 

  // ITERATION 2
  const products = document.getElementsByClassName("product");

  let total = 0
  for (product of products){
    total += updateSubtotal(product);
  }
  //Array.from(productsArr).forEach(pd => { // 75 70  });

  const putTotal= document.querySelector("#total-value span");
  putTotal.textContent=total;
}
 

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  target.parentNode.parentNode.remove()
  
}

// ITERATION 5

function createProduct() {
  //necesito meter los input.value en el nuevo producto tr class = create product
  //con clasee name=== placeholder="Product Name
  //con clase price===placeholder= product price
  const namePd=document.querySelector(".create-product input[placeholder=`Product Name`]").value;
  const pricePd=document.querySelector(".create-product input[placeholder=`Product Price`]").value;
  const body=document.getElementsByTagName("tbody");
  let newPd= document.createElement("tr")
  newPd.className="product"
  newPd.appendChild
  body.appendChild(document.createElement("td").classList.add("name")).appendChild("span").textContent=namePd;
  body.appendChild(document.createElement("td").classList.add("price")).appendChild("span").textContent=pricePd;
  body.appendChild(document.createElement("td").classList.add("quantity")).appendChild("input");
  body.appendChild(document.createElement("td").classList.add("subtotal")).appendChild("span");
  body.appendChild(document.createElement("td").classList.add("action")).appendChild("button").classList.add("btn btn-remove").textContent="Remove";
  
}










window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton =document.getElementsByClassName("btn btn-remove")
  for (btn of removeButton){
    btn.addEventListener('click', removeProduct);

  }
  
  const creatBtn= document.querySelector(".create-product")
  creatBtn.addEventListener('click', createProduct);
  
})
