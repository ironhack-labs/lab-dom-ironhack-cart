function changeTotalUnitPrice(){
  let card                 = document.querySelectorAll('.card');
  for(let i=0; i<card.length; i++){
    let productPrice          = document.getElementsByClassName('product-price')[i].innerText;
    let quantity              = document.getElementsByClassName('quantity')[i];
    let totalUnitPrice        = document.getElementsByClassName('total-unit-price')[i];
    totalUnitPrice.innerText  = productPrice*(quantity.value);
  }
}

//click event to calculateButton
document.getElementById('calculete-button').onclick = function() {
  let card                 = document.querySelectorAll('.card');
  let finalPrice              = 0;
  console.log(card)
  for(let i=0; i<card.length; i++){
    
    let productPrice          = document.getElementsByClassName('product-price')[i].innerText;
    let quantity              = document.getElementsByClassName('quantity')[i];
    let totalUnitPrice        = document.getElementsByClassName('total-unit-price')[i];
    totalUnitPrice.innerText  = productPrice*(quantity.value);
    
    // console.log(totalUnitPrice.innerText)
    finalPrice = finalPrice+parseInt(totalUnitPrice.innerText);
  }
  //change the "total" background with the price and att the final price
  document.querySelector('.card-total').classList = 'card card-total';

  var cardTotal = document.querySelector('.card-total');

  if( finalPrice < 51 ){
    cardTotal.classList.add('bg-success', 'text-white');
  }else if( finalPrice >= 50 || finalPrice <= 100){
    cardTotal.classList.add('bg-danger', 'txt-white');
  }
  document.querySelector('#total-price').innerHTML = finalPrice;
}


//add new itens
function addNewItens(){
  let newProductName = document.getElementById('new-product-name');
  let newProducPrice = document.getElementById('new-product-price');
  console.log(newProducPrice.value);

  let html = `
          <div class="card mt-4">
            <div class="card-header">
              <span>${newProductName.value}</span>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-3">
                  $<span class="product-price">${newProducPrice.value}</span>
                </div>
                <div class="col-5 row form-group">
                    <label for="quantity" class="col-3">QTY  </label>
                    <input class="quantity form-control col-7" placeholder="0" value="1" type="number" name="quantity" onchange="changeTotalUnitPrice()">
                </div>
                <div class="col-2">
                  $<span class="total-unit-price">0.00</span>
                </div>  
                <div class="col-2">
                  <button class="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div> `
  document.querySelector('.product').innerHTML += html;
  var btnDelete = document.querySelectorAll('.btn-danger');
  
  for(var i=0; i < btnDelete.length; i++){
    let btn = btnDelete[i];
   
    btn.addEventListener('click', function(){
      console.log("oi")
      var card = this.parentNode.parentNode.parentNode.parentNode;
      card.remove();
  
    });
}



  
}




window.onload = function(){
  // var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};
