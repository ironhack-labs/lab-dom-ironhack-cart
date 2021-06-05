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
describe('Ironhack Cart', () => {
  beforeAll(async () => {
    page.on('console', (msg) => console.log(msg.text()));
    await page.goto('http://localhost:4444');
  });

  beforeEach(async () => {
    await page.reload();
  });

  describe('Product subtotals', () => {
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
//******************************************************************************************************************
//in order to test this I had to modify the html and only leave one row in the tbody (see line 126) 
    it('should allow removal of single existing product', async () => {
      const productElement = await page.$('.product');
      expect(productElement).toBeTruthy();
      const productRemoveButtonElement = await productElement.$('button');
      await productRemoveButtonElement.click();
      const removedProductElement = await page.$('.product');
//******************************************************************************************************************
//the test below wouldn't work if the starting Html would have had two ".product rows"
      expect(removedProductElement).toBeFalsy(); 
    });
  });

  describe('Create products', () => {
//******************************************************************************************************************
//135 says that Before each test we remove one element, right? 
    beforeEach(async () => {
      // Remove existing products
      await page.evaluate(() => {
//******************************************************************************************************************
//I think this only removes one element - the first one? 
        const productElement = document.querySelector('.product');
        productElement.parentElement.removeChild(productElement);

        // document.querySelector.apply('tbody').innerHTML=''

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

//******************************************************************************************************************     
//Is it possible there is no event listener on the .create button? Answer: No, it isn't. The eventListener is there
      await page.click('.create-product button');
      // await page.click('#create');


      const productElement = await page.$('.product');
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
      expect(Number(productPrice)).toBe(Number(createdProductPrice));
      expect(Number(productQuantity)).toBe(0);
      expect(Number(subtotalPrice)).toBe(0);
    });

    it('should allow removal of created product', async () => {
      await page.type('.create-product input[type="text"]', 'Ironhack Frisbee');
      await page.type('.create-product input[type="number"]', '5');
      await page.click('.create-product button');
      const productElement = await page.$('.product');
      expect(productElement).toBeTruthy();
      const productRemoveButtonElement = await productElement.$('button');
      await productRemoveButtonElement.click();
      const removedProductElement = await page.$('.product');
//******************************************************************************************************************
// 193 is true only if in the begining there would have been only one ".product row"      
      expect(removedProductElement).toBeFalsy();
    });
  });
});
