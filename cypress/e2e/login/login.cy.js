/// <reference types="cypress"/>

import Login from '../../support/page-object/login/login.po'


describe("Login Test Suite", () => {
    const login = new Login();

    // Valid login test case
    context("Valid Login Scenario", () => {
        it("Valid login test scenario", () => {
            cy.visit("/");
            login.LoginBtn().click();
            cy.url({ timeout: 15000 }).should("eq", Cypress.config("baseUrl") + "/user/login");
            cy.fixture('logindata').then(data => {
                login.Email().type(data.valid_userdata[0].email);
                login.Password().type(data.valid_userdata[0].password);
                login.SignInButton().click();
                login.CheckLogin();
            }
            );
        });
    });

    // Invalid login test cases
    context("Invalid Login Scenario", () => {
        it("Invalid login with null password scenario", () => {
            cy.visit("/");
            login.LoginBtn().click();
            cy.url({ timeout: 15000 }).should("eq", Cypress.config("baseUrl") + "/user/login");
            cy.fixture('logindata').then(data => {
                login.Email().type(data.invalid_userdata[0].email);
                login.SignInButton().click();
                login.ValidationMessage().should("contain.text", "password can't be blank")
            });
        });

        it("Invalid login with null email scenario", () => {
            cy.visit("/");
            login.LoginBtn().click();
            cy.url({ timeout: 15000 }).should("eq", Cypress.config("baseUrl") + "/user/login");
            cy.fixture('logindata').then(data => {
                login.Password().type(data.invalid_userdata[1].password);
                login.SignInButton().click();
                login.ValidationMessage().should("contain.text", "email can't be blank")
            });
        });

        it("Invalid login with null data scenario", () => {
            cy.visit("/");
            login.LoginBtn().click();
            cy.url({ timeout: 15000 }).should("eq", Cypress.config("baseUrl") + "/user/login");
            login.SignInButton().click();
            login.ValidationMessage().should("contain.text", "email can't be blank")
        });

        it("Invalid login with case sensitive scenario", () => {
            cy.visit("/");
            login.LoginBtn().click();
            cy.url({ timeout: 15000 }).should("eq", Cypress.config("baseUrl") + "/user/login");
            cy.fixture('logindata').then(data => {
                login.Email().type(data.invalid_userdata[2].email);
                login.Password().type(data.invalid_userdata[2].password);
                login.SignInButton().click();
                login.ValidationMessage().should("contain.text", "email or password is invalid")
            });
        });
    });
});
