/// <reference types="cypress"/>
import Helper from '../../support/helper';
import Register from '../../support/page-object/register/register.po'

const helper = new Helper();
let date = helper.dateTime();

describe("Register Test Suite", () => {
    const register = new Register();

    // Valid register test case
    context("Valid register Scenario", () => {
        it("Valid register test scenario", () => {
            cy.visit("/");
            register.RegisterBtn().click();
            cy.url({ timeout: 15000 }).should("eq", Cypress.config("baseUrl") + "/user/register");
            cy.fixture('registerdata').then(data => {
                register.Username().type(date + data.valid_userdata[0].username);
                register.Email().type(date + data.valid_userdata[0].email);
                register.Password().type(data.valid_userdata[0].password);
                register.SignUp().click();
            })
        });
    });

    // Invalid register test cases
    context("Invalid register Scenario", () => {
        it("Invalid register with valid null username scenario", () => {
            cy.visit("/");
            register.RegisterBtn().click();
            cy.url({ timeout: 15000 }).should("eq", Cypress.config("baseUrl") + "/user/register");
            cy.fixture('registerdata').then(data => {
                register.Email().type(date + data.invalid_userdata[0].email);
                register.Password().type(data.invalid_userdata[0].password);
                register.SignUp().click();
                register.ValidationMessage().should("contain.text", "username can't be blank")

            });
        });

        it("Invalid register with valid null email scenario", () => {
            cy.visit("/");
            register.RegisterBtn().click();
            cy.url({ timeout: 15000 }).should("eq", Cypress.config("baseUrl") + "/user/register");
            cy.fixture('registerdata').then(data => {
                register.Username().type(date + data.invalid_userdata[1].username);
                register.Password().type(data.invalid_userdata[1].password);
                register.SignUp().click();
                register.ValidationMessage().should("contain.text", "email can't be blank")

            });
        });

        it("Invalid register with null password scenario", () => {
            cy.visit("/");
            register.RegisterBtn().click();
            cy.url({ timeout: 15000 }).should("eq", Cypress.config("baseUrl") + "/user/register");
            cy.fixture('registerdata').then(data => {
                register.Username().type(date + data.invalid_userdata[2].username);
                register.Email().type(date + data.invalid_userdata[2].email);
                register.SignUp().click();
                register.ValidationMessage().should("contain.text", "password can't be blank")
            });
        });


        it("Invalid register with username & password null scenario", () => {
            cy.visit("/");
            register.RegisterBtn().click();
            cy.url({ timeout: 15000 }).should("eq", Cypress.config("baseUrl") + "/user/register");
            cy.fixture('registerdata').then(data => {
                register.Email().type(date + data.invalid_userdata[2].email);
                register.SignUp().click();
                register.ValidationMessage().should("contain.text", "username can't be blank")
            });
        });


        it("Invalid register with username & email null scenario", () => {
            cy.visit("/");
            register.RegisterBtn().click();
            cy.url({ timeout: 15000 }).should("eq", Cypress.config("baseUrl") + "/user/register");
            cy.fixture('registerdata').then(data => {
                register.Password().type(date + data.invalid_userdata[2].password);
                register.SignUp().click();
                register.ValidationMessage().should("contain.text", "email can't be blank")
            });
        });


        it("Invalid register with email & password null scenario", () => {
            cy.visit("/");
            register.RegisterBtn().click();
            cy.url({ timeout: 15000 }).should("eq", Cypress.config("baseUrl") + "/user/register");
            cy.fixture('registerdata').then(data => {
                register.Username().type(date + data.invalid_userdata[2].username);
                register.SignUp().click();
                register.ValidationMessage().should("contain.text", "email can't be blank")
            });
        });


        it("Invalid register with null password scenario", () => {
            cy.visit("/");
            register.RegisterBtn().click();
            cy.url({ timeout: 15000 }).should("eq", Cypress.config("baseUrl") + "/user/register");
            cy.fixture('registerdata').then(data => {
                register.Username().type(date + data.invalid_userdata[2].username);
                register.Email().type(date + data.invalid_userdata[2].email);
                register.SignUp().click();
                register.ValidationMessage().should("contain.text", "password can't be blank")
            });
        });

        it("Invalid register with null value scenario", () => {
            cy.visit("/");
            register.RegisterBtn().click();
            cy.url({ timeout: 15000 }).should("eq", Cypress.config("baseUrl") + "/user/register");
            cy.fixture('registerdata').then(data => {
                register.SignUp().click();
                register.ValidationMessage().should("contain.text", "email can't be blank")
            });
        });

    });
});