describe('Cypress Locators and Interactions Practice', () => {
    beforeEach(() => {
      // Navigate to the target page before each test
      cy.visit('https://example.com');
    });
  
    // ===== LOCATOR TYPES =====
  
    it('Should demonstrate different locator types', () => {
      cy.get('div.some-class').click();
      cy.get('#unique-id').type('Typing with ID');
      cy.get('.button-class').click();
      cy.get('[data-testid="submit-button"]').click();
      cy.contains('Partial Text').click();
      cy.contains('Exact Text').click();
      cy.get('ul li:nth-child(2)').click();
      cy.xpath('//button[text()="Click Me"]').click();
    });
  
    // ===== INTERACTIONS =====
  
    it('Should interact with various elements', () => {
      // 1. Typing into Input Fields
      cy.get('#username').type('TestUser');
      cy.get('#username').clear().type('UpdatedUser');
      cy.get('button#submit').click();
      cy.get('#dropdown').select('OptionValue');
      cy.get('input[type="checkbox"]').check();
      cy.get('input[type="checkbox"]').uncheck();
      cy.get('.hover-class').realHover();
      cy.get('#drag-source').drag('#drop-target');
    });
  
    // ===== ASSERTIONS =====
    it('Should perform assertions on elements', () => {
      cy.get('.visible-class').should('be.visible');
      cy.get('#text-element').should('have.text', 'Expected Text');
      cy.get('input#email').should('have.attr', 'placeholder', 'Enter your email');
      cy.get('ul li').should('have.length', 5);
      cy.get('.button-class').should('have.css', 'background-color', 'rgb(0, 123, 255)');
    });
  
      cy.wait('@getData').its('response.statusCode').should('eq', 200);
  
    // ===== CUSTOM COMMANDS AND UTILITIES =====
    it('Should demonstrate custom commands and utilities', () => {
      // Custom Command Example (defined in commands.js)
      cy.login('username', 'password'); // Assuming a custom command for login
  
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