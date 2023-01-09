require('expect-puppeteer');

// Helper Functions
const addProductsToCart = ({ products }) => {
  const cartTableBodyElement = document.querySelector('#cart tbody');
  for (const { price, quantity } of products) {
    cartTableBodyElement.innerHTML += `
      <tr class="product">
        <td class="name">
          <span>Ironhack Sample Product</span>
        </td>
        <td class="price">$<span>${price.toFixed(2)}</span></td>
        <td class="quantity">
          <input type="number" value="${quantity.toFixed(
            2
          )}" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>
      </tr>
    `;
  }
};

// Ironhack Cart Test-suite
describe('Ironhack Cart',  () => {

  describe('Product subtotals', () => {
    beforeAll(async () => {
      page.on('console', (msg) => console.log(msg.text()));
    });
  
    beforeEach(async () => {
      await page.goto('http://localhost:4444', { waitUntil: "load"});
    });

    it('should update single product subtotal when "Calculate Prices" button is clicked', async () => {
      const quantity = 3;
      await expect(page).toFill('.product input', quantity.toString());
      await page.click('button#calculate');
      const productElement = await page.$('.product');
      const productPrice = await productElement.$eval(
        '.price span',
        (element) => element.innerHTML
      );
      const subtotalPrice = await productElement.$eval(
        '.subtotal span',
        (element) => element.innerHTML
      );
      
      expect(Number(subtotalPrice)).toBe(productPrice * quantity);
    });

    it('should update multiple product subtotals when "Calculate Prices" button is clicked', async () => {
      const products = [
        { price: 5, quantity: 10 },
        { price: 7.5, quantity: 6 }
      ];
      await page.evaluate(addProductsToCart, { products });
      await page.click('button#calculate');
      const productElements = await page.$$('.product');
      for (const productElement of productElements) {
        const productPrice = await productElement.$eval(
          '.price span',
          (element) => element.innerHTML
        );
        const productQuantity = await productElement.$eval(
          '.quantity input',
          (element) => element.value
        );
        const subtotalPrice = await productElement.$eval(
          '.subtotal span',
          (element) => element.innerHTML
        );

        expect(Number(subtotalPrice)).toBe(productPrice * productQuantity);
      }
    });
  });

  describe('Cart total', () => {
    beforeAll(async () => {
      page.on('console', (msg) => console.log(msg.text()));
    });
  
    beforeEach(async () => {
      await page.goto('http://localhost:4444', { waitUntil: "load"});
    });

    it('should update a single-item cart total when "Calculate Prices" button is clicked', async () => {
      const quantity = 3;
      await expect(page).toFill('.product input', quantity.toString());
      await page.click('button#calculate');
      const productElement = await page.$('.product');
      const productPrice = await productElement.$eval(
        '.price span',
        (element) => element.innerHTML
      );
      const totalPrice = await page.$eval(
        '#total-value span',
        (element) => element.innerHTML
      );

      expect(Number(totalPrice)).toBe(productPrice * quantity);
    });

    it('should update a multi-item cart total when "Calculate Prices" button is clicked', async () => {
      const products = [
        { price: 5, quantity: 10 },
        { price: 7.5, quantity: 6 }
      ];
      const expectedProductTotal = products.reduce(
        (total, { price, quantity }) => total + price * quantity,
        0
      );
      await page.evaluate(addProductsToCart, { products });
      await page.click('button#calculate');
      const totalPrice = await page.$eval(
        '#total-value span',
        (element) => element.innerHTML
      );
      expect(Number(totalPrice)).toBe(expectedProductTotal);
      
    });
  });

  describe('Remove products', () => {
    beforeAll(async () => {
      page.on('console', (msg) => console.log(msg.text()));
    });
    
    beforeEach(async () => {
      await page.goto('http://localhost:4444', { waitUntil: "load"});
      // Remove existing products
      await page.evaluate(() => {
        document
          .querySelectorAll('.product')
          .forEach((product) => product.remove());
      });
    });

    it('should allow removal of an existing product', async () => { 
      await page.type('.create-product input[type="text"]', 'Ironhack Frisbee');
      await page.type('.create-product input[type="number"]', '5');
      await page.click('.create-product button');
      
      const productElement = await page.$('.product');
      expect(productElement).toBeTruthy();

      const productRemoveButton = await productElement.$('button');
      await productRemoveButton.click();
      
      const remainingProducts = await page.$$('.product');
      const remainingProduct = await page.$('.product');
        
      expect(remainingProducts.length).toBe(0);
      expect(remainingProduct).toBeFalsy();
    });

    it('should allow removal of multiple existing products', async () => { 
      const products = [
        { price: 5, name: 'a' },
        { price: 7.5, name: 'b' },
        { price: 10, name: 'c' }
      ];
      
      // Create products
      for (const { name, price } of products) {
        await page.type('.create-product input[type="text"]', name);
        await page.type('.create-product input[type="number"]', price.toString());
        await page.click('.create-product button');
      }
      
      const productEl1 = await page.$('.product:nth-child(1)');
      const productEl2 = await page.$('.product:nth-child(2)');
      const productEl3 = await page.$('.product:nth-child(3)');
      expect(productEl1).toBeTruthy();
      expect(productEl2).toBeTruthy();
      expect(productEl3).toBeTruthy();
      
      const productRemoveButton1 = await productEl1.$('button');
      const productRemoveButton3 = await productEl3.$('button');
      await productRemoveButton1.click();
      await productRemoveButton3.click();

      const remainingProducts = await page.$$('.product');
      const [remainingProductEl] = remainingProducts;
      
      const previousProductName = await productEl2.$eval(
        '.name span',
        (element) => element.innerHTML
      );
      const remainingProductName = await remainingProductEl.$eval(
        '.name span',
        (element) => element.innerHTML
      );
      
      expect(remainingProductEl).toBeTruthy();
      expect(previousProductName).toBe(remainingProductName);
      expect(remainingProducts.length).toBe(1);
    });
  });

  describe('Create products', () => {
    beforeAll(async () => {
      page.on('console', (msg) => console.log(msg.text()));
    });
  
    beforeEach(async () => {
      await page.goto('http://localhost:4444', { waitUntil: "load"});
      // Remove existing products
      await page.evaluate(() => {
        document
          .querySelectorAll('.product')
          .forEach((product) => product.remove());
      });
    });

    it('should allow creation of product', async () => {
      const createdProductPrice = 9;
      // Create new product
      await page.type('.create-product input[type="text"]', 'Ironhack Frisbee');
      await expect(page).toFill(
        '.create-product input[type="number"]',
        createdProductPrice.toString()
      );
      await page.click('.create-product button');
      const productElement = await page.$('.product');
      expect(productElement).toBeTruthy();
      const productPrice = await productElement.$eval(
        '.price span',
        (element) => element.innerHTML
      );
      const productQuantity = await productElement.$eval(
        '.quantity input',
        (element) => element.value
      );
      const subtotalPrice = await productElement.$eval(
        '.subtotal span',
        (element) => element.innerHTML
      );

      expect(Number(productPrice)).toBe(createdProductPrice);
      expect(Number(productQuantity)).toBe(0);
      expect(Number(subtotalPrice)).toBe(0);
    });

    it('should allow removal of a newly created product', async () => {
      await page.type('.create-product input[type="text"]', 'Ironhack Frisbee');
      await page.type('.create-product input[type="number"]', '5');
      await page.click('.create-product button');

      const productElement = await page.$('.product');
      expect(productElement).toBeTruthy();
      
      const productRemoveButtonElement = await productElement.$('button');
      await productRemoveButtonElement.click();
      const removedProductElement = await page.$('.product');
      expect(removedProductElement).toBeFalsy();
    });
  });
});
