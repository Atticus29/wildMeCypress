// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", () => {
  // cy.request({
  //   method: 'POST',
  //   url: 'halp',
  //   body: {
  //     user: {
  //       username: 'atticus29',
  //       password: 'myPW',
  //     }
  //   }
  // })
  // .then((resp)=>{
  //   window.localStorage.setItem('halp', resp.body.user.token);
  // });
  cy.visit('/login.jsp');
  cy.url().should('not.match',/welcome/);
  cy.get('input[name=username]').type('tomcat'); //TODO put username in a better place
  cy.get('input[name=password]').type('tomcat123{enter}'); //TODO put password in a better place
  // cy.get('form').first().submit(); //TODO FIX
  cy.url().should('match',/welcome/);
});

Cypress.Commands.add("createAndNavigateToEncounter", ()=>{
  cy.login();
  cy.visit('/submit.jsp');
  cy.get('input[id=datepicker]').type('2014-01-05 12:30');
  cy.get('input[id=location]').type('a pineapple under the sea');
  cy.get('input[id=locationID]').type('Study Site 1');
  cy.get('#locationID').select('United States', {force: true});
  cy.get('input[id=lat]').type('45.590491');
  cy.get('input[id=longitude]').type('-122.72125829999997');
  cy.get('input[id=depth]').type('3');
  cy.get('input[id=submitterName]').type('Mark Fisher');
  cy.get('input[id=submitterEmail]').type('mark.fisher123@gmail.com');
  cy.get('input[id=photographerName]').type('Someguy Imetonthestreet');
  cy.get('input[id=photographerEmail]').type('Someguy.imetonthestreet@gmail.com');
  cy.get('input[id=submitterOrganization]').type('Self');
  cy.get('input[id=submitterProject]').type('PersonalLifeList');
  cy.get('input[id=comments]').type('This is a lot of text fields');
  cy.get('input[id=comments]').type('This is a lot of text fields');
  cy.get('#genusSpecies').select('Megapter novaeangliae', {force: true});
  cy.get('form[id=encounterForm]').submit();
  cy.get('a').click(); //TODO how to access this view encounter link?
});

Cypress.Commands.add("logout", ()=>{
  cy.visit('/logout.jsp');
});
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
