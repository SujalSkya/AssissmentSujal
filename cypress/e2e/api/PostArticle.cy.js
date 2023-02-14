/// <reference types="cypress"/>

describe('Create an article', () => {
    it('Post an article', () => {
        cy.CreateArticle();
    });
});