class Product {
    constructor(productName , unitPrice) {
        this.productName = productName
        this.unitPrice = unitPrice
        this.quantity = 0
        this.subtotal = 0
    }


    createProduct() {
      const newProduct = this._createNodoProduct()
      document.getElementsByTagName('tbody')[0].appendChild(newProduct)
        
    }

    removeProduct(event) {
        const target = event.currentTarget;
        const parent = (target.parentNode).parentNode
        parent.remove()
    }

    _createNodoProduct() {
        const product = document.querySelector('.product')
        this.product = product.cloneNode(true)
        const name = this.product.querySelector('.name > span')
        const price = this.product.querySelector('.price > span')

        name.innerText = this.productName
        price.innerText = this.unitPrice
        this.product.querySelector('.subtotal span').innerText = this.quantity;
        this.product.querySelector('.quantity input').value = this.subtotal;
        this.product.getElementsByClassName('btn-remove')[0].addEventListener('click', this.removeProduct)


        return this.product

    }

    

    // updateSubtotal(producto) {


  
    //   const quantity = product.querySelector('.subtotal span')
    //   const price = parseFloat(product.querySelector('.price span').innerText);
    //   const valueProduct = parseInt(product.querySelector('.quantity input').value);
      
    //   return quantity.innerText =  price * valueProduct
    
    // }

}
 
 
  
  
  