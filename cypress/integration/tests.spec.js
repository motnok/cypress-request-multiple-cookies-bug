Cypress.Cookies.debug(true);

describe("Cookies", function() {

  it('cross domain: set a,b,c | delete a,c and set a,b,c', () => {

    cy.visit('/');

    cy.get('#hello')
      .then(() => {
        cy.wait(5000);
      })
      .then(() => {
        return cy.request('http://localhost:3000/test/1')
          .then(res => {
            cy.log('test/1')
            cy.log(JSON.stringify(res.headers['set-cookie']))

            cy.getCookie('a')
              .should('have.property', 'value', 'test1-a')

            cy.getCookie('b')
              .should('have.property', 'value', 'test1-b')

            cy.getCookie('c')
              .should('have.property', 'value', 'test1-c')

            cy.wait(5000)
          })
      })
      .then(() => {
        return cy.request('http://localhost:3000/test/2')
          .then(res => {
            cy.log('test/2')
            cy.log(JSON.stringify(res.headers['set-cookie']))

            cy.getCookie('a')
              .should('have.property', 'value', 'test2-a')

            cy.getCookie('b')
              .should('have.property', 'value', 'test2-b')

            cy.getCookie('c')
              .should('have.property', 'value', 'test2-c')

            cy.wait(5000)
          })
      })
      .then(() => {
        cy.visit('http://localhost:3000');
        cy.wait(5000)
      })
    
  })

  it.only('cross domain: set a,b,c | set a,b,c', () => {

    cy.visit('/');

    cy.get('#hello')
      .then(() => {
        cy.wait(5000);
      })
      .then(() => {
        return cy.request('http://localhost:3000/test/1')
          .then(res => {
            cy.log('test/1')
            cy.log(JSON.stringify(res.headers['set-cookie']))

            cy.getCookie('a')
              .should('have.property', 'value', 'test1-a')

            cy.getCookie('b')
              .should('have.property', 'value', 'test1-b')

            cy.getCookie('c')
              .should('have.property', 'value', 'test1-c')

            cy.wait(5000)
          })
      })
      .then(() => {
        return cy.request('http://localhost:3000/test/3')
          .then(res => {
            cy.log('test/3')
            cy.log(JSON.stringify(res.headers['set-cookie']))

            cy.getCookie('a')
              .should('have.property', 'value', 'test3-a')

            cy.getCookie('b')
              .should('have.property', 'value', 'test3-b')

            cy.getCookie('c')
              .should('have.property', 'value', 'test3-c')

            cy.wait(5000)
          })
      })
      .then(() => {
        cy.visit('http://localhost:3000');
        cy.wait(5000)
      })
    
  })

});
