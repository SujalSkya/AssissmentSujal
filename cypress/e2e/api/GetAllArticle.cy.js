/// <reference types="cypress"/>

describe('Get all article', () => {

    let baseUri = "https://api.realworld.io/api";

    it('Read all article', () => {
        cy.request({
            method: 'Get',
            url: baseUri + "/articles",
            headers: {
                "Content-type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then((res) => {
            expect(res.status).to.eq(200);
            cy.log(JSON.stringify(res.body));
        })
    });
});