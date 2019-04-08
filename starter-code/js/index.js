const allProducts = document.querySelector('#allProducts')
let calculateBtn = document.getElementById("btn-success");
let deleteBtns = document.getElementsByClassName("btn-delete");
let quantity = document.getElementsByClassName("qty");
let price = document.getElementsByClassName("price");
let finalTotal =document.getElementsByClassName("final-total")
const createProductBtn = document.getElementById("create-product")
const newProductName = document.getElementById("product-name")
const newProductPrice = document.getElementById("product-price")

window.onload = function(){
    makeDeleteButton()
    createProductBtn.onclick = createProduct
  }
  
calculate.onclick = function() {
    let result = 0;
    for(let i = 0; i < quantity.length; i++){
    document.getElementsByClassName("total-price")[i].innerHTML = "$" + ((Number((price[i].innerHTML).substr(1))) * Number(quantity[i].value))
    result += ((Number((price[i].innerHTML).substr(1))) * Number(quantity[i].value))
    }    
    finalTotal[0].innerHTML = "$" + result;
}

const deleteItem = item => {
    allProducts.removeChild(item.currentTarget.parentNode.parentNode) 
  }
const makeDeleteButton = () => {
    for(i = 0; i < deleteBtns.length ; i++) {
        deleteBtns[i].onclick = deleteItem
    }
  }

  const createProduct = () => {
    console.log(createProduct)
    if(newProductName.value && newProductPrice.value) {
        const newProduct = document.createElement("section")
        newProduct.setAttribute("class", "product")
        newProduct.innerHTML = `
        <div class="firstMiddle">
            <span>${newProductName.value}</span>
        </div>
        <div class = "secondMiddle">
            <span class="price">$${newProductPrice.value}</span>
        </div>
        <div>
            <label>QTY</label>
            <input class ="qty" type="number" placeholder="0" name="QTY-1">
        </div>
        <div class="total-price">
            <span>$0.00</span>
        </div>
        <div>
            <button class="btn-delete">Delete</button>
        </div>
        `
        makeDeleteButton()
        allProducts.appendChild(newProduct)
    }else{
        console.log("No funciona Carnal")
    }
}	