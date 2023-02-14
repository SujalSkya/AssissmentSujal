/// <reference types="cypress"/>

describe('Get most recent article', () => {

    let baseUri = "https://api.realworld.io/api";
    let acccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Int7RU1BSUx9fSIsInVzZXJuYW1lIjoie3tVU0VSTkFNRX19IiwiaWF0IjoxNjc2Mjg4ODQ5LCJleHAiOjE2ODE0NzI4NDl9.H4txW7snkdvRdaktCx5nx1_f-0MVxX3-hxCGyUpuLTs";

    it('Read most recent article', () => {
        cy.GetArticle(); cy.request({
            method: 'Get',
            url: baseUri + "/articles",
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + acccessToken
            },
        }).then((res) => {
            expect(res.status).to.eq(200);
            // The most recent in global is seen at first during API call
            cy.log(JSON.stringify(res.body.articles[0]));
        });
    });
});