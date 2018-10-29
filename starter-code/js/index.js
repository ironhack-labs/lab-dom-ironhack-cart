
  
window.onload = function(){
  let calculatePriceButton = document.getElementById('calc-prices-button');
  let arrayOfProducts = document.getElementsByClassName("product");
  let deleteButtons = document.getElementsByClassName("btn-delete");
  let addItemButton = document.getElementById("addItem");  
  let quantity = document.getElementsByTagName("input");
  let price = document.getElementsByClassName("price");
  let container = document.getElementsByClassName("container");
  calculatePriceButton.onclick = function getTotalPrice() {
    let totalitos = 0;
    for (let i = 0; i < arrayOfProducts.length; i++){
      let totalDOM = quantity[i].value * price[i].innerHTML;
      document.getElementsByClassName("total")[i].innerHTML = totalDOM; 
      totalitos += totalDOM
    }
    document.getElementById("grandTotal").innerHTML = totalitos;
  }


  function deleteHandler(e) {
    container[0].removeChild(e.currentTarget.parentNode.parentNode);
  }
  
  for (let i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].onclick = deleteHandler;
  }

  addItemButton.onclick = function addItem (){
    let newItem = document.getElementById("newItem").value; 
    let newPrice = document.getElementById("newPrice").value;
    container[0].insertAdjacentHTML("beforeend" , `
      <div class="wrapper">
        <div><span class="product"> ${newItem}</span></div>
        <div>$<span class="price">${newPrice}</span></div>
        <div><label>QTY</label><input type="number" value="0" class="quantity"></div>
        <div>$<span class="total">0.00</span></div>
        <div><button type="button" class="btn btn-delete">Delete</button></div>
      </div>`)

    function deleteHandler(e){
      container[0].removeChild(e.currentTarget.parentNode.parentNode);
    }

    for (let i = 0; i < deleteButtons.length; i++){
      deleteButtons[i].onclick = deleteHandler;
    }
  };
}
   

    

   
 

