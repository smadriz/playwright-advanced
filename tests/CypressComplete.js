describe('Cypress Locators and Interactions Practice', () => {
    beforeEach(() => {
      // Navigate to the target page before each test
      cy.visit('https://example.com');
    });
  
    // ===== LOCATOR TYPES =====
  
    it('Should demonstrate different locator types', () => {
      // 1. By CSS Selector
      cy.get('div.some-class').click();
  
      // 2. By ID
      cy.get('#unique-id').type('Typing with ID');
  
      // 3. By Class Name
      cy.get('.button-class').click();
  
      // 4. By Attribute
      cy.get('[data-testid="submit-button"]').click();
  
      // 5. By Contains Text (Partial Match)
      cy.contains('Partial Text').click();
  
      // 6. By Element with Specific Text
      cy.contains('Exact Text').click();
  
      // 7. By nth-child (CSS nth-child selector)
      cy.get('ul li:nth-child(2)').click();
  
      // 8. By XPath (requires Cypress XPath plugin)
      cy.xpath('//button[text()="Click Me"]').click();
    });
  
    // ===== INTERACTIONS =====
  
    it('Should interact with various elements', () => {
      // 1. Typing into Input Fields
      cy.get('#username').type('TestUser');
  
      // 2. Clearing and Re-Typing
      cy.get('#username').clear().type('UpdatedUser');
  
      // 3. Clicking Buttons
      cy.get('button#submit').click();
  
      // 4. Selecting from Dropdowns
      cy.get('#dropdown').select('OptionValue');
  
      // 5. Checking Checkboxes
      cy.get('input[type="checkbox"]').check();
  
      // 6. Unchecking Checkboxes
      cy.get('input[type="checkbox"]').uncheck();
  
      // 7. Hovering (using Cypress Real Events plugin)
      cy.get('.hover-class').realHover();
  
      // 8. Drag and Drop (using Cypress Drag-and-Drop plugin)
      cy.get('#drag-source').drag('#drop-target');
    });
  
    // ===== ASSERTIONS =====
  
    it('Should perform assertions on elements', () => {
      // 1. Assert Visibility
      cy.get('.visible-class').should('be.visible');
  
      // 2. Assert Text Content
      cy.get('#text-element').should('have.text', 'Expected Text');
  
      // 3. Assert Attribute Value
      cy.get('input#email').should('have.attr', 'placeholder', 'Enter your email');
  
      // 4. Assert Element Count
      cy.get('ul li').should('have.length', 5);
  
      // 5. Assert CSS Property
      cy.get('.button-class').should('have.css', 'background-color', 'rgb(0, 123, 255)');
    });
  
    // ===== ADVANCED INTERACTIONS =====
  
    it('Should handle advanced interactions', () => {
      // 1. File Upload
      cy.get('input[type="file"]').attachFile('path/to/file.txt'); // Requires cypress-file-upload plugin
  
      // 2. Handling Modals
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('This is an alert');
      });
      cy.get('#open-alert').click();
  
      // 3. Wait for Specific API Requests
      cy.intercept('GET', '/api/data').as('getData');
      cy.get('#load-data-button').click();
      cy.wait('@getData').its('response.statusCode').should('eq', 200);
  
      // 4. Screenshot
      cy.screenshot('page-screenshot');
  
      // 5. Scroll to Element
      cy.get('#scroll-target').scrollIntoView();
  
      // 6. Drag and Drop (alternative)
      cy.get('#drag-source').trigger('mousedown');
      cy.get('#drop-target').trigger('mousemove').trigger('mouseup');
    });
  
    // ===== EXTRAS =====
  
    it('Should demonstrate custom commands and utilities', () => {
      // Custom Command Example (defined in commands.js)
      cy.login('username', 'password'); // Assuming a custom command for login
  
      // Using Cypress.env for Dynamic Values
      cy.get('#dynamic-field').type(Cypress.env('dynamicValue'));
  
      // Storing Variables with Aliases
      cy.get('.price-tag').invoke('text').as('price');
      cy.get('@price').then((price) => {
        cy.log(`The price is: ${price}`);
      });
  
      // Retry Assertions
      cy.get('#retry-element', { timeout: 10000 }).should('be.visible');
  
      // Force Click
      cy.get('.disabled-button').click({ force: true });
    });
  
    // ===== ERROR HANDLING =====
  
    it('Should log console errors and validate page load', () => {
      // Capture Console Errors
      cy.on('window:before:load', (win) => {
        cy.stub(win.console, 'error').callsFake((msg) => {
          cy.log(`Console Error: ${msg}`);
        });
      });
  
      // Validate Page Load
      cy.visit('https://example.com');
      cy.get('#important-element').should('exist');
    });
  });