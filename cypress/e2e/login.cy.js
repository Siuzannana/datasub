describe('Registration form', function () {
    
    it('Registration page', function () {
        cy.visit('http://localhost:3000/');
        cy.get('.max-w-md').should('be.visible');
            cy.get('.text-2xl').contains('Registration').should('be.visible');
            cy.get(':nth-child(1) > .block').contains('User Name').should('be.visible');
            cy.get('[data-cy="username-input"]').should('be.visible');
            cy.get(':nth-child(2) > .block').contains('Email').should('be.visible');
            cy.get('[data-cy="email-input"]').should('be.visible');
            cy.get(':nth-child(3) > .block').contains('Phone').should('be.visible');
            cy.get('[data-cy="phone-input"]').should('be.visible');
            cy.get('[data-cy="submit-button"] > .relative').should('be.visible');
            cy.get('span').contains('Submit').should('be.visible', 'have.css', 'color', 'rgb(107, 114, 128)');
            cy.get('[data-cy="test-lab-link"]').contains('The Test Lab').should('be.visible');
    })

    it('Valid data', function () {
         cy.visit('http://localhost:3000/');
         cy.get('[data-cy="username-input"]').type('siuzanna');
         cy.get('[data-cy="email-input"]').type('siuzinka96@gmail.com');
         cy.get('[data-cy="phone-input"]').type('79806626784');
         cy.get('[data-cy="submit-button"] > .relative').should('be.visible');
         cy.get('span').contains('Submit').should('be.visible', 'have.css', 'color', 'rgb(34, 197, 94)').click();
         cy.get('.w-full').should('be.visible');
         cy.get('.text-2xl').contains('Thank You!').should('be.visible');
         cy.get('p').contains('Your registration has been successfully submitted!').should('be.visible');
         cy.get('[data-cy="back-to-registration-button"]').should('be.visible');
         cy.get('[data-cy="back-to-registration-button"] > span').contains('Back to Registration').should('be.visible', 'have.css', 'color', 'rgb(255 255 255 / 0.2)');
        cy.get('[data-cy="view-customers-button"]').should('be.visible');
        cy.get('[data-cy="view-customers-button"] > span').contains('View Customers').should('be.visible', 'have.css', 'color', 'rgb(59 130 246 / 0.5)');
        cy.get('[data-cy="test-lab-link"]').contains('The Test Lab').should('be.visible');
    })

    it('Back to registration button', function () {
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy="username-input"]').type('siuzanna');
        cy.get('[data-cy="email-input"]').type('siuzinka96@gmail.com');
        cy.get('[data-cy="phone-input"]').type('79806626784');
        cy.get('[data-cy="submit-button"] > .relative').should('be.visible', 'have.css', 'color', 'rgb(34, 197, 94)').click();
        cy.get('.w-full').should('be.visible');
        cy.get('.text-2xl').contains('Thank You!').should('be.visible');
        cy.get('p').contains('Your registration has been successfully submitted!').should('be.visible');
       cy.get('[data-cy="view-customers-button"] > span').contains('View Customers').should('be.visible', 'have.css', 'color', 'rgb(59 130 246 / 0.5)');
       cy.get('[data-cy="test-lab-link"]').contains('The Test Lab').should('be.visible');
       cy.get('[data-cy="back-to-registration-button"] > span').contains('Back to Registration').should('be.visible', 'have.css', 'color', 'rgb(255 255 255 / 0.2)').click();
       cy.get('[data-cy="test-lab-link"]').contains('The Test Lab').should('be.visible');
    })


   it('View Customers button', function () {
   cy.visit('http://localhost:3000/');
   cy.get('[data-cy="username-input"]').type('siuzanna');
   cy.get('[data-cy="email-input"]').type('siuzinka96@gmail.com');
   cy.get('[data-cy="phone-input"]').type('79806626784');
   cy.get('[data-cy="submit-button"] > .relative').should('be.visible', 'have.css', 'color', 'rgb(34, 197, 94)').click();
   cy.get('.w-full').should('be.visible');
   cy.get('.text-2xl').contains('Thank You!').should('be.visible');
   cy.get('p').contains('Your registration has been successfully submitted!').should('be.visible');
  cy.get('[data-cy="test-lab-link"]').contains('The Test Lab').should('be.visible');
  cy.get('[data-cy="back-to-registration-button"] > span').contains('Back to Registration').should('be.visible', 'have.css', 'color', 'rgb(255 255 255 / 0.2)');
  cy.get('[data-cy="view-customers-button"] > span').contains('View Customers').should('be.visible', 'have.css', 'color', 'rgb(59 130 246 / 0.5)').click();
})

it('Disabled Submit button', function () {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="username-input"]').type('siuzanna');
    cy.get('[data-cy="email-input"]').should('be.visible');
    cy.get('[data-cy="phone-input"]').should('be.visible');
    cy.get('span').contains('Submit').should('be.visible')
    cy.get('[data-cy="submit-button"] > .relative').should('be.visible', 'be.disabled').click();
    cy.get('[data-cy="test-lab-link"]').contains('The Test Lab').should('be.visible');
})

it('Incomplete form warning', function () {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="username-input"]').type('siuzanna');
    cy.get('[data-cy="email-input"]').should('be.visible').click();
    cy.get('[data-cy="phone-input"]').should('be.visible').click();
    cy.get('span').contains('Submit').should('be.visible')
    cy.get('[data-cy="submit-button"] > .relative').should('be.visible', 'be.disabled').click();
    cy.get('[data-cy="error-message-email"] > span').contains('Email is required').should('be.visible', 'have.css', 'color', 'rgb(59 130 246 / 0.5)');
    cy.get('[data-cy="error-message-phone"] > span').contains('Phone is required').should('be.visible', 'have.css', 'color', 'rgb(59 130 246 / 0.5)');
    cy.get('[data-cy="test-lab-link"]').contains('The Test Lab').should('be.visible');
})

})
  