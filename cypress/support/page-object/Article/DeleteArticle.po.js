/// <reference types="cypress"/>

class DeleteArticle {

    Profile() {
        return cy.get(":nth-child(4) > .nav-link > span", { timeout: 10000 }).should("exist").should("be.visible");
    }

    ArticleOne(){
        return cy.get("a[class='preview-link']",{timeout:10000}).eq(0).should("exist").should("be.visible");
    }

    DeleteArticle(){
        return cy.get("i[class='ion-trash-a']",{timeout:10000}).should("exist").should("be.visible");
    }

    GlobalActive(){
        return cy.get("a[class='nav-link active']",{timeout:10000}).should("contain.text","Global Feed").should("exist").should("be.visible");
    }

    ArticlePreview(){
        return cy.get("div[class='article-preview']",{timeout:10000});
    }
}

export default DeleteArticle;