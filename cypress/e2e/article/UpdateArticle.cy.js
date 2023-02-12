/// <reference types="cypress"/>

import UpdateArticle from "../../support/page-object/Article/UpdateArticle.po";
import Helper from '../../support/helper';
import {faker} from '@faker-js/faker'; 

describe("Update article", () => {
    const EditArticle = new UpdateArticle();
    const helper = new Helper();
    let date = helper.dateTime();

    beforeEach(() => {
        cy.Login();
    });

    // Valid Create Article Test Case
    context("Valid article update", () => {
        it("Update article positive scenario", () => {
            EditArticle.Profile().click();
            EditArticle.ArticleOne().click();
            EditArticle.ClickEdit().click();
            EditArticle.ArticleAbout().clear().type(date + faker.color.rgb());
            EditArticle.UpdateArticleBtn().click();
            EditArticle.UpdateArticleBtn();
        });
    });
});
