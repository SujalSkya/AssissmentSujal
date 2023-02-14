/// <reference types="cypress"/>

describe('Get single article by slug', () => {

    let baseUri = "https://api.realworld.io/api";
    let acccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Int7RU1BSUx9fSIsInVzZXJuYW1lIjoie3tVU0VSTkFNRX19IiwiaWF0IjoxNjc2Mjg4ODQ5LCJleHAiOjE2ODE0NzI4NDl9.H4txW7snkdvRdaktCx5nx1_f-0MVxX3-hxCGyUpuLTs";

    it('Read single article by slug', () => {
        cy.GetArticle();
        cy.get('@slug').then(slug => {
            cy.request({
                method: 'Get',
                url: baseUri + "/articles/" + slug,
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer " + acccessToken
                }
            }).then((res) => {
                expect(res.status).to.eq(200);
                cy.log(JSON.stringify(res.body));
            });
        });

    });
});