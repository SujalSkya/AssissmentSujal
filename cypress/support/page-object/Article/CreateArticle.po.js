/// <reference types="cypress"/>

class CreateArticle {

    NewPost() {
        return cy.get("a[href='/editor/new']", { timeout: 10000 }).should("exist").should("be.visible");
    }

    ArticleTitle() {
        return cy.get("input[type='text'][placeholder='Article Title']", { timeout: 10000 }).should("exist").should("be.visible");
    }
    
    ArticleAbout(){
        return cy.get("input[type='text'][placeholder=\"What's this article about?\"]",{timeout:10000}).should("exist").should("be.visible");
    }

    ArticleContent(){
        return cy.get("textarea[placeholder='Write your article (in markdown)']",{timeout:10000}).should("exist").should("be.visible");
    }

    EnterTag(){
        return cy.get("input[type='text'][placeholder='Enter tags']",{timeout:10000}).should("exist").should("be.visible");
    }

    PublishArticleBtn(){
        return cy.get("button[type='button']",{timeout:10000}).should("exist").should("be.visible");
    }

    GlobalActive(){
        return cy.get("a[class='nav-link active']",{timeout:10000}).should("contain.text","Global Feed");
    }
}

export default CreateArticle;