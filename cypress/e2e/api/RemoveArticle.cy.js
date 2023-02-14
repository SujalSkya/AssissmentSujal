/// <reference types="cypress"/>

import Helper from '../../support/helper';

const helper = new Helper();
let date = helper.dateTime();

describe('Delete an article', () => {

    let baseUri = "https://api.realworld.io/api";
    let acccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Int7RU1BSUx9fSIsInVzZXJuYW1lIjoie3tVU0VSTkFNRX19IiwiaWF0IjoxNjc2Mjg4ODQ5LCJleHAiOjE2ODE0NzI4NDl9.H4txW7snkdvRdaktCx5nx1_f-0MVxX3-hxCGyUpuLTs";

    it('Delete an article', () => {

        cy.CreateArticle();
        cy.get('@slug').then(slug => {
            cy.request({
                method: 'DELETE',
                url: baseUri + "/articles/" + slug,
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer " + acccessToken
                },
                body: {
                    "mode": "raw",
                    "raw": ""
                }
            }).then((res) => {
                expect(res.status).to.eq(204);
                cy.log(JSON.stringify(res.body));
            });
        });

    });
});