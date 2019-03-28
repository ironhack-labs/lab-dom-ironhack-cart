function price (){
  const valeurUnit = document.querySelectorAll('.priceUnit');
  const quantity = document.querySelectorAll('.Quantity');
  const totaux = document.querySelectorAll('.totalPrice');
  const arrayValeurUnit = Array.from(valeurUnit).map(el => el.textContent.replace('$',''))
  const arrayQuantity = Array.from(quantity).map(el => el.value);
  const finalPrice = document.querySelector('#finalPrice');
  let arrayFinalPrice = [];
  console.log(arrayQuantity)
  for(let i =0 ; i<totaux.length;i++){
    const totauxNum=Number(arrayValeurUnit[i])*arrayQuantity[i];
    totaux[i].textContent = `$${totauxNum}`
    arrayFinalPrice[i]= totauxNum;
  }
 arrayFinalPrice=arrayFinalPrice.reduce((acc,currVal) => acc+currVal)
 console.log(arrayFinalPrice)
 finalPrice.textContent=`$${arrayFinalPrice}`; 
}

function deleteItem(event){
  const id = event.target.closest("body > div").id
  const element = document.getElementById(id);
  element.parentNode.removeChild(element)
 // console.log(this.parentElement.parentElement.parentElement.nodeName)
}


const buttonCalc=document.querySelector('#btn-calc');
const buttonDelete= document.querySelectorAll('.btn.btn-delete');
for (let i = 0; i<buttonDelete.length;i++){
  buttonDelete[i].onclick=deleteItem;
}
//console.log(buttonDelete);
//console.dir(buttonCalc)
buttonCalc.onclick = price;
buttonDelete.onclick=deleteItem;

const numberProduct = document.querySelectorAll('.product').length
console.log(document.getElementById("p4").parentElement.nodeName)
function addItem (){
  const inputText = document.querySelector('#inputText').value
  const inputPrice =document.querySelector('#inputPrice').value
  const item = `
  <div id ="p${numberProduct}" class="product">
    <div><span>${inputText}</span></div>
    <div  class="priceUnit">$${inputPrice}</div>
    <div>
      <label >Qty</label>
      <input class="Quantity" type="number" name="quantity">
    </div>
    <div>
      <span class="totalPrice">$0.00</span>
    </div>
    <div>
      <button class="btn btn-delete">Delete</button>
    </div>
</div>
  `
  const template = document.querySelector("#template")
  template.insertAdjacentHTML('beforebegin',item)
}
const buttonAdd = document.querySelector('#createButton')
buttonAdd.onclick = addItem;