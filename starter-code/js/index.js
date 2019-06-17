  
  
//Load Everything First
window.onload = function(){


  
  let total = document.querySelectorAll(".total")
  let price = document.querySelectorAll(".cost-item");
  let textval = document.querySelectorAll('.qty-item');
  const cal = document.getElementById("calc-prices-button");
  let errorMessage = document.querySelector('.error');
  let fullTotal = document.getElementById('grandtotal');
  let allItems = document.querySelector('.all')

//Create new item
  const form = document.querySelector(".enternew");
  const createBtn = document.querySelector(".create-new btn");
  let prodName = document.getElementById('prodname');
  let prodPrice = document.querySelector('.prodprice');
  const mainContent = document.querySelector('.new-items');

 //Error Message Function
 function setMessage(msg, color){
  errorMessage.style.color = color;
  errorMessage.textContent = msg;
 }

//Error Borders
 function setTimeout(){
  prodName.style.borderColor = "red";
  prodPrice.style.borderColor ="red";
 }

 prodName.addEventListener("click",clear);
 prodPrice.addEventListener("click",clear);

 function clear(e){
  prodName.style.borderColor ="black";
  prodPrice.style.borderColor ="black";
 }

 


  

 


  //Calculate items
  cal.addEventListener('mouseover',calculator)
  
  
  function calculator(e){
    // loop through all price elements
    for (var i = 0; i < price.length; i++) {
        let xPrice =price[i].innerHTML.split("$"); 
        let parsePrice = parseFloat(xPrice[1]);

        if(textval[i].value==="" || isNaN(textval[i].value)){

            setMessage("Please enter a number",'red');          
        } else {
            let x = parseFloat(textval[i].value);
            let y =parsePrice;


            let z = x * y;
       

            total[i].innerText = z.toFixed(2);

            let grandtotal = 0;

        
    
            for (let k = 0; k < total.length; k++) {
              let j = parseFloat(total[k].innerHTML);

              grandtotal += j;
              

            }
               fullTotal.innerText= grandtotal.toFixed(2);

            
        }
    }
}




  //Add item function 
  form.addEventListener('submit',addItem);

  function addItem(event){

    if (prodName.value === '' || prodPrice.value === ''){
     
      setTimeout(event);
      setMessage("please enter the correct information","red");
      event.preventDefault();
    }else {
    
    mainContent.insertAdjacentHTML('afterend',`
    <div class="main-content">
      <div class="product-name">
        <span>${prodName.value}</span>
      </div>
      <div>
        <span class="cost-item">$${prodPrice.value}</span>
      </div>
      <div id="quanity">
        <label>QTY:</label><input placeholder="0" class="qty-item">
        <p class="error-message"></p>
      </div>
      <div class="total">
        <span>$0.00</span>
      </div>
        <div>
        <button class="btn-delete btn">Delete</button>
        </div>
      </div> `);
      //mainContent.afterend += markUp;

       
     
    }
    
    total = document.querySelectorAll(".total");
    price = document.querySelectorAll(".cost-item");
    textval = document.querySelectorAll('.qty-item');

    prodName.value =" ";
    prodPrice.value =" ";
      
      event.preventDefault();


   
  }

  //Delete Items
   allItems.addEventListener("click",function(e){

  if(e.target.classList.contains('btn-delete')){

    e.target.parentElement.parentElement.remove();
  

  }
});

}


  