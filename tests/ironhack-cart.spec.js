require('expect-puppeteer');

describe('Ironhack Cart', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:4444');
  });

  it('should display "Ironhack" text on page', async () => {
    await expect(page).toMatch('Ironhack');
  });

  // it('should display "Ironhack" text on page', async () => {
  //   await expect(page).toMatch('Ironhack');
  //   // Assert that a form will be filled
  //   await expect(page).toFillForm('form[name="myForm"]', {
  //     firstName: 'James',
  //     lastName: 'Bond'
  //   });
  // });
});
