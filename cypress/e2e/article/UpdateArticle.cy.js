/// <reference types="cypress"/>

import UpdateArticle from "../../support/page-object/Article/UpdateArticle.po";
import Helper from '../../support/helper';
import { faker } from '@faker-js/faker';

describe("Update article", () => {
    const EditArticle = new UpdateArticle();
    const helper = new Helper();
    let date = helper.dateTime();

    beforeEach(() => {
        cy.Login();
    });

    it("Update article title field", () => {
        EditArticle.Profile().click();
        EditArticle.ArticleOne().click();
        EditArticle.ClickEdit().click();
        EditArticle.ArticleTitle().clear().type(date + faker.color.rgb()+date);
        EditArticle.UpdateArticleBtn().click();
        EditArticle.UpdateArticleBtn();
    });

    it("Update article about field", () => {
        EditArticle.Profile().click();
        EditArticle.ArticleOne().click();
        EditArticle.ClickEdit().click();
        EditArticle.ArticleAbout().clear().type(date + faker.color.rgb());
        EditArticle.UpdateArticleBtn().click();
        EditArticle.UpdateArticleBtn();
    });

    it("Update article content field", () => {
        EditArticle.Profile().click();
        EditArticle.ArticleOne().click();
        EditArticle.ClickEdit().click();
        EditArticle.ArticleContent().clear().type(date + faker.lorem.sentences().toString());
        EditArticle.UpdateArticleBtn().click();
        EditArticle.UpdateArticleBtn();
    });


    it("Update article tag field", () => {
        EditArticle.Profile().click();
        EditArticle.ArticleOne().click();
        EditArticle.ClickEdit().click();
        EditArticle.EnterTag().clear().type(date + faker.color.rgb());
        EditArticle.UpdateArticleBtn().click();
        EditArticle.UpdateArticleBtn();
    });

});