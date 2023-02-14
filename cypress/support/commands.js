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
import Helper from './helper'
import { faker } from '@faker-js/faker';

import Login from './page-object/login/login.po';
Cypress.Commands.add("Login", () => {
    const login = new Login();
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

Cypress.Commands.add("CreateArticle", () => {
    const helper = new Helper();
    let date = helper.dateTime();
    let baseUri = "https://api.realworld.io/api";
    let acccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Int7RU1BSUx9fSIsInVzZXJuYW1lIjoie3tVU0VSTkFNRX19IiwiaWF0IjoxNjc2Mjg4ODQ5LCJleHAiOjE2ODE0NzI4NDl9.H4txW7snkdvRdaktCx5nx1_f-0MVxX3-hxCGyUpuLTs";
    cy.request({
        method: 'POST',
        url: baseUri + "/articles",
        headers: {
            "Content-type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": "Bearer " + acccessToken

        },
        body: {
            "article": {
                "title": "Title 1 " + date,
                "description": "Here goes description : " + faker.lorem.sentences().toString(),
                "body": "Here goes body  : " + faker.lorem.sentences().toString(),
                "tagList":
                    [faker.datatype.string(),
                    faker.color.toString()]
            }
        }
    }).then((res) => {
        cy.wrap(res.body.article.slug).as("slug");
        Cypress.env("slug", JSON.stringify(res.body.article.slug));
    })
});

Cypress.Commands.add("GetArticle", () => {
    let baseUri = "https://api.realworld.io/api";
    cy.request({
        method: 'Get',
        url: baseUri + "/articles",
        headers: {
            "Content-type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
        }
    }).then((res) => {
        expect(res.status).to.eq(200);
        cy.wrap(res.body.articles[0].slug).as("slug");
    })
});