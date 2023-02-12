/// <reference types="cypress"/>

class Register{
    
    RegisterBtn(){
        return cy.get("a[href='/user/register']",{timeout:10000}).should("exist").should("be.visible");
    }

    Username(){
        return cy.get("input[type=text][placeholder=Username]",{timeout: 10000}).should("exist").should("be.visible");
    }

    Email(){
        return cy.get("input[type=email][placeholder=Email]",{timeout: 10000}).should("exist").should("be.visible");
    }

    Password(){
        return cy.get("input[type=Password][placeholder=Password]",{timeout: 10000}).should("exist").should("be.visible");
    }

    SignUp(){
        return cy.get("button[type=submit]",{timeout: 10000}).should("exist").should("be.visible");
    }

    ValidationMessage(){
        return cy.get(".error-messages > li",({timeout:10000}));
    }
}

export default Register;