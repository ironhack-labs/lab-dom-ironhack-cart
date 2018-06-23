//product list html

var products = [
  { name: 'P1',  price:10, img: 'img1.jpg' },
  { name: 'P2',  price:20, img: 'img1.jpg' },
  { name: 'P3',  price:100, img: 'img1.jpg' },
  { name: 'P4',  price:40, img: 'img1.jpg' },
  { name: 'P5',  price:150, img: 'img1.jpg' },
  { name: 'P6',  price:120, img: 'img1.jpg' },
  { name: 'P7',  price:30, img: 'img1.jpg' },
  { name: 'P8',  price:14, img: 'img1.jpg' },
  { name: 'P9',  price:13, img: 'img1.jpg' },
  { name: 'P10', price:12, img: 'img1.jpg' },
  { name: 'P11', price:190, img: 'img1.jpg' },
  { name: 'P12', price:16, img: 'img1.jpg' },
  { name: 'P13', price:24, img: 'img1.jpg' },
  { name: 'P14', price:54, img: 'img1.jpg' },
  { name: 'P15', price:450, img: 'img1.jpg' },
  { name: 'P16', price:187, img: 'img1.jpg' },
  { name: 'P17', price:190, img: 'img1.jpg' },
  { name: 'P18', price:20, img: 'img1.jpg' },
  { name: 'P19', price:13, img: 'img1.jpg' },
  { name: 'P20', price:1, img: 'img1.jpg' },
  { name: 'P21', price:11, img: 'img1.jpg' },
  { name: 'P22', price:43, img: 'img1.jpg' },
  { name: 'P23', price:33, img: 'img1.jpg' },
  { name: 'P24', price:37, img: 'img1.jpg' },
];

//html
var html = '';
products.forEach(function (pdt, index) {
  html += '<div  class= "product-item buy-button" id=' + pdt.name + '>';
  html += pdt.name+' '+pdt.price+'$'+'</div>';
});

// Add all the div's to the HTML
document.getElementById('products-board').innerHTML = html;

//end product list

var basketAmount=0;
// console.log(basketAmount);

$(".buy-button").click(function(){
  // console.log($(this)[0].id  )
  var productPrice= products.find((elt)=>{
    return elt.name===$(this)[0].id;
  }).price
  //console.log(productPrice); //local variable productPrice
  basketAmount+=productPrice;
  //console.log(basketAmount); //display basketAmount every time click
  $("#basket").html(basketAmount); //update the basket value on click

  //adding line breaking code
  
  var formattedProduct = function(){
    var html2=''
    html2+='<section class="cart-element">'
    html2+='<div class="product name">name2</div> <div class="product-price">50$</div> <label class="quantity">QTY <input class="qty" name="quantity" type="number" min="0" placeholder="" /> </label>  <div class="total-price">0</div>  <div><button class="btn btn-delete">delete</button></div> '
    html2+='</section>' //impossible de scinder le html en plusieurs
    return html2;
  };
  $( "#section-cart" ).append( formattedProduct);
})



  //console.log(basketAmount); //display basketAmount with console.log in the console
  $("#basket").html(basketAmount); //initiate the basket value

function deleteItem(e){

}

/* function getPriceByProduct(itemNode){
} */

//currentQty = $(".qty")[0].value; //$(".qty") return the array input form detail
//console.log(currentQty);
//currentTotalPrice = parseInt($(".total-price")[0].textContent);
//console.log(currentTotalPrice);
//currentPrice = parseInt($(".product-price")[0].textContent);
//console.log(currentPrice);
//avec JQuery on load is automatic while with DOM you need window onload

/* function updatePriceByProduct(productPrice, index){
} */

//console.log($(".cart-element .total-price"));
//console.log($(".total-price")[1]);
//console.log($("#basket").textContent)
//console.log($(".cart-element .total-price")[0].textContent)

var totalPrice=0
$(".calculate-total-price").click(function(){
for (var i=0; i<2;i++){
  totalPriceProduct = $(".qty")[i].value*parseInt($(".product-price")[i].textContent);
  //console.log(totalPriceProduct);
  $(".cart-element .total-price")[i].textContent = totalPriceProduct;
  totalPrice+=totalPriceProduct;
}
  console.log(totalPrice);
  //$(".total-basket")[0].textContent = totalPrice; //return the same result
  $(".total-basket").html(totalPrice); //return the same result
})


//function getTotalPrice() {
//}

//function createQuantityInput(){
//}

//function createDeleteButton(){
//}

$(".btn-delete").click(function(){
  $(this).parent().parent().remove();
  //$("section").remove(".cart-element");
  //$(this).parent().remove()
  //console.log($(this).parent());
  //$(".cart-element").remove();
  //$(".cart-element").next().remove();
})


function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

/* window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}; */

/* var html=''
var formattedProduct = function(){
html+='<section class="cart-element">';
html+='<div class="product name">name2</div>';
html+='<div class="product-price">50$</div>';
html+='<label class="quantity">QTY <input class="qty" name="quantity" type="number" min="0" placeholder="" /></label>';
html+='<div class="total-price">0</div>';
html+='<div><button class="btn btn-delete">delete</button></div>';
html+='</section>'};

$( "#section-cart" ).append( formattedProduct ); */