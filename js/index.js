// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  // let price = Number(product.querySelector('.price span').textContent);
  // let quantity = Number(product.querySelector('.quantity input').value);
  // // console.log(price)
  // // console.log(typeof quantity)
  // let combined = 0;
  // if (typeof price === 'number' && typeof quantity === 'number') {
  //   combined = price * quantity
  // } else {
  //   alert('Not a number')
  // }
  // // console.log(combined)
  // let subtotalSpot = product.querySelector('.subtotal span');
  // // console.log(subtotalSpot)
  // subtotalSpot.innerHTML = combined
  // return combined
  //... your code goes here
}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  // ... your code goes here
  let numberOfProducts = document.querySelectorAll('tbody tr').length
  console.log(numberOfProducts)
  // let price1 = Number(document.querySelector(`.product1 .price span`).textContent);
  // let quantity1 = Number(document.querySelector('.product1 .quantity input').value);
  // let price2 = Number(document.querySelector('.product2 .price span').textContent);
  // let quantity2 = Number(document.querySelector('.product2 .quantity input').value);
  // let price3 = Number(document.querySelector('.product3 .price span').textContent);
  // let quantity3 = Number(document.querySelector('.product3 .quantity input').value);
  // let price4 = Number(document.querySelector('.product4 .price span').textContent);
  // let quantity4 = Number(document.querySelector('.product4 .quantity input').value);
  // let combined1 = 0;
  // let combined2 = 0;
  // let combined3 = 0;
  // let combined4 = 0;
  let parentOfNodes = document.querySelector('body')
  let prices = []
  let totalNumber = 0
  for (let i = 1; i < numberOfProducts + 1; i++) {
    if (Number(parentOfNodes.querySelector(`.product${i} .price span`).textContent) !== null && Number(parentOfNodes.querySelector(`.product${i} .quantity input`).value !== null)) {
      console.log(this.parentNode.parentNode)
      let price1 = Number(parentOfNodes.querySelector(`.product${i} .price span`).textContent);
      let quantity1 = Number(parentOfNodes.querySelector(`.product${i} .quantity input`).value);
      let thePush = price1 * quantity1
      console.log(thePush)
      prices.push(thePush)
      console.log(prices)
      let subtotalspot1 = parentOfNodes.querySelector(`.product${i} > .subtotal span`)
      let addingTotal = subtotalspot1.innerHTML = prices[i - 1]
      totalNumber += addingTotal
    }
  }
  console.log(totalNumber)
  let totalLocation = document.querySelector('#total-value span')
  // console.log(totalLocation)
  totalLocation.innerHTML = totalNumber


  // if (typeof price1 === 'number' && typeof quantity1 === 'number') {
  //   combined1 = price1 * quantity1
  // } 
  // console.log(combined1)
  // if (typeof price2 === 'number' && typeof quantity2 === 'number') {
  //   combined2 = price2 * quantity2
  // }
  // console.log(combined2)
  // if (typeof price3 === 'number' && typeof quantity3 === 'number') {
  //   combined3 = price3 * quantity3
  // }
  // if (typeof price4 === 'number' && typeof quantity4 === 'number') {
  //   combined4 = price4 * quantity4
  // }
  // let subtotalspot1 = document.querySelector(`.product1 > .subtotal span`)
  // // console.log(combined2.currentTarget);
  // // console.log(subtotalspot1)
  // subtotalspot1.innerHTML = combined1
  // let subtotalspot2 = document.querySelector(`.product2 > .subtotal span`)
  // subtotalspot2.innerHTML = combined2
  // // ITERATION 3
  // // ... your code goes here
  // let totalNumber =  combined1 + combined2 + combined3 + combined4
  // // console.log(totalNumber)
  // let totalLocation = document.querySelector('#total-value span')
  // // console.log(totalLocation)
  // totalLocation.innerHTML=totalNumber
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let initialIndicator = target.parentNode.parentNode;
  let subtotalLocal = initialIndicator.querySelector(`.subtotal span`);
  let quantityLocal = initialIndicator.querySelector(`.quantity input`);
  let totalLocal = document.querySelector(`#total-value span`);
  let totalLocalValue = totalLocal.innerHTML
  let subtotalNumber = subtotalLocal.innerHTML

  // console.log(quantityLocal)
  totalLocal.innerHTML = totalLocalValue - subtotalNumber
  console.log(totalLocal.innerHTML)
  subtotalLocal.innerHTML = 0
  quantityLocal.value = 0
  let parent = target.parentNode.parentNode.parentNode
  let productspace = target.parentNode.parentNode
  console.log(parent)
  parent.removeChild(productspace);

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log('This is taking forever');
  let newProductName = document.querySelector(`.create-product .new-product-name`).value;
  // console.log(newProductName)
  let newProductPrice = document.querySelector(`.create-product .new-product-price`).value
  console.log(newProductPrice)
  let newStuffnewpositioning = document.querySelector(`.before`)
  // Starting HTML Skeleton
  // let htmltr = document.createElement('tr')
  // htmltr.setAttribute('class', "product product1")
  // let htmlTd1 = document.createElement('td');
  // htmlTd1.setAttribute('class', 'name')
  // let span = document.createElement('span');
  // span.innerHTML = newProductName
  // let htmlTd2 = document.createElement('td');
  // let htmlTd3 = document.createElement('td');
  // let htmlTd4 = document.createElement('td');
  // let htmlTd5 = document.createElement('td');
  // htmltr.append(htmlTd1, htmlTd2, htmlTd3, htmlTd4, htmlTd5)
  // htmlTd1.append(span)
  // console.log(htmltr)
  let clonestructureLocal = document.querySelector(`.product1`);
  let newProductClone = clonestructureLocal.cloneNode(true);
  let numberOfProducts = document.querySelectorAll('tbody tr').length
  newProductClone.setAttribute(`class`, `product product${numberOfProducts + 1}`)
  let btnCalculate = document.querySelector(`.action button`)
  btnCalculate.setAttribute(`class`, `btn btn-remove hello btn-remove${numberOfProducts}`)
  // console.log(newProductClone)
  newProductClone.querySelector(`.name span`).innerHTML = newProductName
  newProductClone.querySelector(`.price span`).innerHTML = newProductPrice
  let body = document.querySelector(`tbody`)
  // let beforeLocal = document.querySelector(`.before`)
  // body.insertBefore(newProductClone ,beforeLocal)
  body.append(newProductClone)
  if (document.querySelector(`.product3 .btn-remove`) !== null) {
    const calculateResetBtn1 = document.querySelector(`.product3 .btn-remove`);
    calculateResetBtn1.addEventListener('click', removeProduct);
  }
  if (document.querySelector(`.product4 .btn-remove`) !== null) {
    const calculateResetBtn1 = document.querySelector(`.product4 .btn-remove`);
    calculateResetBtn1.addEventListener('click', removeProduct);
  }
  if (document.querySelector(`.product5 .btn-remove`) !== null) {
    const calculateResetBtn1 = document.querySelector(`.product5 .btn-remove`);
    calculateResetBtn1.addEventListener('click', removeProduct);
  }

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  const addProductBtn = document.querySelector(`#create`);
  addProductBtn.addEventListener('click', createProduct)
  // const calculateResetBtn1 = document.querySelector(`.product1 .btn-remove`);
  // calculateResetBtn1.addEventListener('click', removeProduct);
  // const calculateResetBtn2 = document.querySelector(`.product2 .btn-remove`);
  // calculateResetBtn2.addEventListener('click', removeProduct);
  // const calculateResetBtn3 = document.querySelector(`.product3 .btn-remove`);
  // calculateResetBtn3.addEventListener('click', removeProduct);
  // const calculateResetBtn4 = document.querySelector(`.product4 .btn-remove`);
  // calculateResetBtn4.addEventListener('click', removeProduct);
  // let numberOfProducts = document.querySelectorAll('tbody tr').length
  // let parentOfNodes = document.querySelector('body')
  // let buttonaccesstring = [];
  // for (let i = 1; i < numberOfProducts + 1 ; i++) {
  // let calculateResetBtn1 = document.querySelector(`.product${1} .btn-remove`);
  // calculateResetBtn1.addEventListener('click', removeProduct);
  // }
  // console.log( typeof document.querySelector(`.product1 .btn-remove`) === 'object')
  // console.log(typeof document.querySelector(`.product1 .btn-remove`))
  console.log(document.querySelector(`.product2 .btn-remove`) !== null)

  if (document.querySelector(`.product1 .btn-remove`) !== null) {
    const calculateResetBtn1 = document.querySelector(`.product1 .btn-remove`);
    calculateResetBtn1.addEventListener('click', removeProduct);
  }
  if (document.querySelector(`.product2 .btn-remove`) !== null) {
    const calculateResetBtn1 = document.querySelector(`.product2 .btn-remove`);
    calculateResetBtn1.addEventListener('click', removeProduct);
  }
  // if (document.querySelector(`.product3 .btn-remove`) !== null) {
  //   const calculateResetBtn1 = document.querySelector(`.product3 .btn-remove`);
  //   calculateResetBtn1.addEventListener('click', removeProduct);
  // }
  // if (document.querySelector(`.product4 .btn-remove`) !== null) {
  //   const calculateResetBtn1 = document.querySelector(`.product4 .btn-remove`);
  //   calculateResetBtn1.addEventListener('click', removeProduct);
  // }
  // if (document.querySelector(`.product5 .btn-remove`) !== null) {
  //   const calculateResetBtn1 = document.querySelector(`.product5 .btn-remove`);
  //   calculateResetBtn1.addEventListener('click', removeProduct);
  // }
});
// console.log(document.getElementById('calculate'))