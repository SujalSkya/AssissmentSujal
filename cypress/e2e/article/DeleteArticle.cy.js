/// <reference types="cypress"/>

import DeleteArticle from "../../support/page-object/Article/DeleteArticle.po";

describe("Delete article", () => {
    const RemoveArticle = new DeleteArticle();

    beforeEach(() => {
        cy.Login();
    });

    it("Delete article positive scenario", () => {
        RemoveArticle.Profile().click();
        RemoveArticle.ArticleOne().click();
        RemoveArticle.DeleteArticle().click();
        RemoveArticle.GlobalActive();
    });
});

