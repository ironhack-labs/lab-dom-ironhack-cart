window.onload = function(){

let deleteButtons = document.getElementsByClassName('btn-delete');
let calculatePriceButton = document.getElementById('calc-prices-button');
let createbutton = document.getElementById('create-button');
  
  deleteButtons = document.getElementsByClassName('btn btn-delete');
  calculatePriceButton = document.getElementById('calc-prices-button');
  createbutton = document.getElementById('create-button');

createbutton.onclick = createNewItem;
calculatePriceButton.onclick = getTotalPrice;
for(let i = 0; i<deleteButtons.length ; i++){
  console.log(i)
  deleteButtons[i].onclick = deleteItem;
  
}
console.log(`Quantidade de botoes: ${deleteButtons.length}`);
console.log(event);

};

function deleteItem(e){
        let product = e.currentTarget.parentNode.parentNode;
        let wrapper = document.getElementById('wrapper');      
        wrapper.removeChild(product);
        console.log(e)
        getTotalPrice();    
}

function getPriceByProduct(itemNode){

          let valueunit = document.getElementsByClassName('priceunit')[itemNode].innerText ;
          return valueunit;
}



function getTotalPrice() {
          let valueunit = document.getElementsByClassName('priceunit');
          let totalPri = 0;
        
          for(let i=0; i < valueunit.length; i++){
              let cost = getPriceByProduct(i)
              let QtdProduct = document.getElementsByTagName('input')[i]
              let total = Number(QtdProduct.value * cost).toFixed(2)
              totalPri = (parseInt(totalPri) + parseInt(total)).toFixed(2);
              let textTotal = "$"+ total;
              let totalpriceProduct = document.getElementsByClassName('totalpriceProduct')[i];
              totalpriceProduct.innerHTML = textTotal;        
    } 
        createTotalPrice(totalPri)  
}


function createTotalPrice (total){

        if(document.getElementById('divtotal')){
          let h2 = document.getElementById("formatPrice");
          h2.innerHTML = "Total Price: $" + total;  

        }else{
          let parent = document.getElementsByTagName('body')[0];
          let div = document.createElement('div');
          div.setAttribute("id", "divtotal"); 
          let h2 = document.createElement('h2');
          let span = document.createElement('span');
          parent.appendChild(div);
          div.appendChild(span);
          span.setAttribute("id", "newSpan");  
          span.appendChild(h2);
          h2.setAttribute ("id", "formatPrice");
          h2.innerHTML = "Total Price: $" + total;
        }
}


function createNewItemRow(nameProduct, priceProduct){



  let parent = document.getElementsByTagName('section')[0];
  // cria a div ProductsSection
  let div = document.createElement('div');
  parent.appendChild(div);
  div.setAttribute("class", "ProductsSection");
  

// cria a DIV nameProduct
  let divname = document.createElement('div');
  div.appendChild(divname);
  divname.setAttribute("class", "nameProduct");

  // cria o span de name
  let spanname = document.createElement('span');  
  divname.appendChild(spanname); 
  spanname.innerHTML = nameProduct;

  // cria a div proce
  let divprice = document.createElement('div');
  div.appendChild(divprice);
  divprice.setAttribute("class", "price");

  // cria o span priceunit
  let spanprice = document.createElement('span');
  divprice.appendChild(spanprice);
  spanprice.setAttribute("class", "priceunit");
  spanprice.innerHTML = Number(priceProduct).toFixed(2);

  // criar a div de quantidade
  let divQtd = document.createElement('div');
  div.appendChild(divQtd);
  divQtd.setAttribute("class", "qtdProduct");
  

  //crar a label QTY
  let labelqtd = document.createElement('label');
  divQtd.appendChild(labelqtd);
  labelqtd.innerHTML = 'QTY';

  // criar input de quantidade
  let inputqtd = document.createElement('input');  
  divQtd.appendChild(inputqtd);
  inputqtd.setAttribute("type", "number");
  inputqtd.setAttribute("class", "qtdProdutc quantity");
  inputqtd.value = 1;


  // criar div totalproductPrice
  let divtotalproductPrice = document.createElement('div');
  div.appendChild(divtotalproductPrice);
  divtotalproductPrice.setAttribute("class", "totalproductPrice");

  // criar span totalpriceProduct

  let spantotalpriceProduct = document.createElement('span');
  divtotalproductPrice.appendChild(spantotalpriceProduct);
  spantotalpriceProduct.setAttribute("class", "totalpriceProduct");
  spantotalpriceProduct.innerHTML = Number(0.00).toFixed(2);


  // criar div btn btn-delete
  let divbtndelete = document.createElement('div');
  div.appendChild(divbtndelete);

  //criar Botão delete
  let btndelete = document.createElement('button');
  btndelete.setAttribute("class", "btn btn-delete");
  btndelete.innerHTML = 'Delete';
  divbtndelete.appendChild(btndelete);
  btndelete.onclick = deleteItem;

  getTotalPrice() 


}

function createNewItem(e){
  let nameProduct = document.getElementById('newProductName');
  let priceProduct = document.getElementById('newProductPrice');
   

  createNewItemRow(nameProduct.value, priceProduct.value);
  nameProduct.value = "";
  priceProduct.value = "";

  }







