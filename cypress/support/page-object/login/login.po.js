/// <reference types="cypress"/>

class Login{

    Email(){
        return cy.get("input[type=email][placeholder=Email]",{timeout: 10000}).should("exist").should("be.visible");
    }

    Password(){
        return cy.get("input[type=Password][placeholder=Password]",{timeout: 10000}).should("exist").should("be.visible");
    }

    LoginBtn(){
        return cy.get("a[href='/user/login']",{timeout: 10000}).should("exist").should("be.visible");
    }

    ForgotPasswordButton(){
        return cy.get("button[name=submit]", {timeout: 10000}).should("exist").should("be.visible");
    }

    ForgotPasswordHyperlink(){
        return cy.get('a[href="/forgotpassword"]',{timeout: 10000}).should('exist').should('be.visible');
    }

    SignInButton(){
        return cy.get('button[type=submit]',{timeout:10000}).should('exist').should('be.visible');
    }

    ValidationMessage(){
        return cy.get(".error-messages > li",({timeout:10000}));
    }

    CheckLogin(){
        return cy.get("a[href='/user/settings']",{timeout:10000}).should("exist").should("be.visible");
    }
}

export default Login;