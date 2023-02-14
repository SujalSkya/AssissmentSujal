/// <reference types="cypress"/>

import CreateArticle from "../../support/page-object/Article/CreateArticle.po";
import Helper from '../../support/helper';
import { faker } from '@faker-js/faker';

describe("Create article", () => {
    const article = new CreateArticle();
    const helper = new Helper();
    let date = helper.dateTime();

    beforeEach(() => {
        cy.Login();
    });

    it("Create article positive scenario", () => {
        article.NewPost().click();
        cy.fixture('article').then(data => {
            article.ArticleTitle().type(data.article_data[0].Title + date);
            article.ArticleAbout().type(data.article_data[0].About + "Today's date");
            article.ArticleContent().type("This is description text area : " + faker.lorem.sentences().toString());
            article.PublishArticleBtn().click();
            article.EnterTag().type(faker.datatype.string()).click();
            article.GlobalActive();
        });
    });
});