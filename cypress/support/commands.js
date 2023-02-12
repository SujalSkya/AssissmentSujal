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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import Login from './page-object/login/login.po';
Cypress.Commands.add("Login",()=>{
    const login=new Login();
    cy.visit("/");
    login.LoginBtn().click();
    cy.url({ timeout: 15000 }).should("eq", Cypress.config("baseUrl") + "/user/login");
    cy.fixture('logindata').then(data => {
        login.Email().type(data.valid_userdata[0].email);
        login.Password().type(data.valid_userdata[0].password);
        login.SignInButton().click();
    }
    );
});