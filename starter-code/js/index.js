function priceCalculation(){
  
}


window.onload = function(){
  //price calculation
  let calculate = document.getElementById('calc-prices-button');
  
  calculate.onclick = function(){
    let prices = document.getElementsByClassName('items-price');
    let priceArr = [];
    let totalPrice = 0;
    let q = document.getElementsByClassName('quantity');
    for(let i=0; i<prices.length; i++){
      priceArr.push(parseFloat(prices[i].innerHTML.slice(1)));
      priceArr[i] = priceArr[i]*q[i].value;
      let total = document.getElementsByClassName('perPrice');
      total[i].innerHTML = `$${priceArr[i].toFixed(2)}`;
      totalPrice += priceArr[i];
    }
    totalPrice = parseFloat(totalPrice).toFixed(2);
    let finalResult = document.getElementById("totalPrice");
    finalResult.innerHTML = `$${totalPrice}`;

  }
  
  //delete items
  let deletes = document.getElementsByClassName('btn-delete');
  let container = document.getElementById('item-list');
  for(let i=0;i<deletes.length;i++){
    deletes[i].onclick = function(e){
      let parent = e.currentTarget.parentNode.parentNode;
      container.removeChild(parent);
    }
  }

  //add items
  let create = document.getElementById("create-item");
  create.onclick = function(){
    let name = document.getElementById("add-name").value;
    let price = document.getElementById("add-price").value;
    let doc = document.getElementsByClassName("div1")[0];
    let clone = doc.cloneNode(true);
    document.getElementById("item-list").appendChild(clone);
    let lastnameArr = document.getElementsByClassName("name");
    let lastname = lastnameArr[lastnameArr.length-1];
    let lastpriceArr = document.getElementsByClassName("items-price");
    let lastprice = lastpriceArr[lastpriceArr.length-1];
    lastname.innerHTML = name;
    lastprice.innerHTML = `$${price.toFixed(2)}`;
    document.getElementById("add-name").value = "";
    document.getElementById("add-price").value = "";
  }
};

