window.onload = function(){
  function deleteItem(e){
    e.currentTarget.parentElement.remove();
  }
 
 //total price for the product

  // let priceInString = document.getElementsByClassName('priceOfSingleItem').value
  // let priceinNumbers = Number(priceInString);
  // let quantityOfThisproduct = Number(document.getElementsByClassName('.qnt').value);
  // let totalOfOneItem = priceinNumbers * quantityOfThisproduct;

  // console.log(totalOfOneItem);
// it was my attempt to count the price of 1



// here comes Nick's code

let calculatingPriceTotalButton = document.getElementById('calc');
  calculatingPriceTotalButton.onclick = () =>{ //why do we use arrow function here?
      let total = 0;
      let rows = document.getElementsByClassName('.row');

      for (let i=0; i<rows.length; i++){

        let theQuantity = Number(document.querySelector(`.row:nth-child(${i+1}).qnt`).value);// why is it ${} for the child number and not( ) or []???

        let thePriceOfTheproduct = document.querySelector(`.row:nth-child(${i+1}.product-price > span`).innerHTML;//same here plus I'm not sure why we use '>' here

        let sanitizedPrice = Number(thePriceOfTheproduct.slice(1));//as I understand we do this to transfor string to number

        let result = sanitizedPrice * theQuantity// here we'll get the price of 1 item

        total += result;// this we do to count total if we have more than 1 product in the shop-- whe I tried to do it I tried to use reduce method

        let finalResult = '$' + result.toFixed(2);//toFixed?? I guess if the price would be in decimals it would make sense

        let thePlacetoPutthePrice = document.quesrySelector(`.row:nth-child(${i+1}).product-total > span`);// I don't get this selector

        thePlacetoPutthePrice =finalResult //WHAAAT?
      }
      
      document.querySelector('.grandTotal').innerHTML =total;



  }
  let createButton = document.querySelector('.btn-create');
  createButton.onclick = () =>{  //why do we use arrow function here?

    let newName = document.getElementById('newName').value;

    let newPrice = document.getElementById('newPrice').value;

    let actualNewPrice = Number(newPrice).toFixed(2);

    let newRow = document.createElement('div');
    newRow.classList.add('row');

    newRow.innerHTML =  //in Nick's code backticks were used here
        <div class ='product-name'>
          <span>${newName}</span> //I don't get why he uses ${}
        </div>
        
        <div class='product-quality'>
          <label>QTY</label>
          <input type='number'>
        </div>  

        <div class='product-total'>
          <span>$0.00</span>
        </div>  

        <div>
          <button class='btn btn-delete'>Delete</button>
        </div>

    </div>



    let container = document.querySelector('.product-rows-container');
    container.appendChild(newRow);//I guess here we actualy add it to DOM

    document.getElementById('newName').value = ''//I don't understand this
    document.getElementById('newPrice').value = ''//and this

  
    deleteButtons = document.getElementsByClassName('btn-delete');
    deleteButtons[deleteButtons.length-1].onclick =deleteItem//and this deleting line

}
