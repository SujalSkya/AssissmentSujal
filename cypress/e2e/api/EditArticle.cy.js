/// <reference types="cypress"/>

import Helper from '../../support/helper';
import { faker } from '@faker-js/faker';

const helper = new Helper();
let date = helper.dateTime();

describe('Update an article', () => {

    let baseUri = "https://api.realworld.io/api";
    let acccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Int7RU1BSUx9fSIsInVzZXJuYW1lIjoie3tVU0VSTkFNRX19IiwiaWF0IjoxNjc2Mjg4ODQ5LCJleHAiOjE2ODE0NzI4NDl9.H4txW7snkdvRdaktCx5nx1_f-0MVxX3-hxCGyUpuLTs";

    it('Update an article', () => {
        cy.CreateArticle();
        cy.get('@slug').then(slug => {
            cy.request({
                method: 'PUT',
                url: baseUri + "/articles/" + slug,
                headers: {
                    "Content-type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    "Authorization": "Bearer " + acccessToken

                },
                body: {
                    "article": {
                        "title": "Title 1 " + date,
                        "description": "Here goes description : " + faker.lorem.sentences().toString(),
                        "body": "Here goes body  : " + faker.lorem.sentences().toString(),
                        "tagList":
                            [faker.datatype.string(),
                            faker.color.toString()]
                    }
                }

            }).then((res) => {
                expect(res.status).to.eq(200);
                cy.log(JSON.stringify(res.body));
            })
        });

    });

});