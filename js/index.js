// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').textContent;
  // console.log()
  const quantity = product.querySelector('.quantity > input').value;
    // console.log( Number(price.value) + "" + quantity );
  const total = Number(price) * quantity;
      // console.log( total );
      let newPriceEle = document.createTextNode(`${total}`);
      // console.log( newPriceEle );
      product.querySelector('.subtotal span').innerHTML = newPriceEle.textContent;
      return total;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let allProducts = document.querySelectorAll('.product');
  let totprice = Array.from(allProducts).reduce( (accu,ele) =>{ 
    // console.log(  accu + updateSubtotal(ele));
    if( accu === 0){
      return updateSubtotal(ele).toFixed(2);
    }else {
      return ( (Number(accu)+ Number(updateSubtotal(ele))));
    }    
},0);
// console.log( " all total: " + totprice);

document.querySelector('#total-value span').innerHTML= totprice;
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  
  const target = event.currentTarget;
  const parentEl = target.parentElement.parentElement;
  // console.log('The target in remove is:', parentEl);
  parentEl.parentElement.removeChild( parentEl);
   parentEl .style.display = 'none';
  //  parentEl.parentNode.removeChild(parentEl);
  //... your code goes here
  calculateAll();
}

// ITERATION 5

function createProduct() {

  console.log( ' create clicked');
  //... your code goes here
  if(  document.getElementsByClassName('create-product')[0].hasAttribute('id') ) {
    document.getElementsByClassName('create-product')[0].removeAttribute("id");
  }
 
  let prodName = Array.from( document.getElementsByTagName('input')).find( (e)=>{ 
    if(e.getAttribute("placeholder") === "Product Name") {
        return   e.value;
    }
  }) ;

  let prodPrice = Array.from( document.getElementsByTagName('input')).reduce( (acc,e)=>{ 
    if(e.getAttribute("placeholder") === "Product Price") {
      console.log(  e.value );
          return e.value;
    }
  },0) ;
 
  if( typeof prodName === "undefined" || prodName.value.length === 0 || Number(prodPrice) === 0 ) {
    prodName = "";
    console.log( prodName + prodPrice);
    // document.getElementsByTagName('body')[0].innerHTML += `<p class="bg-warning">This is a warning background</p>`;
    document.getElementsByClassName('create-product')[0].setAttribute("id", "alert");
  }else{
    prodName =  prodName.value ;
    console.log( prodName + prodPrice);
    let prodRow =   `<tr class="product">
    <td class="name">
      <span>${prodName}</span>
    </td>
    <td class="price">$<span>${prodPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
    </tr>`;
    document.getElementsByTagName('tbody')[0].innerHTML += prodRow;
    Array.from( document.getElementsByTagName('input')).forEach( (e)=>{ 
      if(e.getAttribute("placeholder") === "Product Name" ) {
             e.value =" ";
      }else if( e.getAttribute("placeholder") === "Product Price") {
        e.value = 0.0;
      }
    }) ;
  }
 
  addRemoveBtnEventListeners();
}

function addRemoveBtnEventListeners(){
  let liTags =  Array.from(document.getElementsByClassName('btn-remove') );
   // let liTags = document.querySelectorAll('.btn-remove');
   for(let i=0; i < liTags.length; i++){    
     // console.log( liTags[i].event );
     liTags[i].addEventListener("click", removeProduct);   
   }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click',createProduct );
   //... your code goes here

   addRemoveBtnEventListeners();
 

});
